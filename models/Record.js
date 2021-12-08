const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RecordSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  /* This is needed in User db
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  ssn: {
    type: String,
    required: true,
  },
  insuranceNo: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  birthdate: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
   */

  conditions:{
    type: Array,
    required: false,
    default: []
  },
  medications:{
    type: Array,
    required: false,
    default: []
  },
  allergies:{
    type: Array,
    required: false,
    default: []
  },
  diabetes: {
    type: Boolean,
    required: false,
    default: false
  },
  polyuria: {
    type: Boolean,
    required: false,
    default: false
  },
  polydipsia: {
    type: Boolean,
    required: false,
    default: false
  },
  blurredVision: {
    type: Boolean,
    required: false,
    default: false
  },
  diaphoresis: {
    type: Boolean,
    required: false,
    default: false
  },
  agitation: {
    type: Boolean,
    required: false,
    default: false
  },
  tremor: {
    type: Boolean,
    required: false,
    default: false
  },
  palpitations: {
    type: Boolean,
    required: false,
    default: false
  },
  insomnia: {
    type: Boolean,
    required: false,
    default: false
  },
  confusion: {
    type: Boolean,
    required: false,
    default: false
  },
  lethargy: {
    type: Boolean,
    required: false,
    default: false
  },
  somnolence: {
    type: Boolean,
    required: false,
    default: false
  },
  amnesia: {
    type: Boolean,
    required: false,
    default: false
  },
  stupor: {
    type: Boolean,
    required: false,
    default: false
  },
  seizures: {
    type: Boolean,
    required: false,
    default: false
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Record = mongoose.model("record", RecordSchema);
