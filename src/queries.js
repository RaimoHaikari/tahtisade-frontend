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