import {
    RECEIVE_RECORD,
    RECEIVE_RECORDS,
    RECEIVE_RECORD_ERROR
} from "../../actions/record_actions";

export default function recordsErrorsReducer(prevState = [], action){
    Object.freeze(prevState);
    switch (action.type) {
        case RECEIVE_RECORD_ERROR:
            return [action.error];
        case RECEIVE_RECORD:
            return [];
        case RECEIVE_RECORDS:
            return [];
        default:
            return prevState;
    }
};