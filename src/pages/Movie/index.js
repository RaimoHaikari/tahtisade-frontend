import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { initializeMovie } from '../../reducers/singleMovieReducer';

import {
    Container,
    InfoCardWrapper,
    Main,
    Aside
} from '../../components/GeneralLayout/SingleItem/elements';

import MovieCard from '../../components/SingleMovie';
import Poster from '../../components/SingleMovie/Poster';
import Reviews from '../../components/SingleMovie/Reviews';

import CountDown from '../../components/CountDown';

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
    
    }, []);

    return (
        <Container>
            {
                (loading === true)
                ? <CountDown />
                : data === null
                    ? null
                    : <InfoCardWrapper>

                        <Aside>
                            <Poster 
                                src={data.img}
                                title={data.nimi}
                            />
                        </Aside>

                        <Main>
                            <MovieCard 
                                actors={data.actors}
                                directors={data.director}
                                distributors={data.distributor}
                                externalLinks={data.externalLinks}
                                genre={data.genres}
                                releaseDate={data.ensiIlta}                                
                                title={data.nimi}
                                writers={data.writer}
                            />
                            <Reviews
                                headers={data.headers}
                                stars={data.stars}
                                tomatoes={data.visibleData}
                            />
                        </Main>
                    </InfoCardWrapper>
            }
        </Container>
    );
};

/*

*/

export default Movie;