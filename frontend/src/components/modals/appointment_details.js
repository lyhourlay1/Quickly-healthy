import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { closeModal } from '../../actions/modal_actions';
import { fetchDoctor } from "../../actions/doctor_actions";
import './appointment_details.css';
import { deleteAppointment, updateAppointment } from "../../actions/appointment_actions";
import {createAlert} from "../../actions/alert_actions"


class AppointmentDetails extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchDoctor(this.props.appointment.doctor_id);
  }

  render() {
    let { appointment, currentUser, closeModal, doctor } = this.props;
    if (!doctor) return null;

    return (
      <div className="appointment-details-modal-background" onClick={closeModal}>
        <div className="appointment-details">
          <div>
            <button onClick={closeModal}>close</button>
          </div>
          <div>
            Date and time: {appointment.date} at{" "}
            {appointment.selectedSlot >= 12
              ? appointment.selectedSlot > 12
                ? (appointment.selectedSlot % 12) + " PM"
                : appointment.selectedSlot + " PM"
              : appointment.selectedSlot + " AM"}{" "}
            with Dr.{doctor.name}
          </div>
          <div>Street address:{` ${doctor.address}`}</div>
          <div>Reason for visit: {appointment.reason}</div>

          <Link
            className="button"
            onClick={closeModal}
            to={`/doctors/${appointment.doctor_id}/edit_appt/${appointment._id}`}
          >
            Edit appointment details
          </Link>
          <button
            className="button"
            id="delete"
            onClick={() => this.handleClick("delete", appointment)}
          >
            Delete appointment
          </button>
        </div>
      </div>
    );
  }

  handleClick(field, appointment) {
    let { deleteAppointment, closeModal, updateAppointment } = this.props;
    if (field === "delete"){
      this.props.createAlert("success", "You have deleted an appointment")
      return deleteAppointment(appointment._id).then(() => closeModal())
    } 
    else{
      return updateAppointment(appointment).then(() => closeModal());
    }
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
    deleteAppointment: (appointmentId) => dispatch(deleteAppointment(appointmentId)),
    updateAppointment: (appointment) => dispatch(updateAppointment(appointment)),
    createAlert: (type, message) => dispatch(createAlert(type, message))

  }
}

export default connect(mSTP, mDTP)(AppointmentDetails);