import React from "react";
import classes from './Main.module.css';
import Movies from "../../Containers/Movies/Movies";

// the Main component represents where
// the movies are going to displayed
const Main = () => (
    <main className={classes.Main}>
        <Movies />
    </main>
);

export default Main;