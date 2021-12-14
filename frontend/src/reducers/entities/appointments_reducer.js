import { RECEIVE_APPOINTMENT, RECEIVE_APPOINTMENTS, REMOVE_APPOINTMENT } from "../../actions/appointment_actions"

const AppointmentsReducer = (state={}, action)=>{
    let newState = Object.assign({}, state)
    switch (action.type) {
      case RECEIVE_APPOINTMENTS:
        Object.values(action.appointments).map((appt) => {
            newState[appt._id] = appt;
        });

        return newState;
      case RECEIVE_APPOINTMENT:
        newState[action.appointment.id] = action.appointment;
        return newState;
      case REMOVE_APPOINTMENT:
        debugger;
        delete newState[action.appointmentId];
        return newState;
      default:
        return state;
    }
}
export default AppointmentsReducer