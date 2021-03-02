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
  return getUserBy("id", id).then((user) => {
    if (user.role === "instructor") {
      return db("classes as c")
        .whereIn("c.id", function () {
          this.select("classes_id")
            .from("instructors_classes")
            .where("user_id", id);
        })
        .del()
        .then(() => {
          return db("users").where({ id }).del();
        });
    } else {
      return db("users").where({ id }).del();
    }
  });
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
