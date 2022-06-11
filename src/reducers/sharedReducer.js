/* eslint-disable default-case */
import { createSlice } from '@reduxjs/toolkit';

import { setDisplayType, setSortingSettings } from './movieListReducer'

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
