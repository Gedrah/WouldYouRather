import React from 'react';
import QuestionCard from "../components/QuestionCard";
import PropTypes from "prop-types";
import {connect} from "react-redux";

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

    render() {
        const { questions, currentUser } = this.props;
        const id = this.props.match.params.id;
        const question = questions[id];
        const isQuestionAnswered = this.isQuestionAnswered(id, currentUser);
        return (
            <div>
                <QuestionCard section={isQuestionAnswered ? 'result' : 'submit'} question={question}/>
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
