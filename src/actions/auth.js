export const SET_AUTH = 'SET_AUTH';
export const UNSET_AUTH = 'UNSET_AUTH';


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
