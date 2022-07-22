/*
 *  Redux Toolkitin avulla reducerin ja siihen liittyvät action creatorit voi luoda kätevästi createSlice-funktion avulla.
 */
import { createSlice } from '@reduxjs/toolkit';

import { ReviewerListData } from "../misc/mockData";

import {
    convertAverageToStars,
    displayStars,
    getNumberOfPagesTotal,
    getPaginationLinks,
    getPresentedItemsList,
    getVisibleItems
} from "../misc/helperFunctions";

import { max } from "d3-array";

const DISPLAYTYPE = [
    {
        name: 'Taulukko',
        active: true,
        content: 'REVIEWERLIST_TABLE'
    }
];

const getHeaders = () => {
    return [
        { name: "Nimi", field: "name", sortable: true, searchable: true},
        { name: "Arvioiden keskiarvo", field: "starsAverage",  sortable: true, searchable: false},
        { name: "Arvioiden määrä", field: "numbOfRevies", sortable: true, searchable: false},
    ];
}

const initialState = {
    currentPage: 1,
    data: null,
    displayTypes: DISPLAYTYPE,
    headers: [], // Huom! Pitää olla jotta tieto voidaan esittää taulukossa
    itemsPerPage: 20,
    loading: false,
    numberOfReviews: {min:1, value:10, max: null},
    maxNumberOfPaginationLinks: 5,
    paginationLinks: [],   
    search: '',
    sortingField: '',
    sortingOrder: '',
    visibleData: null,
}

const displayReviewerList = (state, reviewers) => {

    let loadedReviewerList  = reviewers;
    let maxNumbOfReviews = -1;

    /*
     * Palvelimelta luetun datan esikäsittely
     *
     * lisätään tietueisiin 
     * - linkki kriitikon faktasivulle
     * - ikoneilla esitetty muoto arvosanojen keskiarvosta
     * 
     * Selvitetään annettujen arvostelujen enimmäismäärä
     */
    loadedReviewerList = loadedReviewerList.map(r => {

        let productPage = `reviewers/${r.id}`;
        let visualizedStars = convertAverageToStars(r['starsAverage']);

        if(parseInt(r.numbOfRevies) > maxNumbOfReviews)
            maxNumbOfReviews = parseInt(r.numbOfRevies)

        return {
            ...r,
            productPage: productPage,   // Linkki kriitikon tiedot esittävälle sivulle
            visualizedStars: visualizedStars
        }
    });

    /*
     * Päivitetään tarvittavien arvioiden lukumäärän asetusta säätelevä objekti
     */
    let newNumberOfReviews = {
        ...state.numberOfReviews,
        max: maxNumbOfReviews
    };

    /*
     *
     */
    let reviewersToShow = getFilteredItemsList(
        loadedReviewerList,
        state.search, 
        state.sortingField, 
        state.sortingOrder, 
        state.numberOfReviews.value
    )

    /*
     * Sivutukseen tarvittava tieto
     */
    let itemsTotal = reviewersToShow.length;
    let pagesTotal = getNumberOfPagesTotal(state, itemsTotal);

    /*
    * Suodatetaan sivulla näytettävät elokuvat, kun sivutus otetaan huomioon &
    * vaihdetaan tähdet numeroiden tilalle merkkaamaan keskiarvoa
    */
    reviewersToShow = prune(
        reviewersToShow, 
        state.currentPage, 
        state.itemsPerPage,
        'starsAverage', 
        'visualizedStars'
    );

    let paginationLinks = getPaginationLinks(state.currentPage, state.maxNumberOfPaginationLinks, pagesTotal);
    
    return {
        ...state,
        data: loadedReviewerList,
        headers: getHeaders(),
        loading: false,
        numberOfReviews: newNumberOfReviews,
        paginationLinks: paginationLinks,
        totalItems: itemsTotal,
        totalPages: pagesTotal,
        visibleData: reviewersToShow
    }
}

/*
 * Lisätään Aineiston lajittelusta ja mahdollisesta hakutermillä tapahtuvasta rajauksesta huolehtivaan
 * funktio-kutsuun tarvittavien arvostelujen määrää koskeva rajaus 
 */
const getFilteredItemsList = (items, search, sortingField, sortingOrder, numberOfReviewsNeeded) => {

    return getPresentedItemsList(
        items,
        search, 
        sortingField, 
        sortingOrder
    )
    .filter(r => r.numbOfRevies >= numberOfReviewsNeeded)   

}

/* 
 * Suodatetaan aineistosta selaimelle lähetettävä osuus
 */
const prune = (items, currentPage, itemsPerPage, key, value) => {

    let filtered = getVisibleItems(items, currentPage, itemsPerPage);

   /*
    * Jäljellä enään selaimelle lähtettävä osuus. Koska lajittelu on jo suoritettu, voidaan
    * keskiarvon sisältävään sarakke "täyttää" tähdillä
    */
   filtered = displayStars(filtered, key, value)
   
   return filtered

}

