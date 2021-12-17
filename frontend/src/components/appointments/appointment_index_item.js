import React from 'react'

class AppointmentIndexItem extends React.Component{
  render() {
    let { appointment, currentUser, openModal } = this.props;
    let display ;
    if (appointment.check_in){
      display = <span className="green-check">Check-in &#9989;</span>
    }else{
      display= 
        <button
          onClick={() =>
            openModal("checkIn", { appointment})}>
            Check-In
        </button>
    }
    return (
      <div className="appointment-index-item">
        <div id="check-in">
          {display}
        </div>
        <div id="date">
          {appointment.date} at{" "}
          {appointment.selectedSlot >= 12
            ? appointment.selectedSlot > 12 
              ? appointment.selectedSlot % 12 + " PM" 
              : appointment.selectedSlot + " PM"
            : appointment.selectedSlot + " AM"}
        </div>
        <div id="edit">
          <button
            onClick={() =>
              openModal("appointmentDetails", { appointment, currentUser })
            }
          >
            Details
          </button>
        </div>
      </div>
    );
  }
}

export default AppointmentIndexItem;