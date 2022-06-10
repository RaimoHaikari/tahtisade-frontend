/*
 *  Redux Toolkitin avulla reducerin ja siihen liittyvät action creatorit voi luoda kätevästi createSlice-funktion avulla.
 */
import { createSlice } from '@reduxjs/toolkit';

/*
 * Yhteydet backEnd:iin.
 */
import movieService from '../services/movies';

import { average, round } from '../misc/helperFunctions';


import { MovieListData } from '../misc/mockData';

import {
    SiFirst,
    SiLastpass
} from 'react-icons/si';

const DISPLAYTYPE = [
    {
        name: 'Taulukko',
        active: true,
        content: 'MOVIELIST_TABLE'
    },
    {
        name: 'Kuvakkeet',
        active: false,
        content: 'MOVIELIST_CARD'
    }
]


/*

    + allTheMovies: null,
    + currentPage: 1,
    + displayTypes: DISPLAYTYPE,
    + headers: [], // Huom! Pitää olla jotta tieto voidaan esittää taulukossa
    + genreNames: null,
    genreNamesLoading: false,
    + itemsPerPage: 25,
    + moviesLoading: false,
    + message: 'Aloitustervehdys',
    + maxNumberOfPaginationLinks: 5,
    + paginationLinks: [],
    + search: '',
    + sortingField: '',
    + sortingOrder: '',
    + totalItems: 0,  // näytettävien objektien kokonaismäärä
    + totalPages: 0,  // kuinka monta sivua tarvitaan, kun kerralla näytetään itemsPerPage objektia sivulla
    + visibleData: null
*/
const initialState = {
    allTheMovies: null,         // Kaikki elokuvat sisältävä lista, josta näytettävät elokuvat suodatetaan
    currentPage: 1,             // Monesko "sivu" elokuvalistauksesta esitetään
    displayTypes: DISPLAYTYPE,  // Aineiston esittämisen vaihtoehtoiset tavat
    genreNames: null,
    headers: [],               // Huom! Pitää olla jotta tieto voidaan esittää taulukossa
    itemsPerPage: 25,           // Kuinka monen elokuvan tiedot sivulla näytetään kerrallaan
    maxNumberOfPaginationLinks: 5,
    message: 'Aloitustervehdys',
    moviesLoading: true,    // Ollaanko hakemassa aineistoa palvelimelta
    paginationLinks: [],
    search: '',             // Haetaanko elokuvaa hakutermin avulla
    sortingField: '',       
    sortingOrder: '',
    totalItems: 0,          // näytettävien objektien kokonaismäärä
    totalPages: 0,          // kuinka monta sivua tarvitaan, kun kerralla näytetään itemsPerPage objektia sivulla
    visibleData: null       // Suodatusten & sivutuksen jälkeen jäävä, käyttäjälle esitettävä aineisto
}

/*
 * Suodatetaan kaikki elokuvat sisältävästä listasta kävijälle näytettävät elokuvat.
 * 
 * - onko syötetty elokuvan nimeen kohdistuva hakutermi
 * - montako elokuvaa sivulla näyttään kerrallaan
 * - kuinka elokuvat halutaan lajitella
 * - halutaanko nähdä vain tietyn genremäärityksen täyttävät elokuvat
 *
 * @todo: Virhetilanteen käsittely puuttuupi
 */
const displayMovieList = (state, data) => {

    let loadedMovieList = data.map(d => {

        let productPage = `/elokuvat/:{d.id}`;
        let genres = d.genre.map(g => g.genreId);

        return {
            ...d,
            productPage: productPage,
            genre: genres,
            numberOfReviews: d.stars.length,
            averageOfReviews: (d.stars.length===0?0:round(average(d.stars),2))
        }

    })

    let moviesToShow = getPresentedMovieList(
        loadedMovieList,
        state.currentPage, 
        state.itemsPerPage, 
        state.search, 
        state.sortingField, 
        state.sortingOrder,
        state.genreNames
    );

    /*
     * Sivutukseen tarvittava tieto
     */
    let itemsTotal = moviesToShow.length;
    let pagesTotal = getNumberOfPagesTotal(state, itemsTotal);

    /*
     * Suodatetaan sivulla näytettävät elokuvat, kun sivutus otetaan huomioon
     */
    moviesToShow = getVisibleMovies(moviesToShow, state.currentPage, state.itemsPerPage);

    let paginationLinks = getPaginationLinks(state.currentPage, state.maxNumberOfPaginationLinks, pagesTotal);

    return {
        ...state,
        allTheMovies: loadedMovieList,
        headers: getHeaders(),
        message: "Sovellus alustettu",
        paginationLinks: paginationLinks,
        totalItems: itemsTotal,
        totalPages: pagesTotal,
        visibleData: moviesToShow,
        moviesLoading: false
    }

}

