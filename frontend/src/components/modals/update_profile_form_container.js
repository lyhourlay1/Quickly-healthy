import { connect } from "react-redux";
import UpdateProfileForm from './update_profile_form'
import { closeModal } from '../../actions/modal_actions';


const mSTP = (state) => {
  return {
    currentUser: state.session.user,
  };
};

const mDTP = (dispatch) => {
  return {
        closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mSTP, mDTP)(UpdateProfileForm);
