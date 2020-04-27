import React from 'react';
import {Redirect, Route, Switch, withRouter} from "react-router";
import LoginPage from "../pages/LoginPage";
import NewQuestionPage from "../pages/NewQuestionPage";
import LeaderBoardPage from "../pages/LeaderBoardPage";
import QuestionsPage from "../pages/QuestionsPage";
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";
import PropTypes from "prop-types";
import { connect } from 'react-redux';

class RouterManager extends React.Component {


    matchPath(path) {
        return path === '/add' ||
            path === '/leaderboard' ||
            path === '/home' ||
            path.startsWith('/questions') ||
            path.startsWith('/login');
    }

    render() {
        return (
            <div>
                <Switch>
                    <React.Fragment>
                        <Route path="/add" render={(props) => this.props.auth === true ? <NewQuestionPage {...props}/> : <Redirect to={{pathname: '/login', search: 'url=/add'}}/> } />
                        <Route path="/leaderboard" render={(props) => this.props.auth === true ? <LeaderBoardPage {...props}/> : <Redirect to={{pathname: '/login', search: 'url=/leaderboard'}}/> } />
                        <Route exact path="/questions/:id" render={(props) => this.props.auth === true ? <QuestionsPage {...props}/>
                        : <Redirect to={{pathname: '/login', search: `url=/questions/${props.match.params.id}`}}/> } />
                        <Route path="/home" render={(props) => this.props.auth === true ? <HomePage {...props}/> : <Redirect to={{pathname: '/login', search: 'url=/home'}}/> } />
                        <Route path="/login" component={LoginPage}/>
                        {this.matchPath(this.props.location.pathname) ? '' : <Route component={ErrorPage} />}
                        {this.props.location.pathname  === '/' ?
                            <Route path="/" render={(props) => this.props.auth === true ? <HomePage {...props}/> : <Redirect to={{pathname: '/login', search: 'url=/home'}}/> } />
                            : ''}
                    </React.Fragment>
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

export default connect(mapStateToProps, null)(withRouter(RouterManager))
