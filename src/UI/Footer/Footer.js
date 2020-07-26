import React from "react";
import classes from './Footer.module.css';

// Footer component represents the footer of our page
const Footer = () => (
    <div className={classes.Footer}>
        <div>Made with <span style={{color: 'red',fontSize: '1.2rem'}}>&#10084;</span> by {'<Rashad Ataf />'}</div>
    </div>
);

export default Footer;