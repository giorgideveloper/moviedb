import './App.css';
import DrawerAppBar from './components/navbar/Navbar';
import { Container } from '@mui/material';
import ApiService from './service/ApiService';
import { useEffect, useState } from 'react';
import MultiActionAreaCard from './components/popular/Popular';
import Trending from './components/trending/Trending';
import Footer from './components/footer/Footer';

function App() {
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
		<div className='App'>
			<Container>
				<DrawerAppBar />
				<h2>What's Popular</h2>
				<MultiActionAreaCard data={popularMovie} />
				<h2>Trending</h2>
				<Trending data={trendingMovie} />
				<Footer />
			</Container>
		</div>
	);
}

export default App;
