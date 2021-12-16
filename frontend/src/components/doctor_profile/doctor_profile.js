import React from "react";
import AppointmentFormContainer from "../appointments/appointment_form_container";
import { DEFAULT_PROFILE_PICTURE } from "../../util/icons_and_images_util";
import './doctor_profile.css';

export default class DoctorProfile extends React.Component {
  componentDidMount() {
    this.props.fetchDoctor(this.props.match.params.id);
  }

  render() {
    let { doctor, currentUser } = this.props;
    if (!doctor) return null;
    let source = doctor.image && doctor.image.source;
    return (
      <div className="doctor-profile">
        <div className="doctor-profile-header">
          <div className="image-container">
            <img src={source || DEFAULT_PROFILE_PICTURE} alt="" width="300px"/>
            <div className="doctors-titles" id="profile">
              <div>{doctor.name}</div>
              <div>{doctor.specialty}</div>
              <div id="address">{doctor.address}</div>
              <div id="insurances">
                <div>Accepted insurance providers:</div>
                {doctor.insurances.map((insurance, idx) => (
                  <div key={idx} >{insurance}</div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="appointment-form">
          <AppointmentFormContainer doctorId={doctor._id} currentUser={currentUser} />
        </div>
      </div>
    )
  }
}