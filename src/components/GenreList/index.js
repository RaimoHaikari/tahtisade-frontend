import { useEffect } from 'react';

import { useDispatch, useSelector } from "react-redux";

import { initializeGenres } from "../../reducers/genreListReducer";

import CountDown from "../CountDown";
import GeneralTabs from "../MovieList/Tabs/generalTabs";

const GenreList = () => {

    const dispatch = useDispatch();
    const { loading, data } = useSelector(state => state.genreList);

    useEffect(() => {

        if(data === null)
            dispatch(initializeGenres());

    }, [data]);

    

    return (
        <>
        {
            loading === true
                ? <CountDown />
                : data === null
                    ? "alahan lataamaan aineistoa...."
                    : <GeneralTabs store="genreList" />
        }
        </>
    );
};

export default GenreList;