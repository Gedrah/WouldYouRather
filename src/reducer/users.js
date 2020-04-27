import { GET_USERS, ADD_USER_ANSWER, ADD_QUESTION_TO_USER } from '../actions/users';

export default function users(state = {}, action) {
    switch (action.type) {
        case GET_USERS:
            return {...state, ...action.users};
        case ADD_QUESTION_TO_USER:
            return {...state, [action.authUser]: {
                    ...state[action.authUser],
                    questions: state[action.authUser].questions.concat(action.questionId)
                }
            };
        case ADD_USER_ANSWER:
            return {...state, [action.authUser]: {
                    ...state[action.authUser],
                    answers: {
                        ...state[action.authUser].answers,
                        [action.questionId]: action.answer
                    }
                }
            };
        default:
            return state;
    }
}
