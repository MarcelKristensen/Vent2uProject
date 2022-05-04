const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();


const corsOptions = {
  origin: `http://localhost:${process.env.PORT || 3316}`,
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

const PORT = process.env.PORT || 3316;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
