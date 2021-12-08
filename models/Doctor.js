const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DoctorSchema = new Schema({
  name: {
    type: String,
    required: false
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
        let integerDate = nextDay.getDate();
        let stringDate = nextDay.toString().split(' ').slice(0, -5).join(' ');

        nextThirtyDays[stringDate] = [9, 10, 11, 12, 13, 14, 15, 16, 17];
      }
      return nextThirtyDays;
    }
  },
  availabilityInteger: {
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
        let integerDate = nextDay.toString().split(' ').slice(2, -6).join(' ');

        nextThirtyDays[integerDate] = [9, 10, 11, 12, 13, 14, 15, 16, 17];
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

// availablilityInteger: {
//   type: Object,
//   required: false,
//   default: {
//     7: [9, 10, 11, 12, 13, 14, 15, 16, 17],
//     31: [9, 10, 11, 12, 13, 14, 15, 16, 17],
//     3: [9, 10, 11, 12, 13, 14, 15, 16, 17],
//   }
// },

// schedule: {
//     type: Object,
//     required: false,
//     default: {
//       Monday: {
//         start: 9,
//         end: 17
//       },
//       Tuesday: {
//         start: 9,
//         end: 17
//       },
//       Wednesday: {
//         start: 9,
//         end: 17
//       },
//       Thursday: {
//         start: 9,
//         end: 17
//       },
//       Friday: {
//         start: 9,
//         end: 17
//       }
//     }
//   },

//   license: {
//     type: String,
//     required: false,
//   },
