import * as React from 'react';
import Stack from '@mui/material/Stack';

export default function Footer() {
	const footerItems = [
		{
			id: 1,
			title: 'THE BASICS',
			about: 'bout TMDB',
			contact: 'Contact Us',
			support: 'upport Forums',
			api: 'API',
			status: 'System Status',
		},
		{
			id: 2,
			title: 'THE BASICS',
			about: 'bout TMDB',
			contact: 'Contact Us',
			support: 'upport Forums',
			api: 'API',
			status: 'System Status',
		},
		{
			id: 3,
			title: 'THE BASICS',
			about: 'bout TMDB',
			contact: 'Contact Us',
			support: 'upport Forums',
			api: 'API',
			status: 'System Status',
		},
		{
			id: 4,
			title: 'THE BASICS',
			about: 'bout TMDB',
			contact: 'Contact Us',
			support: 'upport Forums',
			api: 'API',
			status: 'System Status',
		},
	];
	return (
		<div
			style={{
				justifyContent: 'center',
				display: 'flex',
				paddingTop: '5em',
			}}
		>
			<Stack
				direction={{ xs: 'column', sm: 'row' }}
				spacing={{ xs: 1, sm: 2, md: 4 }}
				className='footer_text'
			>
				{footerItems.map(item => (
					<div
						key={item.id}
						style={{ display: 'block', textAlign: 'left', width: '100%' }}
					>
						<ul>
							<h3 style={{ textAlign: 'center' }}>{item.title}</h3>
							<li>{item.about}</li>
							<li>{item.support}</li>
							<li>{item.contact}</li>
							<li>{item.api}</li>
							<li>{item.status}</li>
						</ul>
					</div>
				))}
			</Stack>
		</div>
	);
}
