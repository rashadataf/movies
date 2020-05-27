import React from "react";
import classes from './Header.module.css';
import NavigationBar from "../../Components/Navigation/NavigationBar";
import {Route} from "react-router";
import Movies from "../../Components/Movies/Movies";

// the Header component represents the
// header of our page
// it will contain the nav bar, jumbotron, some text, ...
const Header = (props) => {
    return (
        <header className={classes.Header}>
            <NavigationBar onSearchHandler={props.onSearchHandler} movies={props.movies} />
            {/* draw the hero section only if the url is / which is the root */}
            <Route path="/" exact render={() => {
                return <p className={classes.HeaderHero}>current movie</p>
            }} />
            {/* draw the Movies component with the results from the search process if the url is (/search-results) */}
            <Route path="/search-results" exact component={() => <Movies movies={props.movies} genres={props.genres} /> } />
        </header>
    );
}

export default Header;