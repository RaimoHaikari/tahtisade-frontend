import { configureStore } from '@reduxjs/toolkit';

import movieListReducer from './reducers/movieListReducer';
import sharedReducer from './reducers/sharedReducer';
import singleMovieReducer from './reducers/singleMovieReducer';
import genreListReducer from './reducers/genreListReducer';
import singleGenreReducer from './reducers/singleGenreReducer';
import reviewerListReducer from './reducers/reviewerListReducer';

const store = configureStore({
    reducer: {
        genreList: genreListReducer,
        singleGenre: singleGenreReducer,
        movieList: movieListReducer,
        singleMovie: singleMovieReducer,
        reviewerList: reviewerListReducer,
        shared: sharedReducer
    }
});

export default store;