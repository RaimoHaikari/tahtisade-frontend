import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
    Container,
    InfoCardWrapper,
    Main,
    Aside,
    Graph,
    PaginationAndSearch
} from "../../components/GeneralLayout/SingleItem/elements";

import CountDown from "../../components/CountDown";
import Reviews from "../../components/SingleReviewer";

import { initializeReviewer } from "../../reducers/singleReviewerReducer";

const Critic = () => {

    const dispatch = useDispatch();

    const {data, loading} = useSelector(state => state.singleReviewer);

    const id = useParams().id;

    useEffect(() => {
        dispatch(initializeReviewer(id));
    }, [])

    console.log(data);

    return (
        <Container>
        {
            (loading === true)
            ? <CountDown />
            : data === null
                ? null
                : <InfoCardWrapper>

                    <Aside>
                        <div>TOGGLABLE</div>
                    </Aside>

                    <Main>
                        <div>Pagination and search</div>
                        <Reviews />
                    </Main>

                    <Graph>
                        <div>TOGGLABLE</div>
                    </Graph>
                
                  </InfoCardWrapper>
        }
        </Container>
    );

};

export default Critic;