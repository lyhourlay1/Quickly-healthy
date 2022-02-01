
import {
    RECEIVE_ALERT,
    REMOVE_ALERT
} from "../../actions/alert_actions";

export default function AlertReducer(prevState={}, action){
    Object.freeze(prevState);
    let newState = Object.assign({}, prevState)
    switch(action.type){
        case RECEIVE_ALERT:
            return newState = action.alert;
        case REMOVE_ALERT:
            return {};
        default:
            return newState
    }
}

