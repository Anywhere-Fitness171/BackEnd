//* This Middleware helps to validate and check if a certain record exists in the database
const users = (usersModel) => (req, res, next) => {
  const { id } = req.params;

  usersModel
    .getUserBy("id", id)
    .then((user) => {
      if (user) {
        next();
      } else {
        res.status(404).json({ message: "User not found!" });
      }
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: "Error logging user in", error: err.message });
    });
};

//* Export functions
module.exports = {
  users,
};
