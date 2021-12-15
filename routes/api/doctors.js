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
        .catch((err) => res.status(404).json(`No doctors database found`));
});


/** Gets doctor by the doctor id
 * GET: http://localhost:5000/api/doctors/:id
 * @param {String} id - The doctor id
 * @response {Object} json - The doctor
 */
router.get("/:id", (req, res) => {
    let today = Date.now();
    let date = new Date(today);
    let nextThirtyDays = {};
    let nextDay = new Date(date);

    for (let i = 0; i < 30; i++) {
    let currentStringDate = date.toString().split(' ').slice(0, -5).join(' ')
    nextThirtyDays[currentStringDate] = [9, 10, 11, 12, 13, 14, 15, 16, 17];
    
    nextDay.setDate(nextDay.getDate() + 1);
    
    nextDay = new Date(nextDay);
    let stringDate = nextDay.toString().split(' ').slice(0, -5).join(' ');
      if(!nextThirtyDays[stringDate]) {
        nextThirtyDays[stringDate] = [9, 10, 11, 12, 13, 14, 15, 16, 17];
      }
    }

    let doctor = Doctor.findById(req.params.id);
    Doctor.findById(req.params.id)
        .then(dr => {
            for(let [k, v] of Object.entries(nextThirtyDays)) {
                if(dr.availabilityString[k]) {
                    nextThirtyDays[k] = dr.availabilityString[k]
                }
            }
            dr.availabilityString = nextThirtyDays;
            dr.save();
            return res.json(dr)
        })
        .catch((err) =>
            res.status(404).json(`No doctor found with ID: ${req.params.id}`)
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
        newDoctor._id = newDoctor._id;
        newDoctor.save().then(doc => res.json(doc));
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

        return Doctor.findByIdAndUpdate(req.params.id, doctorParams(req))
            .then(doctor => res.json(doctor)) // will not return the updated but the previous version
            .catch(err => res.status(404).json(`Unable to update doctor with ID: ${req.params.id}`))
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
            .catch(err => res.status(404).json(`No doctor found with ID: ${req.params.id}`))
    }
);


/** Get an image
 * GET: http://localhost:5000/api/doctors/image
 * @response {Object} json - The image of a doctor
 */
router.get("/:id/image", (req, res) => {
        Doctor.findById(req.params.id)
            .then((doctor) => res.json(doctor.image))
            .catch((err) => res.status(404).json(`No doctors found with ID: ${req.params.id}`));
    }
);


/** Get Files
 * GET: http://localhost:5000/api/doctors/files
 * @response {Object} json - The files from a doctor
 */
router.get("/:id/files", (req, res) => {
        Doctor.findById(req.params.id)
            .then((doctor) => res.json(doctor.files))
            .catch((err) => res.status(404).json(`No doctors found with ID: ${req.params.id}`));
    }
);


/** Upload an image
 * POST: http://localhost:5000/api/doctors/:id/image
 * @response {Object} json - The doctor's previous state
 */
router.post("/:id/image", (req, res) => {
    if (!req.files)
        return res.send("You must select a file");

    Doctor.findById(req.params.id)
        .then((doctor) => {
            doctor.image = req.files.image;
            // console.log(doctor.availabilityString)

            return Doctor.findByIdAndUpdate(req.params.id, doctor)
                .then(doctor => res.json(doctor)) // will not return the updated but the previous version
                .catch(err => res.status(404).json(`Unable to update doctor with ID: ${req.params.id}`))
        })
        .catch((err) => res.status(404).json(`No doctor found with ID: ${req.params.id}`));
    }
);

/** Upload files
 * POST: http://localhost:5000/api/doctors/:id/files
 * @response {Object} json - The doctor's previous state
 */
router.post("/:id/files", (req, res) => {
        if (!req.files)
            return res.send("You must select a file");

        Doctor.findById(req.params.id)
            .then((doctor) => {
                doctor.files = doctor.files || {};
                for (let key in req.files) {
                    doctor.files[key] = req.files[key];
                    if (doctor.files[key].mimetype === "text/plain")
                        doctor.files[key].mimetype = "text/html";
                }
                return Doctor.findByIdAndUpdate(req.params.id, doctor)
                    .then(doctor => res.json(doctor)) // will not return the updated but the previous version
                    .catch(err => res.status(404).json(`Unable to update doctor with ID: ${req.params.id}`))
            })
            .catch((err) => res.status(404).json(`No doctor found with ID: ${req.params.id}`));
    }
);


module.exports = router;