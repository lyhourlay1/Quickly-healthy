// import appointments from "../../../../validation/appointments";
import {
    RECEIVE_USER
} from "../../actions/user_actions";

import {RECEIVE_USER_LOGOUT} from "../../actions/session_actions";

export default function UserReducer(prevState={}, action){
    Object.freeze(prevState);
    let newState = Object.assign({}, prevState);
    switch(action.type){
        case RECEIVE_USER:
            newState = action.user;
            return newState;
        case RECEIVE_USER_LOGOUT:
            return {}
        default:
            return prevState
    }
}

