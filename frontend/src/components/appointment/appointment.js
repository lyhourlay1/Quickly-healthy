export default Appointment

import React from "react"
import AppointmentIndexItem from "./product_index_item"
import './appointment.css'


class Appointment extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.props.fetchUserAppointments(this.props.userId)
    }

    render(){   
        return(
            <div>
                <div className='appointment-flex'>
                    {this.props.appointments.map(appointment => <AppointmentIndexItem appointment={appointment} key = {appointment.id} />)}
                </div>
            </div>
        )
    }

}
export default Appointment