const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateRecordInput(data) {
  let errors = {};

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};