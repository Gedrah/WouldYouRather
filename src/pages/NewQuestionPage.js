import React from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {addQuestion} from "../actions/questions";
import {withRouter} from "react-router-dom";

class NewQuestionPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    createQuestion() {
        this.props.addQuestion(this.props.currentUser.id);

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
                        <button onClick={() => this.createQuestion()} className="sign-in-button">Submit</button>
                    </div>
                </div>
            </div>
        );
    }
}

NewQuestionPage.propsTypes = {
    currentUser: PropTypes.Object,
    addQuestion: PropTypes.Object,
};

function mapStateToProps (state) {
    return {
        currentUser: state.users[state.authUser],
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addQuestion: (currentUserId) => { dispatch(addQuestion(currentUserId)) },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NewQuestionPage))
