import { gql } from "@apollo/client";

/*
 *
 */
export const LOGIN = gql`
    mutation Login($username: String!, $password: String!) {
        login(username: $username, password: $password) {
            value
        }
    }
`;

export const ADD_MOVIE_COUNTRY = gql`
    mutation AddMovieCountry($googleId: Int!, $country: String!) {
        addMovieCountry(googleID: $googleId, country: $country)
    }
`;