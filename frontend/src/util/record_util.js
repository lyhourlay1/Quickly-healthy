import axios from "axios";
import {createAppointment} from "./appointment_util";

/** API fetchRecords gets all records from the database
 * @returns {Promise} - A promise of records as an array
 * @type {()  => Promise}
 */
export const fetchRecords = () => {
    return axios.get('/api/records');
};


/** API fetchRecord gets a record from the database, given the record id
 * @param {String} recordId - The record id
 * @type {(recordId: String)  => Promise}
 * @returns {Promise} - A promise of record
 */
export const fetchRecord = (recordId) => {
    return axios.get(`/api/records/${recordId}`);
};


/** API fetchUserRecords gets the records of a user from the database, given the user's id
 * @param {String} userId - The user id
 * @type {(userId: String)  => Promise}
 * @returns {Promise} - A promise of records as an array
 */
export const fetchUserRecords = (userId) => {
    return axios.get(`/api/records/user/${userId}`);
};


/** API createRecord creates a record in the database
 * The record must have an associated user_id
 * @param {Object} record - The record
 * @type {(record: Object)  => Promise}
 * @returns {Promise} - A promise of record
 */
export const createRecord = (record) => {
    return axios.post(`/api/records/user/${record.user_id}`, record);
};


/** API updateRecord updates a record from the database
 * @param {Object} record - The record
 * @type {(record: Object)  => Promise}
 * @returns {Promise} - A promise of record of its previous state
 */
export const updateRecord = (record) => {
    return axios.patch(`/api/records/${record.id}/update`, record);
};


/** API deleteRecord deletes a record from the database
 * @param {String} recordId - The record id
 * @type {(recordId: String)  => Promise}
 * @returns {Promise} - A promise of record
 */
export const deleteRecord = (recordId) => {
    return axios.delete(`/api/records/${recordId}/delete`);
};

// window.fetchRecords = fetchRecords;
// window.fetchRecord = fetchRecord;
// window.fetchUserRecords = fetchUserRecords;
// window.createRecord = createRecord;
// window.updateRecord = updateRecord;
// window.deleteRecord = deleteRecord;