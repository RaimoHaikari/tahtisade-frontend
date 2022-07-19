import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import GeneralTabs from './Tabs/generalTabs';
import CountDown from '../CountDown';

import { initializeMovies } from "../../reducers/movieListReducer";

/*
https://medium.com/react-weekly/implementing-graphql-in-your-redux-app-dad7acf39e1b
*/
const MovieList = () => {

    const dispatch = useDispatch();

    const { moviesLoading, visibleData} = useSelector(state => state.movieList);

    useEffect(() => {

        if(visibleData === null)
            dispatch(initializeMovies())
    }, [visibleData])


    return (
        <>
            {
                moviesLoading === true
                ? <CountDown />
                : <GeneralTabs store='movieList' />
            }
        </>
    );
};


export default MovieList;