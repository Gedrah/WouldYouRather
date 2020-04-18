import React from 'react';
import QuestionCard from "./QuestionCard";

export default class List extends React.Component {
    render() {
        const { questions } = this.props;
        console.log(questions);
        return (
            <div>
                {
                    Object.keys(questions).map((question) => {
                        return <QuestionCard key={question} question={questions[question]}/>
                    })
                }
            </div>
        );
    }
}
