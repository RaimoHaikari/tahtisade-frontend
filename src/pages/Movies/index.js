import { useDispatch, useSelector } from 'react-redux';

import MovieList from '../../components/MovieList';
import Genres from '../../components/MovieList/Genres';
import Search from '../../components/DT/Search';
import Pagination from '../../components/MovieList/Pagination';

import {
    Aside,
    Container,
    ContentWrap,
    Main,
    PaginationAndSearch
} from '../../components/GeneralLayout/ItemList/elements';

import {
    updateSearchSetting
} from '../../reducers/sharedReducer'

const Movies = () => {

    const dispatch = useDispatch();

    const { search } = useSelector(state => state.movieList);

    return (
        <Container>

            <PaginationAndSearch>
                <Pagination store="movieList" />
                <Search

                    onSearch={(val) => dispatch(
                        updateSearchSetting({
                            store: 'movieList',
                            str: val
                        })
                    )}

                    seachStr={search}
                />
            </PaginationAndSearch>

            <ContentWrap>
                <Main>
                    <MovieList />
                </Main>
                <Aside>
                    <Genres />
                </Aside>
            </ContentWrap>

        </Container>
    );
};

export default Movies;