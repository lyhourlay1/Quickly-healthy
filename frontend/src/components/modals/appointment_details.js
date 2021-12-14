import React from "react";
import { connect } from "react-redux";
import { closeModal } from '../../actions/modal_actions';
import { fetchDoctor } from "../../actions/doctor_actions";
import './appointment_details.css';
import { deleteAppointment } from "../../actions/appointment_actions";

class AppointmentDetails extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchDoctor(this.props.appointment.doctor_id);
  }

  render() {
    let { appointment, currentUser, updateAppointment, closeModal, doctor, deleteAppointment } = this.props;
    if (!doctor) return null;

    return (
      <div className="appointment-details-modal-background">
        <div className="appointment-details">
          <div><button onClick={closeModal}>close</button></div>
          <div>Date and time: {appointment.date} with Dr.{doctor.name}</div>
          <div>Reason for visit: {appointment.reason}</div>
          <button className="button" id="edit" >Edit appointment details</button>
          <button className="button" id="delete" onClick={() => this.handleClick("delete", appointment._id)}>Delete appointment</button>
        </div>
      </div>
    )
  }

  handleClick(field, appointmentId) {
    let { deleteAppointment, closeModal } = this.props;
    return field === "delete"
      ? deleteAppointment(appointmentId).then(() => closeModal())
      : null;
  }
};

const mSTP = (state) => {
  return {
    doctor: state.entities.doctor[state.modal.entity.appointment.doctor_id],
    appointments: state.entities.appointments
  }
}

const mDTP =(dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
    fetchDoctor: (doctor_id) => dispatch(fetchDoctor(doctor_id)),
    deleteAppointment: (appointmentId) => dispatch(deleteAppointment(appointmentId))
  }
}

export default connect(mSTP, mDTP)(AppointmentDetails);