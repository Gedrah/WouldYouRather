import React from 'react';
import "../css/LoginPage.css"

export default class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    signIn() {
        console.log("sign in")
    }

    createAccount() {
        console.log("create account")
    }

    render() {
        return (
            <div className="login-page">
                <div className="card">
                    <div className="container">
                        <h1>Sign in to your account</h1>
                        <div>
                            <label>Username</label>
                            <input className="username" placeholder="Username"/>
                        </div>
                        <button onClick={() => this.signIn()} className="sign-in-button">Sign in</button>
                        <span onClick={() => this.createAccount()} className="create-account">Create an account</span>
                    </div>
                </div>
            </div>
        );
    }
}
