import {
    RECEIVE_APPOINTMENTS,
    RECEIVE_APPOINTMENT,
    REMOVE_APPOINTMENT
} from "../../actions/appointment_actions";

export default function AppointmentReducer(prevState={}, action){
    Object.freeze(prevState);
    let newState = Object.assign({}, prevState) // this isn't a deep copy
    switch(action.type){
        case RECEIVE_APPOINTMENTS:
            return {...newState, ...action.appointment};
        case RECEIVE_APPOINTMENT:
            newState[action.appointment.id] = action.appointment;
            return newState;
        case REMOVE_APPOINTMENT:
            delete newState[action.id]
            return newState;
        default:
            return newState
    }
}