//* Import express and setup router
const express = require("express");
const router = express.Router();

//* Import necessary security/authentication modules
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secrets = require("../config/secrets");

//* Import models
const User = require("./users-model");

//* Import Middleware
const validateUserBody = require("../middleware/validateUserBody");
const checkDuplicateRecords = require("../middleware/checkDuplicateRecords");
const checkIfExists = require("../middleware/checkIfExists");

//* Setup Endpoints

//-- [POST]
// User Registration
router.post(
  "/register",
  [validateUserBody.userReg, checkDuplicateRecords.users(User)],
  (req, res) => {
    const userData = req.body;

    // Hash the password
    const hash = bcrypt.hashSync(userData.password, 10);
    userData.password = hash;

    User.createUser(userData)
      .then((user) => {
        res
          .status(201)
          .json({ message: "User has been created successfully!" });
      })
      .catch((err) => {
        res
          .status(500)
          .json({ message: "Error registering user in", error: err.message });
      });
  }
);

// User Login
router.post("/login", validateUserBody.userLogin, (req, res) => {
  const { username, password } = req.body;

  User.getUserBy("username", username)
    .then((user) => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);
        res
          .status(200)
          .json({ message: `Welcome ${user.name}`, userId: user.id, token });
      } else {
        res.status(403).json({ message: "Invalid username or password" });
      }
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: "Error logging user in", error: err.message });
    });
});

//-- [PUT]
// User Edit
router.put("/:id", checkIfExists.users(User), (req, res) => {});

//-- [DELETE]
// User Delete
router.delete("/:id", checkIfExists.users(User), (req, res) => {
  const { id } = req.params;

  User.deleteUser(id)
    .then(() => {
      res.status(200).json({ message: "User has been deleted successfully!" });
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: "Error logging user in", error: err.message });
    });
});

//* Function to create the signature for the token
function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username,
  };

  const options = {
    expiresIn: "1h",
  };

  const secret = secrets.jwtSecret;

  return jwt.sign(payload, secret, options);
}

//* Export Router
module.exports = router;
