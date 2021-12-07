import {
    RECEIVE_RECORDS,
    RECEIVE_RECORD,
    REMOVE_RECORD
} from "../../actions/record_actions";

export default function RecordReducer(prevState={}, action){
    Object.freeze(prevState);
    let newState = Object.assign({}, prevState) // this isn't a deep copy
    switch(action.type){
        case RECEIVE_RECORDS:
            let records = Object.fromEntries(action.records.map(record => {
                return [record.id, record]
            }))
            return {...newState, ...records};
        case RECEIVE_RECORD:
            newState[action.record.id] = action.record;
            return newState;
        case REMOVE_RECORD:
            delete newState[action.id]
            return newState;
        default:
            return newState
    }
}