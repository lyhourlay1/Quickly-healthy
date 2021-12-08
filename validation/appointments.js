const Validator = require('validator');
const validText = require('./valid-text');
const Doctor = require("../models/Doctor");
/*
  TODO: validates conflict of schedules between doctor and patient
  TODO: cannot sign up for another appointment for the same doctor
  TODO: cannot sign up for another appointment for the same doctor
  TODO: add location to schema for doctor's work place
  TODO: add availabilities to doctor [{Monday: start-time, endtime}... Saturday: [start-tie, endtime]}]
 */

const DAYOFWEEK = {
    "0": "Sunday",
    "1": "Monday",
    "2": "Tuesday",
    "3": "Wednesday",
    "4": "Thursday",
    "5": "Friday",
    "6": "Saturday"
}

function isInScheduleRange(date, schedule){
  let dayOfWeek = DAYOFWEEK[date.getDay()]
  let shift = schedule[dayOfWeek];
  if (typeof shift.start === 'number')
    return shift.start <= date.getHours() && date.getHours() <= shift.end;
  return shift.start <= date && date <= shift.end;
}

module.exports = function validateAppointmentInput(appointment) {
  let errors = {};

  if (Validator.isEmpty(appointment.reason)) {
    errors.reason = "A reason for the doctor visit is required";
  }

  /*
  // Validation: Appointment dates can be set as the current date or future date.
  let now = new Date();
  if (appointment.date - now < 0) {
    errors.date = `The appointment date must be now or after: ${now.toLocaleString()}`;
  }

  // Validation: Checkin dates can be set as the current date or future date.
  if (appointment.checkin - now < 0) {
    errors.date = `The checkin date must be now or after: ${now.toLocaleString()}`;
  }

  // Validation: Checkout dates can be set as the current date or future date.
  if (appointment.checkout - now < 0) {
    errors.date = `The checkin date must be now or after: ${now.toLocaleString()}`;
  }

  let doctor = Doctor.findById(appointment.doctor);
  if (!doctor) {
    errors.doctor = `The doctor ${appointment.doctor} doesn't exist`;
  }

  if (!isInScheduleRange(appointment.date, doctor.schedule)) {
    errors.date = "The appointment schedule doesn't match the doctor's availability";
  }
  */

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};