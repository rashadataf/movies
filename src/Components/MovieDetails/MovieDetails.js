import React from "react";
import classes from './MovieDetails.module.css';
import {IMAGE_POSTER_SIZE, IMAGE_BASE_URL} from '../../config';
import {connect} from 'react-redux';
import {withRouter} from "react-router-dom";

// MovieDetails component represents the movie with
// it's own information and details
const MovieDetails = (props) => {
    // an array to hold all the elements that will be drawn dynamically
    let draw = [];
    // an array to hold the genres of each movie
    let genres = [];
    // if there is a movie to display it's details
    if (props.movie){
        // variable to hold the image of the movie
        let img = <img src={`${IMAGE_BASE_URL}${IMAGE_POSTER_SIZE}/${props.movie.poster_path}`} alt="movie poster" className={classes.MovieImage} key={1} />;
        // variable to hold the title of the movie
        let title = <p className={classes.MovieName} title={props.movie.title} key={2}>{props.movie.title}</p>;
        // variable to hold the year of the movie
        let year = <p className={classes.MovieYear} key={3}>{props.movie.release_date}</p>;
        // variable to hold the average of the movie
        let average = <p className={classes.MovieInfoAverage} key={4}><img src={require('../../assets/imdb.png')} alt="imdb logo" /><br/>{props.movie.vote_average}</p>
        // variable to hold the votes of the movie
        // let votes = <p key={5}>{props.movie.vote_count}</p>
        // variable to hold the popularity of the movie
        // let popularity = <p key={6}>{props.movie.popularity}</p>
        // variable to hold the language of the movie
        let language = <p key={5} className={classes.MovieLanguage}>{props.movie.original_language}</p>
        // variable to hold the overview of the movie
        let overview = <p key={6} className={classes.MovieOverview}>{props.movie.overview}</p>

        // create the array of genres
        for (let i = 0;i < props.movie.genre_ids.length; i++){
            props.genres.map(genre => {
                if (props.movie.genre_ids[i] === genre.id)
                    genres.push(genre.name)
            })
        }
        // variable to hold the genres of a movie
        let movie_genres = <p key={9}>{genres.join('/')}</p>
        // push the elements into the array to draw them
        draw.push(
            <div key={1}>{img}</div>,
            <div className={classes.MovieInfo} key={2}>{title}{year}{movie_genres}{average}{language}</div>,
            <div key={3}>{overview}</div>
        )
    }
    // if there is no movie to show it's details return to the main page
    else{
        props.history.push('/');
    }
    return (
        <div className={classes.MovieDetails}>
            {draw}
        </div>
);
}

// function to get the state from the store and push it to the props
const mapStateToProps = state => {
    return {
        movie: state.currentMovie,
        genres: state.genres
    }
}

export default connect(mapStateToProps)(withRouter(MovieDetails));