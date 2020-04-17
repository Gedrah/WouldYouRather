import React from 'react';
import "../css/LoginPage.css"
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import {handleInitialData} from "../App";
import {setAuth} from "../actions/auth";

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {currentUser: null};
    }

    signIn() {
        this.props.login(this.state.currentUser);
        console.log("sign in")
    }

    createAccount() {
        console.log("create account")
    }

    changeCurrentUser(user) {
        if (user === 'Please select') {
            this.setState({currentUser: null});
        } else {
            this.setState({currentUser: user});
        }
    }

    componentWillMount() {
        this.props.handleInitialData();
    }

    render() {
        const { users } = this.props;
        const { currentUser } = this.state;
        return (
            <div className="login-page">
                <div className="card">
                    <div className="container">
                        <h1>Sign in to your account</h1>
                        <div>
                            {
                                currentUser ?
                                    <div style={{display: 'inline-grid'}}>
                                        <label style={{marginBottom: '10px'}}>{users[currentUser].name}</label>
                                        <img height="100px" width="100px" src={users[currentUser].avatarURL} alt={currentUser}/>
                                    </div> : ''
                            }
                            <select onChange={(event) => this.changeCurrentUser(event.target.value)} className="username">
                                <option value={null}>Please select</option>
                                {
                                    Object.keys(users).map((user) => {
                                        return <option value={user} key={user}>{ users[user].name }</option>
                                    })
                                }
                            </select>
                        </div>
                        <button disabled={!currentUser}
                                style={{backgroundColor: currentUser ? '' : '#cccccc', cursor: currentUser ? 'pointer' : 'default'}}
                                onClick={() => this.signIn()} className="sign-in-button">Sign in</button>
                        <span onClick={() => this.createAccount()} className="create-account">Create an account</span>
                    </div>
                </div>
            </div>
        );
    }
}

LoginPage.propsTypes = {
    handleInitialData : PropTypes.func.isRequired,
    users: PropTypes.Object,
    auth: PropTypes.Object
};

function mapStateToProps (state) {
    return {
        users: state.users
    }
}

function mapDispatchToProps(dispatch) {
    return {
        handleInitialData: () => { dispatch(handleInitialData())},
        login: (currentUserId) => { dispatch(setAuth(currentUserId)) },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
