module.exports = (sequelize, DataTypes) => {
  const UserInput = sequelize.define("UserInput", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    zoneId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,

      references: {
        model: "zones",
        key: "id",
      },
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    temperature: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    energy: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    humidity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
};
