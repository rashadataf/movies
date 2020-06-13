// this file contains all type of actions we are going to use for our Redux store

// to fetch movies on home screen from server
const FETCH_HOME_MOVIES = 'FETCH_HOME_MOVIES';
// to delete fetched home movies from the store
const DELETE_HOME_MOVIES = 'DELETE_HOME_MOVIES';
// to fetch movies based on search term
const FETCH_SEARCH_RESULT = 'FETCH_SEARCH_RESULT';
// to delete the movies from the search from the store
const DELETE_SEARCH_RESULT = 'DELETE_SEARCH_RESULT';

// make all the types in one object and export it
const actionTypes = {
    FETCH_HOME_MOVIES,
    DELETE_HOME_MOVIES,
    FETCH_SEARCH_RESULT,
    DELETE_SEARCH_RESULT
}

export default actionTypes;