import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Carousel from 'react-elastic-carousel';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import CircularStatic from './CircularProgressWithLabel';

const breakPoints = [
	{ width: 1, itemsToShow: 1, itemsToScroll: 1, pagination: false },
	{ width: 550, itemsToShow: 3, itemsToScroll: 3, pagination: false },
	{ width: 850, itemsToShow: 5, itemsToScroll: 5 },
	{ width: 1150, itemsToShow: 5, itemsToScroll: 5 },
	{ width: 1450, itemsToShow: 5 },
	{ width: 1750, itemsToShow: 5 },
];

function Trending({ data }) {
	const img_url = 'https://image.tmdb.org/t/p/w500/';
	return (
		<Box sx={{ width: '100%' }}>
			<Grid
				style={{ backgroundColor: '#1A2027' }}
				container
				rowSpacing={1}
				columnSpacing={1}
			>
				<Carousel
					itemPadding={[0, 5]}
					itemsToScroll={5}
					itemsToShow={5}
					breakPoints={breakPoints}
				>
					{data.map(res => (
						<div
							key={res.id}
							style={{
								padding: '2px',
								width: '100%',
								height: 'auto',
								border: 'none',
							}}
						>
							<Link to={`/movie/${res.id}`}>
								<Card
									sx={{ maxWidth: '100%', maxHeight: 'auto' }}
									className='cardItem'
								>
									<CardActionArea>
										<CardMedia
											component='img'
											height='300'
											image={img_url + res.poster_path}
											alt='green iguana'
										/>
										<div
											style={{
												top: '1px',
												left: '2px',
												position: 'absolute ',
												background: '#011424 ',
												borderRadius: '3em',
											}}
										>
											<CircularStatic
												vote={res.vote_average}
												style={{ color: '#fff' }}
											/>
										</div>
										<CardContent style={{ paddingBottom: '2px' }}>
											<Typography
												gutterBottom
												variant='h6'
												style={{ fontSize: '1.2em', fontWeight: '700' }}
												component='div'
											>
												{res.title}
											</Typography>
											<Typography gutterBottom variant='h7' component='div'>
												Vote: {res.vote_average}
											</Typography>
											<Typography
												gutterBottom
												variant='h7'
												style={{ fontSize: '1em', color: 'rgb(131, 131, 131)' }}
												component='div'
											>
												{format(new Date(res.release_date), 'MMM dd, yyyy')}
											</Typography>
										</CardContent>
									</CardActionArea>
									<CardActions></CardActions>
								</Card>
							</Link>
						</div>
					))}
				</Carousel>
			</Grid>
		</Box>
	);
}
export default Trending;
