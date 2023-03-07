const fs = require("fs");
const path = require("path");

function genMetadataFile(filePath, value) {
  fs.writeFileSync(path.join(__dirname, filePath), JSON.stringify(value, null, 2));
}

module.exports = genMetadataFile;
