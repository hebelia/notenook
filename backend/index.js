const server = require("./src/server");
//database connection
const { conn } = require("./src/db.js");
const { PORT } = process.env;

const port = PORT || 3001;

conn
  .sync({
    // force: true
    force: false,
  })
  .then(() => {
    //listen
    server.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  })
  .catch((error) => console.error(error));
