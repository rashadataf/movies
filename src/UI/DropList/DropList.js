import React from "react";
import classes from './DropList.module.css';
import {IMAGE_BASE_URL, IMAGE_POSTER_SIZE} from "../../config";

// DropList component responsible for the drop list when searching for movies
const DropList = (props) => {
    // moviesList a variable to hold the result of search
    let moviesList = props.movies.slice(0,5);
    // the array of movies to display
    let moviesToDraw = [];
    // travelling through the array of movies to handle the way of displaying
    moviesList.map(movie => {
        moviesToDraw.push(
            <li key={movie.id} className={classes.DropListItem}>
                <img src={`${IMAGE_BASE_URL}${IMAGE_POSTER_SIZE}/${movie.poster_path}`} alt="movie poster" className={classes.DropListItemImage} />
                <div style={{width: "100%"}}>
                    <p className={classes.DropListItemTitle}>{movie.title}</p>
                    <p className={classes.DropListItemYear}>{movie.release_date.slice(0,4)}</p>
                </div>
            </li>
        );
    })
    return (
    <div className={classes.DropListContainer}>
        <ul className={classes.DropList}>
            {moviesToDraw}
        </ul>
    </div>
);
}

export default DropList;