import React from "react";
import {Link} from "react-router-dom";

// a component to represent single item of the navigation items
const NavigationItem = (props) => (
    <Link to={props.to}  >{props.name}</Link>
);

export default NavigationItem;