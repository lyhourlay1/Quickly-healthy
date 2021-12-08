import React from 'react'
import {Link} from 'react-router-dom'

class AppointmentIndexItem extends React.Component{
    render(){
        
        return(
            <div className='Appointment-flex' > 
                <div>
                    <Link to={`/appointments/${this.props.handle}`}> 
                        <h2 className= 'appointment-details'>
                            {this.props.appointment.date}
                        </h2>
                        {/* <h3 className= 'appointment-details'>
                            $ {this.props.appointment.reason}
                        </h3> */}
                        {/* <div className='appointment-image'>
                            <img src={this.props.appointment.photoUrls[0]} height='180px' />

                        </div> */}
                    </Link> 
                </div>
            </div>
        )
    }
}

export default AppointmentIndexItem