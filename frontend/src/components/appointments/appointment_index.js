import React from 'react';
import AppointmentIndexItem from './appointment_index_item';
import { connect } from "react-redux"
import {withRouter} from "react-router-dom";
import {createAlert} from "../../actions/alert_actions";


const mSTP = (state, ownProps)=> ({
})

const mDTP = dispatch => ({
    createAlert: (type, message) => dispatch(createAlert(type, message))
})


class AppointmentIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {appointments, currentUser, openModal} = this.props;

        return (
            <div className="appointment-index">
                <div className="index-header">Upcoming appointments</div>
                {appointments.length === 0 ? <div className="default-header">No appointments yet </div> : null}

                <ul className="appointment-list">
                    {appointments
                        .sort((a, b) => a.selectedSlot - b.selectedSlot)
                        .sort((a, b) => new Date(a.date) - new Date(b.date))
                        .map((appointment, idx) => (
                            <AppointmentIndexItem key={idx} appointment={appointment} currentUser={currentUser}
                                                  openModal={openModal}/>
                        ))}
                </ul>
            </div>
        );
    }
}

export default withRouter(connect(mSTP, mDTP)(AppointmentIndex))