import MovieList from '../../components/MovieList';

import {
    Aside,
    Container,
    ContentWrap,
    Main
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