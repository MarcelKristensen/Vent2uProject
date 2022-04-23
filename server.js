const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./src/app/api/models");
const app = express();

const corsOptions = {
  origin: "http://localhost:3316"
};
app.use(cors(corsOptions));

db.sequelize.sync();

app.use(bodyParser.json());
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Vent2U application." });
});

require("./src/app/api/routes/room.routes")(app);
require("./src/app/api/routes/user_input.routes")(app);
// set port, listen for requests
const PORT = 3316;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});