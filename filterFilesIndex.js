const filterFiles = require('./filterFilesModule');
const [dirPath, ext] = process.argv.slice(2);

filterFiles(dirPath, ext, (err, result) => {
  if (err) return console.error('Error occured:', err);
  return result.forEach((filename) => console.log(filename));
});
