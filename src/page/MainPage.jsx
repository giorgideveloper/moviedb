import { Box, Container, Toolbar, Typography } from '@mui/material';
import React from 'react';
import Trending from '../components/trending/Trending';
import UpdateComponent from '../HOC/HOC';

function MainPage({ trendingMovie, popularMovie }) {
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
				<Trending data={popularMovie} />

				<h2 style={{ textAlign: 'center', fontSize: '2em' }}>Trending</h2>
				<Trending data={trendingMovie} />
			</Container>
		</>
	);
}

export default UpdateComponent(MainPage);
