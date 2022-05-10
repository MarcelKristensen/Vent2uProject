module.exports = app => {
    const Zones = require("../controllers/zone.controller.js");

    var router = require("express").Router();

    // Create a new zone
    router.post("/", Zones.create);

    // Retrieve all zones
    router.get("/", Zones.findAll);

    // Retrieve a single zone with id
    router.get("/:id", Zones.findOne);

    // Update a zone with id
    router.put("/:id", Zones.update);

    // Delete a zone with id
    router.delete("/:id", Zones.delete);

    // Delete all zones
    router.delete("/", Zones.deleteAll);

    app.use('/api/zones', router);
  };