const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Doctor = require('../../models/Doctor');
const Appointment = require('../../models/Appointment');
const validateAppointmentInput = require('../../validation/appointments');

const appointmentParams = (req) => {
  let schema = Object.keys(Appointment.schema.obj);
  let appt = {};

  Object.entries(req).filter(([key, value]) => {
    schema.includes(key) ? appt[key] = value : null;
  });

  return appt;
};

/** Gets all appointments
 * GET: http://localhost:5000/api/appointments
 * @response {Array} json - List of appointments
 */
router.get('/', (req, res) => {
  Appointment.find()
    .sort({ date: -1 })
    .then((appointments) => res.json(appointments))
    .catch((err) => res.status(404).json(`No appointment database found`));
});

/** Gets all appointment from a user (Authentication Required)
 * GET: http://localhost:5000/api/appointments
 * @response {Array} json - List of appointments by user_id, sorted from most recent to least recent
 * @body - user {User}
 */
router.get('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  Appointment.find({ user: req.user.id })
    .sort({ date: -1 })
    .then((appointments) => res.json(appointments))
    .catch((err) => res.status(404).json(`No appointments found for user ID: ${req.user.id}`));
});

/** Gets all appointments by user id
 * GET: http://localhost:5000/api/appointments/user/:user_id
 * @param {String} user_id - The user id
 * @response {Array} json - List of appointments by user_id, sorted from most recent to least recent
 */
router.get('/user/:user_id', (req, res) => {
  console.log(req.params.user_id, "REQ");

  return Appointment.find({ user_id: req.params.user_id })
    .sort({ date: -1 })
    .then((appointments) => res.json(appointments))
    .catch((err) => res.status(404).json(`No appointments found for user ID: ${req.params.user_id}`));
});

/** Gets appointment by the appointment id
 * GET: http://localhost:5000/api/appointments/:id
 * @param {String} id - The appointment id
 * @response {Object} json - The appointment
 */
router.get('/:id', (req, res) => {
  Appointment.findById(req.params.id)
    .then((appointment) => res.json(appointment))
    .catch((err) => res.status(404).json(`No appointment found with ID: ${req.params.id}`));
});

/** Create an appointment as a user (Authentication Required)
 * POST: http://localhost:5000/api/appointments
 * @response {Object} json - The appointment created
 * @body - user {User}, reason {String}, date {Date}, checkin {Date}
 */
// router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
//   const { errors, isValid } = validateAppointmentInput(req.body);

//   if (!isValid) {
//     return res.status(400).json(errors);
//   }

//   return User.findById(req.user.id)
//     .then((user) => {
//         const newAppointment = new Appointment(appointmentParams(req));
//         newAppointment.user = req.user.id;
//         newAppointment.save().then((appointment) => res.json(appointment));
//     })
//     .catch((err) => res.status(404).json(`No user found with ID: ${req.user.id}`));
// });

/** Create an appointment by user id
 * POST: http://localhost:5000/api/appointments/user/:user_id
 * @response {Object} json - The appointment created
 * @param {String} user_id - The user id
 * @body - reason {String}, date {Date}, checkin {Date}
 */
router.post('/user/:user_id', (req, res) => {
  const { errors, isValid } = validateAppointmentInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  Doctor.findById(req.body.doctor_id).then((doctor) => {
    console.log('appointment init', req.body, doctor)
    let temp = Object.assign({}, doctor.availabilityString);
    temp[req.body.date].splice(
      temp[req.body.date].indexOf(parseInt(req.body.selectedSlot)),
      1
    );
    // console.log(temp)
    doctor.availabilityString = {};
    doctor.availabilityString = temp; 
    doctor.save();
      // console.log('appoint end', doctor)
  });

  return User.findById(req.params.user_id)
    .then(() => {
        const newAppointment = new Appointment(appointmentParams(req));
        newAppointment.save().then((appointment) => res.json(appointment));
    })
    .catch((err) => res.status(404).json(`No user found with ID: ${req.params.user_id}`));
});

/** Update an appointment as a user (Authentication required)
 * PATCH: http://localhost:5000/api/appointments/:id
 * @response {Object} json - The appointment's previous value
 * @param {String} id - The appointment id
 * @body - user {User}, reason {String}, date {Date}, checkin {Date}
 */
router.patch('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  const { errors, isValid } = validateAppointmentInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  return Appointment.findByIdAndUpdate(req.appointment.id, appointmentParams(req))
    .then((appointment) => res.json(appointment)) // will not return the updated but the previous version
    .catch((err) => res.status(404).json(`No user found with ID: ${req.params.user_id}`));
});

/** Update an appointment by appointment id
 * PATCH: http://localhost:5000/api/appointments/:id
 * @response {Object} json - The appointment's previous value
 * @param {String} id - The appointment id
 * @body - reason {String}, date {Date}, checkin {Date}
 */
router.patch('/:id/update', (req, res) => {
  const { errors, isValid } = validateAppointmentInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  console.log(req.body, "BODY");

  Doctor.findById(req.body.doctor_id).then((doctor) => {
    console.log(doctor, "DOCTOR");

    doctor.availabilityString[req.body.oldDate].push(req.body.selectedSlot);
    doctor.availabilityString[req.body.oldDate].sort((a,b) => a - b);
    // doctor.availabilityString[req.body.oldDate] = sorted;

    let temp = Object.assign({}, doctor.availabilityString);
    temp[req.body.date].splice(
      temp[req.body.date].indexOf(parseInt(req.body.selectedSlot)),
      1
    );
    
    console.log(doctor.availabilityString, "AS");
    console.log(temp, "TEMP");

    doctor.availabilityString = {};
    doctor.availabilityString = temp; 
    doctor.save();
  });

  return Appointment.findByIdAndUpdate(req.params.id, appointmentParams(req.body))
    .then((appointment) => res.json(appointment))
    .catch((err) => res.status(404).json(`Unable to update appointment with ID: ${req.params.id}`));
});

/** Delete an appointment by id (Authentication Required)
 * DELETE: http://localhost:5000/api/appointments/:id
 * @response {Object} json - The appointment deleted
 * @param {String} id - The appointment id
 */
router.delete('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  return Appointment.findByIdAndDelete(req.params.id)
    .then((appointment) => res.json(appointment)) // will not return the updated but the previous version
    .catch((err) => res.status(404).json(`Unable to delete appointment with ID: ${req.params.id}`));
});

/** Delete an appointment by id
 * DELETE: http://localhost:5000/api/appointments/:id/delete
 * @response {Object} json - The appointment deleted
 * @param {String} id - The appointment id
 */
router.delete('/:id/delete', (req, res) => {
  console.log(req.params.id, "hit the backend");
  return Appointment.findByIdAndDelete(req.params.id)
    .then((appointment) => {
      console.log(appointment._id);
      res.json(appointment);
    })
    .catch((err) => res.status(404).json(`No appointment found with ID: ${req.params.id}`));
});

module.exports = router;
