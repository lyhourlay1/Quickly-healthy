const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AppointmentSchema = new Schema({
  patientId: {
    type: String,
    required: true,
  },
  doctorId: {
    type: String,
    required: true,
  },
  reason: {
    stype: String,
    required: true,
  },
  checkin: {
    type: Date,
    required: true,
  },
  checkout: {
    type: Date,
    required: true,
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  }
});

module.exports = User = mongoose.model("appointments", AppointmentSchema);
