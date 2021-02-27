//* Import DB config
const db = require("../../data/db-config");

//* Function to get all classes
function getAll() {
  return db("classes as c")
    .innerJoin("instructors_classes as ic", "ic.classes_id", "c.id")
    .innerJoin("users as u", "ic.user_id", "u.id")
    .select("c.*", "u.name as instructor", "ic.user_id");
}

//* Function to get all attendees
function getAttendees(id) {
  return db("classes as c")
    .where("c.id", id)
    .innerJoin("attendees as at", "at.classes_id", "c.id")
    .innerJoin("users as u", "at.user_id", "u.id")
    .select(
      "c.id as class_id",
      "c.name as class_name",
      "u.id as user_id",
      "u.name as attendee_name",
      "u.email",
      "u.username"
    );
}

//* Function to get the total amount of attendees of a class
function getAttendeesNum(id) {
  return db("classes as c")
    .where("c.id", id)
    .innerJoin("attendees as at", "at.classes_id", "c.id")
    .count("at.user_id as attendees_amount");
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
  getAttendees,
  getAttendeesNum,
};
