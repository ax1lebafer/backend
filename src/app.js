const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const userRouter = require("./routes/users");
const bookRouter = require("./routes/books");

dotenv.config();

const {
  PORT = 3005,
  API_URL = "http://127.0.0.1",
  MONGO_URL = "mongodb://127.0.0.1:27017/mongo",
} = process.env;

try {
  mongoose.connect(MONGO_URL);
  console.log("Success connected to MongoDb");
} catch (error) {
  console.log(error);
}

const app = express();

const helloWorld = (request, response) => {
  response.status(200);
  response.send("Hello, World!");
};

const corsOptions = {
  origin: "http://127.0.0.1",
  methods: "GET,PUT,POST,DELETE",
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.get("/", helloWorld);

app.post("/", (request, response) => {
  response.status(200);
  response.send("Hello from POST");
});

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(userRouter);
app.use(bookRouter);

app.listen(PORT, () => {
  console.log(`Сервер запущен по адресу ${API_URL}:${PORT}`);
});
