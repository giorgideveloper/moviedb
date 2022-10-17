import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import ApiService from '../service/ApiService';

export const moviesSlice = createSlice({
	name: 'movies',
	initialState: {
		trending: [],
		popular: [],
		status: 'idle',
		error: null,
	},

	extraReducers(builder) {
		builder
			.addCase(trendingMovies.pending, (state, action) => {
				state.status = 'pending';
			})
			.addCase(trendingMovies.fulfilled, (state, action) => {
				state.status = 'fulfilled';
				state.trending = action.payload;
			})
			.addCase(trendingMovies.rejected, (state, action) => {
				state.status = 'rejected';
				state.error = action.error.message;
			});
		builder
			.addCase(popularMovies.pending, (state, action) => {
				state.status = 'pending';
			})
			.addCase(popularMovies.fulfilled, (state, action) => {
				state.status = 'fulfilled';
				state.popular = action.payload;
			})
			.addCase(popularMovies.rejected, (state, action) => {
				state.status = 'rejected';
				state.error = action.error.message;
			});
	},
});

// Action creators are generated for each case reducer function
export const trendingMovies = createAsyncThunk(
	'movies/trendingMovies',
	async () => {
		const response = await ApiService.getTrending();
		return response.data.results;
	}
);
export const popularMovies = createAsyncThunk(
	'movies/popularMovies',
	async () => {
		const response = await ApiService.getPopular();
		return response.data.results;
	}
);
export default moviesSlice.reducer;
