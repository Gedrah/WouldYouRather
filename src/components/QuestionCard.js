import React from 'react';
import "../css/QuestionCard.css";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

class QuestionCard extends React.Component {
    goToPoll() {
        const url = `/questions/${this.props.question.id}`;
        this.props.history.push(url);
    }

    render() {
        const { question, users } = this.props;
        const author = users[question.author];
        return (
            <div className="question-card">
                <div className="card">
                    <div className="card-title">
                        <strong>{author.name} asks:</strong>
                    </div>
                    <div className="card-content">
                        <div className="img-container">
                            <img height="150px" width="150px" src={author.avatarURL} alt={author.name}/>
                        </div>
                        <div className="poll-container">
                            <h3>Would you rather</h3>
                            <p>...{question.optionOne.text}...</p>
                            <button onClick={() => this.goToPoll()} className="view-poll-button">View Poll</button>
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

export default connect(mapStateToProps, null)(withRouter(QuestionCard))
