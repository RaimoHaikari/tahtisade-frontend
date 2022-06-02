import MovieList from "../../components/MovieList";

const Movies = ({ movies }) => {
    return (
        <div>
            <h2>Elokuvat</h2>
            <MovieList 
                movies={movies}
            />
        </div>
    );
};

export default Movies;