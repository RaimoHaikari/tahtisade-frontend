import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { initializeMovie } from '../../reducers/singleMovieReducer';

const Movie = () => {

    const id = parseInt(useParams().id);

    const dispatch = useDispatch();

    const { data, loading } = useSelector(state => state.singleMovie);

    /*

        if(data === null){

            dispatch(initializeMovie({
                movieId: id
            }));
        }

    */
    useEffect(() => {
        
        dispatch(initializeMovie({
            movieId: id
        }));
    
    }, [])
    //const movie = movies.filter(m =>  m.googleID === id)

    console.log(data)


    return (
        <>
            {
                loading === true
                ? <div>Ladataan....</div>
                : <h2>{`Elokuva ${id}`}</h2>
            }
        </>
    );
};

export default Movie;