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
    if (this.props.userId) {
      this.props.fetchUser(this.props.userId);
      this.props.fetchUserAppointments(this.props.userId);
    }
  }

  handleUpload(e){
    e.preventDefault()
    let {updateUserImage, user} = this.props
    updateUserImage(user.id, {image: this.state.image})
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  onImageChange = event => {

    if (event.target.files && event.target.files[0]) {
      let file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = function(evt) {
        let image = evt.target;
        let imageSrc = image.result;
        const metadata = {name: file.name, mimetype: file.type, size: file.size, encoding: "FileReader", source: imageSrc};
        this.setState({
          image: metadata
        });
      }.bind(this);
      reader.readAsDataURL(file)
    }
  };


  render(){
    let { appointments, openModal, user } = this.props;
    let source = this.state.image && this.state.image.source;
    return(
      <div className="user-profile">
        <form onSubmit={this.handleUpload} method="post" action={`/api/users/${this.props.userId}/image`}>
          <div className="image-container">
            <img src={source || DEFAULT_PROFILE_PICTURE} alt="" />
            <input type="file"
                id="avatar" name="image"
                accept="image/png, image/jpeg"
                onChange={this.onImageChange} multiple/>
            <div>
              <button type="submit">Upload</button>
            </div>
          </div>
        </form>

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