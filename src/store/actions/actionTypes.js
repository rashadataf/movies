// this file contains all type of actions we are going to use for our Redux store

// to fetch movies on home screen from server
const FETCH_HOME_MOVIES = 'FETCH_HOME_MOVIES';
// to delete fetched home movies from the store
const DELETE_HOME_MOVIES = 'DELETE_HOME_MOVIES';
// to fetch movies based on search term
const FETCH_SEARCH_RESULT = 'FETCH_SEARCH_RESULT';
// to delete the movies from the search from the store
const DELETE_SEARCH_RESULT = 'DELETE_SEARCH_RESULT';
// get the next film in the list of movies we have to display it as hero image
const GET_NEXT_HERO_MOVIE = 'GET_NEXT_HERO_MOVIE';
// make the state indicate to wait for the result
const CHANGE_TO_WAIT = 'CHANGE_TO_WAIT';
// select a specific movie to display it's information
const SELECT_MOVIE = 'SELECT_MOVIE';
// toggle the back drop
const TOGGLE_BACK_DROP = 'TOGGLE_BACK_DROP';

// make all the types in one object and export it
const actionTypes = {
    FETCH_HOME_MOVIES,
    DELETE_HOME_MOVIES,
    FETCH_SEARCH_RESULT,
    DELETE_SEARCH_RESULT,
    GET_NEXT_HERO_MOVIE,
    CHANGE_TO_WAIT,
    SELECT_MOVIE,
    TOGGLE_BACK_DROP
}

export default actionTypes;