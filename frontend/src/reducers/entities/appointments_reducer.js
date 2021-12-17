import { RECEIVE_APPOINTMENT, RECEIVE_APPOINTMENTS, REMOVE_APPOINTMENT } from '../../actions/appointment_actions';

const date1 = new Date('Dec 19, 2021 12:00:00');

const AppointmentsReducer = (state = {}, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_APPOINTMENTS:
      Object.values(action.appointments).map((appt) => {
        if(new Date(appt.date + " " + appt.selectedSlot + ':00:00').getTime() > new Date(Date.now()).getTime()) {
          newState[appt._id] = appt;
        }
      });
      return newState;
    case RECEIVE_APPOINTMENT:
      newState[action.appointment._id] = action.appointment;
      return newState;
    case REMOVE_APPOINTMENT:
      delete newState[action.appointmentId];
      return newState;
    default:
      return state;
  }
};
export default AppointmentsReducer;
