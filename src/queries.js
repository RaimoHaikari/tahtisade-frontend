/*
 * Listaus minkälaisia arvosteluja eri genremäärityksiin kuuluvat
 * elokuvat ovat keränneet.
 */
export const STARS_BASED_ON_GENRE = `
  query Query($genre: String!) {
    starsBasedOnGenre(genre: $genre) {
      name
      total
      stars
    }
  }
`;

/*
 * Yksittäisen kriitikon arvostelujen tarkastelun lähtötiedot
 */
export const SINGLE_CRITIC = `
  query Query($criticId: String!) {

    criticDetails(criticID: $criticId) {
      criticID
      nimi

    }
    allReviews(criticID: $criticId) {
      stars
      googleID
      link
      publisher
      movie {
        nimi
      }
    }

    criticDetails(criticID: $criticId) {
      reviewerWithShardItems {
        criticID
        count
        name
      }
    }

    criticDetails(criticID: $criticId) {
      defCompSet {
        googleID
        count
        starsAverage
      }
    }
  }
`;

/*
 * Minkälaisia arvosteluja vertailuun valittu kriitikko on antanut
 * aktiivisen kriitikon arvostelemille elokuville
 */
export const COLLEQUE_REVIEWS = `
  query Query($criticId: String!, $collequeId: String!) {
    collequeReviews(criticID: $criticId, collequeID: $collequeId) {
      criticID
      googleID
      stars
    }
  }
`;

/*
 * Kriitikot listaavalla sivulle esitettävät yhteenvetotiedot
 */

export const ALL_CRITICS = `
  query {
    allCritics {
      nimi
      criticID
      starsAverage
      numbOfReviews
    }
  }
`;


export const ALL_GENRES = `
  query {
    allGenres {
      genre
      numberOfMovies
      numberOfReviews
      starsAverage
    }
  }
`;

export const ALL_MOVIES = `
  query {
    allMovies {
      googleID
      nimi
      wiki
      kavi
      img
      ensiIlta
      reviews {
        stars
      }
      genres {
        genre
      }
    }
    allGenres {
      genre
    }
  }
`;

/*
 *
 */
export const MOVIE_DETAILS = `
  query movieDetails($googleId: Int!) {
    movieDetails(googleID: $googleId) {
      googleID
      nimi
      wiki
      kavi
      img
      ensiIlta
      genres{
        genre
      }
      reviews {
        criticID,
        stars,
        link,
        publisher,
        name
      }
      director {
        nimi
        kaviID
      },
      distributor {
        nimi
        kaviID
      },
      actors {
        nimi
        kaviID
      },
      writer {
        nimi
        kaviID
      },
    }
  }
`;