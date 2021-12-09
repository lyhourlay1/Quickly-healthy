import {
    RECEIVE_APPOINTMENT,
} from "../../actions/appointment_actions";

export default function appointmentErrorsReducer(prevState = [], action){
    Object.freeze(prevState);
    switch (action.type) {
        case RECEIVE_APPOINTMENT:
            return [];
        default:
            return prevState;
    }
};