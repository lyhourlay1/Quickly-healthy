import {
    RECEIVE_RECORD,
    RECEIVE_RECORD_ERROR
} from "../../actions/record_actions";

export default function recordsErrorsReducer(prevState = [], action){
    Object.freeze(prevState);
    switch (action.type) {
        case RECEIVE_RECORD_ERROR:
            return [...prevState, action.error];
        case RECEIVE_RECORD:
            return []; 
        default:
            return prevState;
    }
};