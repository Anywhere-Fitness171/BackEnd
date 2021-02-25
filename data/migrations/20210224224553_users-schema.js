//* Setup the main database schema
exports.up = function (knex) {
  return knex.schema.createTable("users", (tbl) => {
    tbl.increments();
    tbl.string("name").notNullable();
    tbl.string("email").notNullable();
    tbl.string("username").notNullable();
    tbl.string("password").notNullable();
    tbl.string("role");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("users");
};
