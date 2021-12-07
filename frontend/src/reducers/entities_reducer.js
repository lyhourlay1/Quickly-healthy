import { combineReducers } from 'redux'
import AppointmentsReducer from './appointments_reducer'

export default combineReducers({
    appointments: AppointmentsReducer
})