const Sequelize = require("sequelize");
const sequelize = new Sequelize('mental_shower', 'root', 'root', {
  host: "localhost",
  dialect: "mysql",
  port: 3309
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.mental_shower = require("./mental_shower.model.js")(sequelize, Sequelize);

module.exports = db;