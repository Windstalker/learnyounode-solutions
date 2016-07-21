const http = require('http');
const url = process.argv[2];

const requestStream = http.get(url, (responseStream) => {
  let responseData = '';
  responseStream.setEncoding('utf8');
  responseStream.on('data', (chunk) => {
    responseData += chunk;
  });
  responseStream.on('end', () => {
    console.log(responseData.length);
    console.log(responseData);
  });
  responseStream.on('error', (err) => {
    console.error(err);
  });
}).on('error', console.error);
