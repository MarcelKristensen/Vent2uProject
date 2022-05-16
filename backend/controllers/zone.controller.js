const db = require("../models");
const Zone = db.zone;
const Op = db.Sequelize.Op;

// Create and Save a new Zone
exports.create = (req, res) => {
  // Validate request
  console.log(req.body);
  if (!req.body) {
    res.status(400).send({
      message: "Content cannot be empty.",
    });
    return;
  }

  // Create a Zone
  const zone = {
    number: req.body.number,
    roomId: req.body.roomId,
  };

  // Save a zone in the database
  Zone.create(zone)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating a zone.",
      });
    });
};

// Retrieve all zones from the database.
exports.findAll = (req, res) => {
  const input = req.query.input;
  var condition = input ? { input: { [Op.like]: `%${input}%` } } : null;

  Zone.findAll({ where: condition, include: db.room })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving the zone.",
      });
    });
};

// Find a single zone with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Zone.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving zone with id=" + id + ".",
      });
    });
};

// Update a zone by the id in the request
exports.update = (req, res) => {
  console.log(res, req.params.id);
  const id = req.params.id;

  Zone.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Zone was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update zone with id=${id}. Maybe the zone was not found or a field is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating zone with id=" + id + ".",
      });
    });
};

// Delete a zone with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Zone.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Zone was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete zone with id=${id}. Maybe the zone was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete zone with id=" + id + ".",
      });
    });
};

// Delete all zones from the database.
exports.deleteAll = (req, res) => {
  Zone.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Zones were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while removing all zones.",
      });
    });
};
