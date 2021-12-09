import React from "react";
import { closeModal } from "../../actions/modal_actions";

const AppointmentDetails = ({ appointment, currentUser, updateAppointment }) => {
  return (
    <div className="appointment-details-modal-background">
      <div className="appointment-details">
        <div><button onClick={closeModal}>close</button></div>
        <div>{appointment.date}</div>
        <div>{appointment.reason}</div>
      </div>
    </div>
  )
};

export default AppointmentDetails;