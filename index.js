const express = require('express');
const cors = require ('cors');
const routerApi = require('./routes');

const {logErrors, errorHandler, boomErrorHandler} = require('./midlewares/error.handler')
const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('hola express');

})

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log('hola puerto' + port);
});

