import React from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import '../css/SubmitAnswerSection.css'
import {_saveQuestionAnswer} from "../_DATA";
import {addQuestionAnswer} from "../actions/questions";
import {addUserAnswer} from "../actions/users";

class SubmitAnswerSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            answer: 'optionOne',
        };
    }

    submitAnswer() {
        const {saveAnswer, question} = this.props;
        saveAnswer(question.id, this.state.answer);
    }

    selectAnswer(answer) {
        this.setState({answer: answer});
    }

    render() {
        const { question } = this.props;
        return (
            <div>
                <h2>Would you rather</h2>
                <label className="radio-container">
                    <input type="radio" defaultChecked={this.state.answer} onChange={() => this.selectAnswer('optionOne')} name="radio"/>
                    {question.optionOne.text}
                </label>
                <label className="radio-container">
                    <input type="radio" onChange={() => this.selectAnswer('optionTwo')} name="radio"/>
                    {question.optionTwo.text}
                </label>
                <button onClick={() => this.submitAnswer()} className="submit-button">Submit</button>
            </div>
        );
    }
}

SubmitAnswerSection.propsTypes = {
    users: PropTypes.Object,
    auth: PropTypes.Object
};

function addNewAnswer(questionId, answer) {
    return (dispatch, getState) => {
        const { authUser } = getState();
        return _saveQuestionAnswer({
            authedUser: authUser,
            qid: questionId,
            answer
        }).then(() => {
            dispatch(addQuestionAnswer(authUser, questionId, answer));
            dispatch(addUserAnswer(authUser, questionId, answer))
        })

    }
}

function mapStateToProps (state) {
    return {
        users: state.users,
        auth: state.authUser
    }
}

function mapDispatchToProps(dispatch) {
    return {
        saveAnswer: (questionId, answer) => { dispatch(addNewAnswer(questionId, answer)) },
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SubmitAnswerSection)
