import React from 'react'

class AppointmentIndexItem extends React.Component{
  render() {
    let { appointment, currentUser, openModal } = this.props;
    
    return (
      <div className='appointment-index-item'>
        <div id="check-in">
          <button>Check-in</button>
        </div>
        <div id="date">{appointment.date}</div>
        <div id="edit">
          <button onClick={() => openModal("appointmentDetails", { appointment, currentUser })}>
            Details
          </button>
        </div>
      </div>
    )
  }
}

export default AppointmentIndexItem;