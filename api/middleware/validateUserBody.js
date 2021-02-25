//* This Middleware is to validate the user req.body, to ensure no empty data from Required fields are missing
const userLogin = (req, res, next) => {
  const user = req.body;

  if (!user.username || !user.password) {
    res
      .status(400)
      .json({ message: "Please provide a username and password!" });
  } else {
    next();
  }
};

const userReg = (req, res, next) => {
  const user = req.body;

  if (
    !user.name ||
    !user.email ||
    !user.username ||
    !user.password ||
    !user.role
  ) {
    res
      .status(400)
      .json({
        message: "Please provide a name, email, username, password, role!",
      });
  } else {
    next();
  }
};

module.exports = {
  userLogin,
  userReg,
};
