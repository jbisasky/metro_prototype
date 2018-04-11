'use strict';

const express = require('express');

const api = require('./api.json');

const app = express();
app.use('/', express.static('app'));

app.listen(4000, () => {
  console.log('Listening on port 4000');
});