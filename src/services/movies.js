import axios from "axios";
import { print } from "graphql"

import {
    ALL_CRITICS,
    ALL_GENRES,
    ALL_MOVIES,
    COLLEQUE_REVIEWS,
    MOVIE_DETAILS,
    SINGLE_CRITIC,
    STARS_BASED_ON_GENRE,
} from "../queries";

let backendUrl = 'https://infinite-depths-50039.herokuapp.com/';

/*
 * Haetaan kriitikot listaavalla yhteenvetosivulla esitettävät tiedot
 */
const getCriticsOverview = async () => {

    const response = await axios.post(
        backendUrl,
        {
            query: ALL_CRITICS
        }
    )

    return response.data
}

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

/* Yksittäisen kriitikon tietojen perussetti */
const getCriticDetails = async (id) => {

    const response = await axios.post(
        backendUrl,
        {
            query: SINGLE_CRITIC,
            variables: {
                criticId: id
            }
        }
    )

    return response.data

};

/* Vertailuun valitun kriitikon arvio aktiivisen kriitikon arvostelemista elokuvista */
const getCollequeReviews = async (criticID, collequeID) => {

    const response = await axios.post(
        backendUrl,
        {
            query: COLLEQUE_REVIEWS,
            variables: {
                criticId: criticID,
                collequeId: collequeID
            }
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
    getCriticsOverview,
    getGenresOverview,
    getGeneralListing,
    getMovieDetails,
    getStarsBasedOnGenres,
    getCriticDetails,
    getCollequeReviews
};