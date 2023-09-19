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
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Origin", "true");
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
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
// app.use(cors({
//   origin: ["http://localhost:3000", "https://quickly-healthy-fe.onrender.com"]
// }))
// app.use("/seed");

var allowedOrigins = ['http://localhost:3000"',
                      'https://quickly-healthy-fe.onrender.com',
                   ];

app.use(cors({

  origin: function(origin, callback){
    // allow requests with no origin
    // (like mobile apps or curl requests)
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
      var msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },

  exposedHeaders: ['Content-Length', 'X-Foo', 'X-Bar'],

  credentials: true,
}));

app.use(cookieParser());

const port = process.env.PORT || 8000;
// app.listen(port, () => console.log(`Server is running on port ${port}`));
app.listen(port);
