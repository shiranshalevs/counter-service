const express = require('express');
const app = express();
const http = require('http');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

// Initialize the database
const adapter = new FileSync('db.json');
const db = low(adapter);

// Set up the counter in the database
db.defaults({ counter: 0 }).write();


// Update the counter in the database on each POST request
app.post('/', (req, res) => {
  db.update('counter', n => n + 1).write();
  res.sendStatus(200);
});

// Get the counter value from the database on each GET request
app.get('/', (req, res) => {
  const counter = db.get('counter').value();
  console.log(`Counter retrieved as ${counter}`);
  res.send(`The counter is currently at ${counter}`);
});

  app.listen(80, () => {
    console.log('Counter service listening on port 80');
  });