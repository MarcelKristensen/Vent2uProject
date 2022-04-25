const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./models");
const { room } = require("./models");
const app = express();
const { rooms } = require("./models/rooms.json");

const corsOptions = {
  origin: `http://localhost:${process.env.PORT || 3306}`,
};
app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Vent2U application." });
});

require("./routes/room.routes")(app);
require("./routes/user_input.routes")(app);

const PORT = process.env.PORT || 3316;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

const sendData = async () => {
  await db.sequelize.sync();

  await room.destroy({ truncate: true });
  await rooms.map((singelRoom) =>
    singelRoom.zone.map((zone) => room.create({ name: singelRoom.name, zone }))
  );
};
sendData();
