const {  } = require(".");

module.exports = (sequelize, Sequelize) => {
    const UserInputRoom = sequelize.define("UserInputRoom", {
      roomId: {
        type: Sequelize.INTEGER, 
        references: {
            model: room,
            key: "id"
        }
      },
      userinputId: {
        type: Sequelize.INTEGER, 
        references: {
            model: userinput,
            key: "id"
      }
    }
    });
    return UserInputRoom;
  };
  