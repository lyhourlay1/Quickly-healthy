const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AppointmentSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  // doctor: {
  //   type: Schema.Types.ObjectId,
  //   ref: "doctors"
  // },
  reason: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true
  },
  checkin: {
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
  checkout: { // need to know when this appointment ends for another appointment to occur or just assume every appointment is 1 hr
    type: Date,
    required: false,
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  }
});

module.exports = User = mongoose.model("appointments", AppointmentSchema);