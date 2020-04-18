import React from 'react';
import "../css/QuestionCard.css";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import ViewPollSection from "./ViewPollSection";
import ResultSection from "./ResultSection";
import SubmitAnswerSection from "./SubmitAnswerSection";

class QuestionCard extends React.Component {

    render() {
        const { question, users, section } = this.props;
        const author = users[question.author];
        return (
            <div className="question-card">
                <div className="card">
                    <div className="card-title">
                        {section === 'result' ? <strong>Asked by {author.name}</strong> :  <strong>{author.name} asks:</strong> }
                    </div>
                    <div className="card-content">
                        <div className="img-container">
                            <img height="150px" width="150px" src={author.avatarURL} alt={author.name}/>
                        </div>
                        <div className="poll-container">
                            {section === 'viewPoll' ? <ViewPollSection question={question}/> : '' }
                            {section === 'submit' ? <SubmitAnswerSection question={question}/> : '' }
                            {section === 'result' ? <ResultSection question={question}/> : '' }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

QuestionCard.propsTypes = {
    question: PropTypes.Object,
    users: PropTypes.Object
};

function mapStateToProps (state) {
    return {
        users: state.users,
    }
}

export default connect(mapStateToProps, null)(QuestionCard)
