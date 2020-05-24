import React from "react";

// Aux is a height-order-component (hoc)
// it's job to wrap other components and elements
// so that the linter won't give us an error while
// writing our code if we returned more than
// one element from a component
const Aux = (props) => (
    props.children
);

export default Aux;