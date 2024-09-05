const http = require("http");
const getUsers = require("./modules/users");

const PORT = 3003;
const HOST = "http://127.0.0.1";

const server = http.createServer((request, response) => {
  const url = new URL(request.url, HOST);

  if (url.searchParams.has("hello")) {
    const name = url.searchParams.get("hello");

    if (name) {
      response.statusCode = 200;
      response.setHeader("Content-Type", "text/plain");
      response.write(`Hello, ${name}.`);
    } else {
      response.statusCode = 400;
      response.setHeader("Content-Type", "text/plain");
      response.write("Enter a name");
    }
    response.end();
    return;
  }

  if (url.searchParams.has("users")) {
    response.statusCode = 200;
    response.setHeader("Content-Type", "application/json");
    response.write(getUsers());
    response.end();
    return;
  }

  if (url.search === "") {
    response.status = 200;
    response.statusMessage = "OK";
    response.setHeader("Content-Type", "text/plain");
    response.write("Hello world!");
    response.end();
    return;
  }

  response.statusCode = 500;
  response.setHeader("Content-Type", "text/plain");
  response.write("");
  response.end();
});

server.listen(PORT, () => {
  console.log(`Сервер запущен по адресу: ${HOST}:${PORT}`);
});
