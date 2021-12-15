import { connect } from "react-redux";
import { fetchAppointment, updateAppointment } from "../../actions/appointment_actions";
import { fetchDoctor } from "../../actions/doctor_actions";
import EditAppointmentProfile from "./edit_appointment_profile";

const mSTP = (state, ownProps) => {
  return {
    doctorId: ownProps.match.params.doctor_id,
    appointmentId: ownProps.match.params.appointment_id,
    currentUser: state.session.user,
    doctor: state.entities.doctor[ownProps.match.params.doctor_id],
    appointment: state.entities.appointments[ownProps.match.params.appointment_id],
  };
};

const mDTP = (dispatch) => {
  return {
    fetchDoctor: (doctorId) => dispatch(fetchDoctor(doctorId)),
    fetchAppointment: (appointmentId) => dispatch(fetchAppointment(appointmentId)),
    updateAppointment: (appointment) => dispatch(updateAppointment(appointment)),
  };
};

export default connect(mSTP, mDTP)(EditAppointmentProfile);