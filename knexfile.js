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

  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
