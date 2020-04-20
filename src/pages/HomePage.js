import React from 'react';
import "../css/HomePage.css"
import {connect} from "react-redux";
import PropTypes from "prop-types";
import List from "../components/List";

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showAnswered: false};
    }

    changeTabs(showAnswered) {
        if (this.state.showAnswered !== showAnswered) {
            this.setState({showAnswered: showAnswered})
        }
    }

    getUnansweredQuestion(questions, answeredQuestions) {
        return Object.values(questions).filter((question) => {
            for (let i = 0; i < answeredQuestions.length; i++) {
                if (answeredQuestions[i].id === question.id)
                    return false;
            }
            return true;
        }).sort((firstQuestion, secondQuestion) => {
                return secondQuestion.timestamp - firstQuestion.timestamp
            });
    }

    getAnsweredQuestion(questions, currentUser) {
        const answeredQuid = Object.keys(currentUser.answers);
        return Object.values(questions).filter((question) => {
            for (let i = 0; i < answeredQuid.length; i++) {
                if (answeredQuid[i] === question.id)
                    return true;
            }
            return false;
        }).sort((firstQuestion, secondQuestion) => {
            return secondQuestion.timestamp - firstQuestion.timestamp
        });
    }

    render() {
        const { questions, currentUser } = this.props;
        const questionsAnswered = this.getAnsweredQuestion(questions, currentUser);
        const questionsUnanswered = this.getUnansweredQuestion(questions, questionsAnswered);
        return (
            <div className="home-page">
                <div className="card">
                    <div className="tab-home">
                        <button className={!this.state.showAnswered ? 'active' : ''}
                                onClick={() => this.changeTabs(false)}>Unanswered Questions</button>
                        <button className={this.state.showAnswered ? 'active' : ''}
                                onClick={() => this.changeTabs(true)}>Answered Questions</button>
                    </div>
                    <div>
                        <List page={'home'} section={'viewPoll'}
                              questions={this.state.showAnswered ? questionsAnswered : questionsUnanswered }/>
                    </div>
                </div>
            </div>
        );
    }
}

HomePage.propsTypes = {
    users: PropTypes.Object,
    questions: PropTypes.Object,
    currentUser: PropTypes.Object
};


function mapStateToProps (state) {
    return {
        currentUser: state.users[state.authUser],
        users: state.users,
        questions: state.questions
    }
}

export default connect(mapStateToProps, null)(HomePage)
