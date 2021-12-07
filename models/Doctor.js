const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DoctorSchema = new Schema({
    license: {
        type: String,
        required: true,
    },
    specialty: {
        type: Array,
        required: true
    },
    name: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    schedule: {
        type: Array,
        required: true
    },
    dateCreated: {
        type: Date,
        default: Date.now,
    }
});

module.exports = Doctor = mongoose.model("doctors", DoctorSchema);
