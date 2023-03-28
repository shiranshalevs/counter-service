const express = require('express');
const app = express();
const http = require('http');

let counter = 0;

// Update the counter on each POST request
app.post('/', (req, res) => {
  counter++;
  res.sendStatus(200);
});

// Get the counter value on each GET request
app.get('/', (req, res) => {
  console.log(`Counter retrieved as ${counter}`);
  res.send(`The counter is currently at ${counter}`);
});

app.listen(80, () => {
  console.log('Counter service listening on port 80');
});

module.exports = app;