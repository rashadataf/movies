import React, {Component} from "react";
import Movie from "../../Components/Movie/Movie";
import classes from './Movies.module.css';
import {withRouter} from 'react-router-dom';
import * as api from "../../config";

// Movies container represents where the movies are going
// to displayed and the state of the movie
class Movies extends Component {
    // state to handle the fetched movies, genres, searched movies
    state = {
        movies: null,
        genres: null,
        searchedMovies: null
    }

    // fetch data from API when the component mounted
    componentDidMount() {
        // check if the url equal to "/"
        if (this.props.location.pathname === "/") {
            // check if the state is null do the fetching
            // if not there is no need to do that
            if (!this.state.movies) {
                this.fetchMovies()
            }
        }
        // if the url doesn't equal to "/"
        else {
            // pat is regEX pattern we want to figure out if the url
            // equals to "/search/some_text/some_number
            let pat = /^\/search\/(?=(\w+(\s)*)+\/(\d+)$)/i;
            // the current url of our web page
            let url_ = this.props.location.pathname;
            // if the url from the pattern we want
            // it's search operation
            if (pat.test(url_))
            {
                this.fetchFromSearch()
            }
            // if the url doesnt match the pattern
            else {
                // change the url to "/"
                this.props.history.push("/");
            }
        }
    }

    // if the component has been updated check to see if the url is different
    // re-fetch the movies for the new search term
    componentDidUpdate(prevProps, prevState, snapshot) {
        // if the current url path doesn't equal the previous one
        if (this.props.location.pathname !== prevProps.location.pathname)
            // if url doesn't equal "/"
            if (this.props.location.pathname !== "/") {
                // check the pattern of the url
                let pat = /^\/search\/(?=(\w+(\s)*)+\/(\d+)$)/i;
                // the current url of our web page
                let url_ = this.props.location.pathname;
                // if the url pattern matches "/search/some_text/some_number
                if (pat.test(url_))
                {
                    // search process
                    this.fetchFromSearch()
                }else {
                    // change the url to "/" if it's not search operation
                    this.props.history.push("/");
                }
            }else {
                // if url = "/" and we don't have movies fetch them from the API
                if (!this.state.movies) {
                    this.fetchMovies()
                }
            }
    }

    // function to fetch movies after search operation
    fetchFromSearch = () => {
        // searchTerm variable will hold the term the user want to search for in the database of movies
        let searchTerm = this.props.match.params.searchTerm;
        // get the page we want to render
        let searchPage = this.props.match.params.page
        // init url with null
        let url = null;
        // if we have some thing to search for
        if (searchTerm){
            // if we have page to get
            if (searchPage)
                url = `${api.BASE_API_URL}/search/movie${api.API_KEY}&language=en-US&query=${searchTerm}&page=${searchPage}`;
            else
                url = `${api.BASE_API_URL}/search/movie${api.API_KEY}&language=en-US&query=${searchTerm}&page=1`;
            // fetch the results from the url we have
            fetch(url)
                .then(response => response.json())
                .then(response => {
                    // update the state of searchedMovies with the results we get
                    this.setState({
                        searchedMovies: response.results
                    })
                    console.log(response)
                    // goto the current path and insert some information in the history so that
                    // we can extract this information in the targeted component
                    this.props.history.push(this.props.location.pathname, { pagesNumber: response.total_pages, currentPage: 1 });
                })
        }
    }

    // function to get movies from the api for the first time
    fetchMovies = () => {
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
                        this.setState({
                            movies: response1.results,
                            genres: response.results,
                            searchedMovies: null
                        });
                    })
            })
    }

    // a function to init movies so we take value from state
    // and creating array of movies and passing them a details like title, year, rate, ...
    initMoviesToDraw = (source_movies) => {
        // temp array to hold movies
        let movies = [];
        // loop through the array of movies in our props
        // if the array is not null
        if (source_movies)
            source_movies.map(movie => {
                // temp array to hold the genres for each movie
                let movie_genres = [];
                // loop through the genres id's for each movie
                // and get the equivalent genre as a text
                for (let i = 0; i < movie.genre_ids.length; i++)
                    if (this.state.genres)
                        for (let j = 0; j < this.state.genres.length; j++)
                            if (movie.genre_ids[i] === this.state.genres[j].id)
                                movie_genres.push(this.state.genres[j].name)
                // push the movies we want to draw to the array
                movies.push(<Movie key={movie.id} details={movie} genres={movie_genres}/>)
            })
        // return the array of movies
        return movies;
    }

    // function to decide whereas to draw movies from search process
    // or the movies from the first load
    moviesToDraw = () => {
        // searchMovies variable to hold the content of searchedMovies state
        let searchedMovies = this.state.searchedMovies;
        // movies variable to hold the content of movies state
        let movies = this.state.movies;
        // init variable wiyh null
        let moviesToDraw = null;
        // if we are on the "/" url
        if (this.props.location.pathname === "/") {
            // if we have movies to draw
            if(movies)
                moviesToDraw = this.initMoviesToDraw(movies)
        }
        // if we are not on the "/" url
        else {
            // if we have searchedMovies to draw
            if (searchedMovies)
                moviesToDraw = this.initMoviesToDraw(searchedMovies)
        }
        // return the movies that we want to draw
        return moviesToDraw;
    }

    render() {
        return (
            <div className={classes.Movies}>
                {
                    this.moviesToDraw()
                }
            </div>
        );
    }
}

export default withRouter(Movies);