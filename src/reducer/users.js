import { GET_USERS, ADD_ANSWER_TO_USER, ADD_QUESTION_TO_USER } from '../actions/users';

export default function users(state = {}, action) {
    if (action.type === GET_USERS) {
        return {...state, ...action.users};
    } else if (action.type === ADD_ANSWER_TO_USER) {
        return {
            ...state,
            [action.authUser]: {
                ...state[action.authUser],
                answers: {
                    ...state[action.authUser].answers,
                    [action.qid]: action.answer
                }
            }
        };
    } else if (action.type === ADD_QUESTION_TO_USER) {
        return {
            ...state,
            [action.author]: {
                ...state[action.author],
                questions: state[action.author].questions.concat(action.id)
            }
        };
    } else {
        return state;
    }
}
