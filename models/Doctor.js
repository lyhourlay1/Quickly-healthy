const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DoctorSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: Array,
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

module.exports = Doctor = mongoose.model('doctors', DoctorSchema);