import MovieList from '../../components/MovieList';
import Search from '../../components/DT/Search';
import Pagination from '../../components/MovieList/Pagination';

import {
    Aside,
    Container,
    ContentWrap,
    Main,
    PaginationAndSearch
} from '../../components/GeneralLayout/ItemList/elements'

const Movies = () => {

    /*
    const { loading, error, data } = useQuery(ALL_MOVIES);

    
    if (loading) return (
        <div>
            L.a.d.a.t.a.a.n
        </div>
    );

    if (error) return `Error! ${error}`;
    */

    return (
        <Container>
            <h2>Elokuvat</h2>

            <PaginationAndSearch>
                <Pagination store="movieList" />
                <Search
                    onSearch={(val) => console.log("Pitäs rajoittaa",val)}
                />
            </PaginationAndSearch>

            <ContentWrap>
                <Main>
                    <MovieList />
                </Main>
                <Aside>
                    GENRET
                </Aside>
            </ContentWrap>

        </Container>
    );
};

export default Movies;