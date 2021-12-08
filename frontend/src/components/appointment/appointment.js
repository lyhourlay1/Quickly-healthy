import React from "react"
import AppointmentIndexItem from "./appointment_index_item"
import './appointment.css'
import {Link} from 'react-router-dom'



class Appointment extends React.Component{
    constructor(props){
        super(props)

    }
    componentDidMount(){
        this.props.fetchUserAppointments(this.props.currentUser.id)
    }

    render(){  
        
        if(!this.props.appointments){
            return null
        }
        return(
            <div>List of your upcoming appointments:
                <div className='appointment-flex'>
                    {this.props.appointments.map(appointment => <AppointmentIndexItem appointment={appointment} key = {appointment.id} />)}
                </div>
                <div>
                    <Link to={`/appointmentForm/61b1037031b9d300be983f46`}>
                        <button className='create-appoint-button'>
                            Create an appointment
                        </button>
                    </Link>
                </div>
            
            </div>
        )
    }

}
export default Appointment