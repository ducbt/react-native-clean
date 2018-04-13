const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

function bootstrap() {

  app.listen(process.env.PORT || 19020);
  app.use(cors());
  app.use(bodyParser.urlencoded(
      {limit: '50mb', extended: true, parameterLimit: 50000}));
  app.use(bodyParser.json({limit: '50mb'}));

  console.log('opening on port ' + 19020);

  return app;

}

exports.bootstrap = bootstrap;
