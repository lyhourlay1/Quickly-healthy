import React from "react";
import AppointmentIndexItem from "./appointment_index_item";
import "./appointment_index.css";

export default class AppointmentIndex extends React.Component {
  render() {
    let { appointments, currentUser, openModal } = this.props;
    
    return (
      <div className="appointment-index">
        <div className="index-header">
          Upcoming appointments
        </div>
        <ul className="appointment-list">
          {appointments.map((appointment, idx) => (
            <AppointmentIndexItem
              key={idx} 
              appointment={appointment} 
              currentUser={currentUser}
              openModal={openModal}
            />
          ))}
        </ul>
      </div>
    )
  }
}