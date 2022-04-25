const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./src/app/api/models");
const { room } = require("./src/app/api/models");
const app = express();
const { rooms } = require("./src/app//api/models/rooms.json");
const { ExceptionCode } = require("@capacitor/core");

const corsOptions = {
  origin: "http://localhost:3316",
};
app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Vent2U application." });
});

require("./src/app/api/routes/room.routes")(app);
require("./src/app/api/routes/user_input.routes")(app);
require("./src/app/api/routes/userinput_room.routes")(app);

const PORT = 3316;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
/*
const sendData = async () => {
  await db.sequelize.sync();

  await room.destroy({ truncate: true });
  await rooms.map((singelRoom) =>
    singelRoom.zone.map((zone) => room.create({ name: singelRoom.name, zone }))
  );
};
sendData();
*/
