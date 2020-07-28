import React from "react";
import classes from './BrowseMovies.module.css';
import {
    fetchBrowseResult,
    fetchHomeMovies,
    selectMovie,
    toggleBackDrop,
    toggleBrowseMovies
} from "../../store/actions/actions";
import {connect} from "react-redux";

// BrowseMovies component to represent a control panel to sort movies depending on their genres, rates, ...
const BrowseMovies = (props) => {
    // genres variable will hold the values of different genres to be
    // displayed as options for the select element
    let geners = [];
    // push the first element to be All which means without genres
    geners.push(<option value="" key="all">All</option>)
    // loop through the genres we have and push them with the values to the genres array
    props.genres.forEach(genre => geners.push(<option value={genre.id} key={genre.id}>{genre.name}</option>))
    // years variable will hold the values of years to be
    // displayed as options for the select element
    let years = [];
    // push the first element to be All which means without year
    years.push(<option value="" key="all">All</option>)
    // loop from 2020 to 1885 and push the values into the years array
    for (let i = 2020;i>= 1885;i--)
        years.push(<option value={i} key={i}>{i}</option>)
    // rates variable will hold the values of rates to be
    // displayed as options for the select element
    let rate = [];
    // push the first element to be All which means without rate
    rate.push(<option value="" key="all">All</option>)
    // loop from 9 to 1 and push the values into the rates array
    for (let i = 9; i>0; i--)
        rate.push(<option value={i} key={i}>+{i}</option>)
    return (
        <div className={classes.BrowseMovies} style={props.style}>
            <div className={classes.BrowseMoviesGroups} style={props.style?{width: '100%'}:null}>
                <div className={classes.BrowseMoviesGroup}>
                    <label htmlFor="Genres">Genres</label>
                    <select name="Genres" id="Genres">
                        {geners}
                    </select>
                </div>
                <div className={classes.BrowseMoviesGroup}>
                    <label htmlFor="Years">Years</label>
                    <select name="Years" id="Years">
                        {years}
                    </select>
                </div>
                <div className={classes.BrowseMoviesGroup}>
                    <label htmlFor="Rate">Rate</label>
                    <select name="Rate" id="Rate">
                        {rate}
                    </select>
                </div>
                <div className={classes.BrowseMoviesGroup}>
                    <label htmlFor="Sort_By">Order By</label>
                    <select name="Sort_By" id="Sort_By">
                        <option value="popularity.desc">Most Popular</option>
                        <option value="popularity.asc">Less Popular</option>
                        <option value="release_date.desc">Latest</option>
                        <option value="release_date.asc">Oldest</option>
                        <option value="revenue.desc">Highest Revenue</option>
                        <option value="revenue.asc">Lowest Revenue</option>
                        <option value="vote_average.desc">Highest Rating</option>
                        <option value="vote_average.asc">Lowest Rating</option>
                    </select>
                </div>
            </div>
            <button onClick={() => {
                // genre the variable which hold the value of the select element of Genres
                let genre = document.querySelector('#Genres').value;
                // genre the variable which hold the value of the select element of Years
                let year = document.querySelector('#Years').value;
                // genre the variable which hold the value of the select element of Rates
                let rate = document.querySelector('#Rate').value;
                // genre the variable which hold the value of the select element of Sort By
                let sortBy = document.querySelector('#Sort_By').value;
                // term variable represents the search query that will be sent to the API
                let term = '';
                // if we have a genre selected
                if (genre !== '')
                    term += '&with_genres=' + genre;
                // if we have year selected
                if (year !== '')
                    term += '&year=' + year;
                // if we have rate selected
                if (rate !== '')
                    term += '&vote_average.gte=' + rate;
                // add the sort by value
                term += '&sort_by=' + sortBy;
                // call the function responsible for fetching movies for a specific query
                props.fetchBrowseMovies(term,1);
            }}>Search</button>
        </div>
    );
}

// function to get the state from the store and push it to the props
const mapStateToProps = state => {
    return {
        genres: state.genres,
        searchResult: state.searchResult,
        isSearch: state.isSearch,
        isLoading: state.isLoading,
        isBackDrop: state.isBackDrop,
        isBrowse: state.isBrowse
    }
}

// function to get the actions that we can execute on the store
// and push it to the props
const mapDispatchToProps = dispatch => {
    return {
        fetchHomeMovies: () => dispatch(fetchHomeMovies()),
        selectMovie: (movie) => dispatch(selectMovie(movie)),
        toggleBackDrop: () => dispatch(toggleBackDrop()),
        toggleBrowseMovies: () => dispatch(toggleBrowseMovies()),
        fetchBrowseMovies: (term,page) => dispatch(fetchBrowseResult(term,page))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(BrowseMovies);