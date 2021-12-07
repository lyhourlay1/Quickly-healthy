import axios from "axios";

/** API fetchDoctors gets all doctors from the database
 * @returns {Promise} - A promise of doctors as an array
 * @type {()  => Promise}
 */
export const fetchDoctors = () => {
    return axios.get('/api/doctors');
};


/** API fetchDoctor gets a doctor from the database, given the doctor id
 * @param {String} doctorId - The doctor id
 * @type {(doctorId: String)  => Promise}
 * @returns {Promise} - A promise of doctor
 */
export const fetchDoctor = (doctorId) => {
    return axios.get(`/api/doctors/${doctorId}`);
};


/** API createDoctor creates a doctor in the database
 * The doctor must have an associated user_id
 * @param {Object} doctor - The doctor
 * @type {(doctor: Object)  => Promise}
 * @returns {Promise} - A promise of doctor
 */
export const createDoctor = (doctor) => {
    return axios.post(`/api/doctors`, doctor)
}


/** API updateDoctor updates a doctor from the database
 * @param {Object} doctor - The doctor
 * @type {(doctor: Object)  => Promise}
 * @returns {Promise} - A promise of doctor of its previous state
 */
export const updateDoctor = (doctor) => {
    return axios.patch(`/api/doctors/${doctor.id || doctor._id}`, doctor);
};


/** API deleteDoctor deletes a doctor from the database
 * @param {String} doctorId - The doctor id
 * @type {(doctorId: String)  => Promise}
 * @returns {Promise} - A promise of doctor
 */
export const deleteDoctor = (doctorId) => {
    return axios.delete(`/api/doctors/${doctorId}`);
};


// window.fetchDoctors = fetchDoctors;
// window.fetchDoctor = fetchDoctor;
// window.createDoctor = createDoctor;
// window.updateDoctor = updateDoctor;
// window.deleteDoctor = deleteDoctor;