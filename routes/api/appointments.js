const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const Appointment = require("../../models/Appointment");
const validateAppointmentInput = require("../../validation/appointments");

/** Gets all appointments
 * GET: http://localhost:5000/api/appointments
 * @response {Array} json - List of appointments
 */
router.get("/", (req, res) => {
    Appointment.find()
        .sort({date: -1})
        .then((appointments) => res.json(appointments))
        .catch((err) => res.status(404).json({noappointmentsfound: "No appointments found"}));
});



/** Gets all appointment from a user (Authentication Required)
 * POST: http://localhost:5000/api/appointments
 * @response {Array} json - List of appointments by user_id, sorted from most recent to least recent
 * @body - user {User}
 */
router.post("/", passport.authenticate("jwt", {session: false}), (req, res) => {
        Appointment.find({user: req.user.id})
            .sort({date: -1})
            .then((appointments) => res.json(appointments))
            .catch((err) =>
                res.status(404).json({noappointmentsfound: "No appointments found from that user"})
            );
    });


/** Gets all appointments by user id (No Authentication required - Testing only)
 * GET: http://localhost:5000/api/appointments/user/:user_id
 * @response {Array} json - List of appointments by user_id, sorted from most recent to least recent
 */
router.get("/user/:user_id", (req, res) => {
    Appointment.find({user: req.params.user_id})
        .sort({date: -1})
        .then((appointments) => res.json(appointments))
        .catch((err) =>
            res.status(404).json({noappointmentsfound: "No appointments found from that user"})
        );
});


/** Gets appointment by the appointment id
 * GET: http://localhost:5000/api/appointments/:id
 * @param {String} id - The appointment id
 * @response {Object} json - The appointment
 */
router.get("/:id", (req, res) => {
    Appointment.findById(req.params.id)
        .then((appointment) => res.json(appointment))
        .catch((err) =>
            res.status(404).json({noappointmentfound: "No appointment found with that ID"})
        );
});


/** Create an appointment as a user (Authentication Required)
 * POST: http://localhost:5000/api/appointments
 * @response {Object} json - The appointment created
 * @body - user {User}, reason {String}, date {Date}, checkin {Date}
 */
router.post("/", passport.authenticate("jwt", {session: false}), (req, res) => {
        const {errors, isValid} = validateAppointmentInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }

        const newAppointment = new Appointment({
            user: req.user.id,
            reason: req.body.reason,
            date: req.body.date,
            checkin: req.body.checkin
        });

        newAppointment.save().then((appointment) => res.json(appointment));
    }
);


/** Create an appointment by user id
 * POST: http://localhost:5000/api/appointments/user/:user_id
 * @response {Object} json - The appointment created
 * @param {String} user_id - The user id
 * @body - reason {String}, date {Date}, checkin {Date}
 */
router.post("/user/:user_id", (req, res) => {
        const {errors, isValid} = validateAppointmentInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }

        const newAppointment = new Appointment({
            user: req.params.user_id,
            reason: req.body.reason,
            date: req.body.date,
            checkin: req.body.checkin
        });

        newAppointment.save().then((appointment) => res.json(appointment));
    }
);


/** Update an appointment as a user (Authentication required)
 * PATCH: http://localhost:5000/api/appointments/:id
 * @response {Object} json - The appointment's previous value
 * @param {String} id - The appointment id
 * @body - user {User}, reason {String}, date {Date}, checkin {Date}
 */
router.patch("/:id", passport.authenticate("jwt", {session: false}), (req, res) => {
        const {errors, isValid} = validateAppointmentInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }

        Appointment.find({id: req.appointment.id}).then(
            appointment => {
                appointment.update(appointment).then(appointment => res.json(appointment));
            }).catch(
            err => res.status(404).json({noappointmentfound: `No appointment found from that user`})
        );
    }
);


/** Update an appointment by appointment id
 * PATCH: http://localhost:5000/api/appointments/:id
 * @response {Object} json - The appointment's previous value
 * @param {String} id - The appointment id
 * @body - reason {String}, date {Date}, checkin {Date}
 */
router.patch("/:id/update", (req, res) => {
        const {errors, isValid} = validateAppointmentInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }

        return Appointment.findByIdAndUpdate(req.params.id, req.body)
            .then(appointment => res.json(appointment)) // will not return the updated but the previous version
            .catch(err => res.status(404).json(err.toJSON()))
    }
);


/** Delete an appointment by id (Authentication Required)
 * PATCH: http://localhost:5000/api/appointments/:id
 * @response {Object} json - The appointment deleted
 * @param {String} id - The appointment id
 */
router.delete("/:id", (req, res) => {
        return Appointment.findByIdAndDelete(req.params.id)
            .then(appointment => res.json(appointment)) // will not return the updated but the previous version
            .catch(err => res.status(404).json(err.toJSON()))
    }
);

/** Delete an appointment by id
 * PATCH: http://localhost:5000/api/appointments/:id/delete
 * @response {Object} json - The appointment deleted
 * @param {String} id - The appointment id
 */
router.delete("/:id/delete", (req, res) => {
        return Appointment.findByIdAndDelete(req.params.id)
            .then(appointment => res.json(appointment)) // will not return the updated but the previous version
            .catch(err => res.status(404).json({noappointmentfound: `No appointment found from id ${req.params.id}`}))
    }
);

module.exports = router;