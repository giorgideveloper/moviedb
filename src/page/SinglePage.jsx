import React, { useEffect, useState } from 'react';
import MovieContent from '../components/MovieContent/MovieContent';
import { useParams } from 'react-router-dom';
import ApiService from '../service/ApiService';

const SinglePage = () => {
	const [Content, setContent] = useState([]);
	const [actors, setActors] = useState([]);
	let { id } = useParams();

	const getMovie = async () => {
		await ApiService.getPopularContent(id).then(res => setContent(res.data));
	};
	const getActors = async () => {
		await ApiService.getMovieActors(id).then(res => setActors(res.data.cast));
	};

	useEffect(() => {
		getMovie();
		getActors();
	}, [id]);

	return (
		<>
			<MovieContent data={Content} actors={actors} />
		</>
	);
};

export default SinglePage;
