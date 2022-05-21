module.exports = (app) => {
  const Admins = require("../controllers/admin.controller.js");

  var router = require("express").Router();

  router.post("/", Admins.create);

  router.get("/", Admins.findAll);

  router.get("/:id", Admins.findOne);

  router.put("/:id", Admins.update);

  router.delete("/:id", Admins.delete);

  router.delete("/", Admins.deleteAll);

  app.use("/api/admins", router);
};
