import {
    RECEIVE_RECORD,
    RECEIVE_RECORD_ERROR
} from "../../actions/record_actions";

export default (prevState = [], action) => {
    Object.freeze(prevState);
    switch (action.type) {
        case RECEIVE_RECORD_ERROR:
            return action.errors;
        case RECEIVE_RECORD:
            return []; 
        default:
            return prevState;
    }
};