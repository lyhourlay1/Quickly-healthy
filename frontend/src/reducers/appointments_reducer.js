import { RECEIVE_USER_APPOINTMENTS, RECEIVE_USER_APPOINTMENTS } from "../actions/product_action"

const AppointmentsReducer = (state={}, action)=>{
    let newState = Object.assign({}, state)
    switch(action.type){
        case RECEIVE_USER_APPOINTMENTS:
            return action.appointments
        case RECEIVE_USER_APPOINTMENTS:
            newState[action.appointment.id]= action.appointment
            return newState
        default:
            return state
    }
}
export default AppointmentsReducer