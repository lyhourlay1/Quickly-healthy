import { connect } from "react-redux";
import { fetchUserAppointments} from "../../actions/appointment_actions";
import { openModal } from "../../actions/modal_actions";
import UserProfile from "./user_profile";
import { fetchUser} from "../../actions/user_actions";


const mSTP = (state) => {
  return {
    currentUser: state.session.user,
    appointments: Object.values(state.entities.appointments),
    user: state.entities.user
  };
};

const mDTP = (dispatch) => {
  return {
    fetchUserAppointments: (userId) => dispatch(fetchUserAppointments(userId)),
    openModal: (modalType, entity) => dispatch(openModal(modalType, entity)),
    fetchUser: (userId) => dispatch(fetchUser(userId))
  };
};

export default connect(mSTP, mDTP)(UserProfile);
