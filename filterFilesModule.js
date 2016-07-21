const fs = require('fs');
const path = require('path');

module.exports = function filterFiles(dirPath, ext, callback) {
  fs.readdir(dirPath, (err, list) => {
    if (err) return callback(err);

    const filtered = list.filter(filename =>
      (ext && path.extname(filename) === `.${ext}`) || !ext);
    return callback(null, filtered);
  });
};
