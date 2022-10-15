import './App.css';

import DrawerAppBar from './components/navbar/Navbar';
import { Link, Route, Routes } from 'react-router-dom';
import MainPage from './page/MainPage';
import MoviesPage from './page/MoviesPage';
import SerialsPage from './page/SerialsPage';
import SinglePage from './page/SinglePage';
import { useState } from 'react';

function App() {
	const [searchContent, setSearchContent] = useState('');
	const [block, setBlock] = useState('');

	return (
		<div className='App'>
			<DrawerAppBar
				setSearchContent={setSearchContent}
				setBlock={setBlock}
				style={{ marginTop: '2em' }}
			/>

			{searchContent.length >= 3 ? (
				<ul className='dropdown' style={{ display: block, marginTop: '3em' }}>
					{searchContent.map(item => (
						<Link
							onClick={() => {
								setBlock('none');
							}}
							key={item.id}
							to={`/movie/${item.id}`}
						>
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
		</div>
	);
}

export default App;
