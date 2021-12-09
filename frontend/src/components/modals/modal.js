import React from "react";
import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import AppointmentDetails from "./appointment_details";

const Modal = ({ modal }) => {
  if (!modal) {
    document.body.style.overflow = "scroll-y";
    return null;
  }

  switch (modal.modalType) {
    case "appointmentDetails":
      document.body.style.overflow = "hidden";
      return <AppointmentDetails 
        appointment={modal.entity.appointment}
        currentUser={modal.entity.currentUser} 
      />;
    default:
      document.body.style.overflow = "scroll";
      return null;
  }
};

const mSTP = (state) => {
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