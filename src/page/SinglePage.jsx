import React, { useEffect, useState } from 'react';
import MovieContent from '../components/MovieContent/MovieContent';
import { useParams } from 'react-router-dom';
import ApiService from '../service/ApiService';

const SinglePage = () => {
	const [Content, setContent] = useState([]);
	const [actors, setActors] = useState([]);
	const [loading, setLoading] = useState(true);
	let { id } = useParams();

	useEffect(() => {
		const getMovie = async () => {
			setLoading(true);
			await ApiService.getPopularContent(id).then(res => {
				setContent(res.data);
				setLoading(false);
			});
		};
		getMovie();

		return () => {
			setContent([]);
			setLoading(false);
		};
	}, [id]);

	useEffect(() => {
		const getActors = async () => {
			await ApiService.getMovieActors(id).then(res => {
				setActors(res.data.cast);
				setLoading(false);
			});
		};
		getActors();
		return () => {
			setActors([]);
			setLoading(false);
		};
	}, [id]);

	return (
		<>
			<MovieContent data={Content} actors={actors} loading={loading} />
		</>
	);
};

export default SinglePage;
