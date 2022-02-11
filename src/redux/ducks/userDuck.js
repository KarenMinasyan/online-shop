import {createAction} from "../../helpers/redux";

const SET_USER = 'userDuck/SET_USER'

export const setUser = createAction(SET_USER)


const initialState = {
    uid: '',
    email: '',
    accessToken: ''
}

const UserDuck = (state = initialState, {type, payload}) => {
    switch (type) {
        case SET_USER:
            return {
                ...state,
                email: payload.email,
                accessToken: payload.accessToken,
                uid: payload.uid
            }
        default:
            return state
    }
}

export default UserDuck;
