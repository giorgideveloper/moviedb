import React, { useEffect, useState } from 'react';
import ApiService from '../service/ApiService';

function UpdateComponent(OriginalComponent) {
	function NewComponent() {
		const [trendingMovie, setTrendingMovie] = useState([]);
		const [popularMovie, setPopularMovie] = useState([]);

		useEffect(() => {
			ApiService.getTrending().then(res => setTrendingMovie(res.data.results));
		}, []);

		useEffect(() => {
			ApiService.getPopular().then(res => setPopularMovie(res.data.results));
		}, []);

		return (
			<OriginalComponent
				trendingMovie={trendingMovie}
				popularMovie={popularMovie}
			/>
		);
	}

	return NewComponent;
}

export default UpdateComponent;
