import { combineReducers } from "redux";

import DoctorReducer from "./entities/doctors_reducer"
import RecordReducer from "./entities/records_reducer"
import AppointmentReducer from "./entities/appointments_reducer"

const entitiesReducer = combineReducers({
    doctor: DoctorReducer,
    record: RecordReducer,
    appointment: AppointmentReducer
});

export default entitiesReducer;
