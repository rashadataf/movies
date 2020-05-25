import React, {Component} from "react";
import Movie from "../../Components/Movie/Movie";
import classes from './Movies.module.css';

// Movies container represents where the movies are going
// to displayed and the state of the movie
class Movies extends Component {
    // the state for the Movies container
    state = {
        movies: [
            {
                id: 0,
                title: 'Catch Me If You Can',
                genre: ['Comedy','Action','Drama'],
                year: 2016,
                rating: 6.7,
                image: 'catch_me_if_you_can.jpeg'
            },
            {
                id: 2,
                title: 'The Mask',
                genre: ['Comedy','Romance','Drama'],
                year: 2002,
                rating: 7.5,
                image: 'the_mask.jpg'
            }
        ]
    }

    // a function to draw movies from the state
    drawMovies = () => {
        let movies = [];
        this.state.movies.forEach(movie => {
            movies.push(<Movie details={movie} />)
        })
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