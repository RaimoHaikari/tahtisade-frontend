import { createSlice } from "@reduxjs/toolkit";

/*
 * Yhteydet backEnd:iin.
 */
import laravelService from '../services/moviesLaravel';

const SHEETS = [
    {
        name: "Elokuvat",
        range: "Elokuvat!A:H"
    }
];

const initialState = {
    loading: false,
    data: null
};

const lueTaulukot = () => {

    for(let i = 0; i < SHEETS.length; i++){
        const sheet = SHEETS[i];

        console.log(sheet.range)
    }
}

const lueTiedotGooglesta = (state) => {

    console.log(".....................");
    lueTaulukot();

    return {
        ...state
    }
}

const updateSlice = createSlice({
    name: 'update',
    initialState,
    reducers: {
        bulkUpdate(state){
            return lueTiedotGooglesta(state);
        },
        fetchingMovies(state, action){
            const { genres, loading, movies } = action.payload;


            if(loading) { 

                return {
                    ...state,
                    loading: true
                }
            }

            return {
                ...state,
                loading: false,
                data: "Hieno homma!"
            }
        },
    }
});

export const { bulkUpdate, fetchingMovies } = updateSlice.actions;



export const initializeMovies = () => {


    return async dispatch => {

        dispatch(fetchingMovies({
            loading: true,
            movies: null,
            genres: null
        }));

        

        const movies =  await laravelService.getGeneralListing();
        console.log(movies);


        dispatch(

            fetchingMovies({
                loading: false,
                movies: null,
                genres: null
            })

        )
    
    }

}


export default updateSlice.reducer;