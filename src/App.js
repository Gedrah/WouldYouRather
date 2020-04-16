import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Navbar from "./components/Navbar";

import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import QuestionPage from "./pages/QuestionPage";
import LeaderBoardPage from "./pages/LeaderBoardPage";
import PollPage from "./pages/PollPage";

import './App.css';
import { getInitialData } from "./api";
import { getUsers } from "./actions/users";

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <Navbar/>
                    <Switch>
                        <Route path="/login">
                            <LoginPage users=""/>
                        </Route>
                        <Route path="/question">
                            <QuestionPage/>
                        </Route>
                        <Route path="/leaderboard">
                            <LeaderBoardPage/>
                        </Route>
                        <Route path="/poll">
                            <PollPage/>
                        </Route>
                        <Route path="/">
                            <HomePage/>
                        </Route>
                    </Switch>
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
