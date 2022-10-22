import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Actor from '../components/actor/Actor';
import ApiService from '../service/ApiService';

export default function ActorPage() {
	const { id } = useParams();
	const [actor, setActor] = useState([]);

	useEffect(() => {
		const getActorDetails = () => {
			ApiService.getActor(id).then(res => setActor(res.data));
		};
		return getActorDetails();
	}, [id]);

	return (
		<div>
			{' '}
			<Actor actor={actor} />
		</div>
	);
}
