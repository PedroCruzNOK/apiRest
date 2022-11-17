const bienesRouter
 = require('./bienes.router');
const usersRouter = require('./users.router');

function routerApi(app){
  
  app.use('/bienes', bienesRouter);
  app.use('/users', usersRouter);
}

module.exports = routerApi
