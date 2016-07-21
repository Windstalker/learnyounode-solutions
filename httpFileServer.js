const http = require('http');
const fs = require('fs');
const [PORT = 8000, pathToFile] = process.argv.slice(2);

const httpFileServer = http.createServer((req, res) => {
  const fileReadStream = fs.createReadStream(pathToFile);
  res.writeHead(200, { 'content-type': 'text/plain' });
  fileReadStream.pipe(res);
});

httpFileServer.listen(PORT);
