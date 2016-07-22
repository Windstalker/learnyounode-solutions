const http = require('http');
const url = require('url');
const PORT = process.argv[2] || 8000;
const PREFIX = '/api';
const endpoints = {
  [`${PREFIX}/parsetime`]({ iso }) {
    const d = new Date(iso);
    return {
      hour: d.getHours(),
      minute: d.getMinutes(),
      second: d.getSeconds(),
    };
  },
  [`${PREFIX}/unixtime`]({ iso }) {
    const unixtime = new Date(iso).getTime();
    return { unixtime };
  },
};

function listener(req, res) {
  const parsedUrl = url.parse(req.url, { query: true });
  const handler = endpoints[parsedUrl.pathname];
  if (typeof handler === 'function') {
    const responseBody = handler(parsedUrl.query);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(responseBody));
  } else {
    res.writeHead(404, 'Not Found');
    res.end('Not Found');
  }
}

const httpFileServer = http.createServer(listener);

httpFileServer.listen(PORT);
