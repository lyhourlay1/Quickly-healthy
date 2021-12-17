import React from "react";
import AppointmentIndex from "../appointments/appointment_index";
import { DEFAULT_PROFILE_PICTURE } from "../../util/icons_and_images_util";
import './user_profile.css';

function isEmpty(obj){
  return !!(obj && Object.keys(obj).length === 0)
}

class UserProfile extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      image: null,
    }
    this.onImageChange = this.onImageChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this)
  }
  componentDidMount() {
    
    if (this.props.user) {
      this.props.fetchUser(this.props.userId);
      this.props.fetchUserAppointments(this.props.userId);
    }
    if (!this.state.image && this.props.user && this.props.user.image)
      this.setState({image: this.props.user.image})
  }

  handleUpload(e){
    e.preventDefault()
    let {updateUserImage, user} = this.props
    updateUserImage(user._id, {image: this.state.image})
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
    let { appointments, openModal } = this.props;
    let user = this.props.user
    let source = user && user.image && user.image.source;
    return(
      <div className="user-profile">
          <div className="white-background"></div>
          <div className="img-container">
            <form onSubmit={this.handleUpload} className="profile-img-container">
                <img src={source || DEFAULT_PROFILE_PICTURE} alt="" />
                <input type="file"
                    id="avatar" name="image"
                    accept="image/png, image/jpeg"
                    onChange={this.onImageChange} multiple/>
                <div>
                  <button type="submit" className="upload-pic-button">Upload</button>
                </div>
            </form>
            <div className="user-detail">
              <div className= "user-description">
                  Name: {user.handle}
              </div>
              <div className= "user-description">
                  Insurance: {user.insurance}
              </div>
              <div id="update-profile" className= "user-description">
                  <button className="update-profile-button" onClick={() => openModal("updateProfile", {user})}>
                      Update Profile
                  </button>
              </div>
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