import { useDispatch } from "react-redux";

import {
    Aside,
    Container,
    ContentWrap,
    Main,
    PaginationAndSearch
} from "../../components/GeneralLayout/ItemList/elements";

import ReviewerList from "../../components/ReviewerList";
import Toolbar from "../../components/ReviewerList/Toolbar";

import { updateSearchSetting } from "../../reducers/sharedReducer";


const Critics = () => {

    const dispatch = useDispatch();


    return (
        <Container>
        
            <PaginationAndSearch>
                <div>P.A.G.I.N.A.T.I.O.N</div>
                <div>S.E.A.R.C.H</div>
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