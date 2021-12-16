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
    this.props.fetchUserAppointments(this.props.currentUser._id);
  }

  handleUpload(e){
    e.preventDefault()
    let {updateUserImage, currentUser} = this.props
    updateUserImage(currentUser._id, {image: this.state.image})
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
    let { appointments, currentUser, openModal } = this.props;

    return(
      <div className="user-profile">
        <form onSubmit={this.handleUpload} method="post" action={`/api/users/${this.props.currentUser._id}/image`}>
          <div className="image-container">
            <img src={DEFAULT_PROFILE_PICTURE} alt="" />
            <input type="file"
                id="avatar" name="image"
                accept="image/png, image/jpeg"
                onChange={this.onImageChange} multiple/>
            <div>
              <button type="submit">Upload</button>
            </div>
          </div>
        </form>

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