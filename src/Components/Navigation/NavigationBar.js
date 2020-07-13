import React from "react";
import classes from './NavigationBar.module.css';
import Logo from "../../UI/Logo/Logo";
import SearchBar from "../../UI/SearchBar/SearchBar";
import NavigationItems from "./NavigationItems/NavigationItems";

// the NavigationBar component will represent
// the nav bar which will allow us
// navigate throw the web site easily
const NavigationBar = (props) => (
    <nav className={classes.NavigationBar}>
        <Logo />
        <SearchBar />
        <NavigationItems />
    </nav>
);

export default NavigationBar;