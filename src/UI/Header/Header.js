import React from "react";
import classes from './Header.module.css';
import NavigationBar from "../../Components/Navigation/NavigationBar";

// the Header component represents the
// header of our page
// it will contain the nav bar, jumbotron, some text, ...
const Header = (props) => (
    <header className={classes.Header}>
        <NavigationBar onSearchHandler={props.onSearchHandler} movies={props.movies} />
        <p>current movie</p>
    </header>
);

export default Header;