const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const Record = require("../../models/Record");
const validateRecordInput = require("../../validation/records");


const recordParams = (req) => {
    let schema = Object.keys(Record.schema.obj);
    return Object.fromEntries(Object.entries(req.body).filter(pair => {
        let [key, value] = pair;
        return schema.includes(key);
    }).map(pair => {
        let [key, value] = pair;
        if (["conditions", "medications", "allergies"].includes(key)) {
            if (value instanceof Array)
                return [key, value]
            else if (typeof value === 'string')
                return [key, value && JSON.parse(value) || []];
            else
                return [key, []]
        }
        return [key, value];
    }))
}


/** Gets all records
 * GET: http://localhost:5000/api/records
 * @response {Array} json - List of records
 */
router.get("/", (req, res) => {
    Record.find()
        .then((records) => res.json(records))
        .catch((err) => res.status(404).json("No records database was found"));
});


/** Gets all record from a user (Authentication Required)
 * GET: http://localhost:5000/api/records
 * @response {Array} json - List of records by user_id, sorted from most recent to least recent
 * @body - user {User}
 */
router.get("/", passport.authenticate("jwt", {session: false}), (req, res) => {
    Record.find({user: req.user.id})
        .then((records) => res.json(records))
        .catch((err) => res.status(404).json(`No records found with user ID: ${req.user.id}`));
});


/** Gets all records by user id
 * GET: http://localhost:5000/api/records/user/:user_id
 * @param {String} user_id - The user id
 * @response {Array} json - List of records by user_id
 */
router.get("/user/:user_id", (req, res) => {
    return Record.find({user: req.params.user_id})
        .then((records) => res.json(records))
        .catch(err => res.status(404).json(`No records found with user ID: ${req.params.user_id}`))
});


/** Gets record by the record id
 * GET: http://localhost:5000/api/records/:id
 * @param {String} id - The record id
 * @response {Object} json - The record
 */
router.get("/:id", (req, res) => {
    Record.findById(req.params.id)
        .then((record) => res.json(record))
        .catch((err) => res.status(404).json(`No record found with ID: ${req.params.id}`));
});


/** Create a record as a user (Authentication Required)
 * POST: http://localhost:5000/api/records
 * @response {Object} json - The record created
 * @body - user {User}, reason {String}, date {Date}, checkin {Date}
 */
router.post("/", passport.authenticate("jwt", {session: false}), (req, res) => {
        const {errors, isValid} = validateRecordInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }

        return User.findById(req.body.user.id).then(  // Checks if a user exists
            user => {
                const newRecord = new Record(recordParams(req));
                newRecord.user = req.params.user_id;
                newRecord.save().then((record) => res.json(record));
            }
        ).catch(
            err => res.status(404).json(`No user found with ID: ${req.body.user.id}`)
        )
    }
);


/** Create a record by user id
 * POST: http://localhost:5000/api/records/user/:user_id
 * @response {Object} json - The record created
 * @param {String} user_id - The user id
 * @body - reason {String}, date {Date}, checkin {Date}
 */
router.post("/user/:user_id", (req, res) => {
        const {errors, isValid} = validateRecordInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }

        return User.findById(req.params.user_id).then(  // Checks if a user exists
            user => {
                const newRecord = new Record(recordParams(req));
                newRecord.user = req.params.user_id;
                newRecord.save().then((record) => res.json(record));
            }
        ).catch(
            err => res.status(404).json(`No user found with ID: ${req.params.user_id}`)
        )
    }
);


/** Update a record as a user (Authentication required)
 * PATCH: http://localhost:5000/api/records/:id
 * @response {Object} json - The record's previous value
 * @param {String} id - The record id
 * @body - user {User}, reason {String}, date {Date}, checkin {Date}
 */
router.patch("/:id", passport.authenticate("jwt", {session: false}), (req, res) => {
        const {errors, isValid} = validateRecordInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }

        return Record.findByIdAndUpdate(req.record.id, recordParams(req))
            .then(record => res.json(record)) // will not return the updated but the previous version
            .catch(err => res.status(404).json(`Unable to update record with ID: ${req.params.id}`))
    }
);


/** Update a record by record id
 * PATCH: http://localhost:5000/api/records/:id
 * @response {Object} json - The record's previous value
 * @param {String} id - The record id
 * @body - reason {String}, date {Date}, checkin {Date}
 */
router.patch("/:id/update", (req, res) => {
        const {errors, isValid} = validateRecordInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }

        return Record.findByIdAndUpdate(req.params.id, recordParams(req))
            .then(record => res.json(record)) // will not return the updated but the previous version
            .catch(err => res.status(404).json(`Unable to update record with ID: ${req.params.id}`))
    }
);


/** Delete an record by id (Authentication Required)
 * DELETE: http://localhost:5000/api/records/:id
 * @response {Object} json - The record deleted
 * @param {String} id - The record id
 */
router.delete("/:id", passport.authenticate("jwt", {session: false}), (req, res) => {
        return Record.findByIdAndDelete(req.params.id)
            .then(record => res.json(record)) // will not return the updated but the previous version
            .catch(err => res.status(404).json(`Unable to delete record with ID: ${req.params.id}`))
    }
);

/** Delete an record by id
 * DELETE: http://localhost:5000/api/records/:id/delete
 * @response {Object} json - The record deleted
 * @param {String} id - The record id
 */
router.delete("/:id/delete", (req, res) => {
        return Record.findByIdAndDelete(req.params.id)
            .then(record => res.json(record)) // will not return the updated but the previous version
            .catch(err => res.status(404).json(`Unable to delete record with ID: ${req.params.id}`))
    }
);


module.exports = router;