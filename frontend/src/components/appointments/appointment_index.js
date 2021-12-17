import React from 'react';
import AppointmentIndexItem from './appointment_index_item';

export default class AppointmentIndex extends React.Component {
  render() {
    let { appointments, currentUser, openModal } = this.props;

    return (
      <div className="appointment-index">
        <div className="index-header">Upcoming appointments</div>
        {appointments.length === 0 ? <div className="default-header">No appointments yet </div> : null}

        <ul className="appointment-list">
          {appointments
            .sort((a, b) => a.selectedSlot - b.selectedSlot)
            .sort((a, b) => new Date(a.date) - new Date(b.date))
            .map((appointment, idx) => (
              <AppointmentIndexItem key={idx} appointment={appointment} currentUser={currentUser} openModal={openModal} />
            ))}
        </ul>
      </div>
    );
  }
}
