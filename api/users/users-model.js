//* Import db configuration
const db = require("../../data/db-config");

//* Function to get all users TEMP!!
function getAll() {
  return db("users");
}

//* Function to get user by [parameter]
function getUserBy(parameter, value) {
  return db("users")
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

//* Function to update user
function updateUser(changes, id) {
  return db("users").where({ id }).update(changes);
}

//* Export functions
module.exports = {
  getUserBy,
  createUser,
  deleteUser,
  updateUser,
  getAll,
};
