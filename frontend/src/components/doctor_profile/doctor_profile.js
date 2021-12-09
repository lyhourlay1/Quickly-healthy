import React from "react";
import { DEFAULT_PROFILE_PICTURE } from "../../util/icons_and_images_util";
import AppointmentForm from "../appointments/appointment_form";
import './doctor_profile.css';

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
          <div className="image-container"><img src={DEFAULT_PROFILE_PICTURE} alt="" /></div>
          <div className="doctors-titles">
            <div>{doctor.name}</div>
            <div>{doctor.specialty}</div>
            <div id="address">{doctor.address}</div>
          </div>
        </div>

        {/* <div className="appointment-form">
          <AppointmentForm doctor={doctor} currentUser={currentUser} />
        </div> */}
      </div>
    )
  }
}