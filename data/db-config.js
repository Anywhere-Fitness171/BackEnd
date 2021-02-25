//* Import knex and config file
const knex = require("knex");
const knexConfig = require("../knexfile");

//* Setup the configuration to use
const environment = process.env.NODE_ENV || "development";
const config = knex(knexConfig[environment]);

//* Export the configuration
module.exports = config;
