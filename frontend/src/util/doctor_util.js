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
    return axios.patch(`/api/doctors/${doctor._id}`, doctor);
};


/** API deleteDoctor deletes a doctor from the database
 * @param {String} doctorId - The doctor id
 * @type {(doctorId: String)  => Promise}
 * @returns {Promise} - A promise of doctor
 */
export const deleteDoctor = (doctorId) => {
    return axios.delete(`/api/doctors/${doctorId}`);
};


/** API fetchDoctorImage gets an image from the database, given the doctor id
 * @param {String} doctorId - The doctor id
 * @type {(doctorId: String)  => Promise}
 * @returns {Promise} - A promise of image
 * @see {@link https://github.com/lyhourlay1/Quickly-healthy/blob/main/assets/tutorials/routes.md|Tutorials}
 */
export const fetchDoctorImage = (doctorId) => {
    return axios.get(`/api/doctors/${doctorId}/image`);
};


/** API fetchDoctorFiles gets files from the database, given the doctor id
 * @param {String} doctorId - The doctor id
 * @type {(doctorId: String)  => Promise}
 * @returns {Promise} - A promise of files
 * @see {@link https://github.com/lyhourlay1/Quickly-healthy/blob/main/assets/tutorials/routes.md|Tutorials}
 */
export const fetchDoctorFiles = (doctorId) => {
    return axios.get(`/api/doctors/${doctorId}/files`);
};


/** API updateDoctorImage creates or updates a doctor's image in the database
 * @param {String} doctorId - The doctor's id
 * @param {Object} image - The image file
 * @type {(doctorId: String, image: Object)  => Promise}
 * @returns {Promise} - A promise of image
 * @see {@link https://github.com/lyhourlay1/Quickly-healthy/blob/main/assets/tutorials/routes.md|Tutorials}
 */
export const updateDoctorImage = (doctorId, image) => {
    return axios.post(`/api/doctors/${doctorId}/image`, image)
}

/** API updateDoctorFiles creates or updates a doctor's files in the database
 * @param {String} doctorId - The doctor's id
 * @param {Object} files - The files
 * @type {(doctorId: String, files: Object)  => Promise}
 * @returns {Promise} - A promise of files
 * @see {@link https://github.com/lyhourlay1/Quickly-healthy/blob/main/assets/tutorials/routes.md|Tutorials}
 */
export const updateDoctorFiles = (doctorId, files) => {
    return axios.post(`/api/doctors/${doctorId}/files`, files)
}

