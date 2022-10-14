import { Box, Container, Toolbar, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import DrawerAppBar from '../components/navbar/Navbar';
import MultiActionAreaCard from '../components/popular/Popular';
import Trending from '../components/trending/Trending';
import ApiService from '../service/ApiService';

function MainPage() {
	const [popularMovie, setPopularMovie] = useState([]);
	const [trendingMovie, setTrendingMovie] = useState([]);
	const [searchContent, setSearchContent] = useState('');

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
			<Container>
				<DrawerAppBar setSearchContent={setSearchContent} />
				{searchContent.length >= 3 ? (
					<ul className='dropdown'>
						{searchContent.map(item => (
							<Link to={`/movie/${item.id}`}>
								<li key={item.id}>{item.title}</li>
							</Link>
						))}
					</ul>
				) : (
					searchContent
				)}
				<Box component='main' sx={{ p: 1 }} className='welcome__box'>
					<Toolbar />

					<Typography variant='h5' className='welcome'>
						Welcome. Millions of movies, TV shows and people to discover.
						Explore now.
					</Typography>
				</Box>
				<h2>What's Popular</h2>
				<MultiActionAreaCard data={popularMovie} />
				<h2>Trending</h2>
				<Trending data={trendingMovie} />
				<Footer />
			</Container>
		</>
	);
}

export default MainPage;
