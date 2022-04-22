const express = require("express");
const bodyParser = require("body-parser");
const db = require("./src/app/api/models");

const app = express();
db.sequelize.sync();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

require("./src/app/api/routes/room.routes")(app);
require("./src/app/api/routes/user_input.routes")(app);
// set port, listen for requests
const PORT = 3316;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});