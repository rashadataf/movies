import React, {Component} from "react";
import Header from "../../UI/Header/Header";
import Main from "../../UI/Main/Main";
import Footer from "../../UI/Footer/Footer";
import Aux from "../../hoc/Aux";
import * as api from '../../config';

// the Layout component is the responsible
// for the way of our web page structured
class Layout extends Component {
    // state to handle the fetched movies, genres, searched movies
    state = {
        movies: [],
        genres: [],
        searchedMovies: null
    }

    // fetch data from API when the component
    // has ben mounted
    componentDidMount() {
        // movies_url holds the url string
        // it depend's on API
        let movies_url = `${api.BASE_API_URL}/movie/popular${api.API_KEY}&page=1`;
        // genres_list_url holds url to get available
        // genres
        let genres_list_url = `${api.BASE_API_URL}/genre/movie/list${api.API_KEY}&language=en-US`;
        // fetch the list of the most popular movies
        // and then update the state
        fetch(movies_url)
            .then(response => response.json())
            .then(response => this.setState({movies: response.results}))
        // fetch the list of genres and update the state
        fetch(genres_list_url)
            .then(response => response.json())
            .then(response => this.setState({genres: response.genres}))
    }

    // function to handle the user input
    // and get the result of similar movies
    onSearchHandler = (searchTerm) => {
        //if there is a text to search for
        if (searchTerm !== '') {
            let  url = `${api.BASE_API_URL}/search/movie${api.API_KEY}&language=en-US&query=${searchTerm}`;
            fetch(url)
                .then(response => response.json())
                .then(response => this.setState({searchedMovies: response.results}))
        }
        // if there is no text make the result null to hide the list
        else {
            this.setState({searchedMovies: null})
        }

    }

    render() {
        return (
            <Aux>
                {/* draw the Header component */}
                <Header onSearchHandler={this.onSearchHandler} movies={this.state.searchedMovies}/>
                {/* draw the Main component */}
                <Main movies={this.state.movies} genres={this.state.genres} />
                {/* draw the Footer component */}
                <Footer/>
            </Aux>
        );
    }
}

export default Layout;