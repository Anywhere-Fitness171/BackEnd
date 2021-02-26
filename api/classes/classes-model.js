//* Import DB config
const db = require("../../data/db-config");

//* Function to get all classes
function getAll() {
  return db("classes");
}

//* Function to get class by [parameter]
function getClassBy(parameter, value) {
  return db("classes")
    .where({ [parameter]: value })
    .first();
}

//* Function to create a new class
function createClass(classObj) {
  return db("classes")
    .insert(classObj)
    .then((id) => {
      return getClassBy("id", id);
    });
}

//* Function to delete a class
function deleteClass(id) {
  return db("classes").where({ id }).del();
}

//* Function to update a class
function updateClass(changes, id) {
  return db("classes").where({ id }).update(changes);
}

//* Export functions
module.exports = {
  getAll,
  getClassBy,
  createClass,
  deleteClass,
  updateClass,
};
