import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

export default function NothingPage() {
	return (
		<>
			<div
				style={{
					display: 'flex-column',
					justifyContent: 'center',
					alignItems: 'center',
					textAlign: 'center',
				}}
			>
				<h1>404</h1>
				<Link to='/'>
					<Button variant='contained'>Back to main page</Button>
				</Link>
			</div>
		</>
	);
}
