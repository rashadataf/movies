import React, {Component} from "react";
import Movie from "../../Components/Movie/Movie";
import classes from './Movies.module.css';
import {connect} from 'react-redux';
import {fetchHomeMovies} from "../../store/actions/actions";

// Movies container represents where the movies are going
// to displayed and the state of the movie
class Movies extends Component {
    // fetch data from API when the component mounted
    componentDidMount() {
        // check the array of movies if it is empty fetch the movies
        if (this.props.movies.length === 0) {
            this.props.fetchHomeMovies();
        }
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
                    if (this.props.genres)
                        for (let j = 0; j < this.props.genres.length; j++)
                            if (movie.genre_ids[i] === this.props.genres[j].id)
                                movie_genres.push(this.props.genres[j].name)
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
        let searchedMovies = this.props.searchResult;
        // movies variable to hold the content of movies state
        let movies = this.props.movies;
        // init variable with null
        let moviesToDraw = null;
        // if we are on the "/" url
        if (searchedMovies.length > 0)
            moviesToDraw = this.initMoviesToDraw(searchedMovies)
        // if we have movies to draw
        else
            moviesToDraw = this.initMoviesToDraw(movies)
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

// function to get the state from the store and push it to the props
const mapStateToProps = state => {
    return {
        movies: state.movies,
        genres: state.genres,
        searchResult: state.searchResult
    }
}

// function to get the actions that we can execute on the store
// and push it to the props
const mapDispatchToProps = dispatch => {
    return {
        fetchHomeMovies: () => dispatch(fetchHomeMovies())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies);