import React from "react";
import classes from './About.module.css';

// component to display information about the project
const About = () => (
    <div className={classes.About}>
        <div className={classes.Section1}>
            <h1>Welcome to my project.</h1>
            <p>The main idea from this project is to display movies with some details about each movie.</p>
            <h3>Basic Features</h3>
            <ul>
                <li>You can search for a specific movie.</li>
                <li>You can see image, title, release date, language, and rate of the movie.</li>
            </ul>

            <h3>Features to be added later</h3>
            <ul>
                <li>You will be able to sort movies due to it's genre, type, year, and rate.</li>
                <li>You will be able to register and subscribe to us to stay up to date with all of the movie's
                    news.
                </li>
            </ul>
            <p>
                To get more details about the developing process please visit my GitHub account :
                <a href={"https://github.com/rashadataf/movies"} target={"_blank"}>rashad-ataf</a>
            </p>
            <p>please enjoy.</p>
        </div>
        <div className={classes.Section2}>
            <h1>Cast</h1>
            <p>The main idea for this project is by me <a href={"mailto:rashadattaf@gmail.com"}>Rashad Ataf</a>.</p>
            <p>The logo was designed and the colors were chosen by : <a href={"mailto:ali.ak.kordi@gmail.com"}>Ali Kordi</a></p>
            <p>API used to fetch movie's details by <a href={"https://www.themoviedb.org/"}
                                                       target={"_blank"}>themoviedb</a></p>
        </div>
    </div>
);

export default About;