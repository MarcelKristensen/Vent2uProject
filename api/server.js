const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");

const app = express();
app.use(express.json());
// app.use(cors());

/*var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));*/

// parse requests of content-type - application/json
// app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

const db = require("./models")
db.sequelize.sync();

// require("./routes/room.routes")(app);
// require("./routes/user_input.routes")(app);
// set port, listen for requests
const PORT = 3316;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});