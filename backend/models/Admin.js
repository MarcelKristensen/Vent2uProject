const { admins } = require("./admin.json");

module.exports = (sequelize, DataTypes) => {
  const Admin = sequelize.define("Admin", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    firstName: {
      type: DataTypes.STRING(25),
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING(25),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  });
  (async () => {
    await sequelize.sync({
      alter: true,
    });
    admins.map((admin) =>
      Admin.create({
        firstName: admin.firstName,
        lastName: admin.lastName,
        email: admin.email,
        username: admin.username,
        password: admin.password,
      })
    );
  })();
};
