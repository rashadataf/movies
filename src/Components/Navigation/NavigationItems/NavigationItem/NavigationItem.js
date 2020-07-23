import React from "react";
import {Link} from "react-router-dom";
import {deleteSearchResult, toggleBackDrop} from "../../../../store/actions/actions";
import {connect} from "react-redux";

// a component to represent single item of the navigation items
const NavigationItem = (props) => (
    <Link to={props.to} onClick={() => {
        // if we are clicking on Home
        if (props.to === "/movies") {
            // if the back-drop is on make it off
            if (props.isBackDrop) {
                props.toggleBackDrop()
            }
            // delete the search result and back to main screen
            props.deleteSearchResult();
            // delete the search term from the input
            document.querySelector('input').value = '';
        }
    }}>{props.name}</Link>
);

// function to get the state from the store and push it to the props
const mapStateToProps = state => {
    return {
        isBackDrop: state.isBackDrop
    }
}

// function to get the actions that we can execute on the store
// and push it to the props
const mapDispatchToProps = dispatch => {
    return {
        deleteSearchResult: () => dispatch(deleteSearchResult()),
        toggleBackDrop: () => dispatch(toggleBackDrop())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(NavigationItem);