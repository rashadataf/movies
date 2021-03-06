// this file contains the action creators for our different operations
// we want to execute on the store
import actionTypes from "./actionTypes";
import * as api from "../../config";

// save fetched movies to store
const saveFetchedMoviesAndGenres = (movies, genres) => {
    return {
        type: actionTypes.FETCH_HOME_MOVIES,
        payload: {
            movies: movies,
            genres: genres,
            heroMovie: {
                movie: movies[0],
                movieIndex: 0
            }
        }
    }
}

// async function to fetch the movies and genres from the server
export const fetchHomeMovies = () => {
    return dispatch => {
        // movies_url holds the url string
        // it depend's on API
        let movies_url = `${api.BASE_API_URL}/movie/popular${api.API_KEY}&page=1`;
        // genres_list_url holds url to get available
        // genres
        let genres_list_url = `${api.BASE_API_URL}/genre/movie/list${api.API_KEY}&language=en-US`;
        // fetch the list of the most popular movies
        // and then update the state
        fetch(movies_url)
            .then(response1 => response1.json())
            .then(response1 => {
                // fetch the list of genres and update the state
                fetch(genres_list_url)
                    .then(response => response.json())
                    .then(response => {
                        // update the state
                        dispatch(saveFetchedMoviesAndGenres(response1.results, response.genres));
                    })
            })
    }
}

// change the state to wait for the result to come
const changToWait = () => {
    return {
        type: actionTypes.CHANGE_TO_WAIT
    }
}

// clear the waiting status
const clearWait = () => {
    return {
        type: actionTypes.CLEAR_WAIT
    }
}

// save the fetched result of search to state
const saveFetchedSearchResult = (movies, searchTerm, total_pages, searchPage) => {
    // write the search term to the input field
    document.querySelector('input').value = searchTerm
    return {
        type: actionTypes.FETCH_SEARCH_RESULT,
        payload: {
            searchResult: movies,
            searchTerm: searchTerm,
            totalSearchPages: total_pages,
            searchPage: searchPage
        }
    }
}

// async function to fetch the result of the search from the server
export const fetchSearchResult = (searchTerm, searchPage = 1) => {
    return dispatch => {
        // make the loading is true
        dispatch(changToWait());
        // init url with null
        let url = null;
        // if we have some thing to search for
        if (searchTerm) {
            url = `${api.BASE_API_URL}/search/movie${api.API_KEY}&language=en-US&query=${searchTerm}&page=${searchPage}`;
            // fetch the results from the url we have
            fetch(url)
                .then(response => response.json())
                .then(response => {
                    // if we have results to show
                    // update the state of searchedMovies with the results we get
                    if (response.results !== undefined)
                        if (response.results.length > 0)
                            dispatch(saveFetchedSearchResult(response.results, searchTerm, response.total_pages, searchPage));
                            // if we have nothing as a search result
                            // clear the waiting status
                        // clear any previous search results
                        else {
                            dispatch(clearWait())
                            dispatch(deleteSearchResult())
                        }
                    else {
                        dispatch(clearWait())
                        dispatch(deleteSearchResult())
                    }

                })
        }
    }
}

// delete the result of search form the store
export const deleteSearchResult = () => {
    return {
        type: actionTypes.DELETE_SEARCH_RESULT
    }
}

// get the next movie from the home movies to be the current
// movie for the hero section
export const getNextHeroMovie = () => {
    return {
        type: actionTypes.GET_NEXT_HERO_MOVIE
    }
}

// select the wanted movie to display it's details
export const selectMovie = (movie) => {
    return {
        type: actionTypes.SELECT_MOVIE,
        payload: {
            currentMovie: movie
        }
    }
}

// toggle the back_drop on/off
export const toggleBackDrop = () => {
    return {
        type: actionTypes.TOGGLE_BACK_DROP
    }
}

// function to show/hide the browse element
export const toggleBrowseMovies = () => {
    return {
        type: actionTypes.TOGGLE_BROWSE_MOVIES
    }
}

// save the fetched result of browse search to state
const saveFetchedBrowseResult = (movies, searchTerm, total_pages, searchPage) => {
    return {
        type: actionTypes.FETCH_BROWSE_RESULT,
        payload: {
            searchResult: movies,
            searchTerm: searchTerm,
            totalSearchPages: total_pages,
            searchPage: searchPage
        }
    }
}

// async function to fetch the result of the browse search from the server
export const fetchBrowseResult = (searchTerm, searchPage = 1) => {
    return dispatch => {
        // make the loading is true
        dispatch(changToWait());
        // init url with null
        let url = null;
        // if we have some thing to search for
        if (searchTerm) {
            url = `${api.BASE_API_URL}/discover/movie${api.API_KEY}&language=en-US${searchTerm}&page=${searchPage}`;
            // fetch the results from the url we have
            fetch(url)
                .then(response => response.json())
                .then(response => {
                    // if we have results to show
                    // update the state of searchedMovies with the results we get
                    if (response && response.results.length > 0)
                        dispatch(saveFetchedBrowseResult(response.results, searchTerm, response.total_pages, searchPage));
                        // if we have nothing as a search result
                        // clear the waiting status
                    // clear any previous search results
                    else {
                        dispatch(clearWait())
                        dispatch(deleteSearchResult())
                    }
                })
        }
    }
}