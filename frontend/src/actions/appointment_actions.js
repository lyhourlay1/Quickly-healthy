import * as ApiAppointmentUtil from "../util/appointment_util";

export const RECEIVE_APPOINTMENT = 'RECEIVE_APPOINTMENT'
export const RECEIVE_APPOINTMENTS = 'RECEIVE_APPOINTMENTS'

const receiveAppointments = appointments =>({
    type: RECEIVE_APPOINTMENTS,
    appointments,
})

const receiveAppointment = appointment => ({
    type: RECEIVE_APPOINTMENT,
    appointment,
})

export const fetchUserAppointments = (userId) =>dispatch=> (
    ApiAppointmentUtil.fetchUserAppointments(userId).then((appointments)=> dispatch(receiveAppointments(appointments)))
)

export const fetchAppointment = (appointmentId) => dispatch=> (
    ApiAppointmentUtil.fetchAppointment(appointmentId).then((appointment=> dispatch(receiveAppointment(appointment))))
)

export const createAppointment = (appointment) => dispatch => (
    ApiAppointmentUtil.createAppointment(appointment).then((appointment=> dispatch(receiveAppointment(appointment))))
)
