const fs = require('fs');
const filePath = process.argv[2];

try {
  const bufferContent = fs.readFileSync(filePath);
  const strContent = bufferContent.toString();
  const nlCount = strContent.split('\n').length - 1;
  console.log(nlCount);
} catch (e) {
  console.error('Error occured:', e);
}
