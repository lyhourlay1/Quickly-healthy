import { connect } from "react-redux"
import AppointmentForm from "./appointment_form"
import { createAppointment} from "../../actions/appointment_actions"
import { fetchDoctor } from "../../actions/doctor_actions";

const mSTP = (state, ownProps)=> {
    
    
    return {
    // availabilities: Object.values(state.entities.doctor.availabilityString),
    doctor: state.entities.doctor[ownProps.doctorId],
    userId: state.session.user.id
}}

const mDTP = dispatch =>{
    // fetchAvailbilities: (date)=> dispatch(fetchAvailabilities(date)),
    
    return{
        fetchDoctor: (doctorId) => dispatch(fetchDoctor(doctorId)),
        createAppointment: (appointment)=> dispatch(createAppointment(appointment)),
    }

}

export default connect(mSTP, mDTP)(AppointmentForm)