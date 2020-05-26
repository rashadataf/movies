import React from "react";
import logoImg from '../../assets/logo.png';
import classes from './Logo.module.css';

// the Logo component will represent the logo
// of our web app
const Logo = () => (
    <div className={classes.Logo}>
        <img src={logoImg} alt="logo" />
    </div>
);

export default Logo;