import React from "react";
import { DEFAULT_PROFILE_PICTURE } from "../../util/icons_and_images_util";
import './doctor_profile.css';
import AppointmentFormContainer from "../appointments/appointment_form_container";


export default class DoctorProfile extends React.Component {
  componentDidMount() {
    this.props.fetchDoctor(this.props.match.params.id);
  }

  render() {
    let { doctor, currentUser } = this.props;
    if (!doctor) return null;

    return (
      <div className="doctor-profile">
        <div className="doctor-profile-header">
          <div className="image-container"><img src={DEFAULT_PROFILE_PICTURE} alt="" width="300px"/>
            <div className="doctors-titles" id="profile">
              <div>{doctor.name}</div>
              <div>{doctor.specialty}</div>
              <div id="address">{doctor.address}</div>
            </div>
          
          </div>
        </div>

        <div className="appointment-form">
          <AppointmentFormContainer doctor={doctor} currentUser={currentUser} />
        </div>
      </div>
    )
  }
}