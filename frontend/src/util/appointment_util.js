import axios from "axios";

/** API fetchAppointments gets all appointments from the database
 * @returns {Promise} - A promise of appointments as an array
 * @type {()  => Promise}
 */
export const fetchAppointments = () => {
    return axios.get('/api/appointments');
};


/** API fetchAppointment gets a appointment from the database, given the appointment id
 * @param {String} appointmentId - The appointment id
 * @type {(appointmentId: String)  => Promise}
 * @returns {Promise} - A promise of appointment
 */
export const fetchAppointment = (appointmentId) => {
    return axios.get(`/api/appointments/${appointmentId}`);
};

/** API fetchUserAppointments gets the appointments of a user from the database, given the user's id
 * @param {String} userId - The user id
 * @type {(userId: String)  => Promise}
 * @returns {Promise} - A promise of appointments as an array
 */
export const fetchUserAppointments = (userId) => {
    return axios.get(`/api/appointments/user/${userId}`);
};


/** API createAppointment creates a appointment in the database
 * The appointment must have an associated user_id
 * @param {Object} appointment - The appointment
 * @type {(appointment: Object)  => Promise}
 * @returns {Promise} - A promise of appointment
 */
export const createAppointment = (appointment) => {
    return axios.post(`/api/appointments/user/${appointment.user_id}`, appointment)
}


/** API updateAppointment updates a appointment from the database
 * @param {Object} appointment - The appointment
 * @type {(appointment: Object)  => Promise}
 * @returns {Promise} - A promise of appointment of its previous state
 */
export const updateAppointment = (appointment) => {
    return axios.patch(`/api/appointments/${appointment.id}/update`, appointment);
};

/** API checkInAppointment updates a appointment from the database
 * @param {Object} appointment - The appointment
 * @type {(appointment: Object)  => Promise}
 * @returns {Promise} - A promise of appointment of its previous state
 */
export const checkInAppointment = (appointmentId) => {
    return axios.patch(`/api/appointments/${appointmentId}/checkin`);
};


/** API deleteAppointment deletes a appointment from the database
 * @param {String} appointmentId - The appointment id
 * @type {(appointmentId: String)  => Promise}
 * @returns {Promise} - A promise of appointment
 */
export const deleteAppointment = (appointmentId) => {
    return axios.delete(`/api/appointments/${appointmentId}/delete`);
};


// window.fetchAppointments = fetchAppointments;
// window.fetchAppointment = fetchAppointment;
// window.fetchUserAppointments = fetchUserAppointments;
// window.createAppointment = createAppointment;
// window.updateAppointment = updateAppointment;
// window.deleteAppointment = deleteAppointment;
// window.checkInAppointment = checkInAppointment;