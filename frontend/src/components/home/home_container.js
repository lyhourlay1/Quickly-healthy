import { connect } from "react-redux";
import Home from "./home";
import { fetchDoctors } from "../../actions/doctor_actions";
import { fetchUser } from "../../actions/user_actions";

const mSTP = (state) => {
  return {
    doctors: state.entities.doctor,
    currentUser: state.entities.user,
    currentUserId: state.session.user.id,
  };
};

const mDTP = (dispatch) => {
  return {
    fetchDoctors: () => dispatch(fetchDoctors()),
    fetchUser: (userId) => dispatch(fetchUser(userId)),
  };
};

export default connect(mSTP, mDTP)(Home);
