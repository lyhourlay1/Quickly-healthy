import React from "react";
import AppointmentIndex from "../appointments/appointment_index";
import { DEFAULT_PROFILE_PICTURE } from "../../util/icons_and_images_util";
import './user_profile.css';

class UserProfile extends React.Component {
  componentDidMount() {
    this.props.fetchUserAppointments(this.props.currentUser._id);
  }

  render(){
    let { appointments, currentUser, openModal } = this.props;

    return(
      <div className="user-profile">
        <div className="image-container">
          <img src={DEFAULT_PROFILE_PICTURE} alt="" />
        </div>
        <AppointmentIndex 
          appointments={appointments ? appointments : null} 
          currentUser={currentUser} 
          openModal={openModal} 
        />
      </div>
    )
  }
};

export default UserProfile; 