import React from 'react'
import './update_profile_form.css'


class UpdateProfileForm extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            handle: "",
            insurance: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    
    update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
    }

    handleSubmit(e) {
    e.preventDefault();
    this.props.updateUser(this.state);
  }


    render(){
    debugger
    let {currentUser, closeModal, } = this.props;

    return (
      <div className="profile-update-form-modal-background">
        <form className="profile-update-form">
            <div><button onClick={closeModal}>close</button></div>
             Name: <input
                type="text"
                value={this.state.handle}
                onChange={this.update("handle")}
                placeholder={currentUser.handle}
              />
             Insurance: <input
                type="text"
                value={this.state.insurance}
                onChange={this.update("handle")}
                placeholder= {currentUser.insurance}
              />
            <input type="submit" value="Submit" />

        </form>
      </div>
    )
    }
}

export default UpdateProfileForm