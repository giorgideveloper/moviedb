import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Carousel from 'react-elastic-carousel';

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
	...theme.typography.body2,
	padding: theme.spacing(0),

	color: theme.palette.text.secondary,
}));

const breakPoints = [
	{ width: 1, itemsToShow: 2 },
	{ width: 550, itemsToShow: 3, itemsToScroll: 2, pagination: false },
	{ width: 850, itemsToShow: 5 },
	{ width: 1150, itemsToShow: 5, itemsToScroll: 2 },
	{ width: 1450, itemsToShow: 5 },
	{ width: 1750, itemsToShow: 5 },
];

export default function Trending({ data }) {
	const img_url = 'https://image.tmdb.org/t/p/w500/';
	return (
		<Box sx={{ width: '100%' }}>
			<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 0 }}>
				<Carousel itemsToShow={5} breakPoints={breakPoints}>
					{data.map(res => (
						<Item
							key={res.id}
							style={{
								padding: '2px',
								width: '100%',
								height: 'auto',
								border: 'none',
							}}
						>
							<Card sx={{ maxWidth: '100%', maxHeight: 'auto' }}>
								<CardActionArea>
									<CardMedia
										component='img'
										height='300'
										image={img_url + res.poster_path}
										alt='green iguana'
									/>
									<CardContent style={{ paddingBottom: '2px' }}>
										<Typography gutterBottom variant='h6' component='div'>
											{res.title}
										</Typography>
										<Typography gutterBottom variant='h7' component='div'>
											Vote: {res.vote_average}
										</Typography>
										<Typography gutterBottom variant='h7' component='div'>
											Data: {res.release_date}
										</Typography>
									</CardContent>
								</CardActionArea>
								<CardActions></CardActions>
							</Card>
						</Item>
					))}
				</Carousel>
			</Grid>
		</Box>
	);
}
