import * as RecordUtil from '../util/record_util'

export const RECEIVE_RECORD = "RECEIVE_RECORD";
export const RECEIVE_RECORDS = "RECEIVE_RECORDS";
export const REMOVE_RECORD = "REMOVE_RECORD";
export const RECEIVE_RECORD_ERROR = "RECEIVE_RECORD_ERROR";



const receiveRecords = records =>({
    type: RECEIVE_RECORDS,
    records: records
})

const receiveRecord = record =>({
    type: RECEIVE_RECORD,
    record: record
})

const receiveRecordError = error =>({
    type: RECEIVE_RECORD_ERROR,
    error: error
})

const removeRecord = id =>({
    type: REMOVE_RECORD,
    id: id
})



/*    Separation      */

/** API fetchRecords gets all record from the database.
 * @type {()  => (dispatch) => Promise}
 * @returns {(dispatch) => Promise} - A redux dispatch promise of records
 * @example
 *  fetchRecords()(store.dispatch)
 */
export const fetchRecords = () => dispatch =>(
    RecordUtil.fetchRecords().then(
        records => {
            return dispatch(receiveRecords(records.data))
        },
        err => dispatch(receiveRecordError(err.response.data))
    )
)


/** API fetchUserRecords gets records from the database, given a user id.
 * @param {String} userId - The user id
 * @type {(userId: String)  =>  (dispatch) => Promise}
 * @returns {(dispatch) => Promise} - A redux dispatch promise of records
 * @example
 *  fetchUserRecords(user.id)(store.dispatch)
 */
export const fetchUserRecords = userId => dispatch =>(
    RecordUtil.fetchUserRecords(userId).then(
        records => dispatch(receiveRecords(records.data)),
        err => dispatch(receiveRecordError(err.response.data))
    )
)


/** API fetchRecord gets a record from the database, given the record id.
 * @param {String} recordId - The record id
 * @type {(userId: String)  => (dispatch) => Promise}
 * @returns {(dispatch) => Promise} - A redux dispatch promise of record
 * @example
 *  fetchRecord(record.id)(store.dispatch)
 */
export const fetchRecord = recordId => (dispatch) => {
    return RecordUtil.fetchRecord(recordId).then(
        record => dispatch(receiveRecord(record.data)),
        err => dispatch(receiveRecordError(err.response.data))
    )
}


/** API createRecord creates a record into the database and state.
 * @param {Object} record - The record
 * @type {(record: Object)  => (dispatch) => Promise}
 * @returns {(dispatch) => Promise} - A redux dispatch promise of record
 * @example
 *  createRecord(record)(store.dispatch)
 */
export const createRecord = record => dispatch =>(
    RecordUtil.createRecord(record).then(
        record => dispatch(receiveRecord(record.data)),
        err => dispatch(receiveRecordError(err.response.data))
    )
)


/** API updateRecord updates a record's info on the database and state.
 * @param {Object} record - The record
 * @type {(record: Object)  => (dispatch) => Promise}
 * @returns {(dispatch) => Promise} - A redux dispatch promise of record
 * @example
 *  updateRecord(record)(store.dispatch)
 */
export const updateRecord = record => dispatch =>(
    RecordUtil.updateRecord(record).then(
        record => dispatch(receiveRecord(record.data)),
        err => dispatch(receiveRecordError(err.response.data))
    )
)


/** API deleteRecord removes a record from the database and state.
 * @param {String} recordId - The record
 * @type {(recordId: String)  => (dispatch) => Promise}
 * @returns {(dispatch) => Promise} - A redux dispatch promise of record
 * @example
    deleteRecord(record.id)(store.dispatch)
 */
export const deleteRecord = recordId => dispatch =>(
    RecordUtil.deleteRecord(recordId).then(
        record => dispatch(removeRecord(record.data._id)),
        err => dispatch(receiveRecordError(err.response.data))
    )
)


// window.fetchRecords = fetchRecords;
// window.fetchRecord = fetchRecord;
// window.fetchUserRecords = fetchUserRecords;
// window.createRecord = createRecord;
// window.updateRecord = updateRecord;
// window.deleteRecord = deleteRecord;