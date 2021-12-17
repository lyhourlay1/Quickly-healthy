import React from "react";
import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import AppointmentDetails from "./appointment_details";
import UpdateProfileFormContainer from "./update_profile_form_container";
import CheckInContainer from "./check_in_container"

const Modal = ({ modal }) => {
  if (!modal) {
    document.body.style.overflow = "scroll";
    return null;
  }

  switch (modal.modalType) {
    case "appointmentDetails":
      document.body.style.overflow = "hidden";
      return <AppointmentDetails 
        appointment={modal.entity.appointment}
        currentUser={modal.entity.currentUser} 
      />;
    case "updateProfile":
      document.body.style.overflow = "hidden";
      
      return <UpdateProfileFormContainer 
        // appointment={modal.entity.appointment}
        // history={modal.entity.history} 
      />;
    case "checkIn":
      document.body.style.overflow = "hidden";
      return <CheckInContainer 
        appointment={modal.entity.appointment}
        // history={modal.entity.history} 
      />;
    default:
      document.body.style.overflow = "scroll";
      return null;
  }
};

const mSTP = (state, ownProps) => {
  return {
    modal: state.modal,
  };
};

const mDTP = (dispatch) => {
  return {
    closeModal: dispatch(closeModal()),
  };
};

export default connect(mSTP, mDTP)(Modal);
