import React from "react";
import classes from './BackDrop.module.css';

// DropList component responsible for the drop list when searching for movies
const BackDrop = (props) => {
    return (
    <div className={classes.Drop} onClick={(event)=>{
        event.preventDefault();
        // here we make sure that we will execute the function only for the father not for the childs
        if(event.target === event.currentTarget) {
            props.click();
        }
    }}>
        {props.children}

    </div>
);
}

export default BackDrop;