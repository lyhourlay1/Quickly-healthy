const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateRecordInput(record) {
  let errors = {};

  /*
    if (!record.name || Validator.isEmpty(record.name))
        errors.name = "A record's name is required";

    if (!record.license || Validator.isEmpty(record.license))
        errors.license = "A license must be provided"

    if (!record.location || Validator.isEmpty(record.location))
        errors.location = "A location must be provided"

    if (!record.address || Validator.isEmpty(record.address))
        errors.address = "An address must be provided"
     */

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};