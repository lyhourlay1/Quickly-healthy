const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DoctorSchema = new Schema({
  name: {
    type: String,
    required: false,
  },
  specialty: {
    type: Array,
    required: false
  },
  insurances: {
    type: Array,
    required: true
  },
  address: {
    type: String,
    required: false
  },
  location: {
    type: Array,
    required: true
  },
  image: {
    type: Object,
    required: false
  },
  files: {
    type: Object,
    required: false
  },
  availabilityString: {
    type: Object,
    required: false,
    default: function () {
      let today = Date.now();
      let date = new Date(today);
      let nextThirtyDays = {};
      let nextDay = new Date(date);

      for (let i = 0; i < 30; i++) {
        nextDay.setDate(nextDay.getDate() + 1);

        nextDay = new Date(nextDay);
        let stringDate = nextDay.toString().split(' ').slice(0, -5).join(' ');
        if (!nextThirtyDays[stringDate]) {
          nextThirtyDays[stringDate] = [9, 10, 11, 12, 13, 14, 15, 16, 17];
        }
        // nextThirtyDays[stringDate] = [9, 10, 11, 12, 13, 14, 15, 16, 17];
      }
      return nextThirtyDays;
    }
  },
  dateCreated: {
    type: Date,
    default: Date.now
  }
});

module.exports = Doctor = mongoose.model('doctors', DoctorSchema);
