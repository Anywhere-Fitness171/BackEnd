//* Import db configuration
const db = require("../../data/db-config");

//* Function to get user by [parameter]
function getUserBy(parameter, value) {
  return db("users")
    .select("id", "name", "username", "email")
    .where({ [parameter]: value })
    .first();
}

//* Function to register a user
function createUser(user) {
  return db("users")
    .insert(user)
    .then((id) => {
      return getUserBy("id", id);
    });
}

//* Function to delete user
function deleteUser(id) {
  return db("users").where({ id }).del();
}

//* Export functions
module.exports = {
  getUserBy,
  createUser,
  deleteUser,
};
