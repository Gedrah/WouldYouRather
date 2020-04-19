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

    getUnansweredQuestion() {

    }

    getAnsweredQuestion() {

    }

    render() {
        const questionsUnanswered = this.props.questions;
        const questionsAnswered = this.props.questions;
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
    questions: PropTypes.Object
};


function mapStateToProps (state) {
    return {
        users: state.users,
        questions: state.questions
    }
}

export default connect(mapStateToProps, null)(HomePage)
