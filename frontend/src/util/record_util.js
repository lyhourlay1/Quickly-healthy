import axios from "axios";

/** API fetchRecords gets all records from the database
 * @returns {Promise} - A promise of records as an array
 * @type {()  => Promise}
 * @see {@link https://github.com/lyhourlay1/Quickly-healthy/blob/main/assets/tutorials/routes.md|Tutorials}
 */
export const fetchRecords = () => {
    return axios.get('/api/records');
};


/** API fetchRecord gets a record from the database, given the record id
 * @param {String} recordId - The record id
 * @type {(recordId: String)  => Promise}
 * @returns {Promise} - A promise of record
 * @see {@link https://github.com/lyhourlay1/Quickly-healthy/blob/main/assets/tutorials/routes.md|Tutorials}
 */
export const fetchRecord = (recordId) => {
    return axios.get(`/api/records/${recordId}`);
};


/** API fetchUserRecords gets the records of a user from the database, given the user's id
 * @param {String} userId - The user id
 * @type {(userId: String)  => Promise}
 * @returns {Promise} - A promise of records as an array
 * @see {@link https://github.com/lyhourlay1/Quickly-healthy/blob/main/assets/tutorials/routes.md|Tutorials}
 */
export const fetchUserRecords = (userId) => {
    return axios.get(`/api/records/user/${userId}`);
};


/** API createRecord creates a record in the database
 * The record must have an associated user_id
 * @param {Object} record - The record
 * @type {(record: Object)  => Promise}
 * @returns {Promise} - A promise of record
 * @see {@link https://github.com/lyhourlay1/Quickly-healthy/blob/main/assets/tutorials/routes.md|Tutorials}
 */
export const createRecord = (record) => {
    return axios.post(`/api/records/user/${record.user_id}`, record);
};


/** API updateRecord updates a record from the database
 * @param {Object} record - The record
 * @type {(record: Object)  => Promise}
 * @returns {Promise} - A promise of record of its previous state
 * @see {@link https://github.com/lyhourlay1/Quickly-healthy/blob/main/assets/tutorials/routes.md|Tutorials}
 */
export const updateRecord = (record) => {
    return axios.patch(`/api/records/${record._id}/update`, record);
};


/** API deleteRecord deletes a record from the database
 * @param {String} recordId - The record id
 * @type {(recordId: String)  => Promise}
 * @returns {Promise} - A promise of record
 * @see {@link https://github.com/lyhourlay1/Quickly-healthy/blob/main/assets/tutorials/routes.md|Tutorials}
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