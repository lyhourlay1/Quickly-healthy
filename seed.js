const Physician = require('./models/Physician');
const mongoose = require("mongoose");
const db = require("./config/keys").mongoURI;
// const date9 = new Date('December 17, 1995 09:00:00').getHours();
// const date12 = new Date('December 17, 1995 12:00:00');
// const date17 = new Date('December 17, 1995 17:00:00');
// const date15 = new Date('December 17, 1995 15:00:00');
// const date11 = new Date('December 17, 1995 11:00:00');

const physicians = [   
  new Physician({
    name: "doctor1",
    address: "6480 Weathers Pl #106, San Diego, CA 92121",
    location: {latitude: 32.905810, longitude: -117.178950},
    specialty: ["family doctor"],
    insurances: ["Aetna Life Insurance Company", "American National Insurance Company", "Kaiser Permanente Insurance Company"],
    availabilites: {Monday: {start:9, end: 14}, Tuesday: {start: 13, end: 17}, Thursday: {start:10, end:16}}
    }), new Physician({
    name: "doctor2",
    address: "6480 Weathers Pl #106, San Diego, CA 92121",
    location: {latitude: 32.905810, longitude: -117.178950},
    specialty: ["family doctor"],
    insurances: ["Aetna Life Insurance Company", "American National Insurance Company", "Kaiser Permanente Insurance Company"],
    availabilites: {Monday: {start:8, end:11}, Tuesday: {start:14, end:17}, Wednesday: {start: 9, end:13 }}
})]
// connect mongoose
mongoose
  .connect(db, { useNewUrlParser: true })
  .catch(err => {
    // console.log(err.stack);
    process.exit(1);
  })
  .then(() => {
    // console.log("connected to db in development environment");
  });
//save your data. this is an async operation
//after you make sure you seeded all the products, disconnect automatically\
// db.collection("physicians").drop();

physicians.map(async (p, index) => {
    await p.save((err, result) => {
    if (index === physicians.length - 1) {
      console.log("DONE!");
      debugger
      mongoose.disconnect();
    }
  });
});

