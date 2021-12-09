import {
    RECEIVE_DOCTOR,
    RECEIVE_DOCTORS,
    RECEIVE_DOCTOR_ERROR
} from "../../actions/doctor_actions";

export default function doctorsErrorsReducer(prevState = [], action) {
    Object.freeze(prevState);
    switch (action.type) {
        case RECEIVE_DOCTOR_ERROR:
            return [action.error];
        case RECEIVE_DOCTOR:
            return [];
        case RECEIVE_DOCTORS:
            return [];
        default:
            return prevState;
    }
};