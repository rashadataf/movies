import React from "react";
import classes from './SearchBar.module.css';
import {connect} from 'react-redux';
import {fetchSearchResult, deleteSearchResult} from "../../store/actions/actions";

// SearchBar component represents the search bar when we can search for a specific
// movie with specific attributes like: genre, year, rating, ...
const SearchBar = (props) =>(
        <div className={classes.SearchBar}>
            <input
                type="text"
                onChange={(event) => {
                    // keep the event after it's finished to use it after a while
                    event.persist();
                    if (event.target.value === '')
                        props.deleteSearchResult();
                }}
                onKeyPress={event => {
                    // if the user pressed on 'Enter' button the search will start
                    if (event.key === 'Enter')
                        if (event.target.value !== '')
                            props.fetchSearchResult(event.target.value);
                }}
                placeholder="type something to start search"
            />
        </div>
);

const mapDispatchToProps = dispatch => {
    return {
        fetchSearchResult: (searchTerm) => dispatch(fetchSearchResult(searchTerm)),
        deleteSearchResult: () => dispatch(deleteSearchResult())
    }
}

export default connect(null,mapDispatchToProps)(SearchBar);