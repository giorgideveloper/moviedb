import { useEffect, useState } from 'react';
import ApiService from '../service/ApiService';

function useGetPopularMovies() {
	const [data, setData] = useState([]);

	useEffect(() => {
		ApiService.getPopular().then(res => setData(res.data.results));

		return () => setData([]);
	}, []);

	return data;
}

export default useGetPopularMovies;
