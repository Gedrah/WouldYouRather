import React from 'react';
import {Redirect, Route, Switch} from "react-router";
import LoginPage from "../pages/LoginPage";
import NewQuestionPage from "../pages/NewQuestionPage";
import LeaderBoardPage from "../pages/LeaderBoardPage";
import QuestionsPage from "../pages/QuestionsPage";
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";
import PropTypes from "prop-types";
import { connect } from 'react-redux';

class RouterManager extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    {
                        this.props.auth === true ?
                            <React.Fragment>
                                <Route path="/add" component={NewQuestionPage}/>
                                <Route path="/leaderboard" component={LeaderBoardPage}/>
                                <Route path="/error" component={ErrorPage}/>
                                <Route exact path="/questions/:id" component={QuestionsPage}/>
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
