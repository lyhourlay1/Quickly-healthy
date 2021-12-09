import React from "react";
import { DEFAULT_PROFILE_PICTURE } from "../../util/icons_and_images_util";
import AppointmentForm from "../appointment/appointment_form";

export default class DoctorProfile extends React.Component {
  componentDidMount() {
    this.props.fetchDoctor(this.props.match.params.id);
  }

  render() {
    let { doctor } = this.props;
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

        <div className="appointment-form">
          <AppointmentForm doctor={doctor} />
        </div>
      </div>
    )
  }
}