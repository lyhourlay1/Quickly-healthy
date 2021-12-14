const Doctor = require('./models/Doctor');
const mongoose = require("mongoose");
const db = require("./config/keys").mongoURI;

// const date9 = new Date('December 17, 1995 09:00:00').getHours();
// const date12 = new Date('December 17, 1995 12:00:00');
// const date17 = new Date('December 17, 1995 17:00:00');
// const date15 = new Date('December 17, 1995 15:00:00');
// const date11 = new Date('December 17, 1995 11:00:00');

const insuranceCompanies = [
  "Aetna",
  "Blue Cross Blue Shield",
  "Blue Shield of CA",
  "Cigna",
  "UnitedHealthCare",
  "Kaiser Permanente",
  "Medicare",
  "Medi-Cal",
  "Insurance not required",
  "Sutter Health",
  "Health Net",
  "Centene",
  "CVS Health",
  "Humana"
];

const doctorSpecialties = [
  "Family Medicine",
  "Pediatrician",
  "Dermatologist",
  "Neurologist",
  "Physical Therapist",
  "Urologist",
  "Psychiatrist",
  "Radiologist",
  "Oncologist",
  "Allergy and Immunologist",
  "Cardiologist",
  "Endocrinologist",
  "Gasteroenterologist",
  "Palliative Care Specialists",
  "Internist",
  "Obstetrician and Gynecologist",
  "Optometrist",
  "General Surgeon",
  "Otolaryngologist",
];

const shuffle = (array) => {
  let currIdx = array.length, randIdx;

  while (currIdx != 0) {
    randIdx = Math.floor(Math.random() * currIdx);
    currIdx--;

    [array[currIdx], array[randIdx]] = [array[randIdx], array[currIdx]];
  }

  return array;
};

const sample = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

// return random subset arr of size length and sorts it
const randSubset = (arr, size) => {
  let sub = shuffle(arr).slice(0, size).sort();
  if (sub.length === 0) return sample(arr);
  return sub;
};

