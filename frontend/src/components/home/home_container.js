import { connect } from "react-redux";
import Home from "./home";
import { fetchDoctors } from "../../actions/doctor_actions";

const mSTP = (state) => {
  return {
    doctors: state.entities.doctor,
  };
};

const mDTP = (dispatch) => {
  return {
    fetchDoctors: () => dispatch(fetchDoctors()),
  };
};

export default connect(mSTP, mDTP)(Home);
