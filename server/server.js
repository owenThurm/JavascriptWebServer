const express = require('express');
const axios = require('axios');
const port = 3000;


app = express();

app.get('/', (req, res) => {
  res.send('hello world!');
});

app.get('/dir2', (req, res) => {
  res.send('here\'s another directory called: ' + req.query.myshop);
  console.log(req);
});

app.get('/restful', (req, res) => {
  res.send('this will be an api GET')

})

app.listen(port, error => {
  if(error) console.log('something went wrong');
  else console.log('listening on port ' + port);
});
