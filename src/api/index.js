const express = require('express');
const app = express();
const uniqid = require('uniqid');
const cors = require('cors');

const tickets = require('./index.json').tickets.map((ticket) => ({
  ...ticket,
  id: uniqid()
}));

const currency = {
  RUB: 1,
  USD: 0.0148665,
  EUR: 0.0129449
};

app.use(cors());

app.get('/api/tickets/', function(req, res) {
  res.send(tickets);
});

app.get('/api/currency/', function(req, res) {
  res.send(currency);
});

app.listen(3001, function() {
  console.log('Listening on port 3001!');
});
