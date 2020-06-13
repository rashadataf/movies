import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from "redux-thunk";
import moviesReducer from "./store/reducers/moviesReducer";

// create the store of our project with middleware to allow us execute
// Asynchronous functions within it
const store = createStore(moviesReducer,applyMiddleware(thunk));

ReactDOM.render(
        <Provider store={store}>
                <App />
        </Provider>
    ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
