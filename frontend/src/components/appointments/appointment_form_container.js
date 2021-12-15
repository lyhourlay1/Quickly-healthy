import { connect } from "react-redux"
import AppointmentForm from "./appointment_form"
import { createAppointment} from "../../actions/appointment_actions"
import { fetchDoctor } from "../../actions/doctor_actions";

const mSTP = (state, ownProps)=> {
    return {
        doctor: state.entities.doctor[ownProps.doctorId],
        userId: state.session.user._id
}}

const mDTP = dispatch =>{
    return{
        fetchDoctor: (doctorId) => dispatch(fetchDoctor(doctorId)),
        createAppointment: (appointment)=> dispatch(createAppointment(appointment)),
    }

}

export default connect(mSTP, mDTP)(AppointmentForm)