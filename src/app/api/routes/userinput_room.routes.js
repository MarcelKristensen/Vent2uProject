module.exports = app => {
    const UserInputRoom = require("../controllers/userinput_room.controller.js");
  
    var router = require("express").Router();
  
    // Create a new user input
    router.post("/", UserInputRoom.create);
  
    // Retrieve all user inputs
    router.get("/",UserInputRoom.findAll);
  
    // Retrieve all published user inputs
    //router.get("/published", UserInputs.findAllPublished);
  
    // Retrieve a single user input with id
    router.get("/:id", UserInputRoom.findOne);
  

    app.use('/api/userInputsRoom', router);
  };