const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateUserInput(user) {
  let errors = {};
  if (Validator.isEmpty(user.insurance)) {
    errors.reason = "The insurance field can not be empty";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};
