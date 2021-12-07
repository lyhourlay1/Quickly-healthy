const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DoctorSchema = new Schema({
    id: {
        type: String,
        required: false
    },
    license: {
        type: String,
        required: false,
    },
    specialty: {
        type: Array,
        required: false
    },
    name: {
        type: String,
        required: false,
    },
    address: {
        type: String,
        required: false
    },
    location: {
        type: String,
        required: false,
    },
    schedule: {
        type: Object,
        required: false,
        default: {
            Sunday: {
                start: new Date(),
                end: new Date()
            },
            Monday: {
                start: new Date(),
                end: new Date()
            },
            Tuesday: {
                start: new Date(),
                end: new Date()
            },
            Wednesday: {
                start: new Date(),
                end: new Date()
            },
            Thursday: {
                start: new Date(),
                end: new Date()
            },
            Friday: {
                start: new Date(),
                end: new Date()
            },
            Saturday: {
                start: new Date(),
                end: new Date()
            }
        }
    },
    dateCreated: {
        type: Date,
        default: Date.now,
    }
});

module.exports = Doctor = mongoose.model("doctors", DoctorSchema);
