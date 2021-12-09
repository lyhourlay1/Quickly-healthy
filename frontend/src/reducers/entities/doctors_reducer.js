// import appointments from "../../../../validation/appointments";
import {
    RECEIVE_DOCTORS,
    RECEIVE_DOCTOR,
    REMOVE_DOCTOR
} from "../../actions/doctor_actions";

export default function DoctorReducer(prevState={}, action){
    Object.freeze(prevState);
    let newState = Object.assign({}, prevState) // this isn't a deep copy
    switch(action.type){
        case RECEIVE_DOCTORS:
            let doctors = Object.fromEntries(action.doctors.map(doctor => {
                return [doctor._id, doctor]
            }))
            return {...newState, ...doctors};
        case RECEIVE_DOCTOR:
            newState[action.doctor._id] = action.doctor;
            return newState;
        case REMOVE_DOCTOR:
            delete newState[action.id]
            return newState;
        default:
            return newState
    }
}

