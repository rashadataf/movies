import React from "react";
import classes from './Movie.module.css';
import {IMAGE_POSTER_SIZE, IMAGE_BASE_URL} from '../../config';

// Movie component represents the movie with
// it's own information and details
const Movie = (props) => (
        <div className={classes.MovieContainer}>
            <div className={classes.Movie}>
                <div className={classes.MovieInfo}>
                    <p className={classes.MovieInfoAverage}><img src={require('../../assets/imdb.png')} alt="imdb logo" /><br/>{props.details.vote_average}</p>
                    <p className={classes.MovieInfoGenre}>{props.genres.slice(0,2).join(' / ')}</p>
                    <button className={classes.MovieInfoButton}>Details</button>
                </div>
                <img src={`${IMAGE_BASE_URL}${IMAGE_POSTER_SIZE}/${props.details.poster_path}`} alt="movie poster" className={classes.MovieImage} />
            </div>
            <div className={classes.MovieNameYear}>
                <p className={classes.MovieName} title={props.details.title}>{props.details.title}</p>
                <p className={classes.MovieYear}>{props.details.release_date.toString().slice(0,4)}</p>
            </div>
        </div>
    );

export default Movie;