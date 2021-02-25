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
      directory: "./api/seeds",
    },
  },

  testing: {
    ...sharedConfig,
    connection: { filename: "./data/test.db3" },
  },

  production: {
    client: "mysql",
    connection: {
      host: "192.185.82.211",
      user: "ab4205_express",
      password: "duYTITqjRObW",
      database: "ab4205_express",
    },
    pool: { min: 0, max: 7 },
    migrations: {
      directory: "./data/migrations",
    },
  },
};
