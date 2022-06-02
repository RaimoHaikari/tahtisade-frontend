import { Link } from "react-router-dom";

const MovieList = ({ movies }) => {

    return (
        <div>
            <h3>Elokuvat</h3>
            <ul>
                {
                    movies.map(movie => {
                        return (
                            <li key={movie.googleID}>
                                <Link to={`/elokuvat/${movie.googleID}`}>{movie.nimi}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default MovieList;