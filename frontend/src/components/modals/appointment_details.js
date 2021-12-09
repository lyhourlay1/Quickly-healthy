import React from "react";
import { connect } from "react-redux";
import { closeModal } from '../../actions/modal_actions';
import './appointment_details.css';

const AppointmentDetails = ({ appointment, currentUser, updateAppointment, closeModal }) => {
  return (
    <div className="appointment-details-modal-background">
      <div className="appointment-details">
        <div><button onClick={closeModal}>close</button></div>
        <div>Date and time: {appointment.date}</div>
        <div>Reason for visit: {appointment.reason}</div>
      </div>
    </div>
  )
};

const mDTP =(dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
  }
}

export default connect(null, mDTP)(AppointmentDetails);