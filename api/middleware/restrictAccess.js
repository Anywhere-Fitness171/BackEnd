const { json } = require("express");

//* This middleware is used to ensure access to certain endpoints is not accessible without a token
const jwt = require("jsonwebtoken");
const secrets = require("../config/secrets");

module.exports = (req, res, next) => {
  // The token is using the Bearer <token> approach
  const token = req.headers?.authorization?.split(" ")[1];

  if (token) {
    jwt.verify(token, secrets.jwtSecret, (err) => {
      if (err) {
        res.status(403).json({ message: "Invlid Token", error: err });
      } else {
        next();
      }
    });
  } else {
    res.status(403).json({ message: "Token not found" });
  }
};
