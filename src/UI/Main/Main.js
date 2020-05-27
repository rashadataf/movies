import React from "react";
import classes from './Main.module.css';
import Movies from "../../Components/Movies/Movies";

// the Main component represents where
// the movies are going to displayed
const Main = (props) => (
    <main className={classes.Main}>
        <Movies movies={props.movies} genres={props.genres} />
    </main>
);

export default Main;