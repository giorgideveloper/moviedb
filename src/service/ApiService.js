import axios from 'axios';

const api = axios.create({
	baseURL: 'https://api.themoviedb.org/3',
	withCredentials: false,
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json',
	},
});
const api_key = '?api_key=5542c44cdf4bd84873c85d8e27e915d5';
export default {
	getPopular() {
		return api.get(`/movie/popular${api_key}`);
	},
	getTrending() {
		return api.get(`/trending/movie/week${api_key}`);
	},
	getPopularContent(id) {
		return api.get(`/movie/${id}${api_key}`);
	},
	getMovieActors(id) {
		return api.get(`movie/${id}/credits${api_key}`);
	},
};
