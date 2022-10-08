import './App.css';
import { Container } from '@mui/material';
import DrawerAppBar from './components/navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import MainPage from './page/MainPage';
import MoviesPage from './page/MoviesPage';
import SerialsPage from './page/SerialsPage';

function App() {
	return (
		<div className='App'>
			<Container>
				<DrawerAppBar />
				<Routes>
					<Route path='/' element={<MainPage />} />
					<Route path='/MoviesPage' element={<MoviesPage />} />
					<Route path='/SerialsPage' element={<SerialsPage />} />
				</Routes>
			</Container>
		</div>
	);
}

export default App;
