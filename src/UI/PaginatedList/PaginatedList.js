import React, {useEffect} from "react";
import classes from './PaginatedList.module.css';
import {connect} from "react-redux";
import {fetchBrowseResult, fetchSearchResult} from "../../store/actions/actions";

// Component to represent the list of pages numbers
const PaginatedList = (props) => {
    // useEffect hook to make sure that the code inside it will be executed
    // when the component is mounted or updated
    useEffect(() => {
        let input = document.querySelector('li > input');
        if (input)
            input.value = currentPage;
    });
    // numOfPages will hold the total number of pages from the search result
    let numOfPages = props.numOfPages;
    // list of elements to draw
    let listToDraw = [];
    // prev represent list item that will be added as a previous button
    let prev = <li key="Prev" onClick={() => {
        if (!props.searchTerm.includes("&"))
            props.fetchNextMovies(props.searchTerm, props.currentPage - 1)
        else
            props.fetchNextBrowseMovies(props.searchTerm, props.currentPage - 1)
    }
    }>Prev</li>;
    // next represent list item that will be added as a next button
    let next = <li key="Next" onClick={() => {
        if (!props.searchTerm.includes("&"))
            props.fetchNextMovies(props.searchTerm, props.currentPage + 1)
        else
            props.fetchNextBrowseMovies(props.searchTerm, props.currentPage + 1)
    }
    }>Next</li>;
    // currentPage will hold the value of the current page
    let currentPage = props.currentPage;
    // if we are not in the first page add the prev button to the list
    if (props.currentPage > 1)
        listToDraw.push(prev);
    // if we have a pages to show
    if (numOfPages > 0) {
        // add input field to show the current page number and let the user
        // controls where to go
        listToDraw.push(<li key={currentPage}><input type="number" onKeyPress={event => {
            // if the user pressed on 'Enter' button the search will start
            if (event.key === 'Enter')
                if (event.target.value !== '') {
                    // convert the type of the value in the input into number
                    let page = parseInt(event.target.value);
                    // if the input value in the range [1, max_value_of_search_result_pages]
                    if (page > 0 && page <= numOfPages)
                        if (props.searchTerm.includes("&"))
                            props.fetchNextBrowseMovies(props.searchTerm, page);
                        else
                            props.fetchNextMovies(props.searchTerm, page);
                    // if the input value < 1
                    if (page < 1) {
                        // if we are on the first page just replace the input value with 1
                        if (currentPage === 1)
                            event.target.value = 1;
                            // else if we are on any page that is not the first page
                        // go to the first page
                        else if (props.searchTerm.includes("&"))
                            props.fetchNextBrowseMovies(props.searchTerm, 1);
                        else
                            props.fetchNextMovies(props.searchTerm, 1);
                    }
                    // if the input value > max_value_of_search_result_pages
                    if (page > numOfPages) {
                        // if we are on the last page just replace current value with last page value
                        if (currentPage === numOfPages)
                            event.target.value = numOfPages;
                        // else go to the last page
                        else if (props.searchTerm.includes("&"))
                            props.fetchNextBrowseMovies(props.searchTerm, numOfPages);
                        else
                            props.fetchNextMovies(props.searchTerm, numOfPages);
                    }
                }
        }}/></li>);
    }
    // if we are on page < last_page add next button to the list
    if (currentPage < numOfPages)
        listToDraw.push(next)

    return (
        <ul className={classes.PaginatedList} style={props.isBrowse ? {top: '35vh'} : null}>
            {listToDraw}
        </ul>
    );
};

// function to get the state from the store and push it to the props
const mapStateToProps = state => {
    return {
        currentPage: state.searchPage,
        numOfPages: state.totalSearchPages,
        searchTerm: state.searchTerm,
        isBrowse: state.isBrowse
    }
}

// function to get the actions that we can execute on the store
// and push it to the props
const mapDispatchToProps = dispatch => {
    return {
        fetchNextMovies: (term, page) => dispatch(fetchSearchResult(term, page)),
        fetchNextBrowseMovies: (term, page) => dispatch(fetchBrowseResult(term, page))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PaginatedList);