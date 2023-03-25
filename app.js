const express = require('express');
const app = express();
const http = require('http');

let counter = 0; // initiallize the counter 


app.post('/', (req, res) => {

    counter++
    res.sendStatus(200);
});

app.get ('/', (req,res) => {
    //res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.send(`The counter is currently at ${counter}`)
});

  app.listen(80, () => {
    console.log('Counter service listening on port 80');
  });