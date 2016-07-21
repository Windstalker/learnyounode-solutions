const http = require('http');
const map = require('through2-map');
const PORT = process.argv[2] || 8000;

const httpFileServer = http.createServer((req, res) => {
  if (req.method !== 'POST') {
    return res.end('Only POST method needed\n');
  }
  return req
    .pipe(map((chunk) => chunk.toString().toUpperCase()))
    .pipe(res);
});

httpFileServer.listen(PORT);
