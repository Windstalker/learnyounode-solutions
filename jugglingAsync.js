const http = require('http');
const urls = process.argv.slice(2, 5);

const requests = urls.map((url) =>
  new Promise((resolve, reject) => {
    http.get(url, (responseStream) => {
      let responseData = '';
      responseStream.setEncoding('utf8');
      responseStream.on('data', (chunk) => {
        responseData += chunk;
      });
      responseStream.on('end', () => {
        resolve(responseData);
      });
      responseStream.on('error', reject);
    }).on('error', reject)
  })
);

Promise.all(requests).then((results) => {
  results.forEach((res) => console.log(res));
});
