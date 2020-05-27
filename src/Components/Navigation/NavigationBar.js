import React from "react";
import classes from './NavigationBar.module.css';
import Logo from "../../UI/Logo/Logo";
import SearchBar from "../../UI/SearchBar/SearchBar";

// the NavigationBar component will represent
// the nav bar which will allow us
// navigate throw the web site easily
const NavigationBar = (props) => (
    <nav className={classes.NavigationBar}>
        <Logo />
        <SearchBar onSearchHandler={props.onSearchHandler} />
        <div>menu -> home -> contact us</div>
    </nav>
);

export default NavigationBar;