import { combineReducers } from "redux";

import AlertReducer from "./ui/alert_reducer"

export default combineReducers({
    alerts: AlertReducer
});



