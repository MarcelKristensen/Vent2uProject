require("dotenv").config();
const Sequelize = require("sequelize");


const sequelize =
  process.env.NODE_ENV === "development"
    ? new Sequelize("mental_shower", "root", process.env.MYSQL_PASSWORD, {
        host: "localhost",
        dialect: "mysql",
        port: process.env.MYSQL_PORT,
      })
    : new Sequelize("mental_shower", "panopticonism", "thisisit09!", {
        host: "mental-shower.database.windows.net",
        dialect: "mssql",
        driver: "tedious",
        port: "1433",
        options: {
          encrypt: true,
          database: "mental_shower",
        },
        pool: {
          max: 5,
          min: 0,
          idle: 10000,
        },
      });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

  db.admin = require("./Admin.js")(sequelize, Sequelize);
  db.room = require("./Room.js")(sequelize, Sequelize);
  db.zone = require("./Zone.js")(sequelize, Sequelize);
  db.userInput = require("./Userinput.js")(sequelize, Sequelize);

module.exports = db;
