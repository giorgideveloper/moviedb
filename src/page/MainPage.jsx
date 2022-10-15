import { Box, Container, Toolbar, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Footer from '../components/footer/Footer';
import MultiActionAreaCard from '../components/popular/Popular';
import Trending from '../components/trending/Trending';
import ApiService from '../service/ApiService';

function MainPage() {
	const [popularMovie, setPopularMovie] = useState([]);
	const [trendingMovie, setTrendingMovie] = useState([]);

	const getPopularMovies = async () => {
		await ApiService.getPopular().then(res =>
			setPopularMovie(res.data.results)
		);
	};
	const getTrendingMovies = async () => {
		await ApiService.getTrending().then(res =>
			setTrendingMovie(res.data.results)
		);
	};

	useEffect(() => {
		getPopularMovies();
		getTrendingMovies();
	}, []);

	return (
		<>
			<Typography variant='h4' className='welcome'>
				<p>
					Welcome. Millions of movies, TV shows and people to discover. Explore
					now.
				</p>
			</Typography>
			<Container>
				<Box component='main' sx={{ p: 1 }} className='welcome__box'>
					<Toolbar />
				</Box>
				<h2 style={{ textAlign: 'center', fontSize: '2em' }}>What's Popular</h2>
				<MultiActionAreaCard data={popularMovie} />
				<h2 style={{ textAlign: 'center', fontSize: '2em' }}>Trending</h2>
				<Trending data={trendingMovie} />
			</Container>
		</>
	);
}

export default MainPage;
