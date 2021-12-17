import React from "react";
import EditAppointmentForm from "../appointments/edit_appointment_form";
import { DEFAULT_PROFILE_PICTURE } from "../../util/icons_and_images_util";
import "./doctor_profile.css";

export default class EditAppointmentProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {image: null};
    }

  componentDidMount() {
    this.props.fetchDoctor(this.props.doctorId);
    this.props.fetchAppointment(this.props.appointmentId);
  }

  render() {
    let { doctor, currentUser, appointment, updateAppointment, fetchAppointment } = this.props;
    if (!doctor || !appointment) return null;
    let source = doctor.image && doctor.image.source;

    return (
      <div className="doctor-profile">
        <div className="doctor-profile-header">
          <div className="image-container">
            <img src={source || DEFAULT_PROFILE_PICTURE} alt="" width="300px" />
            <div className="doctors-titles" id="profile">
              <div>{doctor.name}</div>
              <div>{doctor.specialty}</div>
              <div id="address">{doctor.address}</div>
              <div id="insurances">
                <div>Accepted insurance providers:</div>
                {doctor.insurances.map((insurance) => (
                  <div>{insurance}</div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div>

        </div>

        <div className="appointment-form">
          <EditAppointmentForm
            doctor={doctor}
            appointment={appointment}
            currentUser={currentUser}
            updateAppointment={updateAppointment}
            fetchAppointment={fetchAppointment}
          />
        </div>
      </div>
    );
  }
}
