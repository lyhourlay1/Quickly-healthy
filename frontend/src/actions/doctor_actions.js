import * as DoctorUtil from './../util/doctor_util'

export const RECEIVE_DOCTOR = "RECEIVE_DOCTOR";
export const RECEIVE_DOCTORS = "RECEIVE_DOCTORS";
export const REMOVE_DOCTOR = "REMOVE_DOCTOR";
export const RECEIVE_DOCTOR_ERROR = "RECEIVE_DOCTOR_ERROR";



const receiveDoctors = doctors =>({
    type: RECEIVE_DOCTORS,
    doctors: doctors
})

const receiveDoctor = doctor =>({
    type: RECEIVE_DOCTOR,
    doctor: doctor
})

const receiveDoctorError = error =>({
    type: RECEIVE_DOCTOR_ERROR,
    error: error
})

const removeDoctor = id =>({
    type: REMOVE_DOCTOR,
    id: id
})



/*    Separation      */


export const fetchDoctors = () => dispatch =>(
    DoctorUtil.fetchDoctors().then(
        doctors => dispatch(receiveDoctors(doctors.data)),
        err => dispatch(receiveDoctorError(err.response.data))
    )
)


export const fetchDoctor = doctorId => (dispatch) => {
    return DoctorUtil.fetchDoctor(doctorId).then(
        doctor => dispatch(receiveDoctor(doctor.data)),
        err => dispatch(receiveDoctorError(err.response.data))
    )
}


export const createDoctor = doctor => dispatch =>(
    DoctorUtil.createDoctor(doctor).then(
        doctor => dispatch(receiveDoctor(doctor.data)),
        err => dispatch(receiveDoctorError(err.response.data))
    )
)

export const updateDoctor = doctor => dispatch =>(
    DoctorUtil.updateDoctor(doctor).then(
        doctor => dispatch(receiveDoctor(doctor.data)),
        err => dispatch(receiveDoctorError(err.response.data))
    )
)

export const deleteDoctor = doctorId => dispatch =>(
    DoctorUtil.deleteDoctor(doctorId).then(
        doctor => dispatch(removeDoctor(doctor.data._id)),
        err => dispatch(receiveDoctorError(err.response.data))
    )
)


export const updateDoctorImage = (doctorId, image) => dispatch =>(
    DoctorUtil.updateDoctorImage(doctorId, image).then(
        image => {
            dispatch(fetchDoctor(doctorId))
        }, // or => fetchDoctor(doctorId)
        err => dispatch(receiveDoctorError(err.response.data))
    )
)

export const updateDoctorFiles = (doctorId, files) => dispatch =>(
    DoctorUtil.updateDoctorFiles(doctorId, files).then(
        files => {
            dispatch(fetchDoctor(doctorId))
        },
        err => dispatch(receiveDoctorError(err.response.data))
    )
)


window.fetchDoctors = fetchDoctors;
window.fetchDoctor = fetchDoctor;
window.createDoctor = createDoctor;
window.updateDoctor = updateDoctor;
window.deleteDoctor = deleteDoctor;