import './App.css';
import { Container } from '@mui/material';
import DrawerAppBar from './components/navbar/Navbar';
import { Link, Route, Routes } from 'react-router-dom';
import MainPage from './page/MainPage';
import MoviesPage from './page/MoviesPage';
import SerialsPage from './page/SerialsPage';
import SinglePage from './page/SinglePage';
import { useState } from 'react';

function App() {
	const [searchContent, setSearchContent] = useState('');
	return (
		<div className='App'>
			<Container>
				<DrawerAppBar
					setSearchContent={setSearchContent}
					style={{ marginTop: '2em' }}
				/>

				{searchContent.length >= 3 ? (
					<ul className='dropdown'>
						{searchContent.map(item => (
							<Link key={item.id} to={`/movie/${item.id}`}>
								<li>{item.title}</li>
							</Link>
						))}
					</ul>
				) : (
					searchContent
				)}
				<Routes>
					<Route path='/' element={<MainPage />} />
					<Route path='/MoviesPage' element={<MoviesPage />} />
					<Route path='/SerialsPage' element={<SerialsPage />} />
					<Route path='/movie/:id' element={<SinglePage />} />
				</Routes>
			</Container>
		</div>
	);
}

export default App;
