const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const db = require("./models");
const { admin, zone, room } = require("./models");
const { rooms } = require("./models/rooms.json");
const { zones } = require("./models/zones.json");
const { admins } = require("./models/admin.json");
const Userinput = require("./models/Userinput");
const Zone = require("./models/Zone");
const { devNull } = require("os");

const corsOptions = {
  origin: `*`,
};
app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Vent2UProject application." });
});

require("./routes/room.routes")(app);
require("./routes/user_input.routes")(app);
require("./routes/zone.routes")(app);

const PORT = process.env.PORT || 3316;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

(async () => {
  if (process.env.NODE_ENV === "development") {
    await db.sequelize.query("SET GLOBAL FOREIGN_KEY_CHECKS = 0;", {
      raw: true,
    });
    await room.destroy({ truncate: true });
    await zone.destroy({ truncate: true });
  }
  console.log(process.env.NODE_ENV, "environment");
  await admin.destroy({ truncate: true });
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

  db.zone.hasMany(db.userInput);
  db.userInput.belongsTo(db.zone);
  db.room.hasMany(db.zone);
  db.zone.belongsTo(db.room);
  await db.sequelize.sync();
})();
