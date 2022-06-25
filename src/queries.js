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

export const MOVIE_DETAILS = `
  query movieDetails($googleId: Int!) {
    movieDetails(googleID: $googleId) {
      nimi
      director {
        nimi
      },
      distributor {
        nimi
      },
      actors {
        nimi
      }
    }
  }
`;