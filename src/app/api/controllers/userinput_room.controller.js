const db = require("../models");
const UserInputRoom = db.userinputRoom;
const Op = db.Sequelize.Op;

// Create and Save a new User Input
exports.create = (req, res) => {
  // Validate request
  console.log(req.body)
  if (!req.body.title) {
    res.status(400).send({
      message: "Content cannot be empty"
    });
    return;
  }

  // Create a User Input
  const userinputRoom = {
    roomId: req.body.roomId,
    userinputId: req.body.userinputId
  };

  // Save user input in the database
  UserInputRoom.create(userinputRoom)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating an user input"
      });
    });
};

// Retrieve all user input from the database.
exports.findAll = (req, res) => {
    const input = req.query.input;
    var condition = input ? { input: { [Op.like]: `%${input}%` } } : null;
  
    UserInputRoom.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving the user inputs."
        });
      });
  
};

// Find a single user input with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    UserInputRoom.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving user input with id=" + id
        });
      });
  
};