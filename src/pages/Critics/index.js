import { useDispatch } from "react-redux";

import {
    Aside,
    Container,
    ContentWrap,
    Main,
    PaginationAndSearch
} from "../../components/GeneralLayout/ItemList/elements";

import ReviewerList from "../../components/ReviewerList";
import Pagination from "../../components/MovieList/Pagination/GeneralPagination";
import Toolbar from "../../components/ReviewerList/Toolbar";
import Search from "../../components/DT/Search";

import { updateSearchSetting } from "../../reducers/sharedReducer";


const Critics = () => {

    const dispatch = useDispatch();


    return (
        <Container>
        
            <PaginationAndSearch>

                <Pagination store='reviewerList' />

                <Search 
                    onSearch={(val) => dispatch(
                        updateSearchSetting({
                            store: 'reviewerList',
                            str: val
                        })
                    )}
                />
            </PaginationAndSearch>

            <ContentWrap>
                <Main>
                    <ReviewerList />
                </Main>
                <Aside>
                    <Toolbar />
                </Aside>
            </ContentWrap>
        </Container>
    );
};

export default Critics;