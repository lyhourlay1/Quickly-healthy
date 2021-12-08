import { combineReducers } from "redux";

import DoctorReducer from "./entities/doctors_reducer"
import RecordReducer from "./entities/records_reducer"

const entitiesReducer = combineReducers({
    doctor: DoctorReducer,
    record: RecordReducer, 
});

export default entitiesReducer;
