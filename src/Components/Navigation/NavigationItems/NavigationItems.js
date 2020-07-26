import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import classes from './NavigationItems.module.css';
import BackDrop from "../../../UI/BackDrop/BackDrop";
import SearchBar from "../../../UI/SearchBar/SearchBar";
import {toggleBackDrop} from "../../../store/actions/actions";
import {connect} from "react-redux";

// component to represent navigation items
const NavigationItems = (props) => {
    let styleOfItemsList = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        height: '100px'
    };
    // backDropContent is a variable to hold the elements will going to render inside
    // the back drop
    let backDropContent = (
        <BackDrop click={props.toggleBackDrop}>
            <div className={classes.NavigationItemsList} style={styleOfItemsList} >
                <NavigationItem to={"/movies"} name={"Home"} />
                <NavigationItem to={"/movies/about"} name={"About"} />
            </div>
            <SearchBar style={{display: 'block'}} />
        </BackDrop>
    );
    // content element is a variable to hold the elements will be draw
    // if there is no back drop
    let content = (
            <div className={classes.NavigationItemsList} style={props.style}>
                <NavigationItem to={"/movies"} name={"Home"} />
                <NavigationItem to={"/movies/about"} name={"About"} />
            </div>
    );
    return (
        <div className={classes.NavigationItems}>
            <div className={props.showBackDrop?classes.NavigationItemsMenuClose:classes.NavigationItemsMenu} onClick={()=>props.toggleBackDrop()}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            {/* here we are checking if there is a back drop or not */}
            {props.showBackDrop?backDropContent:content}
        </div>
        )

}

// function to get the state from the store and push it to the props
const mapStateToProps = state => {
    return {
        showBackDrop: state.isBackDrop,

    }
}

// function to get the actions that we can execute on the store
// and push it to the props
const mapDispatchToProps = dispatch => {
    return {
        toggleBackDrop: () => dispatch(toggleBackDrop())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(NavigationItems);