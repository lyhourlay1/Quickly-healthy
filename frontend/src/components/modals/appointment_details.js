import React from "react";
import { connect } from "react-redux";
import { closeModal } from '../../actions/modal_actions';
import { fetchDoctor } from "../../actions/doctor_actions";
import './appointment_details.css';

class AppointmentDetails extends React.Component {
  componentDidMount() {
    this.props.fetchDoctor(this.props.appointment.doctor_id);
  }

  render() {
    let { appointment, currentUser, updateAppointment, closeModal, doctor } = this.props;
    if (!doctor) return null;

    return (
      <div className="appointment-details-modal-background">
        <div className="appointment-details">
          <div><button onClick={closeModal}>close</button></div>
          <div>Date and time: {appointment.date} with Dr.{doctor.name}</div>
          <div>Reason for visit: {appointment.reason}</div>
        </div>
      </div>
    )
  }
};

const mSTP = (state) => {
  return {
    doctor: state.entities.doctor[state.modal.entity.appointment.doctor_id],
  }
}

const mDTP =(dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
    fetchDoctor: (doctor_id) => dispatch(fetchDoctor(doctor_id)),
  }
}

export default connect(mSTP, mDTP)(AppointmentDetails);