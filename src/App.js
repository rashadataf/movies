import React from 'react';
import Layout from "./Containers/Layout/Layout";
import { Route } from 'react-router-dom';

// The App component is the Wrapper for our project
const App = () => (
    // draw the Layout component
      <Route path="/" component={Layout} />
  )

export default App;
