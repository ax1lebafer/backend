const http = require("http");
const getUsers = require("./modules/users");

const server = http.createServer((request, response) => {
  // Написать обработчик запроса:
  // - Ответом на запрос `?hello=<name>` должна быть **строка** "Hello, <name>.", код ответа 200
  // - Если параметр `hello` указан, но не передано `<name>`, то ответ **строка** "Enter a name", код ответа 400
  // - Ответом на запрос `?users` должен быть **JSON** с содержимым файла `data/users.json`, код ответа 200
  // - Если никакие параметры не переданы, то ответ **строка** "Hello, World!", код ответа 200
  // - Если переданы какие-либо другие параметры, то пустой ответ, код ответа 500
  const url = new URL(request.url, "http://127.0.0.1");
  console.log(url);
  console.log(url.searchParams);

  if (request.url === "/hello") {
    response.statusCode = 400;
    response.statusMessage = "Bad Request";
    response.header = "Content-Type: text/plain";
    response.write("Enter a name");
    response.end();
  }

  if (request.url === "/users") {
    response.statusCode = 200;
    response.statusMessage = "OK";
    response.header = "Content-Type: application/json";
    response.write(getUsers());
    response.end();
  }

  response.status = 200;
  response.statusMessage = "OK";
  response.header = "Content-Type: text/plain";
  response.write("Hello world!");
  response.end();
});

server.listen(3003, () => {
  console.log("Сервер запущен на порту 3003");
});
