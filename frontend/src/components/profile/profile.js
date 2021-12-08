import React from "react";
import AppointmentContainer from "../appointment/appointment_container"
 

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(

      <div>
          <AppointmentContainer />
      </div>
    )
  }
}

 export default Profile;