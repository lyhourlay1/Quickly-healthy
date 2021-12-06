const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const Appointment = require("../../models/Appointment");
const validateAppointmentInput = require("../../validation/appointments");

router.get("/", (req, res) => {
  Appointment.find()
    .sort({ date: -1 })
    .then((appointments) => res.json(appointments))
    .catch((err) => res.status(404).json({ noappointmentsfound: "No appointments found" }));
});

router.get("/user/:user_id", (req, res) => {
  Appointment.find({ user: req.params.user_id })
    .then((appointments) => res.json(appointments))
    .catch((err) =>
      res.status(404).json({ noappointmentsfound: "No appointments found from that user" })
    );
});

router.get("/:id", (req, res) => {
  Appointment.findById(req.params.id)
    .then((appointment) => res.json(appointment))
    .catch((err) =>
      res.status(404).json({ noappointmentfound: "No appointment found with that ID" })
    );
});

router.post("/", passport.authenticate("jwt", { session: false }), (req, res) => {
    const { errors, isValid } = validateAppointmentInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newAppointment = new Appointment({
      text: req.body.text,
      user: req.user.id,
    });

    newAppointment.save().then((appointment) => res.json(appointment));
  }
);

module.exports = router;