import { connect } from "react-redux"
import AppointmentForm from "./appointment_form"
import { createAppointment} from "../../actions/appointment_actions"

const mSTP = (state)=> {
    return {
    // availabilites: Object.values(state.entities.availabilites),
    currentUser: state.session.user
}}

const mDTP = dispatch =>({
    // fetchAvailbilities: (date)=> dispatch(fetchAvailabilities(date)),
    createAppointment: (appointment)=> dispatch(createAppointment(appointment))

})

export default connect(mSTP, mDTP)(AppointmentForm)