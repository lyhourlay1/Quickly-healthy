const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const Doctor = require("../../models/Doctor");
const validateDoctorInput = require("../../validation/doctors");

const doctorParams = (req) => {
    let schema = Object.keys(Doctor.schema.obj);
    return Object.fromEntries(Object.entries(req.body).filter(pair => {
        let [key, value] = pair;
        return schema.includes(key);
    }));
}


/** Gets all doctors
 * GET: http://localhost:5000/api/doctors
 * @response {Array} json - List of doctors
 */
router.get("/", (req, res) => {
    Doctor.find()
        .then((doctors) => res.json(doctors))
        .catch((err) => res.status(404).json({nodoctorsfound: `No doctors found`}));
});



/** Gets doctor by the doctor id
 * GET: http://localhost:5000/api/doctors/:id
 * @param {String} id - The doctor id
 * @response {Object} json - The doctor
 */
router.get("/:id", (req, res) => {
    Doctor.findById(req.params.id)
        .then((doctor) => res.json(doctor))
        .catch((err) =>
            res.status(404).json({nodoctorfound: `No doctor found with that ID: ${req.params.id}`})
        );
});


/** Create a doctor
 * POST: http://localhost:5000/api/doctors
 * @response {Object} json - The doctor created
 * @param {String} user_id - The user id
 * @body - reason {String}, date {Date}, checkin {Date}
 */
router.post("/", (req, res) => {
        const {errors, isValid} = validateDoctorInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }

        const newDoctor = new Doctor(doctorParams(req));
        newDoctor.save().then((doctor) => res.json(doctor));
    }
);


/** Update a doctor by doctor id
 * PATCH: http://localhost:5000/api/doctors/:id
 * @response {Object} json - The doctor's previous value
 * @param {String} id - The doctor id
 * @body - reason {String}, date {Date}, checkin {Date}
 */
router.patch("/:id", (req, res) => {
        const {errors, isValid} = validateDoctorInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }

        return Doctor.findByIdAndUpdate(req.params.id, req.body)
            .then(doctor => res.json(doctor)) // will not return the updated but the previous version
            .catch(err => res.status(404).json(err.toJSON()))
    }
);



/** Delete a doctor by id
 * DELETE: http://localhost:5000/api/doctors/:id
 * @response {Object} json - The doctor deleted
 * @param {String} id - The doctor id
 */
router.delete("/:id", (req, res) => {
        return Doctor.findByIdAndDelete(req.params.id)
            .then(doctor => res.json(doctor)) // will not return the updated but the previous version
            .catch(err => res.status(404).json({nodoctorfound: `No doctor found from id ${req.params.id}`}))
    }
);

module.exports = router;