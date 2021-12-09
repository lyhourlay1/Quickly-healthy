const express = require("express");
const app = express();
const db = require("./config/keys").mongoURI;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require('passport');
const path = require("path");
const fs = require('fs');


if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

const users = require("./routes/api/users");
const tweets = require("./routes/api/tweets");
const appointments = require("./routes/api/appointments");
const records = require("./routes/api/records");
const doctors = require("./routes/api/doctors");

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => console.log(err));

app.use(passport.initialize());
require('./config/passport')(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


/* Storage Files */

const fileUpload = require('express-fileupload');

app.use(fileUpload({
  createParentPath: true
}));
/* End of Storage Files */


app.use("/api/users", users);
app.use("/api/tweets", tweets);
app.use("/api/appointments", appointments);
app.use("/api/records", records);
app.use("/api/doctors", doctors);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
