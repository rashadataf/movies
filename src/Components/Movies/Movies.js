import React, {Component} from "react";
import Movie from "../Movie/Movie";
import classes from './Movies.module.css';

// Movies container represents where the movies are going
// to displayed and the state of the movie
class Movies extends Component {
    // a function to draw movies from the props
    // and pass them a details like title, year, rate, ...
    drawMovies = () => {
        // temp array to hold movies
        let movies = [];
        // loop through the array of movies in our props
        // if the array is not null
        if (this.props.movies)
            this.props.movies.map(movie => {
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

    render() {
        return (
            <div className={classes.Movies}>
                {this.drawMovies()}
            </div>
        );
    }
}

export default Movies;