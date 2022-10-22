import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Button, CircularProgress, Container } from '@mui/material';
import Carousel from 'react-elastic-carousel';
import Modal from '../portals/Modal';
import ApiService from '../../service/ApiService';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import { Link } from 'react-router-dom';
import format from 'date-fns/format';

function MovieContent({ data, actors, loading }) {
	const [isOpen, setIsOpen] = useState(false);
	const [trailer, setTrailer] = useState({});

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
		{ width: 1, itemsToShow: 1, itemsToScroll: 1, pagination: false },
		{ width: 550, itemsToShow: 3, itemsToScroll: 3, pagination: false },
		{ width: 850, itemsToShow: 5, itemsToScroll: 5 },
		{ width: 1150, itemsToShow: 5, itemsToScroll: 5 },
		{ width: 1450, itemsToShow: 5 },
		{ width: 1750, itemsToShow: 5 },
	];
	useEffect(() => {
		if (isOpen) {
			ApiService.getVideos(data.id).then(res =>
				setTrailer(res.data.results[0])
			);
		}
		return () => setTrailer({});
	}, [isOpen, data.id]);
	return (
		<>
			{loading ? (
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						height: '100%',
					}}
				>
					<CircularProgress color='success' />
				</Box>
			) : (
				<Container>
					<Box sx={{ width: '100%' }} style={{ marginTop: '5em' }}>
						<Grid
							container
							rowSpacing={1}
							columnSpacing={{ xs: 1, sm: 2, md: 3 }}
							style={{
								backgroundImage: `url('https://image.tmdb.org/t/p/w1280/${data.backdrop_path}')`,
								backgroundPosition: 'top center',
								backgroundRepeat: 'no-repeat',
								backgroundSize: 'cover',
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
										src={`https://image.tmdb.org/t/p/w300/${data.poster_path}`}
										style={{ width: '100%', height: '100%' }}
										alt=''
									/>
								</Item>
							</Grid>
							<Grid xs={12} md={6}>
								<Item className='cardItem' style={{ opacity: '0.9' }}>
									<div className='title'>
										<h2>
											Name: {data.original_title}
											<span style={{ marginLeft: '10px', fontSize: '18px' }}>
												({format(new Date(data.release_date), ' Y')} )
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

								<Button variant='contained' onClick={() => setIsOpen(true)}>
									<PlayCircleFilledIcon />
									{'  '} Watch trailer
								</Button>
							</Grid>
						</Grid>
						<Grid
							style={{ marginTop: '3em', marginBottom: '5em' }}
							xs={12}
							md={6}
						>
							<div>
								{/* show actors */}
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
													<Link to={`/actors/${act.id}`}>
														<img
															src={`https://image.tmdb.org/t/p/w200/${act.profile_path}`}
															alt=''
															style={{ width: '100%', height: '100%' }}
														/>
													</Link>
													<div style={{ color: '#fff' }}>
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
			)}
			<Modal isOpen={isOpen} handleClose={handleClose}>
				<iframe
					width='100%'
					height='400px'
					frameBorder='0'
					src={`https://www.youtube.com/embed/${trailer.key}`}
					title='AVENGERS 3: Infinity War All Bonus Features & Bloopers (2018)'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
				></iframe>
			</Modal>
		</>
	);
}

export default MovieContent;
