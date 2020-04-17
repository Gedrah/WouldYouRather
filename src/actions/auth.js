export const SET_AUTH = 'SET_AUTHED';
export const UNSET_AUTH = 'UNSET_AUTHED';


export function setAuth(id) {
    return {
        type: SET_AUTH,
        id
    }
}

export function unsetAuth() {
    return {
        type: UNSET_AUTH
    }
}
