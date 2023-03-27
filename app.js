const express = require('express');
const app = express();
const client   = require('./redisUtils');


// Update the counter in Redis on each POST request
app.post('/', (req, res) => {
  client.incr('counter');
  res.sendStatus(200);
});

// Get the counter value from Redis on each GET request
app.get('/', async (req, res) => {
  const counter = await client.get('counter');
  // the counter key does not exist in redis cahce when redis is freshely installed, so this is a workaround to initially set up the counter 
  if (counter == null ){
    res.send('The counter is currently at 0');
    client.set('counter', 0);
    counter == 0;
  }
  else{
    res.send(`The counter is currently at ${counter}`);
  }
  console.log(`Counter retrieved as ${counter}`);
});

app.listen(80, () => {
  console.log('Counter service listening on port 80');
});

