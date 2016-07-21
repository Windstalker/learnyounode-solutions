const fs = require('fs');
const filePath = process.argv[2];

fs.readFile(filePath, (err, data) => {
  if (err) {
    console.error('Error occured:', err);
    return;
  }
  const strContent = data.toString();
  const nlCount = strContent.split('\n').length - 1;
  console.log(nlCount);
});
