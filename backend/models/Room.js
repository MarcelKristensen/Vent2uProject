const { rooms } = require("./rooms.json");

module.exports = (sequelize, DataTypes) => {
  const Room = sequelize.define("Room", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
  });

  (async () => {
    await sequelize.sync({
      truncate: true,
    });
    rooms.map((room) => Room.create({ name: room.name }));
  })();
};
