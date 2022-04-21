module.exports = app => {
    const Rooms = require("../controllers/room.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Room
    router.post("/", Rooms.create);
  
    // Retrieve all Rooms
    router.get("/", Rooms.findAll);
  
    // Retrieve all published Rooms
    router.get("/published", Rooms.findAllPublished);
  
    // Retrieve a single Room with id
    router.get("/:id", Rooms.findOne);
  
    // Update a Room with id
    router.put("/:id", Rooms.update);
  
    // Delete a Room with id
    router.delete("/:id", Rooms.delete);
  
    // Create a new Room
    router.delete("/", Rooms.deleteAll);
  
    app.use('/api/Rooms', router);
  };