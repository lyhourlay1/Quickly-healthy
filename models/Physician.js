const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PhysicianSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: Object,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  specialty: {
    type: Array,
    required: true
  },
  insurances: {
    type: Array,
    required: true
  },
  availabilites: {
    type: Object,
    required: true
  }
});

module.exports = Physician = mongoose.model('physicians', PhysicianSchema);
