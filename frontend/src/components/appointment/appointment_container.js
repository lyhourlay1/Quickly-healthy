import { connect } from "react-redux"
import Appointment from "./appointment"
import { fetchUserAppointments, createAppointment, fetchAppointment} from "../../actions/appointment_actions"

const mSTP = (state)=> {
    
    return {
    appointments: Object.values(state.entities.appointments),
    currentUser: state.session.user
}}

const mDTP = dispatch =>({
    fetchUserAppointments: (userId)=> dispatch(fetchUserAppointments(userId)),
    fetchAppointment: (appointmentId) => dispatch(fetchAppointment(appointmentId)),
})

export default connect(mSTP, mDTP)(Appointment)