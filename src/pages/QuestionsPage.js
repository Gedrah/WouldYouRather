import React from 'react';
import QuestionCard from "../components/QuestionCard";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Redirect} from "react-router";

class QuestionsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    isQuestionAnswered(qid, currentUser) {
        const answersId = Object.keys(currentUser.answers);
        for (let i = 0; i < answersId.length; i++) {
            if (qid === answersId[i]) {
                return true
            }
        }
        return false;
    }

    isQuestionExist(questions, questionId) {
        let questionExist = false;
        Object.keys(questions).map((id) => {
            if (id === questionId) {
                questionExist = true;
            }
        });
        return questionExist;
    }

    render() {
        const { questions, currentUser } = this.props;
        const id = this.props.match.params.id;
        const question = questions[id];
        const isQuestionAnswered = this.isQuestionAnswered(id, currentUser);
        const isQuestionIdExist = this.isQuestionExist(questions, id);

        return (
            <div>
                {
                    isQuestionIdExist ?
                        <QuestionCard section={isQuestionAnswered ? 'result' : 'submit'} question={question}/>
                        : <Redirect to={{pathname: '/error'}}/>
                }
            </div>
        );
    }
}

QuestionsPage.propsTypes = {
    questions: PropTypes.Object,
    currentUser: PropTypes.String
};


function mapStateToProps (state) {
    return {
        currentUser: state.users[state.authUser],
        questions: state.questions
    }
}

export default connect(mapStateToProps, null)(QuestionsPage)
