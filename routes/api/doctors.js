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
    Doctor.findById(req.params.id).then((doctor) => {
      let dupAS = Object.assign({}, doctor.availabilityString);
      let today = Date.now();
      let date = new Date(today);
      console.log(doctor, "DOCTOR");
      let nextDay = new Date(date);

      for (let i = 0; i < 30; i++) {
        nextDay.setDate(nextDay.getDate() + 1);

        nextDay = new Date(nextDay);
        let stringDate = nextDay.toString().split(' ').slice(0, -5).join(' ');
        if (!dupAS[stringDate]) {
          dupAS[stringDate] = [9, 10, 11, 12, 13, 14, 15, 16, 17];
        }
      }

      doctor.availabilityString = dupAS;
      return res.json(doctor);
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
        
        // let params = doctorParams(req);
        // let date = new Date(params.date)
        // let nextThirtyDays = [];
        // let nextDay = new Date(date)

        // for(let i = 0; i < 30; i++) {
        //     nextDay.setDate(nextDay.getDate() + 1);
        //     nextThirtyDays.push(new Date(nextDay));
        // }

        // let availabilityInteger = nextDay.getDate();
        // let availabilityString = nextDay.toString().split(" ").slice(0,-5).join(" ");
        // params[availabilityString] = [9, 10, 11, 12, 13, 14, 15, 16, 17];
        // params[availabilityInteger] = [9, 10, 11, 12, 13, 14, 15, 16, 17];

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

module.exports = router;