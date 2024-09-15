const Book = require("../models/book");

const getBooks = (req, res) => {
  return Book.find({})
    .then((books) => {
      res.header("Content-Type", "application/json; charset=utf-8");
      res.status(200).send(books);
    })
    .catch((error) => res.status(500).send(error.message));
};

const getBook = (req, res) => {
  const { id } = req.params;
  return Book.findById(id)
    .then((book) => {
      res.header("Content-Type", "application/json; charset=utf-8");
      res.status(200).send(book);
    })
    .catch((error) => res.status(500).send("Книга с данным ID не существует"));
};

const createBook = (req, res) => {
  return Book.create({ ...req.body })
    .then((book) => {
      res.header("Content-Type", "application/json; charset=utf-8");
      res.status(201).send(book);
    })
    .catch((error) => res.status(500).send(error.message));
};

const updateBook = (req, res) => {
  const { id } = req.params;
  return Book.findByIdAndUpdate(id, { ...req.body }, { new: true })
    .then((book) => {
      res.header("Content-Type", "application/json; charset=utf-8");
      res.status(200).send(book);
    })
    .catch((error) => res.status(500).send(error.message));
};

const deleteBook = (req, res) => {
  const { id } = req.params;
  return Book.findByIdAndDelete(id)
    .then(() => {
      res.status(200).send("Success deleted book");
    })
    .catch((error) => res.status(500).send(error.message));
};

module.exports = {
  getBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
};
