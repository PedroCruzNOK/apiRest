const bienesRouter
 = require('./bienes.router');
const usersRouter = require('./users.router');
const customerRouter = require('./customers.router');
function routerApi(app){
  
  app.use('/bienes', bienesRouter);
  app.use('/users', usersRouter);
  app.use('/customers', customerRouter);
}

module.exports = routerApi
