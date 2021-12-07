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


export const fetchRecords = () => dispatch =>(
    RecordUtil.fetchRecords().then(
        records => {
            return dispatch(receiveRecords(records.data))
        },
        err => dispatch(receiveRecordError(err.responseJSON))
    )
)

export const fetchUserRecords = user_id => dispatch =>(
    RecordUtil.fetchUserRecords(user_id).then(
        records => dispatch(receiveRecords(records.data)),
        err => dispatch(receiveRecordError(err.responseJSON))
    )
)

export const fetchRecord = recordId => (dispatch) => {
    return RecordUtil.fetchRecord(recordId).then(
        record => dispatch(receiveRecord(record.data)),
        err => dispatch(receiveRecordError(err.responseJSON))
    )
}

export const createRecord = record => dispatch =>(
    RecordUtil.createRecord(record).then(
        record => dispatch(receiveRecord(record.data)),
        err => dispatch(receiveRecordError(err.responseJSON))
    )
)

export const updateRecord = record => dispatch =>(
    RecordUtil.updateRecord(record).then(
        record => dispatch(receiveRecord(record.data)),
        err => dispatch(receiveRecordError(err.responseJSON))
    )
)

export const deleteRecord = recordId => dispatch =>(
    RecordUtil.deleteRecord(recordId).then(
        record => dispatch(removeRecord(record.data.id)),
        err => dispatch(receiveRecordError(err.responseJSON))
    )
)


// window.fetchRecords = fetchRecords;
// window.fetchRecord = fetchRecord;
// window.fetchUserRecords = fetchUserRecords;
// window.createRecord = createRecord;
// window.updateRecord = updateRecord;
// window.deleteRecord = deleteRecord;