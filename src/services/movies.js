import axios from "axios";

import {
    ALL_GENRES,
    STARS_BASED_ON_GENRE,
    ALL_MOVIES,
    MOVIE_DETAILS
} from "../queries";

let backendUrl = 'https://infinite-depths-50039.herokuapp.com/';

/*
 * Haetaan genreluokkien yhteenvetosivulla esitettävät tiedot
 */
const getGenresOverview = async () => {

    const response = await axios.post(
        backendUrl,
        {
            query: ALL_GENRES
        }
    )

    return response.data
}

const getStarsBasedOnGenres = async (genre) => {

    const response = await axios.post(
        backendUrl,
        {
            query: STARS_BASED_ON_GENRE,
            variables: {
                genre: genre
            }
        }
    )

    return response.data

};

/*
 * Haetaan elokuvat listaavalla sivulla esitettävät yhteenvetotiedot
 */
const getGeneralListing = async () => {

    const response = await axios.post(
        backendUrl,
        {
            query: ALL_MOVIES
        }
    )

    return response.data
}

const getMovieDetails = async (id) => {

    const response = await axios.post(
        backendUrl,
        {
            query: MOVIE_DETAILS,
            variables: {
                googleId: id
            }
        }
    )

    return response.data

};

export default {
    getGenresOverview,
    getGeneralListing,
    getMovieDetails,
    getStarsBasedOnGenres
};