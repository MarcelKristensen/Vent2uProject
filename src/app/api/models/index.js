require('dotenv').config()
const Sequelize = require("sequelize");
const sequelize = new Sequelize('mental_shower', 'root', /*process.env.MYSQL_PASSWORD*/ 'root', {
  host: "localhost",
  dialect: "mysql",
  //port: process.env.MYSQL_PORT
  port: 3307
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.room = require("./room_model.js")(sequelize, Sequelize);
db.userInput = require("./user_input_model.js")(sequelize, Sequelize);

module.exports = db;