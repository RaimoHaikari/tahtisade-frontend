import { configureStore } from '@reduxjs/toolkit';

import movieListReducer from './reducers/movieListReducer';
import sharedReducer from './reducers/sharedReducer';
import singleMovieReducer from './reducers/singleMovieReducer';
import genreListReducer from './reducers/genreListReducer';
import singleGenreReducer from './reducers/singleGenreReducer';

const store = configureStore({
    reducer: {
        genreList: genreListReducer,
        singleGenre: singleGenreReducer,
        movieList: movieListReducer,
        singleMovie: singleMovieReducer,
        shared: sharedReducer
    }
});

export default store;