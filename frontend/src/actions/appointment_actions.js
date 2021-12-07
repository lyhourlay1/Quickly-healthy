import * as AppointmentUtil from '../util/appointment_util'

export const RECEIVE_APPOINTMENT = "RECEIVE_APPOINTMENT";
export const RECEIVE_APPOINTMENTS = "RECEIVE_APPOINTMENTS";
export const REMOVE_APPOINTMENT = "REMOVE_APPOINTMENT";
export const RECEIVE_APPOINTMENT_ERROR = "RECEIVE_APPOINTMENT_ERROR";



const receiveAppointments = appointments =>({
    type: RECEIVE_APPOINTMENTS,
    appointments: appointments
})

const receiveAppointment = appointment =>({
    type: RECEIVE_APPOINTMENT,
    appointment: appointment
})

const receiveAppointmentError = error =>({
    type: RECEIVE_APPOINTMENT_ERROR,
    error: error
})

const removeAppointment = id =>({
    type: REMOVE_APPOINTMENT,
    id: id
})



/*    Separation      */


export const fetchAppointments = () => dispatch =>(
    AppointmentUtil.fetchAppointments().then(
        appointments => {
            return dispatch(receiveAppointments(appointments.data))
        },
        err => dispatch(receiveAppointmentError(err.responseJSON))
    )
)


export const fetchAppointment = appointmentId => (dispatch) => {
    return AppointmentUtil.fetchAppointment(appointmentId).then(
        appointment => dispatch(receiveAppointment(appointment.data)),
        err => dispatch(receiveAppointmentError(err.responseJSON))
    )
}


export const createAppointment = appointment => dispatch =>(
    AppointmentUtil.createAppointment(appointment).then(
        appointment => dispatch(receiveAppointment(appointment.data)),
        err => dispatch(receiveAppointmentError(err.responseJSON))
    )
)

export const updateAppointment = appointment => dispatch =>(
    AppointmentUtil.updateAppointment(appointment).then(
        appointment => dispatch(receiveAppointment(appointment.data)),
        err => dispatch(receiveAppointmentError(err.responseJSON))
    )
)

export const deleteAppointment = appointmentId => dispatch =>(
    AppointmentUtil.deleteAppointment(appointmentId).then(
        appointment => dispatch(removeAppointment(appointment.data.id)),
        err => dispatch(receiveAppointmentError(err.responseJSON))
    )
)


// window.fetchAppointments = fetchAppointments;
// window.fetchAppointment = fetchAppointment;
// window.fetchUserAppointments = fetchUserAppointments;
// window.createAppointment = createAppointment;
// window.updateAppointment = updateAppointment;
// window.deleteAppointment = deleteAppointment;