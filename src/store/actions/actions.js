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
    return dispatch =>  {
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

// save the fetched result of search to state
const saveFetchedSearchResult = (movies, searchTerm) => {
    return {
        type: actionTypes.FETCH_SEARCH_RESULT,
        payload: {
            searchResult: movies,
            searchTerm: searchTerm
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
        if (searchTerm){
            url = `${api.BASE_API_URL}/search/movie${api.API_KEY}&language=en-US&query=${searchTerm}&page=${searchPage}`;
            // fetch the results from the url we have
            fetch(url)
                .then(response => response.json())
                .then(response => {
                    // update the state of searchedMovies with the results we get
                    dispatch(saveFetchedSearchResult(response.results,searchTerm));
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