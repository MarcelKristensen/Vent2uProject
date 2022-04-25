module.exports = (sequelize, Sequelize) => {
  const UserInput = sequelize.define("UserInput", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    gender: {
      type: Sequelize.STRING
    },
    zone: {
      type: Sequelize.INTEGER
    },
    temperature: {
      type: Sequelize.INTEGER
    },
    energy: {
      type: Sequelize.INTEGER
    },
    humidity: {
      type: Sequelize.INTEGER
    },
  });
  return UserInput;
};
