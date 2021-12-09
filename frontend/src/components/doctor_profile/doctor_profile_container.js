import { connect } from "react-redux";
import { fetchDoctor } from "../../actions/doctor_actions";
import DoctorProfile from "./doctor_profile";

const mSTP = (state, ownProps) => {
  return {
    doctor: state.entities.doctor[ownProps.match.params.id],
    currentUser: state.session.user,
  };
};

const mDTP = (dispatch) => {
  return {
    fetchDoctor: (doctorId) => dispatch(fetchDoctor(doctorId)),
  };
};

export default connect(mSTP, mDTP)(DoctorProfile);
