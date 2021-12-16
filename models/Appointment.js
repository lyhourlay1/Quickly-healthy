const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AppointmentSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "users",
    required: true
  },
  doctor_id: {
    type: Schema.Types.ObjectId,
    ref: "doctors"
  },
  reason: {
    type: String,
    required: true,
  },
  date: {
    type: String,
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
  selectedSlot: {
    type: Number,
    required: false
  },
  name: {
    type: String,
    required: false
  },
  check_in:{
    type: Boolean,
    default: false
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  }
});

module.exports = Appointment = mongoose.model("appointments", AppointmentSchema);
