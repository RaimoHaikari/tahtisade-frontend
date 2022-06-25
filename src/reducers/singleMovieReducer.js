import { createSlice } from '@reduxjs/toolkit';

/*
 * Yhteydet backEnd:iin
 */
import movieService from '../services/movies';

const initialState = {
    data: null,
    headers: [],
    sortingField: '',
    sortingOrder: '',
    visibleData: null,
    loading: false
}

const singleMovieSlice = createSlice({
    name: 'singleMovie',
    initialState,
    reducers: {
        fetchingMovie(state, action) {
            const {loading, data} = action.payload;

            if(loading) {
                return {
                    ...state,
                    loading: true
                }
            };

            console.log(data)

            return {
                ...state,
                loading: false,
                data: data
            };
        }
    }
})

export const {
    fetchingMovie
} = singleMovieSlice.actions;

export const initializeMovie = (val) => {

    return async dispatch => {

        dispatch(fetchingMovie({
            loading: true,   
        }));

        const movieId = val.movieId;
        console.log("id on", movieId);

        //const movie = await movieService.getGeneralListing();
        const movie = await movieService.getMovieDetails(movieId);

        dispatch(fetchingMovie({
            loading: false,
            data: movie.data.movieDetails
        }));

    }


}

export default singleMovieSlice.reducer;