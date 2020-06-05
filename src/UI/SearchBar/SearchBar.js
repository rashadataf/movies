import React from "react";
import classes from './SearchBar.module.css';
import {withRouter} from "react-router";

// SearchBar component represents the search bar when we can search for a specific
// movie with specific attributes like: genre, year, rating, ...
const SearchBar = (props) =>(
        <div className={classes.SearchBar}>
            <input
                type="text"
                onChange={(event) => {
                    // keep the event after it's finished to use it after a while
                    event.persist();
                    props.onSearchHandler(event.target.value)
                }}
                placeholder="type something to start search"
            />
        </div>
);
export default withRouter(SearchBar);