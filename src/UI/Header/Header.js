import React from "react";
import classes from './Header.module.css';
import NavigationBar from "../../Components/Navigation/NavigationBar";
import {Route} from "react-router";
import List from "../List/List";

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
            {/* draw the list of search pages only if the url /search/{something} */}
            <Route path="/search/:search/:num" exact render={() => <List numOfPages={5} />} />
        </header>
    );
}

export default Header;