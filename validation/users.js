const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateUserInput(user) {
  let errors = {};
  if (Object.keys(user).length === 0) {
    errors.data = 'Input must be given to update a user';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};
