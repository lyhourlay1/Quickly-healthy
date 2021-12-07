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

  if (Validator.isEmpty(data.reason)) {
    errors.reason = "A reason for the doctor visit is required";
  }

  // Validation: Appointment dates can be set as the current date or future date.
  let now = new Date();
  if (data.date - now < 0) {
    errors.date = `The appointment date must be now or after: ${now.toLocaleString()}`;
  }

  // Validation: Checkin dates can be set as the current date or future date.
  if (data.checkin - now < 0) {
    errors.date = `The checkin date must be now or after: ${now.toLocaleString()}`;
  }

  // Validation: Checkout dates can be set as the current date or future date.
  if (data.checkout - now < 0) {
    errors.date = `The checkin date must be now or after: ${now.toLocaleString()}`;
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};