const doctors = [
  new Doctor({
    name: "doctor1",
    address: "6480 Weathers Pl #106, San Diego, CA 92121",
    location: [-122.5057681778429, 37.789066681921675], // [longitude, latitude]
    specialty: sample(doctorSpecialties),
    insurances: randSubset(
      insuranceCompanies,
      Math.ceil(Math.random() * insuranceCompanies.length)
    ),
    availabilites: {
      "Monday Jan 21": [10, 11, 12, 13, 14],
      "Tuesday Jan 22": [10, 11, 12, 13, 14],
      "Wednesday Jan 23": [10, 11, 12, 13, 14]
    },
  }),
  new Doctor({
    name: "doctor2",
    address: "6480 Weathers Pl #106, San Diego, CA 92121",
    location: [-122.44896470689393, 37.75276357933445],
    specialty: sample(doctorSpecialties),
    insurances: randSubset(
      insuranceCompanies,
      Math.ceil(Math.random() * insuranceCompanies.length)
    ),
    availabilites: {
      Monday: { start: 8, end: 11 },
      Tuesday: { start: 14, end: 17 },
      Wednesday: { start: 9, end: 13 },
    },
  }),
  new Doctor({
    name: "doctor3",
    address: "6480 Weathers Pl #106, San Diego, CA 92121",
    location: [-122.43279047072105, 37.777547798227154],
    specialty: sample(doctorSpecialties),
    insurances: randSubset(
      insuranceCompanies,
      Math.ceil(Math.random() * insuranceCompanies.length)
    ),
    availabilites: {
      Monday: { start: 8, end: 11 },
      Tuesday: { start: 14, end: 17 },
      Wednesday: { start: 9, end: 13 },
    },
  }),
  new Doctor({
    name: "doctor4",
    address: "6480 Weathers Pl #106, San Diego, CA 92121",
    location: [-122.42618213880252, 37.766726033405746],
    specialty: sample(doctorSpecialties),
    insurances: randSubset(
      insuranceCompanies,
      Math.ceil(Math.random() * insuranceCompanies.length)
    ),
    availabilites: {
      Monday: { start: 8, end: 11 },
      Tuesday: { start: 14, end: 17 },
      Wednesday: { start: 9, end: 13 },
    },
  }),
  new Doctor({
    name: "doctor5",
    address: "6480 Weathers Pl #106, San Diego, CA 92121",
    location: [-122.40622531560443, 37.80483011318142],
    specialty: sample(doctorSpecialties),
    insurances: randSubset(
      insuranceCompanies,
      Math.ceil(Math.random() * insuranceCompanies.length)
    ),
    availabilites: {
      Monday: { start: 8, end: 11 },
      Tuesday: { start: 14, end: 17 },
      Wednesday: { start: 9, end: 13 },
    },
  }),
  new Doctor({
    name: "doctor6",
    address: "6480 Weathers Pl #106, San Diego, CA 92121",
    location: [-122.38753727150544, 37.76988455204271],
    specialty: sample(doctorSpecialties),
    insurances: randSubset(
      insuranceCompanies,
      Math.ceil(Math.random() * insuranceCompanies.length)
    ),
    availabilites: {
      Monday: { start: 8, end: 11 },
      Tuesday: { start: 14, end: 17 },
      Wednesday: { start: 9, end: 13 },
    },
  }),
  new Doctor({
    name: "doctor7",
    address: "6480 Weathers Pl #106, San Diego, CA 92121",
    location: [-122.40604602461732, 37.80651746619424],
    specialty: sample(doctorSpecialties),
    insurances: randSubset(
      insuranceCompanies,
      Math.ceil(Math.random() * insuranceCompanies.length)
    ),
    availabilites: {
      Monday: { start: 8, end: 11 },
      Tuesday: { start: 14, end: 17 },
      Wednesday: { start: 9, end: 13 },
    },
  }),
  new Doctor({
    name: "doctor8",
    address: "6480 Weathers Pl #106, San Diego, CA 92121",
    location: [-122.48839155195866, 37.76905339221309],
    specialty: sample(doctorSpecialties),
    insurances: randSubset(
      insuranceCompanies,
      Math.ceil(Math.random() * insuranceCompanies.length)
    ),
    availabilites: {
      Monday: { start: 8, end: 11 },
      Tuesday: { start: 14, end: 17 },
      Wednesday: { start: 9, end: 13 },
    },
  }),
  new Doctor({
    name: "doctor9",
    address: "6480 Weathers Pl #106, San Diego, CA 92121",
    location: [-122.40825780661905, 37.794305657183145],
    specialty: sample(doctorSpecialties),
    insurances: randSubset(
      insuranceCompanies,
      Math.ceil(Math.random() * insuranceCompanies.length)
    ),
    availabilites: {
      Monday: { start: 8, end: 11 },
      Tuesday: { start: 14, end: 17 },
      Wednesday: { start: 9, end: 13 },
    },
  }),
  new Doctor({
    name: "doctor10",
    address: "6480 Weathers Pl #106, San Diego, CA 92121",
    location: [-122.47351735088884, 37.75713773155823],
    specialty: sample(doctorSpecialties),
    insurances: randSubset(
      insuranceCompanies,
      Math.ceil(Math.random() * insuranceCompanies.length)
    ),
    availabilites: {
      Monday: { start: 8, end: 11 },
      Tuesday: { start: 14, end: 17 },
      Wednesday: { start: 9, end: 13 },
    },
  }),
  new Doctor({
    name: "doctor11",
    address: "6480 Weathers Pl #106, San Diego, CA 92121",
    location: [-122.41453459469342, 37.70785296055047], // [longitude, latitude]
    specialty: sample(doctorSpecialties),
    insurances: randSubset(
      insuranceCompanies,
      Math.ceil(Math.random() * insuranceCompanies.length)
    ),
    availabilites: {
      Monday: { start: 9, end: 14 },
      Tuesday: { start: 13, end: 17 },
      Thursday: { start: 10, end: 16 },
    },
  }),
  new Doctor({
    name: "doctor12",
    address: "6480 Weathers Pl #106, San Diego, CA 92121",
    location: [-122.39343775145362, 37.73039523481756], // [longitude, latitude]
    specialty: sample(doctorSpecialties),
    insurances: randSubset(
      insuranceCompanies,
      Math.ceil(Math.random() * insuranceCompanies.length)
    ),
    availabilites: {
      Monday: { start: 9, end: 14 },
      Tuesday: { start: 13, end: 17 },
      Thursday: { start: 10, end: 16 },
    },
  }),
  new Doctor({
    name: "doctor13",
    address: "6480 Weathers Pl #106, San Diego, CA 92121",
    location: [-122.39735087582618, 37.78830076650904], // [longitude, latitude]
    specialty: sample(doctorSpecialties),
    insurances: randSubset(
      insuranceCompanies,
      Math.ceil(Math.random() * insuranceCompanies.length)
    ),
    availabilites: {
      Monday: { start: 9, end: 14 },
      Tuesday: { start: 13, end: 17 },
      Thursday: { start: 10, end: 16 },
    },
  }),
  new Doctor({
    name: "doctor14",
    address: "6480 Weathers Pl #106, San Diego, CA 92121",
    location: [-122.43018709225478, 37.785409928291045], // [longitude, latitude]
    specialty: sample(doctorSpecialties),
    insurances: randSubset(
      insuranceCompanies,
      Math.ceil(Math.random() * insuranceCompanies.length)
    ),
    availabilites: {
      Monday: { start: 9, end: 14 },
      Tuesday: { start: 13, end: 17 },
      Thursday: { start: 10, end: 16 },
    },
  }),
  new Doctor({
    name: "doctor15",
    address: "6480 Weathers Pl #106, San Diego, CA 92121",
    location: [-122.44837318466766, 37.78554656642497], // [longitude, latitude]
    specialty: sample(doctorSpecialties),
    insurances: randSubset(
      insuranceCompanies,
      Math.ceil(Math.random() * insuranceCompanies.length)
    ),
    availabilites: {
      Monday: { start: 9, end: 14 },
      Tuesday: { start: 13, end: 17 },
      Thursday: { start: 10, end: 16 },
    },
  }),
  new Doctor({
    name: "doctor16",
    address: "6480 Weathers Pl #106, San Diego, CA 92121",
    location: [-122.4549644147198, 37.725554206704984], // [longitude, latitude]
    specialty: sample(doctorSpecialties),
    insurances: randSubset(
      insuranceCompanies,
      Math.ceil(Math.random() * insuranceCompanies.length)
    ),
    availabilites: {
      Monday: { start: 9, end: 14 },
      Tuesday: { start: 13, end: 17 },
      Thursday: { start: 10, end: 16 },
    },
  }),
  new Doctor({
    name: "doctor17",
    address: "6480 Weathers Pl #106, San Diego, CA 92121",
    location: [-122.50534723409108, 37.735045887170685], // [longitude, latitude]
    specialty: sample(doctorSpecialties),
    insurances: randSubset(
      insuranceCompanies,
      Math.ceil(Math.random() * insuranceCompanies.length)
    ),
    availabilites: {
      Monday: { start: 9, end: 14 },
      Tuesday: { start: 13, end: 17 },
      Thursday: { start: 10, end: 16 },
    },
  }),
  new Doctor({
    name: "doctor18",
    address: "6480 Weathers Pl #106, San Diego, CA 92121",
    location: [-122.51085648044035, 37.76054056441713], // [longitude, latitude]
    specialty: sample(doctorSpecialties),
    insurances: randSubset(
      insuranceCompanies,
      Math.ceil(Math.random() * insuranceCompanies.length)
    ),
    availabilites: {
      Monday: { start: 9, end: 14 },
      Tuesday: { start: 13, end: 17 },
      Thursday: { start: 10, end: 16 },
    },
  }),
];

// connect mongoose
mongoose
  .connect(db, { useNewUrlParser: true })
  .catch(err => {
    process.exit(1);
  })
  .then(() => {
  });
//save your data. this is an async operation
//after you make sure you seeded all the products, disconnect automatically\
// db.collection("doctors").drop();

doctors.map(async (p, index) => {
    await p.save((err, result) => {
    if (index === doctors.length - 1) {
      mongoose.disconnect();
    }
  });
});

