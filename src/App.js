import React from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import Navbar from "./components/Navbar";

import './App.css';
import { getInitialData } from "./api";
import { getUsers } from "./actions/users";
import RouterManager from "./components/RouterManager";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {getQuestions} from "./actions/questions";

class App extends React.Component {

    componentDidMount() {
        this.props.handleInitialData();
    }

    render() {
        return (
            <div className="App">
                <Router>
                    <Navbar/>
                    <RouterManager auth={this.props.auth}/>
                </Router>
            </div>
        );
    }
}

App.propsTypes = {
    handleInitialData : PropTypes.func.isRequired,
};

export function getRatherDatas() {
    return (dispatch) => {
        return getInitialData().then((datas) => {
            dispatch(getUsers(datas.users));
            dispatch(getQuestions(datas.questions));
        });
    }
}

function mapDispatchToProps(dispatch) {
    return {
        handleInitialData: () => { dispatch(getRatherDatas())}
    }
}

export default connect(null, mapDispatchToProps)(App)
