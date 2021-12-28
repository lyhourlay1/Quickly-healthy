import React from 'react';
import AppointmentIndex from '../appointments/appointment_index';
import { DEFAULT_PROFILE_PICTURE } from '../../util/icons_and_images_util';
import './user_profile.css';

function isEmpty(obj) {
  return !!(obj && Object.keys(obj).length === 0);
}

class UserProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      image: null,
      errors: ''
    };
    this.onImageChange = this.onImageChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }
  componentDidMount() {
    if (this.props.user) {
      this.props.fetchUser(this.props.userId);
      this.props.fetchUserAppointments(this.props.userId);
    }
    if (!this.state.image && this.props.user && this.props.user.image) this.setState({ image: null }); //this.props.user.image
  }

  handleUpload(e) {
    e.preventDefault();
    let { updateUserImage, user } = this.props;
    updateUserImage(user._id, { image: this.state.image })
    .then(this.setState({image: null}))
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let file = event.target.files[0];
      const reader = new FileReader();
      // debugger;
      if (file.size > 75000) {
        this.setState({ errors: 'Image exceeds 75kb! Select Again!' });
      } else {
        reader.onload = function (evt) {
          let image = evt.target;
          let imageSrc = image.result;
          const metadata = { name: file.name, mimetype: file.type, size: file.size, encoding: 'FileReader', source: imageSrc };
          this.setState({
            image: metadata,
            errors: ''
          });
        }.bind(this);
        reader.readAsDataURL(file);
      }
    }
  };

  renderErrors() {
    return (
      <ul className="errors">
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>{this.state.errors[error]}</li>
        ))}
      </ul>
    );
  }

  render() {
    let { appointments, openModal } = this.props;
    let user = this.props.user;
    let source = user && user.image && user.image.source;
    let display;
    if (this.state.errors) {
      display = <div className="user-errors">{this.state.errors}</div>;
    } else if(this.state.image) {
      display = (
        <div>
          <button type="submit" className="upload-pic-button">
            Update Image
          </button>
        </div>
      );
    }
    return (
      <div className="user-profile">
        <div className="img-container">
          <img src={source || DEFAULT_PROFILE_PICTURE} alt="" />

          <div className="user-detail">
            <div className="user-description">Name: {user.handle}</div>
            <div className="user-description">Insurance: {user.insurance}</div>


            <div id="update-profile" className="user-description">
              <button className="update-profile-button" onClick={() => openModal('updateProfile', { user })}>
                Update Profile
              </button>
            </div>

            <form onSubmit={this.handleUpload} className="profile-img-container">
              <div className="file-input">
                <input className="file" type="file" id="avatar" name="image" accept="image/png, image/jpeg" onChange={this.onImageChange} multiple />
                <label for='avatar'>Select Image</label>
                {/* <div className= "user-errors">{this.state.errors}</div>
                <div>
                  <button type="submit" className="upload-pic-button">Upload</button>
                </div> */}
              </div>
                {display}
            </form>

          </div>
        </div>

        <AppointmentIndex appointments={appointments ? appointments : null} currentUser={user} openModal={openModal} />
      </div>
    );
  }
}

export default UserProfile;
