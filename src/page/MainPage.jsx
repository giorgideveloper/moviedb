import React, { useEffect, useState } from 'react';
import Footer from '../components/footer/Footer';
import MultiActionAreaCard from '../components/popular/Popular';
import Trending from '../components/trending/Trending';
import ApiService from '../service/ApiService';

function MainPage() {
	const [popularMovie, setPopularMovie] = useState([]);
	const [trendingMovie, setTrendingMovie] = useState([]);

	const getPopularMovies = () => {
		ApiService.getPopular().then(res => setPopularMovie(res.data.results));
	};
	const getTrendingMovies = () => {
		ApiService.getTrending().then(res => setTrendingMovie(res.data.results));
	};

	useEffect(() => {
		getPopularMovies();
		getTrendingMovies();
	}, []);
	return (
		<>
			<h2>What's Popular</h2>
			<MultiActionAreaCard data={popularMovie} />
			<h2>Trending</h2>
			<Trending data={trendingMovie} />
			<Footer />
		</>
	);
}

export default MainPage;
