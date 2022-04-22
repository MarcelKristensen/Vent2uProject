// const {rooms} =require("./rooms.json");
module.exports = (sequelize, Sequelize) => {
    const Room = sequelize.define("Room", {
      name: {
        type: Sequelize.STRING
      },
      zone: {
        type: Sequelize.INTEGER
      },
    });
  
    return Room;
  };
