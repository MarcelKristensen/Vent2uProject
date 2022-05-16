const Room = require("./Room");
const UserInput = require("./Userinput");

module.exports = (sequelize, DataTypes) => {
  const Zone = sequelize.define("Zone", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    number: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
    roomId: {
      type: DataTypes.INTEGER,
      allowNull: false,

      references: {
        model: Room,
        key: "id",
      }
    }
    })

    Zone.associate = function(models) {
      Zone.hasMany(models.UserInput, {foreignKey: 'zoneId'})};

    return Zone;
  };