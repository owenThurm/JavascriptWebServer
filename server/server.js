const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {

  res.write('hello on port ' + port);
  res.end();

});

server.listen(port, error => {
  if(error) {
    console.log('something went wrong', error);
  } else {
    console.log('listening on port ' + port + '...')
  }
});