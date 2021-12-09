import { connect } from "react-redux"
import AppointmentForm from "./appointment_form"
import { createAppointment} from "../../actions/appointment_actions"
import { fetchDoctor} from "../../actions/doctor_actions"

const mSTP = (state, ownProps)=> {
    
    return {
    // availabilites: Object.values(state.entities.availabilites),
    currentUser: state.session.user,
    doctorId: ownProps.match.params.doctorId,
    doctor:  ""
}}

const mDTP = dispatch =>({
    // fetchAvailbilities: (date)=> dispatch(fetchAvailabilities(date)),
    createAppointment: (appointment)=> dispatch(createAppointment(appointment)),
    fetchDoctor: (doctorId) => dispatch(fetchDoctor(doctorId))

})

export default connect(mSTP, mDTP)(AppointmentForm)