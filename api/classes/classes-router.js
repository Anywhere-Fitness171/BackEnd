//* Import express and setup router
const express = require("express");
const router = express.Router();

//* Import models
const Classes = require("./classes-model");

//* Import Middleware
const checkDuplicateRecords = require("../middleware/checkDuplicateRecords");
const checkIfExists = require("../middleware/checkIfExists");
const restrictAccess = require("../middleware/restrictAccess");
const validateClassBody = require("../middleware/validateClassBody");

//* Setup API Endpoints

//-- [POST]
// Create a new class
router.post("/", validateClassBody, (req, res) => {
  const classObj = req.body;

  Classes.createClass(classObj)
    .then((newClass) => {
      res.status(201).json({ message: "Class created successfully!" });
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: "Error creating class", error: err.message });
    });
});

//-- [GET]
// Get ALL classes
router.get("/", (req, res) => {
  Classes.getAll()
    .then((classes) => {
      res.status(200).json(classes);
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: "Error getting classes", error: err.message });
    });
});

// Get class by ID
router.get("/:id", checkIfExists.classes(Classes), (req, res) => {
  const { classObj } = req;

  res.status(200).json(classObj);
});

//-- [PUT]
// Update/edit a class
router.put(
  "/:id",
  [restrictAccess, checkIfExists.classes(Classes), validateClassBody],
  (req, res) => {
    const { id } = req.params;
    const classObj = req.body;
    console.log(classObj);

    Classes.updateClass(classObj, id)
      .then(() => {
        res
          .status(200)
          .json({ message: "Class has been updated successfully" });
      })
      .catch((err) => {
        res
          .status(500)
          .json({ message: "Error updating class", error: err.message });
      });
  }
);

//-- [DELETE]
// Delete a class
router.delete(
  "/:id",
  [restrictAccess, checkIfExists.classes(Classes)],
  (req, res) => {
    const { id } = req.params;

    Classes.deleteClass(id)
      .then(() => {
        res.status(200).json({ message: "Class successfully deleted!" });
      })
      .catch((err) => {
        res
          .status(500)
          .json({ message: "Error deleting class", error: err.message });
      });
  }
);

//* Export router
module.exports = router;
