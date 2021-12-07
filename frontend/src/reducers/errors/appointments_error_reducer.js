import {
    RECEIVE_APPOINTMENT,
    RECEIVE_APPOINTMENT_ERROR
} from "../../actions/appointment_actions";

export default function appointmentErrorsReducer(prevState = [], action){
    Object.freeze(prevState);
    switch (action.type) {
        case RECEIVE_APPOINTMENT_ERROR:
            return action.errors;
        case RECEIVE_APPOINTMENT:
            return [];
        default:
            return prevState;
    }
};