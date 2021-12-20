import { connect } from "react-redux";
import { fetchUserAppointments} from "../../actions/appointment_actions";
import { updateUserImage} from "../../actions/user_actions";
import { openModal } from "../../actions/modal_actions";
import UserProfile from "./user_profile";
import { fetchUser} from "../../actions/user_actions";


const mSTP = (state) => {
  return {
    userId: state.session.user.id,
    appointments: Object.values(state.entities.appointments),
    user: state.entities.user,
    // errors: state.errors.session,

  };
};

const mDTP = (dispatch) => {
  return {
    fetchUserAppointments: (userId) => dispatch(fetchUserAppointments(userId)),
    openModal: (modalType, entity) => dispatch(openModal(modalType, entity)),
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    updateUserImage: (userId, image)=> dispatch(updateUserImage(userId, image))
  };
};

export default connect(mSTP, mDTP)(UserProfile);
