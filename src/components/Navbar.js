import React from 'react';
import {withRouter} from "react-router-dom";
import "../css/Navbar.css"

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showDropdown: false,
            showAccount: false
        };
    }

    goToQuestion() {
        this.props.history.push('/question');
    }

    goToHome() {
        this.props.history.push('/');
    }

    goToLeaderBoard() {
        this.props.history.push('/leaderboard');
    }

    logout() {
        console.log("logout");
    }

    showDropdown() {
        if (this.state.showDropdown) {
            this.setState({showAccount: false})
        } else {
            this.setState({showAccount: true})
        }
    }

    showAccount() {
        if (this.state.showAccount) {
            this.setState({showDropdown: false})
        } else {
            this.setState({showDropdown: true})
        }
    }

    render() {
        return (
            <div className="navbar">
                <div className="navbar-routes">
                    <h2 className="navbar-route-home" onClick={() => this.goToHome() }>Would You Rather</h2>
                    <h2 className="navbar-routes-item" onClick={() => this.goToQuestion() }>New Question</h2>
                    <h2 className="navbar-routes-item" onClick={() => this.goToLeaderBoard() }>Leader Board</h2>
                </div>
                {
                    this.state.showAccount &&
                    <div className="navbar-profile">
                        <button className="dropbtn" onClick={() => this.showDropdown()}/>
                        {
                            this.state.showDropdown ?
                                <div className="dropdown-content">
                                    <div className="user-profile">Hello User 1</div>
                                    <a href="/login" onClick={() => this.logout() }>Logout</a>
                                </div> : ''
                        }
                    </div>
                }
            </div>
        );
    }
}

export default withRouter(Navbar);
