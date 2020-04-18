import React from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import '../css/SubmitAnswerSection.css'

class SubmitAnswerSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            answer: 'optionOne',
        };
    }

    submitAnswer() {
        console.log('answer submitted for ' + this.props.question.id);
        console.log(this.state.answer)
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

function mapStateToProps (state) {
    return {
        users: state.users,
        auth: state.authUser
    }
}

export default connect(mapStateToProps, null)(SubmitAnswerSection)
