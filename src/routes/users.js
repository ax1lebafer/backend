const router = require("express").Router();
const logger = require("../middlewares/logger");

const {
  getUsers,
  getUser,
  deleteUser,
  updateUser,
  createUser,
} = require("../controllers/users");

router.use(logger);

router.get("/users", getUsers);
router.get("/users/:id", getUser);
router.post("/users", createUser);
router.patch("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

module.exports = router;
