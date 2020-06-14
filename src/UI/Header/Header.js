import React from "react";
import classes from './Header.module.css';
import NavigationBar from "../../Components/Navigation/NavigationBar";
import Hero from "../Hero/Hero";
import {connect} from 'react-redux';

// the Header component represents the
// header of our page
// it will contain the nav bar, jumbotron, some text, ...
const Header = (props) => {
    let hero = null;
    if (!props.isSearch)
        hero = <Hero />
    return (
        <header className={classes.Header}>
            <NavigationBar />
            {hero}
        </header>
    );
}

const mapStateToProps = state => {
    return {
        isSearch: state.isSearch
    }
}

export default connect(mapStateToProps)(Header);