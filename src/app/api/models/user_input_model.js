module.exports = (sequelize, Sequelize) => {
    const UserInput = sequelize.define("UserInput", {
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
    }   
    });
    return UserInput;
   };