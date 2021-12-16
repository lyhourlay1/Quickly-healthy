import * as ApiAppointmentUtil from "../util/appointment_util";


export const RECEIVE_APPOINTMENT = 'RECEIVE_APPOINTMENT';
export const RECEIVE_APPOINTMENTS = 'RECEIVE_APPOINTMENTS';
export const REMOVE_APPOINTMENT = "REMOVE_APPOINTMENT";

const receiveAppointments = appointments =>({
    type: RECEIVE_APPOINTMENTS,
    appointments,
})

const receiveAppointment = appointment => ({
    type: RECEIVE_APPOINTMENT,
    appointment, 
})

const removeAppointment = (res) => ({
    type: REMOVE_APPOINTMENT,
    appointmentId: res.data._id,
})

export const fetchUserAppointments = (userId) =>dispatch=> (
    ApiAppointmentUtil.fetchUserAppointments(userId).then((appointments)=> dispatch(receiveAppointments(appointments.data)))
)

export const fetchAppointment = (appointmentId) => dispatch=> (
    ApiAppointmentUtil.fetchAppointment(appointmentId).then((appointment=> dispatch(receiveAppointment(appointment.data))))
)

export const createAppointment = (appointment) => dispatch => (
    ApiAppointmentUtil.createAppointment(appointment).then((appointment=> dispatch(receiveAppointment(appointment.data))))
)

export const updateAppointment = (appointment) => dispatch => (
    ApiAppointmentUtil.updateAppointment(appointment).then((appointment) => dispatch(receiveAppointment(appointment.data)))
)

export const deleteAppointment = (appointmentId) => (dispatch) => (
    ApiAppointmentUtil.deleteAppointment(appointmentId).then(res => dispatch(removeAppointment(res)))
)

export const checkInAppointment =  (appointmentId) => dispatch=> (
    ApiAppointmentUtil.checkInAppointment(appointmentId).then(appointment => dispatch(receiveAppointment(appointment.data)) )
)
