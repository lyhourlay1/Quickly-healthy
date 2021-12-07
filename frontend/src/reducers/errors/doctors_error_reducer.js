import {
    RECEIVE_DOCTOR,
    RECEIVE_DOCTOR_ERROR
} from "../../actions/doctor_actions";

export default function doctorsErrorsReducer(prevState = [], action) {
    Object.freeze(prevState);
    switch (action.type) {
        case RECEIVE_DOCTOR_ERROR:
            return action.errors;
        case RECEIVE_DOCTOR:
            return [];
        default:
            return prevState;
    }
};