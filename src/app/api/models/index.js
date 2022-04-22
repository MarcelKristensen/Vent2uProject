const Sequelize = require("sequelize");
const sequelize = new Sequelize('mental_shower', 'root', process.env.MYSQL_PASSWORD, {
  host: "localhost",
  dialect: "mysql",
  port: process.env.MYSQL_PORT
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.mental_shower = require("./Room_model.js")(sequelize, Sequelize);
db.mental_shower = require("./user_input_model.js")(sequelize, Sequelize);

module.exports = db;