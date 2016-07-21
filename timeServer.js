const net = require('net');
const moment = require('moment');
const [PORT = 8000, FORMAT = 'YYYY-MM-DD HH:mm'] = process.argv.slice(2);

const timeServer = net.createServer((socket) => {
  socket.write(moment().format(FORMAT));
  socket.end('\n');
});

timeServer.listen(PORT);
