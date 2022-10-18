import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import Carousel from 'react-elastic-carousel';
import Modal from '../portals/Modal';

function MovieContent({ data, actors }) {
	const img_url = 'https://image.tmdb.org/t/p/w500/';
	const [isOpen, setIsOpen] = useState(false);

	const handleClose = () => {
		setIsOpen(false);
	};
	const Item = styled(Paper)(({ theme }) => ({
		backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
		...theme.typography.body2,
		padding: theme.spacing(1),
		color: theme.palette.text.secondary,
	}));

	const breakPoints = [
		{ width: 1, itemsToShow: 2, itemsToScroll: 2 },
		{ width: 550, itemsToShow: 3, itemsToScroll: 2, pagination: false },
		{ width: 850, itemsToShow: 5, itemsToScroll: 5 },
		{ width: 1150, itemsToShow: 5, itemsToScroll: 2 },
		{ width: 1450, itemsToShow: 5, itemsToScroll: 5 },
		{ width: 1750, itemsToShow: 5, itemsToScroll: 2 },
	];
	return (
		<>
			<Container>
				<Box sx={{ width: '100%' }} style={{ marginTop: '5em' }}>
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
											({data.release_date})
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
							<button onClick={() => setIsOpen(true)}>Watch trailer</button>
						</Grid>
					</Grid>
					<Grid
						style={{ marginTop: '3em', marginBottom: '5em' }}
						xs={12}
						md={6}
					>
						<div>
							<h2>Actor</h2>
							<Carousel itemsToShow={5} breakPoints={breakPoints}>
								{actors.map(act => (
									<ol
										key={act.id}
										style={{
											listStyle: 'none',
											width: '150px',
											height: '300px',
										}}
									>
										<Item>
											<li style={{ width: '100%', height: '200px' }}>
												<a href=''>
													<img
														src={img_url + act.profile_path}
														alt=''
														style={{ width: '100%', height: '100%' }}
													/>
												</a>
												<div>
													<p>{act.name}</p>
													<p>{act.character}</p>
												</div>
											</li>
										</Item>
									</ol>
								))}
							</Carousel>
						</div>
					</Grid>
				</Box>
			</Container>
			<Modal isOpen={isOpen} handleClose={handleClose}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nobis
				adipisci, ullam in fugiat perspiciatis qui, a consequuntur voluptatem
				voluptatibus nostrum eos ducimus non tempore. Excepturi neque nam ullam
				incidunt.
			</Modal>
		</>
	);
}

export default MovieContent;
