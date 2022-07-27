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
import Colleagues from '../../components/SingleReviewer/Colleagues';
import ReusableD3Donut from "../../components/SingleReviewer/aReusableDonut";

import Pagination from "../../components/MovieList/Pagination/GeneralPagination";
import Search from '../../components/DT/Search';

import Togglable from "../../components/GeneralLayout/Togglable";

import { initializeReviewer } from "../../reducers/singleReviewerReducer";
import { updateSearchSetting } from "../../reducers/sharedReducer";

const Critic = () => {

    const dispatch = useDispatch();

    const {data, loading} = useSelector(state => state.singleReviewer);

    const id = useParams().id;

    useEffect(() => {
        if(data === null)
            dispatch(initializeReviewer(id));
    }, [data])

    /*  <CountDown /> */
    return (
        <Container>
        {
            (loading === true)
            ? <CountDown />
            : data === null
                ? null
                : <InfoCardWrapper>

                    <Aside>
                        <Togglable
                            buttonLabel="Vertailu"
                            openAtStart={false}
                        >
                            <Colleagues />
                        </Togglable>
                    </Aside>

                    <Main>

                        <PaginationAndSearch>
                            <Pagination store="singleReviewer" />
                            <Search 
                                onSearch={(val) => dispatch(
                                    updateSearchSetting({
                                        store: 'singleReviewer',
                                        str: val
                                    })
                                )}
                            />
                        </PaginationAndSearch>

                        <Reviews />

                    </Main>

                    <Graph>
                        <Togglable
                            buttonLabel="Vertailu"
                            openAtStart={true}
                        >
                            <ReusableD3Donut />
                        </Togglable>
                    </Graph>
                
                  </InfoCardWrapper>
        }
        </Container>
    );

};


export default Critic;