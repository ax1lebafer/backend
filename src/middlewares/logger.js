const logger = (request, response, next) => {
  console.log(`Адрес, на который пришел запрос: ${request.url}`);
  next();
};

module.exports = logger;
