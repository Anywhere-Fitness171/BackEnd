//* Shared configuration for development and testing
const sharedConfig = {
  client: "sqlite3",
  useNullAsDefault: true,
  migrations: {
    directory: "./data/migrations",
  },
  pool: {
    afterCreate: (conn, done) => conn.run("PRAGMA foreign_keys = ON", done),
  },
};

//* Export the configuration types
module.exports = {
  development: {
    ...sharedConfig,
    connection: {
      filename: "./data/anywhere-fitness.db3",
    },
    seeds: {
      directory: "./data/seeds",
    },
  },

  testing: {
    ...sharedConfig,
    connection: { filename: "./data/test.db3" },
  },

  production: {
    client: process.env.DB_CLIENT,
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
    },
    pool: { min: 0, max: 7 },
    migrations: {
      directory: "./data/migrations",
    },
  },
};
