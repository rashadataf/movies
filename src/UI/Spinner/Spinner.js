import React from "react";
import classes from './Spinner.module.css';

// Spinner component represents the waiting sign or loading sign so that
// it indicate to waiting state
// the user should wait till the operation is done
const Spinner = () => (
    <div className={classes.Loader}>Loading...</div>
);

export default Spinner;