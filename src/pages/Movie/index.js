import { useParams } from "react-router-dom";

const Movie = ({ movies }) => {

    const id = parseInt(useParams().id)
    const movie = movies.filter(m =>  m.googleID === id)

    return (
        <div>
            <h2>{movie[0].nimi}</h2>
            <p>Yksittäisen elokuvan tiedot</p>
        </div>
    );
};

export default Movie;