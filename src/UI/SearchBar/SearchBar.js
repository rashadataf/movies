import React from "react";
import classes from './SearchBar.module.css';
import DropList from "../DropList/DropList";

// SearchBar component represents the search bar when we can search for a specific
// movie with specific attributes like: genre, year, rating, ...
const SearchBar = (props) => (
    <div className={classes.SearchBar}>
        <input type="text" onChange={(event) => props.onSearchHandler(event.target.value)} />
        <button>search</button>
    </div>
);

export default SearchBar;