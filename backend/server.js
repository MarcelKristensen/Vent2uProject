const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const db = require("./models");
const { admin, zone, room, userInput } = require("./models");
const { rooms } = require("./models/rooms.json");
const { zones } = require("./models/zones.json");
const { admins } = require("./models/admin.json");
const { userInputs } = require("./models/userinputs.json");
const { env } = require("process");

app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Vent2UProject application." });
});

require("./routes/room.routes")(app);
require("./routes/user_input.routes")(app);
require("./routes/zone.routes")(app);
require("./routes/admin.routes")(app);

const PORT = process.env.PORT || 3316;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
  console.log(process.env.NODE_ENV, "environment");
});

(async () => {
  await db.sequelize.sync({ force: true });
  rooms.map((eachroom) => room.create({ name: eachroom.name }));
  zones.map((eachzone) =>
    zone.create({ number: eachzone.number, roomId: eachzone.roomId })
  );
  admins.map((eachadmin) =>
    admin.create({
      firstName: eachadmin.firstName,
      lastName: eachadmin.lastName,
      email: eachadmin.email,
      username: eachadmin.username,
      password: eachadmin.password,
    })
  );

  if (env.NODE_ENV === "development") {
    userInputs.map((input) =>
      userInput.create({
        zoneId: input.zoneId,
        gender: input.gender,
        temperature: input.temperature,
        energy: input.energy,
        humidity: input.humidity,
      })
    );
  }

  db.zone.hasMany(db.userInput);
  db.userInput.belongsTo(db.zone);
  db.room.hasMany(db.zone);
  db.zone.belongsTo(db.room);
})();
