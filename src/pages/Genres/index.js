import { useDispatch } from "react-redux";

import {
    Aside,
    Container,
    ContentWrap,
    Main,
    PaginationAndSearch
} from "../../components/GeneralLayout/ItemList/elements";

//import Togglable from "../../components/GeneralLayout/Togglable";

import GenreList from "../../components/GenreList";

import Pagination from "../../components/MovieList/Pagination/GeneralPagination";
import Search from "../../components/DT/Search";

import { updateSearchSetting } from "../../reducers/sharedReducer";


const Genres = () => {

    const dispatch = useDispatch();

    return (
        <Container>

            <PaginationAndSearch>
                <Pagination
                    store="genreList"
                />
                <Search 
                    onSearch={(val) => dispatch(
                        updateSearchSetting({
                            store: 'genreList',
                            str: val
                        })
                    )}
                />
            </PaginationAndSearch>

            <ContentWrap>
                <Main>
                    <GenreList />
                </Main>
                <Aside>
                </Aside>
            </ContentWrap>

        </Container>
    );
};

export default Genres;