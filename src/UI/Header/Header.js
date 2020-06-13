import React from "react";
import classes from './Header.module.css';
import NavigationBar from "../../Components/Navigation/NavigationBar";

// the Header component represents the
// header of our page
// it will contain the nav bar, jumbotron, some text, ...
const Header = () => {
    return (
        <header className={classes.Header}>
            <NavigationBar />
            {/* draw the hero section only if the url is / which is the root */}
            <p className={classes.HeaderHero}>current movie</p>
        </header>
    );
}

export default Header;