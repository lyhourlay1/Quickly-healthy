import { combineReducers } from "redux";

import DoctorReducer from "./entities/doctors_reducer"
import RecordReducer from "./entities/records_reducer"
import AppointmentsReducer from "./entities/appointments_reducer"
import UserReducer from "./entities/users_reducer";

const entitiesReducer = combineReducers({
    doctor: DoctorReducer,
    record: RecordReducer,
    appointments: AppointmentsReducer,
    user: UserReducer
});

export default entitiesReducer;

