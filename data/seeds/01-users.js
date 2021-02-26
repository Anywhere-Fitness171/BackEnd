exports.seed = function (knex) {
  return knex("users").insert([
    {
      name: "Richard Rodriguez",
      username: "rmjuarez12",
      password: "$2a$10$uc.ISWHk9bSOoCjX2hoP.uIfY34D2tVRNYLdWtcLOOTrNKhiGC3zG",
      email: "email@gmail.com",
      role: "client",
    },
    {
      name: "John Doe",
      username: "john12",
      password: "$2a$10$uc.ISWHk9bSOoCjX2hoP.uIfY34D2tVRNYLdWtcLOOTrNKhiGC3zG",
      email: "email2@gmail.com",
      role: "client",
    },
    {
      name: "Juan Jose",
      username: "jose12",
      password: "$2a$10$uc.ISWHk9bSOoCjX2hoP.uIfY34D2tVRNYLdWtcLOOTrNKhiGC3zG",
      email: "email3@gmail.com",
      role: "instructor",
    },
  ]);
};
