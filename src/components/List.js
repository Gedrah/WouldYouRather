import React from 'react';
import QuestionCard from "./QuestionCard";

export default class List extends React.Component {
    render() {
        const { questions, section } = this.props;
        return (
            <div>
                {
                    Object.keys(questions).map((id) => {
                        return <QuestionCard key={id} section={section} question={questions[id]}/>
                    })
                }
            </div>
        );
    }
}
