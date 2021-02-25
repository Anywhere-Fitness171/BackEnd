//* Import Express and setup server
const express = require("express");
const server = express();

//* Ensure Express is able to parse JSON data
server.use(express.json());

//* Import and setup CORS
const cors = require("cors");
server.use(cors());

//* Import Routers
const usersRouter = require("./users/users-router");

//* Setup Routers
server.use("/api/users", usersRouter);

//* Export server
module.exports = server;
