import React from "react";
import AppointmentIndexItem from "./appointment_index_item";

export default class AppointmentIndex extends React.Component {
  render() {
    let { appointments, currentUser, openModal } = this.props;
    
    return (
      <div className="appointment-index">
        <div className="index-header">
          Upcoming appointments
        </div>

        <div className="default-header">
          {appointments.length === 0
            ? <div>No appointments yet</div>
            : null
          }
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