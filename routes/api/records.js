const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const Record = require("../../models/Record");
const validateRecordInput = require("../../validation/records");

router.get("/", (req, res) => {
  Record.find()
    .sort({ date: -1 })
    .then((records) => res.json(records))
    .catch((err) => res.status(404).json({ norecordsfound: "No records found" }));
});

router.get("/user/:user_id", (req, res) => {
  Record.find({ user: req.params.user_id })
    .then((records) => res.json(records))
    .catch((err) =>
      res.status(404).json({ norecordsfound: "No records found from that user" })
    );
});

router.get("/:id", (req, res) => {
  Record.findById(req.params.id)
    .then((record) => res.json(record))
    .catch((err) =>
      res.status(404).json({ norecordfound: "No record found with that ID" })
    );
});

router.post("/", passport.authenticate("jwt", { session: false }), (req, res) => {
    const { errors, isValid } = validateRecordInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newRecord = new Record({
      text: req.body.text,
      user: req.user.id,
    });

    newRecord.save().then((record) => res.json(record));
  }
);

module.exports = router;