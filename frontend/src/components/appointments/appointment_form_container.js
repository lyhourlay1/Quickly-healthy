import { connect } from "react-redux"
import AppointmentForm from "./appointment_form"
import { createAppointment} from "../../actions/appointment_actions"

const mSTP = (state, ownProps)=> {
    
    return {
    // availabilites: Object.values(state.entities.availabilites),
    userId: state.session.currentUser
}}

const mDTP = dispatch =>{
    // fetchAvailbilities: (date)=> dispatch(fetchAvailabilities(date)),
    
    return{

        createAppointment: (appointment)=> dispatch(createAppointment(appointment)),
    }

}

export default connect(mSTP, mDTP)(AppointmentForm)