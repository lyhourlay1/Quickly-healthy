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



/** Gets all appointments of a user
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



/** Gets appointment by id
 * GET: http://localhost:5000/api/appointments/:id
 * @response {Object} json - The appointment
 */
router.get("/:id", (req, res) => {
    Appointment.findById(req.params.id)
        .then((appointment) => res.json(appointment))
        .catch((err) =>
            res.status(404).json({noappointmentfound: "No appointment found with that ID"})
        );
});



/** Create an appointment from a user
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



/** Update an appointment from a user
 * PATCH: http://localhost:5000/api/appointments
 * @response {Object} json - The appointment updated for a user
 * @body - user {User}, reason {String}, date {Date}, checkin {Date}
 */
router.patch("/", passport.authenticate("jwt", {session: false}), (req, res) => {
        const {errors, isValid} = validateAppointmentInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }

        Appointment.find({id: req.appointment.id}).then(
            appointment => {
                appointment.update(appointment).then(appointment => res.json(appointment));
            }).catch(
                err => res.status(404).json({ noappointmentfound: `No appointment found from that user` })
        );
    }
);



/** Update an appointment by user id
 * PATCH: http://localhost:5000/api/appointments/user/:user_id
 * @response {Object} json - The appointment created
 * @param {String} user_id - The user id
 * @body - reason {String}, date {Date}, checkin {Date}
 */
router.patch("/:id", async (req, res) => {
        const {errors, isValid} = validateAppointmentInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }

        const appointment = await Appointment.findById(req.params.id)
            .then(appointment => res.json(appointment))
            .catch(err => res.status(404).json({noappointmentfound: `No appointment found from that id: ${req.params.id}`})
        );
        let appt = await Appointment.findById(req.params.id);
        console.log("body: ", req.body);
        console.log("appt: ", appt);
        let a = {...appt, ...req.body};
        console.log("Updated: ", a);
        return appointment;
    }
);

module.exports = router;