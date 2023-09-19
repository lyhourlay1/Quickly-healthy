const express = require("express");
const app = express();
const db = require("./config/keys").mongoURI;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require('passport');
const fileUpload = require('express-fileupload');
var cors = require('cors')


if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
  app.get("/", (req, res) => {
    // res.setHeader("Access-Control-Allow-Credentials", "true");
    // res.setHeader("Access-Control-Allow-Origin", "true");
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
  app.use(cors({
    origin: '*'
}));
  app.use((req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://quickly-healthy-fe.onrender.com"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS,CONNECT,TRACE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, X-Content-Type-Options, Accept, X-Requested-With, Origin, Access-Control-Request-Method, Access-Control-Request-Headers"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Private-Network", true);
  //  Firefox caps this at 24 hours (86400 seconds). Chromium (starting in v76) caps at 2 hours (7200 seconds). The default value is 5 seconds.
  res.setHeader("Access-Control-Max-Age", 7200);

  next();
});
}



app.use(fileUpload({
  createParentPath: true
}));

const users = require("./routes/api/users");
const appointments = require("./routes/api/appointments");
const records = require("./routes/api/records");
const doctors = require("./routes/api/doctors");

mongoose
  .connect(db, { useNewUrlParser: true })
  // .then(() => console.log("Connected to MongoDB successfully"))
  // .catch((err) => console.log(err));

app.use(passport.initialize());
require('./config/passport')(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/users', users);
app.use('/api/appointments', appointments);
app.use('/api/records', records);
app.use('/api/doctors', doctors);
// app.use("/seed");

const port = process.env.PORT || 8000;
// app.listen(port, () => console.log(`Server is running on port ${port}`));
app.listen(port);
