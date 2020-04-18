import React from 'react';
import '../css/ResultSection.css'
import { StyleSheet, css } from 'aphrodite';

export default class ResultSection extends React.Component {
    render() {
        const { question } = this.props;
        const votesOptionOne = question.optionOne.votes.length;
        const votesOptionTwo = question.optionTwo.votes.length;
        const totalVotes = votesOptionOne + votesOptionTwo;

        const percentageVotesOptionOne = votesOptionOne / totalVotes * 100;
        const percentageVotesOptionTwo = votesOptionTwo / totalVotes * 100;

        const styles = this.createStyleSheet(percentageVotesOptionOne, percentageVotesOptionTwo);
        return (
            <div className="result-section">
                <h1>Results: </h1>
                <div className="answer-card active">
                    <p>{question.optionOne.text}</p>
                    <div className={`progress ${css(styles.percentOne)}`} />
                    <p>{votesOptionOne} out of {totalVotes} votes</p>
                </div>
                <div className="answer-card">
                    <p>{question.optionTwo.text}</p>
                    <div className={`progress ${css(styles.percentTwo)}`} />
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
