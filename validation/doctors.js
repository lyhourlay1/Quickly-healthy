const Validator = require('validator');
const validText = require('./valid-text');

/*
  TODO: validates conflict of schedules between doctor and patient
  TODO: cannot sign up for another appointment for the same doctor
  TODO: cannot sign up for another appointment for the same doctor
  TODO: add location to schema for doctor's work place
  TODO: add availabilities to doctor [{Monday: start-time, endtime}... Saturday: [start-tie, endtime]}]
 */

module.exports = function validateDoctorInput(doctor) {
    let errors = {};
    if (Object.keys(doctor).length === 0){
        errors.data = "Input must be given to create a doctor";
    }

    /*
    if (!doctor.name || Validator.isEmpty(doctor.name))
        errors.name = "A doctor's name is required";

    if (!doctor.license || Validator.isEmpty(doctor.license))
        errors.license = "A license must be provided"

    if (!doctor.location || Validator.isEmpty(doctor.location))
        errors.location = "A location must be provided"

    if (!doctor.address || Validator.isEmpty(doctor.address))
        errors.address = "An address must be provided"
     */

    return {
        errors,
        isValid: Object.keys(errors).length === 0,
    };
};