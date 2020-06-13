import actionTypes from "../actions/actionTypes";

// the initial state of the store
const initialState = {
    movies: [],
    genres: [],
    searchResult: [],
    searchTerm: '',
    searchPage: 1
}

// the reducer function which will handle the different types of actions
const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_HOME_MOVIES:
            return {
                ...state,
                movies: action.payload.movies,
                genres: action.payload.genres
            }
        case actionTypes.FETCH_SEARCH_RESULT:
            return {
                ...state,
                searchResult: action.payload.searchResult,
                searchTerm: action.payload.searchTerm
            }
        case actionTypes.DELETE_SEARCH_RESULT:
        {
            const empty = [];
            return {
                ...state,
                searchResult: empty,
                searchTerm: ''
            }
        }
        default:
            return state;
    }
}

export default moviesReducer;