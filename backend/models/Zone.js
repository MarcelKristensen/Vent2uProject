const Room = require("./Room");

module.exports = (sequelize, DataTypes) => {
  const Zone = sequelize.define(
    "Zone",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      number: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      roomId: {
        type: DataTypes.INTEGER,
        allowNull: false,

        references: {
          model: "rooms",
          key: "id",
        },
      },
    },
    {
      tableName: "zones",
    }
  );

  return Zone;
};
