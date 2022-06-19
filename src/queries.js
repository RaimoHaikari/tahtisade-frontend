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