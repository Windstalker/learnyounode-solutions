const fs = require('fs');
const path = require('path');
const [dirPath, ext] = process.argv.slice(2);

fs.readdir(dirPath, (err, list) => {
  if (err) {
    console.error('Error occured:', err);
    return;
  }
  list.forEach((filename) => {
    if (ext && path.extname(filename) === `.${ext}` || !ext) {
      console.log(filename);
    }
  });
});
