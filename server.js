'use strict';

const express = require('express');
const cors = require('cors');
const app = express();

var port = process.env.PORT || 3000;

app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.listen(port, function () {
  console.log('listening on port', port);
});
