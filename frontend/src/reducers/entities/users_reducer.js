// import appointments from "../../../../validation/appointments";
import {
    RECEIVE_USER
} from "../../actions/user_actions";

export default function UserReducer(prevState={}, action){
    Object.freeze(prevState);
    let newState = Object.assign({}, prevState)
    switch(action.type){
        case RECEIVE_USER:
            newState = {...newState, ...action.user}
            return newState;
        default:
            return prevState
    }
}

