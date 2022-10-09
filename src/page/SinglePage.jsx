import React, { useState } from 'react';
import MovieContent from '../components/MovieContent/MovieContent';
import { useParams } from 'react-router-dom';
import ApiService from '../service/ApiService';

const SinglePage = () => {
	let { id } = useParams();
	const [Content, setContent] = useState([]);
	const getMovie = async () => {
		await ApiService.getPopularContent(id).then(res => setContent(res.data));
	};
	useState(() => {
		getMovie();
	}, [id]);
	return (
		<>
			<MovieContent data={Content} />
		</>
	);
};

export default SinglePage;
