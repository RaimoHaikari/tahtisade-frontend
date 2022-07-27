import { useDispatch } from 'react-redux';

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