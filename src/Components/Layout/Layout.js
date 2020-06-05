import React, {Component} from "react";
import Header from "../../UI/Header/Header";
import Main from "../../UI/Main/Main";
import Footer from "../../UI/Footer/Footer";
import Aux from "../../hoc/Aux";
import {withRouter} from 'react-router-dom';

// global variable to handle a reference to a setTimeout()
// so that we can clear it if we want
let timeDelay = null;

// the Layout component is the responsible
// for the way of our web page structured
class Layout extends Component {
    // function to handle the search term and change the url depending on it
    checkSearchTerm = (searchTerm, page = 1) => {
        this.props.history.push(`/search/${searchTerm}/${page}`);
    }

    // function to handle the user input
    onSearchHandler = (searchTerm) => {
        //if there is a text to search for
        if (searchTerm !== '' && searchTerm.toString().slice(0, 1) !== ' ') {
            // set time delay to execute the code inside the arrow function after a while
            if (timeDelay === null) {
                timeDelay = setTimeout(() => this.checkSearchTerm(searchTerm), 800)
            } else {
                clearTimeout(timeDelay);
                timeDelay = setTimeout(() => this.checkSearchTerm(searchTerm), 800)
            }
        }
        // if there is no text clear every thing and return to root (/)
        else {
            // clear the setTimeout
            clearTimeout(timeDelay);
            // make the timeDelay variable null
            timeDelay = null;
            // change the url to /
            this.props.history.push("/");
        }
    }

    render() {
        return (
            <Aux>
                {/* draw the Header component */}
                <Header onSearchHandler={this.onSearchHandler} />
                {/* draw the Main component */}
                <Main />
                {/* draw the Footer component */}
                <Footer/>
            </Aux>
        );
    }
}

export default withRouter(Layout);