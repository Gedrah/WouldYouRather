import React from 'react';
import {Redirect, Route, Switch} from "react-router";
import LoginPage from "../pages/LoginPage";
import QuestionPage from "../pages/QuestionPage";
import LeaderBoardPage from "../pages/LeaderBoardPage";
import PollPage from "../pages/PollPage";
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";
import PropTypes from "prop-types";
import { connect } from 'react-redux';

class RouterManager extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <Switch>
                    {
                        this.props.auth === true ?
                            <React.Fragment>
                                <Route path="/question" component={QuestionPage}/>
                                <Route path="/leaderboard" component={LeaderBoardPage}/>
                                <Route path="/poll" component={PollPage}/>
                                <Route path="/error" component={ErrorPage}/>
                                <Route path="/home" component={HomePage}/>
                                <Redirect to={{pathname: '/home'}}/>
                            </React.Fragment>
                            :   <React.Fragment>
                                <Route path="/login" component={LoginPage}/>
                                <Redirect to={{pathname: '/login'}}/>
                            </React.Fragment>
                    }
                </Switch>
            </div>
        );
    }
}

RouterManager.propsTypes = {
    auth: PropTypes.bool
};

function mapStateToProps (state) {
    return {
        auth: state.authUser !== null
    }
}

export default connect(mapStateToProps, null)(RouterManager)
