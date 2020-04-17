import { SET_AUTH, UNSET_AUTH } from '../actions/auth';

export default function authUser(state=null, action) {
    switch (action.type) {
        case SET_AUTH:
            return action.id;
        case UNSET_AUTH:
            return null;
        default :
            return state;
    }
}
