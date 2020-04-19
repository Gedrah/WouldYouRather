import React from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import List from "../components/List";

class LeaderBoardPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    userScore(user) {
        return Object.keys(user.answers).length + user.questions.length;
    }

    render() {
        const { users } = this.props;
        const usersListSorted = Object.values(users)
            .sort((firstUser, secondUser) => this.userScore(secondUser) - this.userScore(firstUser));
        return (
            <div>
                <List page={'leaderboard'} section={'viewPoll'} users={usersListSorted}/>
            </div>
        );
    }
}

LeaderBoardPage.propsTypes = {
    users: PropTypes.Object,
};


function mapStateToProps (state) {
    return {
        users: state.users,
    }
}

export default connect(mapStateToProps, null)(LeaderBoardPage)
