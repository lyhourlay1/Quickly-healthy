import * as AlertUtil from "../util/alert_util";

export const RECEIVE_ALERT = "RECEIVE_ALERT";
export const REMOVE_ALERT = "REMOVE_ALERT";


const receiveAlert = alert => ({
    type: RECEIVE_ALERT,
    alert: alert
})

const removeAlert = () => ({
    type: REMOVE_ALERT
})


export const createAlert = (type, message) => dispatch => {
    return AlertUtil.createAlert(type, message).then(
        alert => dispatch(receiveAlert(alert)))
};


export const deleteAlert = () => dispatch => {
    AlertUtil.deleteAlert().then(
        alert => dispatch(removeAlert()))
};


window.createAlert = createAlert;
window.deleteAlert = deleteAlert;