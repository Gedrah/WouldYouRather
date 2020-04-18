import React from 'react';
import {withRouter} from "react-router";

class ViewPollSection extends React.Component {
    goToPoll() {
        const url = `/questions/${this.props.question.id}`;
        this.props.history.push(url);
    }

    render() {
        const { question } = this.props;
        return (
            <div>
                <h3>Would you rather</h3>
                <p>...{question.optionOne.text}...</p>
                <button onClick={() => this.goToPoll()} className="view-poll-button">View Poll</button>
            </div>
        );
    }
}

export default withRouter(ViewPollSection)
