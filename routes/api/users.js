const express = require('express');
const router = express.Router();
const User = require('../../models/User');
const bcrypt = require('bcryptjs');
const keys = require('../../config/keys');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');
const validateUserInput = require('../../validation/users')

router.get('/', (req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(404).json({ nousersfound: 'No users found' }));
});

const userParams = (req) => {
  let schema = Object.keys(User.schema.obj);
  return Object.fromEntries(Object.entries(req.body).filter(pair => {
      let [key, value] = pair;
      return schema.includes(key);
  }));
}


router.post('/register', (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ handle: req.body.handle }).then((user) => {
    if (user) {
      errors.handle = 'User already exists';
      return res.status(400).json(errors);
    } else {
      const newUser = new User({
        handle: req.body.handle,
        email: req.body.email,
        password: req.body.password,
        insurance: req.body.insurance
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then((user) => {
                const payload = Object.fromEntries(Object.entries(user._doc).filter(pair => pair[0] !== "password"));

              jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
                res.json({
                  success: true,
                  token: 'Bearer ' + token,
                  payload,
                });
              });
            })
            .catch((err) => console.log(err));
        });
      });
    }
  });
});

router.post('/login', (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email }).then((user) => {
    if (!user) {
      errors.email = 'This user does not exist';
      return res.status(400).json(errors);
    }

    bcrypt.compare(password, user.password).then((isMatch) => {
        if (isMatch) {
        const payload = Object.fromEntries(Object.entries(user._doc).filter(pair => pair[0] !== "password"));

        console.log(user);
        jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {

          res.json({
            success: true,
            token: 'Bearer ' + token,
            payload
          });
        });
      } else {
        errors.password = 'Incorrect password';
        return res.status(400).json(errors);
      }
    });

  });
});

router.patch("/:id", (req, res) => {
  const {errors, isValid} = validateUserInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  return User.findByIdAndUpdate(req.params.id, userParams(req))
    .then((user) => res.json(user))
    .catch((err) => res.status(404).json(`No user found with ID: ${req.params.id}`));
});

/** Get the current user (Authentication Required)
 * GET: http://localhost:5000/api/users/current
 * @response {Object} json - The current user
 */
router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
    let userId = req.user && req.user._id || null;
    if (!userId)
        return res.status(404).json(`No user is logged in`)

    User.findById(userId)
        .then(user => res.json(user))
        .catch(err => res.status(404).json(`No user with ID: ${userId} does not exist in database`))
});


/** Get user
 * GET: http://localhost:5000/api/users/:id
 * @response {Object} json - The user
 */
router.get("/:id", (req, res) => {
        User.findById(req.params.id)
            .then(({_id, email, image, files}) => res.json({_id, email, image, files}))
            .catch((err) => res.status(404).json(`No user found with ID: ${req.params.id}`));
    }
);

/** Get an image
 * GET: http://localhost:5000/api/users/image
 * @response {Object} json - The image of a user
 */
router.get("/:id/image", (req, res) => {
      User.findById(req.params.id)
          .then((user) => res.json(user.image))
          .catch((err) => res.status(404).json(`No user found with ID: ${req.params.id}`));
    }
);


/** Get Files
 * GET: http://localhost:5000/api/users/files
 * @response {Object} json - The files from a user
 */
router.get("/:id/files", (req, res) => {
      User.findById(req.params.id)
          .then((user) => res.json(user.files))
          .catch((err) => res.status(404).json(`No user found with ID: ${req.params.id}`));
    }
);


/** Upload an image
 * POST: http://localhost:5000/api/users/:id/image
 * @response {Object} json - The user's previous state
 */
router.post("/:id/image", (req, res) => {
      if (!req.files)
        return res.send("You must select a file");

      User.findById(req.params.id)
          .then((user) => {
            user.image = req.files.image;

            return User.findByIdAndUpdate(req.params.id, user)
                .then(user => res.json(req.files))
                .catch(err => res.status(404).json(`Unable to update user with ID: ${req.params.id}`))
          })
          .catch((err) => res.status(404).json(`No user found with ID: ${req.params.id}`));
    }
);

/** Upload files
 * POST: http://localhost:5000/api/users/:id/files
 * @response {Object} json - The user's previous state
 */
router.post("/:id/files", (req, res) => {
      if (!req.files)
        return res.send("You must select a file");

      User.findById(req.params.id)
          .then((user) => {
            user.files = user.files || {};
            for (let key in req.files){
                user.files[key] = req.files[key];
                if (user.files[key].mimetype === "text/plain")
                    user.files[key].mimetype = "text/html";
            }
            return User.findByIdAndUpdate(req.params.id, user)
                .then(user => res.json(req.files)) // will not return the updated but the previous version
                .catch(err => res.status(404).json(`Unable to update user with ID: ${req.params.id}`))
          })
          .catch((err) => res.status(404).json(`No user found with ID: ${req.params.id}`));
    }
);


module.exports = router;
