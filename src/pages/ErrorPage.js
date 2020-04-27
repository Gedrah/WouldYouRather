import React from 'react';

export default class ErrorPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    goToHome() {
        this.props.history.push('/home');
    }

    render() {
        return (
            <div>
                <div className="login-page">
                    <div className="card">
                        <div className="container">
                            <h1>Error 404</h1>
                            <h2>Page not found</h2>
                            <button onClick={() => this.goToHome()} className="sign-in-button">Go to home page</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
