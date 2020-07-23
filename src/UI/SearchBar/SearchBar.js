import React from "react";
import classes from './SearchBar.module.css';
import {connect} from 'react-redux';
import {fetchSearchResult, deleteSearchResult} from "../../store/actions/actions";
import {withRouter} from "react-router";

// SearchBar component represents the search bar when we can search for a specific
// movie with specific attributes like: genre, year, rating, ...
const SearchBar = (props) =>(
        <div className={classes.SearchBar} style={props.style}>
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
                        if (event.target.value !== '') {
                            props.history.push("/movies");
                            props.fetchSearchResult(event.target.value);
                        }
                }}
                placeholder="type something to start search"
            />
        </div>
);

// function to get the state from the store and push it to the props
const mapStateToProps = state => {
    return {
        searchTerm: state.searchTerm,
        isBackDrop: state.isBackDrop
    }
}

// function to get the actions that we can execute on the store
// and push it to the props
const mapDispatchToProps = dispatch => {
    return {
        fetchSearchResult: (searchTerm) => dispatch(fetchSearchResult(searchTerm)),
        deleteSearchResult: () => dispatch(deleteSearchResult())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(SearchBar));