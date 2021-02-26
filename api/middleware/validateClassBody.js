//* This middleware will be used to ensure that there is no empty data when creating a class
module.exports = (req, res, next) => {
  const classData = req.body;

  if (
    !classData.name ||
    !classData.type ||
    !classData.date_time ||
    !classData.duration ||
    !classData.location ||
    !classData.max_size
  ) {
    res.status(400).json({
      message:
        "Please make sure to include name, type, date/time, duration, location, and max class size",
    });
  } else {
    next();
  }
};
