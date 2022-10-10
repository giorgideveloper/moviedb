import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';

function MovieContent({ data, actors }) {
	const img_url = 'https://image.tmdb.org/t/p/w500/';

	const Item = styled(Paper)(({ theme }) => ({
		backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
		...theme.typography.body2,
		padding: theme.spacing(1),
		color: theme.palette.text.secondary,
	}));

	console.log(actors);
	return (
		<>
			<Container>
				<Box sx={{ width: '100%' }}>
					<Grid
						container
						rowSpacing={1}
						columnSpacing={{ xs: 1, sm: 2, md: 3 }}
						style={{
							backgroundImage: `url('${img_url + data.poster_path} ')`,
							backgroundPosition: 'center',
							backgroundRepeat: 'initial',
							bacgroundOpacity: 0.5,
						}}
					>
						<Grid
							xs={12}
							md={6}
							style={{
								width: '300px',
								height: '450px',
							}}
						>
							<Item>
								<img
									src={img_url + data.poster_path}
									style={{ width: '100%', height: '100%' }}
									alt=''
								/>
							</Item>
						</Grid>
						<Grid xs={12} md={6}>
							<Item>
								<div className='title'>
									<h2>
										Name: {data.original_title}
										<span style={{ marginLeft: '10px', fontSize: '16px' }}>
											{data.release_date}
										</span>
									</h2>
									<div className='character'>
										{/* <h3>Genre: {data.genres[0].name}</h3> */}
									</div>
								</div>
								<div className='overview'>
									<h3>0verview</h3>
									<span>{data.overview}</span>
								</div>
							</Item>
						</Grid>
					</Grid>
					<Grid
						style={{ marginTop: '3em', marginBottom: '5em' }}
						xs={12}
						md={6}
					>
						<Item>
							<h2>Actor</h2>
							{actors.map(act => (
								<ol key={act.id}>
									<li>
										<a href=''>
											<img src={img_url + act.profile_path} alt='' />
										</a>
										<p>{act.name}</p>
										<p>{act.character}</p>
									</li>
								</ol>
							))}
						</Item>
					</Grid>
				</Box>
			</Container>
		</>
	);
}

export default MovieContent;
