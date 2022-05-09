const { zones } = require("./zones.json");

module.exports = (sequelize, DataTypes) => {
  const Zone = sequelize.define("zone", {
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
        model: "rooms",
        key: "id",
      },
    },
  });
  (async () => {
    await sequelize.sync();
    zones.map((zone) =>
      Zone.create({ number: zone.number, roomId: zone.roomId })
    );
  })();
};
