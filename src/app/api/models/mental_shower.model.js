const {rooms} =require("./rooms.json") ;
//const { DataTypes } = require("sequelize/types");
const room=rooms.map(room =>console.log(room))
module.exports = (sequelize, Sequelize) => {
    const Room = sequelize.define("room", {
      name: {
        type: Sequelize.STRING
      },
      zone: {
        type: Sequelize.INTEGER
      },
    });
  
    return Room;
  };