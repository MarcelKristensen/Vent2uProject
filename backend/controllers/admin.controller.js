const db = require("../models");
const Admin = db.admin;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  // Validate request
  console.log(req.body);
  if (!req.body.name) {
    res.status(400).send({
      message: "Content cannot be empty",
    });
    return;
  }

  const admin = {
    username: req.body.username,
    password: req.body.password,
  };

  Admin.create(admin)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Admin.",
      });
    });
};

exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;
  console.log(Op.like, "getAll requested");
  Admin.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Admins.",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Admin.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Admin with id=" + id + ".",
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Admin.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Admin was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Admin with id=${id}. Maybe Admin was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Admin with id=" + id + ".",
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Admin.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Admin was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Admin with id=${id}. Maybe Admin was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Admin with id=" + id + ".",
      });
    });
};

exports.deleteAll = (req, res) => {
  Admin.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Admins were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Admins.",
      });
    });
};
