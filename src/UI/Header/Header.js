import React from "react";
import classes from './Header.module.css';
import NavigationBar from "../../Components/Navigation/NavigationBar";
import {Route} from "react-router";

// the Header component represents the
// header of our page
// it will contain the nav bar, jumbotron, some text, ...
const Header = (props) => {
    return (
        <header className={classes.Header}>
            <NavigationBar onSearchHandler={props.onSearchHandler} />
            {/* draw the hero section only if the url is / which is the root */}
            <Route path="/" exact render={() => {
                return <p className={classes.HeaderHero}>current movie</p>
            }} />
        </header>
    );
}

export default Header;