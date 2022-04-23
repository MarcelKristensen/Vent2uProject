const { rooms } = require("./rooms.json");
module.exports = (sequelize, Sequelize) => {
  const room = rooms.map((room) => room.name);
  const Room = sequelize.define("Room", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING(20),
    },
    zone: {
      type: Sequelize.INTEGER,
    },
  });

  return Room;
};
