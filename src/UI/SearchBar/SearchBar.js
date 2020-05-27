import React from "react";
import classes from './SearchBar.module.css';

// SearchBar component represents the search bar when we can search for a specific
// movie with specific attributes like: genre, year, rating, ...
const SearchBar = (props) => (
    <div className={classes.SearchBar}>
        <input type="text" onChange={(event) => {
            // keep the event after it's finished to use it after a while
            event.persist();
            // set time delay to execute the code inside the arrow function after a 200 ms
            setTimeout(() => {
                props.onSearchHandler(event.target.value)
            }, 200)
        } } />
    </div>
);

export default SearchBar;