/*
 * @todo: Joskus palauttaa allTehMoviesin nullina?
 */
const getActiveMovies = (allTheMovies, genreNames) => {

    const activeGenres = genreNames
        .filter(g => g.display === true)
        .map(g => g.id);

        const activeMovies = allTheMovies
        .filter((movie) => {
            const gList = movie.genre;
            const found = gList.some(g => activeGenres.indexOf(g) >= 0)

            return found
        })
    
    return activeMovies

}

/*
 * Huom!
 * 
 * Jotta yhteistä, lajiteltavaa taulukkoa voi käyttää, pitää reducerin tarjota tämän
 * tyyppinen headers -taulukko.
 * 
 * @todo: Pitäisikö lukea palvelimelta
 */
const getHeaders = () => {
    return [
        { name: "Nimi", field: "nimi", sortable: true, searchable: true },
        { name: "Arvosteluja yht.", field: "numberOfReviews",  sortable: true, searchable: false},
        { name: "Keskiarvo", field: "averageOfReviews",  sortable: true, searchable: false}
    ];
}

/*
 * H A K U E H D O T  T Ä Y T T Ä V Ä T   E L O K U V A T

 * Palvelimelta on haettu yhteenvetotiedot kaikista kantaan tallennetuista elokuvista.
 * Poimintaan näistä käyttäjälle esitettävät elokuvat. Valintaan vaikuttaa mm.:
 * - onko jotain suodatettu
 * - kuinka elokuvat halutaan lajitella
 * 
 * Huom! Tässä vaiheessa ei vielä suoriteta sivutusta
 */
const getPresentedMovieList = (allTheMovies, currentPage, itemsPerPage, search ,sortingField, sortingOrder, genreNames) => {

    let computedMovies = allTheMovies === null ? [] : allTheMovies;

    /*
     * Rajaus genremäärityksen perusteella
     */
    if(genreNames){
        computedMovies = getActiveMovies(computedMovies, genreNames) 
    }

    /*
     * Haku
     * - kohdistuu elokuvan nimeen
     */
    if(search){

        computedMovies = computedMovies.filter(item => {

            return (
                item.nimi.toLowerCase().includes(search.toLowerCase())
            )
        })
    }

    /*
     * Lajittelu
     */
    if(sortingField) {

        const reversed = sortingOrder === "asc" ? 1 : -1;

        computedMovies = computedMovies.sort((a,b) => {

            let val;

            switch (sortingField) {
                case "nimi":
                  val = reversed * a[sortingField].localeCompare(b[sortingField])
                  break;
                default:
                    val =  reversed * ((a[sortingField] > b[sortingField]) ? 1 : (a[sortingField] < b[sortingField]) ? -1 : 0)
              }

            return(val)
        })

    }

    return computedMovies;
}

/*
 * Sivutukseen tarvittava tieto 
 * 
 * ts. montako sivua tarvitaan, että kaikki elokuvat saadaa esitettyä, kun yhdelle sivulle
 * mahtuu korkeintaan [itemsPerPage] elokuvaa
 * 
 */
const getNumberOfPagesTotal = (state, itemsTotal) => {

    //let pagesTotal = state.totalPages;
    let pagesTotal = 0;
    let itemsPerPage = state.itemsPerPage;

    if(itemsTotal > 0 && itemsPerPage > 0)
        pagesTotal = (Math.ceil(itemsTotal / itemsPerPage))

    return pagesTotal

}

/*
 * Sivulla näytettävät elokuvat, kun sivutus otetaan huomioon.
 */
const getVisibleMovies = (moviesUpToLevel, currentPage, itemsPerPage) => {

    return moviesUpToLevel.slice(
        (currentPage - 1) * itemsPerPage,
        (currentPage - 1) * itemsPerPage + itemsPerPage
    );

}


