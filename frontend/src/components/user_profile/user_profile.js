import React from "react";
import AppointmentIndex from "../appointments/appointment_index";
import { DEFAULT_PROFILE_PICTURE } from "../../util/icons_and_images_util";
import './user_profile.css';


class UserProfile extends React.Component {
  componentDidMount() {
    this.props.fetchUserAppointments(this.props.currentUser._id);
    this.props.fetchUser(this.props.currentUser._id);

  }

  render(){
    let { appointments, currentUser, openModal, user } = this.props;

    return(
      <div className="user-profile">
        <div>
          <div className="image-container">
            <img src={DEFAULT_PROFILE_PICTURE} alt="" />
          </div>
          <div>
            Name: {user.handle}
          </div>
          <div>
            Insurance: {user.insurance}
          </div>
          <div id="update-profile">
            <button onClick={() => openModal("updateProfile", {user })}>
              Update Profile
            </button>
          </div>

        </div>

        <AppointmentIndex 
          appointments={appointments ? appointments : null} 
          currentUser={user} 
          openModal={openModal} 
        />
      </div>
    )
  }
};

export default UserProfile; 