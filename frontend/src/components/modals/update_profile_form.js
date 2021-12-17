import React from 'react'
import './update_profile_form.css'

class UpdateProfileForm extends React.Component{

    constructor(props){
        super(props)
        this.state = {
          id: this.props.user._id,
          handle: this.props.user.handle,
          insurance: this.props.user.insurance
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    componentDidMount() {
      this.props.fetchUser(this.props.currentUser.id);      
    }
    
    update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
    }

    handleSubmit(e) {  
      e.preventDefault();
      this.props.updateUser(this.state)
      .then(()=> {
        this.props.fetchUser(this.props.currentUser.id);
      });
      
      this.props.closeModal();
    }


    render(){
    let {user, closeModal } = this.props;

    return (
      <div className="profile-update-form-modal-background">
        <form className="profile-update-form" onSubmit={this.handleSubmit}>
            <div className= "close-button"><button onClick={closeModal}>close</button></div>
            <div className= "row-container">
              <p>Name:</p> 
              <input
                  type="text"
                  value={this.state.handle}
                  onChange={this.update("handle")}
                  placeholder={user.handle}
                  id = "name-input"
                />
            </div>
            <div className= "row-container">
             <p>Insurance:</p>
            <select onChange={this.update("insurance")}>
                <option selected disabled hidden>
                  choose one...
                </option>
                <option value="None">None</option>
                <option value="Aetna">Aetna</option>
                <option value="Blue Cross Blue Shield">
                  Blue Cross Blue Shield
                </option>
                <option value="Blue Shield of CA">Blue Shield of CA</option>
                <option value="Cigna">Cigna</option>
                <option value="UnitedHealthCare">UnitedHealthCare</option>
                <option value="Kaiser Permanente">Kaiser Permanente</option>
                <option value="Medicare">Medicare</option>
                <option value="Medi-Cal">Medi-Cal</option>
                <option value="Sutter Health">Sutter Health</option>
                <option value="Health Net">Health Net</option>
                <option value="Centene">Centene</option>
                <option value="CVS Health">CVS Health</option>
                <option value="Humana">Humana</option>
              </select>
              </div>
            <input type="submit" value="Submit" />
        </form>
      </div>
    )
    }
}

export default UpdateProfileForm