/*
 * Lasketaan sivutuslinkeissä esitettävien sivut.
 *
 * - linkkien muodostamisen ensimmäinen vaihe
 */
const getPaginationIndexes = (currentPage, maxNumberOfPaginationLinks, totalPages) => {

    let alaRaja = 1;
    let vasen = true;           // Onko "vasemmalla tilaa"
    let ylaRaja = totalPages;
    let oikea = true;           // Onko "oikealla tilaa"

    let i = 0;
    let j = 1;                  // Kytkin jonka avulla laskurin arvoa käännetään positivisen ja negatiivisen välillä
    let index = currentPage;

    let indexes = [];

    let valmis = false

    do {
        index = index + (i * j);

        // lisätään sivu, mikäli indeksi taulukon sisällä
        if((index >= alaRaja) && (index <= ylaRaja))
            indexes.push(index)

        /*
         * Onko taulukossa vielä pienempiä / suurempia indeksejä
         */
        if(index === alaRaja)
            vasen = false;

        if(index === ylaRaja)
            oikea = false;

        /*
         * Jatketaanko silmukkaa
         * - riittävä määrä sivuja kasassa
         */
        if(indexes.length === maxNumberOfPaginationLinks)
            valmis = true;
        

        /*
         * Sivulle mahtuu enemmän objekteja, kuin mitä kantaan on talletettu.
         * Ei siis tarvetta sivutukselle.
         * - numberOfItems > totalPages
         */
        if(vasen===false & oikea===false)
            valmis = true;

        // päivitetään laskurit
        j *= -1;
        i++;

    }
    while(valmis !== true)
    //while(i < maxNumberOfPaginationLinks && valmis !== true)

    return indexes.sort((a,b) => a - b);
}

/*
 * Sivutuslinkkien alustus
 *
 * - selvitetään mitkä sivut pitää näyttää tulostettavassa Pagination listauksessa
 * - muotoillaan linkit.
 */
const getPaginationLinks = (currentPage, maxNumberOfPaginationLinks, totalPages) => {

    let indices = getPaginationIndexes(currentPage, maxNumberOfPaginationLinks, totalPages);

    indices = indices.map((index,i) => {

        let linkLabel = index;
        let linkIindex = index;
        let linkClass = "numb";

        /*
         * Korjataan tarvittaessa ensimmäinen linkki osoittamaan ensimmäiselle sivulle
         */
        if((i) === 0){
            if(index > 1) {
                linkIindex = 1
                linkLabel = <SiFirst />
                linkClass = "btn prev"
            }
        }

        /*
         * Korjataan tarvittaessa viimeinen linkki osoittamaan viimeiselle sivulle
         */
        if((i+1) === maxNumberOfPaginationLinks){
            if(index < totalPages) {
                linkIindex = totalPages
                linkLabel = <SiLastpass />
                linkClass = "btn next"
            }
        }

        /* Aktiivisen sivun korostus */
        if(index === currentPage)
            linkClass="numb active"


        return {
            className: linkClass,
            index: linkIindex,
            label: linkLabel
        }
    })

    return indices;
}





const movielistSlice = createSlice({
    name: 'movieList',
    initialState,
    reducers: {
        fetchingMovies(state, action){
            const { loading, data } = action.payload;

            if(loading) { 
                return {
                    ...state,
                    moviesLoading: true
                }
            }

            return displayMovieList(state, data);
        },
        /*
         * Asetetaan listaustyyppi
         *
         * Elokuvalistaus voidaan esittää joko taulukkomuodossa tai kuvakkeina.
         */
        setDisplayType(state, action) {

            const { type } = action.payload;


            let updatedTypes = state.displayTypes.map(dType => {
                
                let newState = dType.name === type?true:false;

                return {
                    ...dType,
                    active: newState
                }
            });


            return {
                ...state,
                displayTypes: updatedTypes
            }
        }
    }
})

export const { fetchingMovies, setDisplayType } = movielistSlice.actions;


export const initializeMovies = () => {

    return async dispatch => {

        dispatch(fetchingMovies({
            loading: true,
            data: null
        }))

        const movies =  await movieService.getGeneralListing();

        // movies.data.allMovies

        dispatch(
            fetchingMovies({
                loading: false,
                data: MovieListData
            })
        )
    
    }

}

export default movielistSlice.reducer