const bienesRouter
 = require('./bienes.router');
const usuariosRouter = require('./usuarios.router');
function routerApi(app){
  app.use('/bienes', bienesRouter);
  app.use('/usuarios', usuariosRouter);
}

module.exports = routerApi
