const renameOverwrite = require("rename-overwrite");
const genMetadataJson = require("./utils/genMetadataJson.js");
const genMetadataFile = require("./utils/genMetadataFile.js");
const FileProvider = require("./utils/getFilePoolArray");

function start(supply) {
  const fileProvider = new FileProvider(supply);

  for (let i = 1; i <= supply; i++) {
    const genFileIndex = fileProvider.popOneRandomFile();

    genMetadataFile(
      `data/${i}.json`,
      genMetadataJson(i, genFileIndex <= 500 ? true : false)
    );

    renameOverwrite(`./images/${genFileIndex}.png`, `./images2/${i}.png`)
      .then(() => console.log("done,", genFileIndex))
      .catch((err) => console.log("err,", genFileIndex));
  }
}

start(2023);
