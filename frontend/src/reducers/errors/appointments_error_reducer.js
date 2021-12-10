import {
    RECEIVE_APPOINTMENT,
    RECEIVE_APPOINTMENTS,
    RECEIVE_APPOINTMENT_ERROR
} from "../../actions/appointment_actions";

export default function appointmentErrorsReducer(prevState = [], action){
    Object.freeze(prevState);
    switch (action.type) {
        case RECEIVE_APPOINTMENT_ERROR:
            return [action.error];
        case RECEIVE_APPOINTMENT:
            return [];
        case RECEIVE_APPOINTMENTS:
            return [];
        default:
            return prevState;
    }
};