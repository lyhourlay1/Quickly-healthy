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
            let appointment = Object.fromEntries(action.appointments.map(appointment => {
                return [appointment._id, appointment]
            }))
            return {...newState, ...appointment};
        case RECEIVE_APPOINTMENT:
            newState[action.appointment._id] = action.appointment;
            return newState;
        case REMOVE_APPOINTMENT:
            delete newState[action.id]
            return newState;
        default:
            return newState
    }
}