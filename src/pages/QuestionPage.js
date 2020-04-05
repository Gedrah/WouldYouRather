import React from 'react';

export default class QuestionPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="login-page">
                <div className="card">
                    <div className="container">
                        <h1>Create a new question</h1>
                        <div>
                            <label>Would you rather...</label>
                            <input className="username" placeholder="Option 1"/>
                        </div>
                        <h1>or</h1>
                        <div>
                            <label>Would you rather...</label>
                            <input className="username" placeholder="Option 2"/>
                        </div>
                        <button onClick={() => {}} className="sign-in-button">Submit</button>
                    </div>
                </div>
            </div>
        );
    }
}
