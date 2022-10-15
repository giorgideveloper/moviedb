import { Grid, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Movies from '../components/movies/Movies';
import ApiService from '../service/ApiService';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Container } from '@mui/material';

function MoviesPage() {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		ApiService.getPopular().then(res => setMovies(res.data.results));
	}, []);

	return (
		<>
			<Container>
				<ThemeProvider
					theme={createTheme({
						breakpoints: {
							values: {
								laptop: 1024,
								tablet: 640,
								mobile: 0,
								desktop: 1280,
							},
						},
					})}
				>
					<Grid
						container
						spacing={{ mobile: 1, tablet: 2, laptop: 3, desktop: 3 }}
					>
						{movies.map(item => (
							<Grid
								item
								key={item.id}
								mobile={12}
								tablet={4}
								laptop={3}
								desktop={4}
							>
								<Link to={`/movie/${item.id}`}>
									<Movies
										key={item.id}
										title={item.title}
										description={item.overview}
										image={item.backdrop_path}
									/>
								</Link>
							</Grid>
						))}
					</Grid>
				</ThemeProvider>
			</Container>
		</>
	);
}

export default MoviesPage;
