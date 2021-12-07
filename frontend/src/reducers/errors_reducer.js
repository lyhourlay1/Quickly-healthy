import { combineReducers } from "redux";

import SessionErrorsReducer from "./session_errors_reducer";
import DoctorErrorsReducer from "./errors/doctors_error_reducer"
import RecordErrorsReducer from "./errors/records_error_reducer"
import AppointmentErrorsReducer from "./errors/appointments_error_reducer"

const errorsReducer = combineReducers({
  session: SessionErrorsReducer,
  doctor: DoctorErrorsReducer,
  record: RecordErrorsReducer,
  appointment: AppointmentErrorsReducer
});

export default errorsReducer;
