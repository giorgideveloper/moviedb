import './App.css';
import DrawerAppBar from './components/navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import MainPage from './page/MainPage';
import MoviesPage from './page/MoviesPage';
import SerialsPage from './page/SerialsPage';
import SinglePage from './page/SinglePage';
import Footer from './components/footer/Footer';
import NothingPage from './page/NothingPage';
import ActorPage from './page/ActorPage';

function App() {
	/* search */

	return (
		<div className='App'>
			<DrawerAppBar style={{ marginTop: '2em' }} />
			<Routes>
				<Route path='/' element={<MainPage />} />
				<Route path='/movie' element={<MoviesPage />} />
				<Route path='/serial' element={<SerialsPage />} />
				<Route path='/movie/:id' element={<SinglePage />} />
				<Route path='/actor/:id' element={<ActorPage />} />

				<Route path='*' element={<NothingPage />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
