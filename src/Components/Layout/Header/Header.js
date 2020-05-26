import React from "react";
import classes from './Header.module.css';
import NavigationBar from "../../Navigation/NavigationBar";

// the Header component represents the
// header of our page
// it will contain the nav bar, jumbotron, some text, ...
const Header = () => (
    <header className={classes.Header}>
        <NavigationBar />
        <p>current movie</p>
    </header>
);

export default Header;