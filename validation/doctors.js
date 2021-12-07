const Validator = require('validator');
const validText = require('./valid-text');

/*
  TODO: validates conflict of schedules between doctor and patient
  TODO: cannot sign up for another appointment for the same doctor
  TODO: cannot sign up for another appointment for the same doctor
  TODO: add location to schema for doctor's work place
  TODO: add availabilities to doctor [{Monday: start-time, endtime}... Saturday: [start-tie, endtime]}]
 */

module.exports = function validateAppointmentInput(data) {
    let errors = {};
    if (Object.keys(data).length === 0){
        errors.data = "Input must be given to create a doctor";
    }

    if (!data.name || Validator.isEmpty(data.name)) {
        errors.name = "A doctor's name is required";
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0,
    };
};