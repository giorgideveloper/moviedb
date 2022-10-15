import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Movies({ title, description, image }) {
	let img_url = 'https://image.tmdb.org/t/p/w500/';

	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardActionArea>
				<CardMedia
					component='img'
					height='180'
					image={img_url + image}
					alt='green iguana'
				/>
				<CardContent>
					<Typography
						gutterBottom
						variant='h5'
						style={{ fontSize: '17px' }}
						component='div'
					>
						{title}
					</Typography>
					<Typography
						style={{ fontSize: '15px' }}
						variant='body2'
						color='text.secondary'
					>
						{description.slice(0, 49)}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}
