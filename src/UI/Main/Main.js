import React from "react";
import classes from './Main.module.css';
import Movies from "../../Containers/Movies/Movies";
import {Route} from 'react-router-dom';
import MovieDetails from "../../Components/MovieDetails/MovieDetails";

// the Main component represents where
// the movies are going to displayed
const Main = () => (
    <main className={classes.Main}>
        {/* render the Movies component when we are in the root url */}
        <Route path="/" exact render={() => <Movies />} />
        {/* render the MovieDetails component when we are in the /movie/{id} url */}
        <Route path="/movie/:id" exact render={() => <MovieDetails /> } />
    </main>
);

export default Main;