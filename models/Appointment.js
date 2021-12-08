const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AppointmentSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  doctor: {
    type: Schema.Types.ObjectId,
    ref: "doctors"
  },
  id: {
    type: String,
    required: false
  },
  date: {
    type: Date,
    required: true
  },
  start: {
    type: Date,
    required: false,
  },
  diagnosis: {
    type: String,
    required: false
  },
  medication: {
    type: String,
    required: false
  },
  instructions: {
    type: String,
    required: false
  },
  end: { // need to know when this appointment ends for another appointment to occur or just assume every appointment is 1 hr
    type: Date,
    required: false,
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  }
});

module.exports = Appointment = mongoose.model("appointments", AppointmentSchema);
