import React from "react";
import AppointmentIndex from "../appointments/appointment_index";
import { DEFAULT_PROFILE_PICTURE } from "../../util/icons_and_images_util";
import './user_profile.css';

class UserProfile extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      image: null
    }
    this.onImageChange = this.onImageChange.bind(this);
    
    this.handleUpload = this.handleUpload.bind(this)
  }
  componentDidMount() {
    this.props.fetchUserAppointments(this.props.currentUser.id);
  }

  handleUpload(e){
    e.preventDefault()
    let {updateUserImage, currentUser} = this.props
    debugger
    var file = new File([this.state.image], "profile picture");

    updateUserImage(currentUser.id, file)
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  onImageChange = event => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      this.setState({
        image: URL.createObjectURL(img)
      });
    }
  };


  render(){
    let { appointments, currentUser, openModal } = this.props;

    return(
      <div className="user-profile">
        <div>
          <div className="image-container">
            <img src={DEFAULT_PROFILE_PICTURE} alt="" />
            <input type="file"
                id="avatar" name="avatar"
                accept="image/png, image/jpeg"
                onChange={this.onImageChange} >
            </input>
            <div>
              <button onClick= {this.handleUpload}>Upload</button>
            </div>
          </div>
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