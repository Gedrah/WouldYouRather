import React from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {addQuestion} from "../actions/questions";
import {withRouter} from "react-router-dom";
import {addQuestionToUser} from "../actions/users";
import {_saveQuestion} from "../_DATA";

class NewQuestionPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            optionOne: '',
            optionTwo: ''
        };
    }

    createQuestion() {
        const {optionOne, optionTwo} = this.state;
        if (optionTwo !== '' && optionOne !== '') {
            this.props.addQuestion(optionOne, optionTwo);
            this.props.history.push('/home');
        }
    }

    updateOptionOne(evt) {
        this.setState({optionOne: evt.target.value})
    }

    updateOptionTwo(evt) {
        this.setState({optionTwo: evt.target.value})
    }

    render() {
        return (
            <div className="login-page">
                <div className="card">
                    <div className="container">
                        <h1>Create a new question</h1>
                        <div>
                            <label>Would you rather...</label>
                            <input value={this.state.optionOne} onChange={evt => this.updateOptionOne(evt)}
                                   className="username" placeholder="Option 1"/>
                        </div>
                        <h1>or</h1>
                        <div>
                            <label>Would you rather...</label>
                            <input value={this.state.optionTwo} onChange={evt => this.updateOptionTwo(evt)}
                                   className="username" placeholder="Option 2"/>
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

function addNewQuestion(optionOne, optionTwo) {
    return (dispatch, getState) => {
        const { authUser } = getState();
        return _saveQuestion({
            optionOneText: optionOne,
            optionTwoText: optionTwo,
            author: authUser
        }).then((question) => {
                dispatch(addQuestion(question));
                dispatch(addQuestionToUser(authUser, question.id))
            })

    }
}

function mapStateToProps (state) {
    return {
        currentUser: state.users[state.authUser],
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addQuestion: (optionOne, optionTwo) => { dispatch(addNewQuestion(optionOne, optionTwo)) },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NewQuestionPage))
