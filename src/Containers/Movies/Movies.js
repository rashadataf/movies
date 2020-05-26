import React, {Component} from "react";
import Movie from "../../Components/Movie/Movie";
import classes from './Movies.module.css';
import * as api from '../../config';

// Movies container represents where the movies are going
// to displayed and the state of the movie
class Movies extends Component {
    // the state for the Movies container
    state = {
        movies: [],
        genres: []
    }

    // fetch data from API when the component
    // has ben mounted
    componentDidMount() {
        // movies_url holds the url string
        // it depend's on API
        let movies_url = `${api.BASE_API_URL}/movie/popular${api.API_KEY}&page=1`;
        // genres_list_url holds url to get available
        // genres
        let genres_list_url = `${api.BASE_API_URL}/genre/movie/list${api.API_KEY}&language=en-US`;
        // fetch the list of the most popular movies
        // and then update the state
        fetch(movies_url)
            .then(response => response.json())
            .then(response => this.setState({movies: response.results}))
        // fetch the list of genres and update the state
        fetch(genres_list_url)
            .then(response => response.json())
            .then(response => this.setState({genres: response.genres}))
    }

    // a function to draw movies from the state
    // and pass them a details like title, year, rate, ...
    drawMovies = () => {
        // temp array to hold movies
        let movies = [];
        // loop through the array of movies in our state
        this.state.movies.map(movie => {
            // temp array to hold the genres for each movie
            let movie_genres = [];
            // loop through the genres id's for each movie
            // and get the equivalent genre as a text
            for(let i = 0; i < movie.genre_ids.length; i++)
                for (let j = 0; j<this.state.genres.length; j++)
                    if (movie.genre_ids[i] === this.state.genres[j].id)
                        movie_genres.push(this.state.genres[j].name)
            // push the movies we want to draw to the array
            movies.push(<Movie key={movie.id} details={movie} genres={movie_genres} />)
        })
        // return the array of movies
        return movies;
    }

    render() {
        return (
            <div className={classes.Movies}>
                {this.drawMovies()}
            </div>
        );
    }
}

export default Movies;