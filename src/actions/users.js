export const GET_USERS = 'GET_USERS';
export const ADD_USER_ANSWER = 'ADD_USER_ANSWER';
export const ADD_QUESTION_TO_USER = 'ADD_QUESTION_TO_USER';

export function getUsers(users) {
    return {
        type: GET_USERS,
        users
    };
}

export function addQuestionToUser(authUser, questionId) {
    return {
        type: ADD_QUESTION_TO_USER,
        authUser,
        questionId
    };
}

export function addUserAnswer(authUser, questionId, answer) {
    return {
        type: ADD_USER_ANSWER,
        authUser,
        questionId,
        answer
    };
}
