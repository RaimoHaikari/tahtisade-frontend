/* eslint-disable default-case */
import { createSlice } from '@reduxjs/toolkit';

import { 
    setCurretPage, 
    setDisplayType, 
    setSearchSettings,
    setSortingSettings
} from './movieListReducer'

const initialState = {};

const sharedSlice = createSlice({
    name: 'sharedReducer',
    initialState,
    reducers: {
        foobar() {
            return initialState
        }
    }
});

export const { foobar } = sharedSlice.actions;

export const updateCurretPage = (val) => {

    return dispatch => {
        
        switch(val.store){

            case 'movieList': 

                dispatch(setCurretPage({page: val.page}));
                break;

        }
    }
}

export const updateDisplayType = (val) => {

    return dispatch => {

        switch(val.store){
            
            case 'genres': 

            dispatch({
                type: 'GENRELIST_SET_DISPLAY_TYPE',
                data: {type: val.type}
            });

                break;

            case 'movieList': 

                dispatch(setDisplayType({type: val.type}));
                break;

            case 'reviewers': 
                
                dispatch({
                    type: 'REVIEWERLIST_SET_DISPLAY_TYPE',
                    data: {type: val.type}
                });

                break;
        }
    }
}

/*
 * Esitettävään elokuvalistaan suoritettava hakurajaus
 */
export const updateSearchSetting = (val) => {

    return dispatch => {


        switch(val.store){
            
            case 'movieList': 

                dispatch(setSearchSettings({str: val.str}));
                break;

        }
    }
}

export const updateSortingSetting = (val) => {

    return dispatch => {

        switch(val.store){
            

            case 'movieList': 
                dispatch(setSortingSettings({field: val.field}));
                break;

        }
    }
}

export default sharedSlice.reducer;
