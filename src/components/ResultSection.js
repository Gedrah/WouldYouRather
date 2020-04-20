import React from 'react';
import '../css/ResultSection.css'
import { StyleSheet, css } from 'aphrodite';
import PropTypes from "prop-types";
import {connect} from "react-redux";

class ResultSection extends React.Component {

    answeredOption(answer, option) {
        if (answer === option)
            return 'active';
        return '';
    }

    render() {
        const { question, currentUser } = this.props;
        const votesOptionOne = question.optionOne.votes.length;
        const votesOptionTwo = question.optionTwo.votes.length;
        const totalVotes = votesOptionOne + votesOptionTwo;
        const isAnsweredOptionOne = this.answeredOption(currentUser.answers[question.id], 'optionOne');
        const isAnsweredOptionTwo = this.answeredOption(currentUser.answers[question.id], 'optionTwo');

        const percentageVotesOptionOne = votesOptionOne / totalVotes * 100;
        const percentageVotesOptionTwo = votesOptionTwo / totalVotes * 100;

        const styles = this.createStyleSheet(percentageVotesOptionOne, percentageVotesOptionTwo);
        return (
            <div className="result-section">
                <h1>Results: </h1>
                <div className={`answer-card ${isAnsweredOptionOne}`}>
                    <p>{isAnsweredOptionOne ? 'Your answer : ' : ''}{question.optionOne.text}</p>
                    <div className={`progress ${css(styles.percentOne)}`} />
                    <p>{votesOptionOne} out of {totalVotes} votes</p>
                </div>
                <div className={`answer-card ${isAnsweredOptionTwo}`}>
                    <p>{isAnsweredOptionTwo ? 'Your answer : ' : ''}{question.optionTwo.text}</p>
                    <div className={`progress ${css(styles.percentTwo)} ${isAnsweredOptionTwo}`} />
                    <p>{votesOptionTwo} out of {totalVotes} votes</p>
                </div>
            </div>
        );
    }

    createStyleSheet(percentageVotesOptionOne, percentageVotesOptionTwo) {
        let percentageOne = percentageVotesOptionOne;
        let percentageTwo = percentageVotesOptionTwo;
        if (percentageVotesOptionOne < 10) {
            percentageOne = 15;
        } else if (percentageVotesOptionTwo < 10) {
            percentageTwo = 15;
        }
        return StyleSheet.create({
            percentOne: {
                ':before': {
                    content: `'${percentageVotesOptionOne}%'`,
                    width: `${percentageOne}%`
                }
            },
            percentTwo: {
                ':before': {
                    content: `'${percentageVotesOptionTwo}%'`,
                    width: `${percentageTwo}%`
                }
            }
        });
    }
}

ResultSection.propsTypes = {
    currentUser: PropTypes.String,
    question: PropTypes.Object
};


function mapStateToProps (state) {
    return {
        currentUser: state.users[state.authUser],
    }
}

export default connect(mapStateToProps, null)(ResultSection)
