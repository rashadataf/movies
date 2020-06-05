import React from "react";
import classes from './Main.module.css';
import Movies from "../../Containers/Movies/Movies";
import {Route} from "react-router";

// the Main component represents where
// the movies are going to displayed
const Main = (props) => (
    <main className={classes.Main}>
        {/* draw the Movies component if the url is (/) */}
        <Route path="/" component={Movies} />
        {/* draw the Movies component with the results from the search process if the url is (/search-results) */}
        <Route path="/search/:searchTerm/:page" exact component={Movies} />
    </main>
);

export default Main;