const router = require("express").Router();

const {
  getBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
} = require("../controllers/books");

router.get("/books", getBooks);
router.get("/books/:id", getBook);
router.post("/books", createBook);
router.patch("/books/:id", updateBook);
router.delete("/books/:id", deleteBook);

module.exports = router;
