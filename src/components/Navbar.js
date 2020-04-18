import React from 'react';
import {withRouter} from "react-router-dom";
import "../css/Navbar.css"
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {unsetAuth} from "../actions/auth";

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showDropdown: false,
        };
        console.log(props);
    }

    goToNewQuestion() {
        this.props.history.push('/add');
    }

    goToHome() {
        if (this.props.auth) {
            this.props.history.push('/home');
        }
    }

    goToLeaderBoard() {
        this.props.history.push('/leaderboard');
    }

    logout() {
        this.props.logout();
    }

    showDropdown() {
        if (this.state.showDropdown) {
            this.setState({showDropdown: false})
        } else {
            this.setState({showDropdown: true})
        }
    }

    isCurrentRoute(route) {
        return this.props.location.pathname === route;
    }

    render() {
        const { currentUser, auth } = this.props;
        return (
            <div className="navbar">
                    <div className="navbar-routes">
                        <h2 className="navbar-route-home" onClick={() => this.goToHome()}>Would You Rather</h2>
                        {auth ? <h2 className="navbar-routes-item"
                                    style={{fontWeight: this.isCurrentRoute('/add') ? 'bold' : ''}}
                                    onClick={() => this.goToNewQuestion()}>New Question</h2> : ''}
                        {auth ? <h2 className="navbar-routes-item"
                                    style={{fontWeight: this.isCurrentRoute('/leaderboard') ? 'bold' : ''}}
                                    onClick={() => this.goToLeaderBoard()}>Leader Board</h2> : ''}
                    </div>
                {
                    auth &&
                    <div className="navbar-profile" style={{backgroundImage: `url(${currentUser.avatarURL})`}}>
                        <button className="dropbtn" onClick={() => this.showDropdown()}/>
                        {
                            this.state.showDropdown ?
                                <div className="dropdown-content">
                                    <div className="user-profile">Hello {currentUser.name}</div>
                                    <a href="/login" onClick={() => this.logout() }>Logout</a>
                                </div> : ''
                        }
                    </div>
                }
            </div>
        );
    }
}

Navbar.propsTypes = {
    currentUser: PropTypes.Object,
    auth: PropTypes.Object,
};

function mapStateToProps (state) {
    return {
        currentUser: state.users[state.authUser],
        auth: state.authUser !== null,
    }
}
function mapDispatchToProps(dispatch) {
    return {
        logout: () => { dispatch(unsetAuth()) },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Navbar));
