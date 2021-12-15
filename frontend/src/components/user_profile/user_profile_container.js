import { connect } from "react-redux";
import { fetchUserAppointments} from "../../actions/appointment_actions";
import { updateUserImage} from "../../actions/user_actions";
import { openModal } from "../../actions/modal_actions";
import UserProfile from "./user_profile";

const mSTP = (state) => {
  return {
    currentUser: state.session.user,
    appointments: Object.values(state.entities.appointments),
  };
};

const mDTP = (dispatch) => {
  return {
    fetchUserAppointments: (userId) => dispatch(fetchUserAppointments(userId)),
    openModal: (modalType, entity) => dispatch(openModal(modalType, entity)),
    updateUserImage: (userId, image)=> dispatch(updateUserImage(userId, image))

  };
};

export default connect(mSTP, mDTP)(UserProfile);
