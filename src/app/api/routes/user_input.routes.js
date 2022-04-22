module.exports = app => {
    const UserInputs = require("../controllers/user_input.controller.js");
  
    var router = require("express").Router();
  
    // Create a new user input
    router.post("/", UserInputs.create);
  
    // Retrieve all user inputs
    router.get("/", UserInputs.findAll);
  
    // Retrieve all published user inputs
    //router.get("/published", UserInputs.findAllPublished);
  
    // Retrieve a single user input with id
    router.get("/:id", UserInputs.findOne);
  
    // Update a user input with id
    router.put("/:id", UserInputs.update);
  
    // Delete a user input with id
    router.delete("/:id", UserInputs.delete);
  
    // Create a new user input
    router.delete("/", UserInputs.deleteAll);
  
    app.use('/api/userInputs', router);
  };