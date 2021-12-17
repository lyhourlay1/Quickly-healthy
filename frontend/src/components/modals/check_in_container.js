import { connect } from "react-redux";
import CheckIn from "./check_in";
import { checkInAppointment } from "../../actions/appointment_actions";
import { fetchUserAppointments } from "../../actions/appointment_actions";
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => {
  return {
    appointments: state.entities.appointments
  };
};

const mapDispatchToProps = (dispatch) => {

  
  return {
    checkInAppointment: (appointmentId) => dispatch(checkInAppointment(appointmentId)),
    closeModal: () => dispatch(closeModal()),
    fetchUserAppointments: (userId)=> dispatch(fetchUserAppointments(userId))
 
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckIn);
