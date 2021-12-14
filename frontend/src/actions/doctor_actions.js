import * as DoctorUtil from './../util/doctor_util'
import {updateUserFiles, updateUserImage} from "./user_actions";

export const RECEIVE_DOCTOR = "RECEIVE_DOCTOR";
export const RECEIVE_DOCTORS = "RECEIVE_DOCTORS";
export const REMOVE_DOCTOR = "REMOVE_DOCTOR";
export const RECEIVE_DOCTOR_ERROR = "RECEIVE_DOCTOR_ERROR";



const receiveDoctors = doctors =>({
    type: RECEIVE_DOCTORS,
    doctors: doctors
})

const receiveDoctor = doctor =>({
    type: RECEIVE_DOCTOR,
    doctor: doctor
})

const receiveDoctorError = error =>({
    type: RECEIVE_DOCTOR_ERROR,
    error: error
})

const removeDoctor = id =>({
    type: REMOVE_DOCTOR,
    id: id
})



/*    Separation      */


/** API fetchDoctors gets all doctor from the database
 * @type {()  => Function}
 * @returns {Function} - A redux dispatch promise of doctors
 */
export const fetchDoctors = () => dispatch =>(
    DoctorUtil.fetchDoctors().then(
        doctors => dispatch(receiveDoctors(doctors.data)),
        err => dispatch(receiveDoctorError(err.response.data))
    )
)


/** API fetchDoctor gets a doctor from the database, given the doctor id
 * @param {String} doctorId - The doctor id
 * @type {(userId: String)  => Function}
 * @returns {Function} - A redux dispatch promise of doctor
 */
export const fetchDoctor = doctorId => (dispatch) => {
    return DoctorUtil.fetchDoctor(doctorId).then(
        doctor => dispatch(receiveDoctor(doctor.data)),
        err => dispatch(receiveDoctorError(err.response.data))
    )
}


/** API createDoctor creates a doctor into the database and state
 * @param {Object} doctor - The doctor
 * @type {(doctor: Object)  => Function}
 * @returns {Function} - A redux dispatch promise of doctor
 */
export const createDoctor = doctor => dispatch =>(
    DoctorUtil.createDoctor(doctor).then(
        doctor => dispatch(receiveDoctor(doctor.data)),
        err => dispatch(receiveDoctorError(err.response.data))
    )
)


/** API updateDoctor updates a doctor's info on the database and state
 * @param {Object} doctor - The doctor
 * @type {(doctor: Object)  => Function}
 * @returns {Function} - A redux dispatch promise of doctor
 */
export const updateDoctor = doctor => dispatch =>(
    DoctorUtil.updateDoctor(doctor).then(
        doctor => dispatch(receiveDoctor(doctor.data)),
        err => dispatch(receiveDoctorError(err.response.data))
    )
)


/** API deleteDoctor removes a doctor from the database and state
 * @param {String} doctorId - The doctor
 * @type {(doctorId: String)  => Function}
 * @returns {Function} - A redux dispatch promise of doctor
 */
export const deleteDoctor = doctorId => dispatch =>(
    DoctorUtil.deleteDoctor(doctorId).then(
        doctor => dispatch(removeDoctor(doctor.data._id)),
        err => dispatch(receiveDoctorError(err.response.data))
    )
)


/** API updateDoctorImage creates or updates a doctor's profile image from the database and state
 * @param {String} doctorId - The doctor's id
 * @param {Object} image - The profile image
 * @type {(doctorId: String, image: Object)  => Function}
 * @returns {Function} - A redux dispatch promise of image
 */
export const updateDoctorImage = (doctorId, image) => dispatch =>(
    DoctorUtil.updateDoctorImage(doctorId, image).then(
        image => dispatch(receiveDoctor({_id: doctorId, image})),
        err => dispatch(receiveDoctorError(err.response.data))
    )
)


/** API updateDoctorFiles creates or updates a doctor's files image from the database and state
 * @param {String} doctorId - The doctor's id
 * @param {Object} files - The profile files
 * @type {(doctorId: String, files: Object)  => Function}
 * @returns {Function} - A redux dispatch promise of files
 */
export const updateDoctorFiles = (doctorId, files) => dispatch =>(
    DoctorUtil.updateDoctorFiles(doctorId, files).then(
        files => dispatch(receiveDoctor({_id: doctorId, files})),
        err => dispatch(receiveDoctorError(err.response.data))
    )
)


window.fetchDoctors = fetchDoctors;
window.fetchDoctor = fetchDoctor;
window.createDoctor = createDoctor;
window.updateDoctor = updateDoctor;
window.deleteDoctor = deleteDoctor;

window.updateDoctorImage = updateDoctorImage;
window.updateDoctorFiles = updateDoctorFiles;