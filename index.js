//* Import server
const server = require("./api/server");

//* Port to listen to
const PORT = process.env.PORT || 5000;

//* Start server
server.listen(PORT, () => {
  console.log(`\n=== Server started at port 5000 ===\n`);
});
