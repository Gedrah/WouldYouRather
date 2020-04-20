import React from 'react';
import QuestionCard from "../components/QuestionCard";
import PropTypes from "prop-types";
import {connect} from "react-redux";

class QuestionsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { questions } = this.props;
        const id = this.props.match.params.id;
        return (
            <div>
                <QuestionCard section={'result'} question={questions[id]}/>
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
        users: state.users,
        questions: state.questions
    }
}

export default connect(mapStateToProps, null)(QuestionsPage)
