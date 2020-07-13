import React from 'react';
import classes from './Hero.module.css';
import {connect} from 'react-redux';
import {getNextHeroMovie} from '../../store/actions/actions';
import {IMAGE_BASE_URL, IMAGE_BACKDROP_SIZE} from "../../config";

// a variable to hold a reference to the setTimeout function to clear it later
let timer = null;

// Hero component is responsible for displaying the big hero image for the most
// popular movies we have
const Hero = (props) => {
    let title = null;
    let description = null;
    // create style object to change the background image for the hero by time
    let style = {};
    // if there is a movie to show as a hero
    if (props.currentMovie.movie)
    {
        style = {
            background: `url('${IMAGE_BASE_URL}${IMAGE_BACKDROP_SIZE}/${props.currentMovie.movie.backdrop_path}') no-repeat center center/100% 100%`
        }
        title = props.currentMovie.movie.title;
        description = props.currentMovie.movie.overview;
    }
    // if there is an old timer clear it then make another one
    if (timer){
        clearTimeout(timer);
        timer = setTimeout(() => {
            props.getNextHeroMovie();
        },15000)
    }
    // if there is no timer
    // create a new one
    else
        timer = setTimeout(() => {
        props.getNextHeroMovie();
    },1000)
        // path = `${IMAGE_BASE_URL}${IMAGE_BACKDROP_SIZE}/${props.currentMovie.movie.backdrop_path}`;
    return (
        <div className={classes.Hero} style={style}>
            <div className={classes.HeroDetails}>
                <p className={classes.HeroTitle}>{title}</p>
                <p className={classes.HeroDescription}>{description}</p>
            </div>
        </div>
    );
}

// function to get the current movie from the store and push it to the props
const mapStateToProps = state => {
    return {
        currentMovie: state.heroMovie
    }
}

// function to get the action we need to get the next movie from the store
const mapDispatchToProps = dispatch => {
    return {
        getNextHeroMovie: () => dispatch(getNextHeroMovie())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Hero);