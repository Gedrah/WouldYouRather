import React from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import Navbar from "./components/Navbar";

import './App.css';
import { getInitialData } from "./api";
import { getUsers } from "./actions/users";
import RouterManager from "./components/RouterManager";

class App extends React.Component {

    componentDidMount() {
        console.log(this.props);
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



export function handleInitialData() {
    return (dispatch) => {
        return getInitialData().then((action) => {
            dispatch(getUsers(action.users))
        });
    }
}

export default App
