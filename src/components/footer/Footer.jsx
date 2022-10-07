import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'center',
	color: theme.palette.text.secondary,
}));

export default function Footer() {
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
				<Item style={{ display: 'block', textAlign: 'left', width: '100%' }}>
					<ul>
						<h3>THE BASICS</h3>
						<li>
							<a href=''>About TMDB</a>
						</li>
					</ul>
					<ul>
						<a href=''>Contact Us</a>
					</ul>
					<ul>
						<a href=''>Support Forums</a>
					</ul>
					<ul>
						<a href=''>API</a>
					</ul>
					<ul>
						<a href=''>System Status</a>
					</ul>
				</Item>
				<Item style={{ display: 'block', textAlign: 'left', width: '100%' }}>
					<ul>
						<h3>THE BASICS</h3>
						<li>
							<a href=''>About TMDB</a>
						</li>
					</ul>
					<ul>
						<a href=''>Contact Us</a>
					</ul>
					<ul>
						<a href=''>Support Forums</a>
					</ul>
					<ul>
						<a href=''>API</a>
					</ul>
					<ul>
						<a href=''>System Status</a>
					</ul>
				</Item>
				<Item style={{ display: 'block', textAlign: 'left', width: '100%' }}>
					<ul>
						<h3>THE BASICS</h3>
						<li>
							<a href=''>About TMDB</a>
						</li>
					</ul>
					<ul>
						<a href=''>Contact Us</a>
					</ul>
					<ul>
						<a href=''>Support Forums</a>
					</ul>
					<ul>
						<a href=''>API</a>
					</ul>
					<ul>
						<a href=''>System Status</a>
					</ul>
				</Item>
				<Item style={{ display: 'block', textAlign: 'left', width: '100%' }}>
					<ul>
						<h3>THE BASICS</h3>
						<li>
							<a href=''>About TMDB</a>
						</li>
					</ul>
					<ul>
						<a href=''>Contact Us</a>
					</ul>
					<ul>
						<a href=''>Support Forums</a>
					</ul>
					<ul>
						<a href=''>API</a>
					</ul>
					<ul>
						<a href=''>System Status</a>
					</ul>
				</Item>
			</Stack>
		</div>
	);
}
