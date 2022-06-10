import axios from "axios";

import { ALL_MOVIES } from "../queries"

let backendUrl = 'https://infinite-depths-50039.herokuapp.com/';


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

export default {
    getGeneralListing
}