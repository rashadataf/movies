import React from "react";
import classes from './Movie.module.css';

// Movie component represents the movie with
// it's own information and details
const Movie = (props) => {
    console.log(props.details)
    return (
        <div className={classes.MovieContainer}>
            <div className={classes.Movie}>
                <div className={classes.MovieInfo}>
                    <p></p>
                    <p>{props.details.genre.slice(0,2).join(' / ')}</p>
                    <p>{props.details.rating}</p>
                    <button className={classes.MovieInfoButton}>Details</button>
                </div>
                <img src={require(`../../assets/${props.details.image}`)} alt="" />
            </div>
            <div className={classes.MovieNameYear}>
                <p className={classes.MovieName}>{props.details.title}</p>
                <p className={classes.MovieYear}>{props.details.year}</p>
            </div>
        </div>
    );
}

export default Movie;