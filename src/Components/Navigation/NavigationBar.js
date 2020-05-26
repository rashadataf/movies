import React from "react";
import classes from './NavigationBar.module.css';

// the NavigationBar component will represent
// the nav bar which will allow us
// navigate throw the web site easily
const NavigationBar = () => (
    <nav className={classes.NavigationBar}>
        <div>logo</div>
        <div>searchbar</div>
        <div>menu -> home -> contact us</div>
    </nav>
);

export default NavigationBar;