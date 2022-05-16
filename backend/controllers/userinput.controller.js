const { zone } = require("../models");
const db = require("../models");
const Zone = db.zone;
const UserInput = db.userInput;
const Op = db.Sequelize.Op;

// Create and Save a new User Input
exports.create = (req, res) => {
  // Validate request
  console.log(req.body);
  if (!req.body) {
    res.status(400).send({
      message: "Content cannot be empty.",
    });
    return;
  }

  // Create a User Input
  const userinput = {
    zoneId: req.body.zoneId,
    gender: req.body.gender,
    temperature: req.body.temperature,
    energy: req.body.energy,
    humidity: req.body.humidity,
  };

  // Save user input in the database
  UserInput.create(userinput)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating an user input.",
      });
    });
};

// Retrieve all user input from the database.
exports.findAll = (req, res) => {
  const input = req.query.input;
  var condition = input ? { input: { [Op.like]: `%${input}%` } } : null;

  UserInput.findAll({ where: condition
    /*include: [{
      model: Zone,
      as: 'zones',
      required: true
    }]*/
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while retrieving the user inputs.",
      });
    });
};


// Find a single user input with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  UserInput.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving user input with id=" + id + ".",
      });
    });
};

// Update a user input by the id in the request
exports.update = (req, res) => {
  console.log(res, req.params.id);
  const id = req.params.id;

  UserInput.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "User input was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update user input with id=${id}. Maybe user input was not found or a field is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating user input with id=" + id + ".",
      });
    });
};

// Delete an user input with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  UserInput.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "User input was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete user input with id=${id}. Maybe the user input was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete user input with id=" + id + ".",
      });
    });
};

// Delete all user inputs from the database.
exports.deleteAll = (req, res) => {
  UserInput.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} User input were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all user inputs.",
      });
    });
};
