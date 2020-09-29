const express = require('express');
const axios = require('axios');
const port = 3000;


app = express();

app.get('/', (req, res) => {
  res.send('hello world at localhost 3000!');
});

app.get('/dir2/:id', (req, res) => {
  res.send('here\'s another directory with id: ' + req.params.id);
});

app.get('/restful', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  axios({
    method: 'get',
    url: 'http://data.nba.net/prod/draft/2018/draft_pick.json',
    responseType: 'stream'
  }).then((response) => {
    res.write('this came first');
  }).catch((error) => {
    console.log(error);
  }).then(() => {
    res.write('index.html');
    res.end();
  });
});

app.listen(port, error => {
  if(error) console.log('something went wrong');
  else console.log('listening on port ' + port);
});
