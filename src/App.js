import './App.css';
import DrawerAppBar from './components/navbar/Navbar';
import { Container } from '@mui/material';
import Testgrid from './components/popular/grid/Testgrid';
import ApiService from './service/ApiService';
import { useEffect, useState } from 'react';

function App() {
	const [popularMovie, setPopularMovie] = useState([]);
	const getPopularMovies = () => {
		ApiService.getPopular().then(res => setPopularMovie(res.data.results));
	};
	useEffect(() => {
		getPopularMovies();
	}, []);
	console.log(popularMovie);

	return (
		<div className='App'>
			<Container>
				<DrawerAppBar />
				<Testgrid data={popularMovie} />
			</Container>
		</div>
	);
}

export default App;
