const User = require("../models/user");

const getUsers = (req, res) => {
  return User.find({})
    .then((data) => {
      res.header("Content-Type", "application/json; charset=utf-8");
      res.status(200).send(data);
    })
    .catch((error) => res.status(500).send(error.message));
};

const getUser = (req, res) => {
  const { id } = req.params;
  return User.findById(id)
    .then((user) => {
      res.header("Content-Type", "application/json; charset=utf-8");
      res.status(200).send(user);
    })
    .catch((error) =>
      res.status(500).send("Пользователь с данным ID не существует"),
    );
};

const createUser = (req, res) => {
  return User.create({ ...req.body })
    .then((user) => {
      res.header("Content-Type", "application/json; charset=utf-8");
      res.status(201).send(user);
    })
    .catch((error) => res.status(500).send(error.message));
};

const updateUser = (req, res) => {
  const { id } = req.params;
  return User.findByIdAndUpdate(id, { ...req.body }, { new: true })
    .then((user) => {
      res.header("Content-Type", "application/json; charset=utf-8");
      res.status(200).send(user);
    })
    .catch((error) => res.status(500).send(error.message));
};

const deleteUser = (req, res) => {
  const { id } = req.params;
  return User.findByIdAndDelete(id)
    .then(() => {
      res.status(200).send("Success deleted user");
    })
    .catch((error) => res.status(500).send(error.message));
};

module.exports = { getUsers, getUser, createUser, updateUser, deleteUser };
