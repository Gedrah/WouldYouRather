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

function App() {
  return (
    <div className="App">
        <Router>
            <Navbar/>
            <Switch>
                <Route path="/login">
                    <LoginPage/>
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

export default App;
