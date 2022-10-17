import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { trendingMovies } from '../redux/movies';
import { popularMovies } from '../redux/movies';

function UpdateComponent(OriginalComponent) {
	function NewComponent() {
		//get redux movies
		const trending = useSelector(state => state.trending.trending);
		const popular = useSelector(state => state.popular.popular);
		const dispatch = useDispatch();

		useEffect(() => {
			dispatch(popularMovies());
			dispatch(trendingMovies());
		}, [dispatch]);

		return (
			<OriginalComponent trendingMovie={trending} popularMovie={popular} />
		);
	}

	return NewComponent;
}

export default UpdateComponent;
