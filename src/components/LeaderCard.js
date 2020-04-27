import React from 'react';
import '../css/LeaderCard.css';

export default class LeaderCard extends React.Component {
    render() {
        const {user, index} = this.props;
        const numberAnswers = Object.keys(user.answers).length;
        const numberQuestions = user.questions.length;
        const score = numberAnswers + numberQuestions;
        return (
            <div>
                <div className="leader-card">
                    <div className="card">
                        <div className="card-content">
                            <div className="img-container-leader">
                                <img height="150px" width="150px" src={user.avatarURL} alt={user.name}/>
                                <div><strong>Rank : {index}</strong></div>
                            </div>
                            <div className="user-container">
                                <h2>{user.name}</h2>
                                <p>Answered Questions : {numberAnswers}</p>
                                <p>Created Questions  : {numberQuestions}</p>
                            </div>
                            <div className="score-container">
                                <div className="card-title-leader">Score</div>
                                <div className="card-title-content">{score}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
