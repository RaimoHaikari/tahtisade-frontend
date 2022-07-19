import { createSlice } from '@reduxjs/toolkit';

/*
 * Yhteydet backEnd:iin
 */
import movieService from '../services/movies';


import ComponentService from '../components/SingleMovie/ReviewsTable';
import { posterUrl,validURL } from '../misc/helperFunctions';

const initialState = {
    data: null,
    headers: [],
    sortingField: '',
    sortingOrder: '',
    visibleData: null,
    loading: false
}

const displayMovieData = (state, data) => {

    let newData = data;

    let reviews = getVisibleData(data.reviews); // mahollisilla linkeillä varustet
    let externalLinks = getMoreInfoLinks(newData);

    return {
        ...state,
        data: {
            ...newData,
            externalLinks: externalLinks,
            img: posterUrl(newData.img)
        },
        headers: getHeaders(),
        loading: false,
        visibleData: reviews
    };

}

const getHeaders = () => {
    return [
        { name: "Nimi", field: "name", sortable: true, searchable: false},
        { name: "Lähde", field: "link", sortable: false, searchable: false},
        { name: "Tähtiä", field: "stars", sortable: true, searchable: false}
    ];
}

const getMoreInfoLinks = (data) => {

    const externalLinks = [];

    if(data.imdb && data.imdb.length > 0) {
        externalLinks.push({
            name: 'imdb',
            link: `https://www.imdb.com/title/${data.imdb}/`,
            bgColor: 'black',
            color: 'white'
        })
    }

    if(data.kavi && data.kavi.length > 0){
        externalLinks.push({
            name: 'elonet',
            link: `https://elonet.finna.fi/Record/${data.kavi}`,
            bgColor: '#b90000',
            color: 'white'
        })       
    }

    if(data.wiki && data.wiki.length > 0){
        externalLinks.push({
            name: 'wikidata',
            link: `https://www.wikidata.org/wiki/${data.wiki}`,
            bgColor: '#b90000',
            color: 'white'
        })       
    }

    return externalLinks;
}

/*
 * Muokataan yksittäisen arvostelun tiedoista taulukossa esitettävä versio,
 * jossa mm. tarvittaessa esitetään linkki alkuperäiseen arviointiin.
 */
const getVisibleData = (data) => {

    let newData = data.map(d => {

        //let newName = <Title>{d.name}</Title>
        let newLink = validURL(d.link)
            ? ComponentService.getSourceLink(d.publisher, d.link)
            : d.link;

        let newStars = ComponentService.visualizeStars(d.stars)

        return {
            ...d,
            link: newLink,
            stars: newStars
        }
    });


    return newData;
}


const singleMovieSlice = createSlice({
    name: 'singleMovie',
    initialState,
    reducers: {
        fetchingMovie(state, action) {
            const {loading, data} = action.payload;

            if(loading) {
                return {
                    ...state,
                    loading: true
                }
            };

            return displayMovieData(state, data);
        }
    }
})

export const {
    fetchingMovie
} = singleMovieSlice.actions;

export const initializeMovie = (val) => {

    return async dispatch => {

        dispatch(fetchingMovie({
            loading: true,   
        }));

        const movieId = val.movieId;

        //const movie = await movieService.getGeneralListing();
        const movie = await movieService.getMovieDetails(movieId);

        dispatch(fetchingMovie({
            loading: false,
            data: movie.data.movieDetails
        }));

    }


}

export default singleMovieSlice.reducer;