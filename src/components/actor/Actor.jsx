import { Container, Grid } from '@mui/material';
import React, { useState } from 'react';

function Actor({ actor }) {
	const ReadMore = ({ children }) => {
		const text = children;
		const [isReadMore, setIsReadMore] = useState(true);
		const toggleReadMore = () => {
			setIsReadMore(!isReadMore);
		};
		return (
			<p className='text'>
				{isReadMore ? text.slice(0, 500) : text}
				<span onClick={toggleReadMore} className='read-or-hide'>
					{isReadMore ? '...read more' : ' show less'}
				</span>
			</p>
		);
	};
	const Years = new Date();
	return (
		<>
			<Container>
				<Grid container spacing={8}>
					<Grid item xs={6} md={3}>
						<div>
							<img
								src={`https://image.tmdb.org/t/p/w300/${actor.profile_path}`}
								alt='Actor'
								style={{ width: '100%', height: '100%' }}
							/>
							<h3>Personal Info</h3>
							<section className='personal_info'>
								<p>
									<strong>
										<bdi>Known For</bdi>
									</strong>{' '}
									{actor.known_for_department}
								</p>
								<p>
									<strong>
										<bdi>Gender</bdi>
									</strong>{' '}
									{actor.gender === 2 ? 'Male' : 'Female'}
								</p>
								<p className='full'>
									<strong>
										<bdi>Birthday</bdi>
									</strong>
									{actor.birthday} (
									{Years.getFullYear() - parseInt(actor.birthday)})
								</p>
								<p className='full'>
									<strong>
										<bdi>Place of Birth</bdi>
									</strong>{' '}
									{actor.place_of_birth}
								</p>

								<p className='full true'>
									<strong>
										<bdi>Also Known As</bdi>
									</strong>
								</p>
								<ul>
									<li>{actor.also_known_as}</li>
								</ul>
							</section>
						</div>
					</Grid>
					<Grid item xs={6} md={9}>
						<div>
							<h1>{actor.name}</h1>
							<p style={{ fontWeight: '700' }}>Biography</p>
							<p className='container'>{actor.biography}</p>
							<ul>
								<li>
									<img src='' alt='' />
								</li>
							</ul>
						</div>
					</Grid>
				</Grid>
			</Container>
		</>
	);
}

export default Actor;
