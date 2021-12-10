import { RECEIVE_APPOINTMENT, RECEIVE_APPOINTMENTS } from "../../actions/appointment_actions"

const AppointmentsReducer = (state={}, action)=>{
    let newState = Object.assign({}, state)
    // debugger
    switch(action.type){
        case RECEIVE_APPOINTMENTS:
            return action.appointments
        case RECEIVE_APPOINTMENT:
            newState[action.appointment.id]= action.appointment
            return newState
        default:
            return state
    }
}
export default AppointmentsReducer