/* 
 * Asetetaa uusi arvo sille kuinka monta arvostelua pitää vähintään olla, jotta arvostelijan
 * nimi esitetään listalla
 * 
 * @todo: T Ä N N E   J Ä Ä T I I N . . .
 */
const setMinNumberOfReviews = (state, value) => {

    let newValue = value;


    /*
     * Päivitetään tarvittavien arvioiden lukumäärän asetusta säätelevä objekti
     */
    let newNumberOfReviews = {
        ...state.numberOfReviews,
        value: newValue
    };


    /*
     *
     */
    let reviewersToShow = getFilteredItemsList(
        state.data,
        state.search, 
        state.sortingField, 
        state.sortingOrder, 
        newValue
    );


    /*
     * Sivutukseen tarvittava tieto
     */
    let itemsTotal = reviewersToShow.length;
    let pagesTotal = getNumberOfPagesTotal(state, itemsTotal);

    /*
    * Suodatetaan sivulla näytettävät elokuvat, kun sivutus otetaan huomioon &
    * vaihdetaan tähdet numeroiden tilalle merkkaamaan keskiarvoa
    */
    reviewersToShow = prune(
        reviewersToShow, 
        state.currentPage, 
        state.itemsPerPage,
        'starsAverage', 
        'visualizedStars'
    );

    let paginationLinks = getPaginationLinks(state.currentPage, state.maxNumberOfPaginationLinks, pagesTotal);

    return {
        ...state,
        numberOfReviews: newNumberOfReviews,
        paginationLinks: paginationLinks,
        totalItems: itemsTotal,
        totalPages: pagesTotal,
        visibleData: reviewersToShow
    }

}

/*
 * Lajittelujärjestyksen muutos
 */
const updateSortingSettings = (state, field)  => {

    let newField = field;
    let newOrder = ((newField === state.sortingField) && (state.sortingOrder === "asc")) ? "desc" : "asc";

    /*
     *
     */
    let reviewersToShow = getFilteredItemsList(
        state.data,
        state.search, 
        newField, 
        newOrder, 
        state.numberOfReviews.value
    );

    /*
     * Sivutukseen tarvittava tieto
     */
    let itemsTotal = reviewersToShow.length;
    let pagesTotal = getNumberOfPagesTotal(state, itemsTotal);

    let newCurrentPage = 1;

    /*
     * Suodatetaan sivulla näytettävät kriitikot, kun sivutus otetaan huomioon &
     * vaihdetaan tähdet numeroiden tilalle merkkaamaan keskiarvoa
     */
    reviewersToShow = prune(
        reviewersToShow, 
        newCurrentPage, 
        state.itemsPerPage,
        'starsAverage', 
        'visualizedStars'
    );

    
    let paginationLinks = getPaginationLinks(newCurrentPage, state.maxNumberOfPaginationLinks, pagesTotal);

    return {
        ...state,
        paginationLinks: paginationLinks,
        sortingField: newField,
        sortingOrder: newOrder,
        currentPage: newCurrentPage,
        visibleData: reviewersToShow  
    }

}

const reviewerlistSlice = createSlice({
    name: 'reviewerList',
    initialState,
    reducers: {
        fetchingData(state, action){

            const { loading,reviewers} = action.payload;

            if(loading){
                return {
                    ...state,
                    loading: true
                }
            }

            return displayReviewerList(state, reviewers);
        },
        setSortingSettings(state, action){

            const { field } = action.payload;
            return updateSortingSettings(state, field);

        },
        changeMinNumbOfReviews(state, action) {

            const { value } = action.payload;

            return setMinNumberOfReviews(state, value);

        }
    }
})

export const { 
    fetchingData,
    changeMinNumbOfReviews,
    setSortingSettings
} = reviewerlistSlice.actions;

export const initializeReviewers = () => {

    return async dispatch => {

        dispatch(fetchingData({loading: true,reviewers: null}));

        setTimeout(() => {

            dispatch(
                fetchingData({
                    loading: false,
                    reviewers: ReviewerListData
                })
            )
            
        }, 1000);

    }

}

/*
 * Päivitetään arvoa kuinka monta arvostelua pitää vähintään olla,
 * jotta arvostelija huomioidaan nimilistassa
 */
export const updateMinNumbOfReviews = (val) => {

    return dispatch => {

        dispatch({
            type: 'REVIEWERLIST_UPDATE_NUMB_OF_REVIEWS',
            data: {
                value: val
            }
        })

        dispatch(changeMinNumbOfReviews({
            value: val
        }))       

    }

}



export default reviewerlistSlice.reducer