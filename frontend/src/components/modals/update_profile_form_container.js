import { connect } from "react-redux";
import UpdateProfileForm from './update_profile_form'
import { closeModal } from '../../actions/modal_actions';
import { fetchCurrentUser, updateUser} from "../../actions/user_actions";
import { fetchUser} from "../../actions/user_actions";



const mSTP = (state) => {
  return {
    currentUser: state.session.user,
    user: state.entities.user
  };
};

const mDTP = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
    updateUser: (user) => dispatch(updateUser(user)),
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    fetchCurrentUser: () => dispatch(fetchCurrentUser()),
  };
};

export default connect(mSTP, mDTP)(UpdateProfileForm);
