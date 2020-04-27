import React from 'react';
import QuestionCard from "./QuestionCard";
import LeaderCard from "./LeaderCard";

export default class List extends React.Component {
    render() {
        const { users, questions, section, page } = this.props;
        return (
            <div>
                {
                    page === 'home' &&
                    Object.keys(questions).map((id) => {
                        return <QuestionCard key={id} section={section} question={questions[id]}/>
                    })
                }
                {
                    page === 'leaderboard' &&
                    Object.keys(users).map((id, index) => {
                        return <LeaderCard key={id} user={users[id]} index={index + 1}/>
                    })
                }
            </div>
        );
    }
}
