import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppComponent from './App';
import * as serviceWorker from './serviceWorker';
import {Provider, connect} from "react-redux";
import {applyMiddleware, combineReducers, createStore} from "redux";
import users from "./reducer/users";
import authUser from "./reducer/auth";
import thunk from 'redux-thunk';

const store = createStore(combineReducers({users, authUser}), applyMiddleware(thunk));
const App = connect()(AppComponent);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
