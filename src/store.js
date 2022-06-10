import { configureStore } from '@reduxjs/toolkit';

import movieListReducer from './reducers/movieListReducer';
import sharedReducer from './reducers/sharedReducer';

const store = configureStore({
    reducer: {
        movieList: movieListReducer,
        shared: sharedReducer
    }
});

export default store;