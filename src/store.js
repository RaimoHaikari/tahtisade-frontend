import { configureStore } from '@reduxjs/toolkit';

import movieListReducer from './reducers/movieListReducer';
import sharedReducer from './reducers/sharedReducer';
import singleMovieReducer from './reducers/singleMovieReducer';

const store = configureStore({
    reducer: {
        movieList: movieListReducer,
        singleMovie: singleMovieReducer,
        shared: sharedReducer
    }
});

export default store;