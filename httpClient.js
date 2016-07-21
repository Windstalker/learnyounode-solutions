const http = require('http');
const url = process.argv[2];

const requestStream = http.get(url, (responseStream) => {
  responseStream.setEncoding('utf8');
  responseStream.on('data', (chunk) => {
    console.log(chunk);
  });
  responseStream.on('error', (err) => {
    console.error(err);
  });
}).on('error', console.error);
