const randomNum = require("./randomNum");

class FileProvider {
  supply;
  pool;

  constructor(supply) {
    this.supply = supply;
    this.pool = this.getFilePoolArray(supply);
  }

  getFilePoolArray(amount) {
    const pool = [];

    for (let i = 1; i <= amount; i++) {
      pool.push(i);
    }
    return pool;
  }

  popOneRandomFile() {
    const randomIndex = randomNum(0, this.pool.length - 1);
    const randomFile = this.pool[randomIndex];
    this.deleteFile(randomIndex);

    return randomFile;
  }

  deleteFile(index) {
    delete this.pool[index];
    this.pool = this.pool.filter((item) => item != undefined);
  }
}

module.exports = FileProvider;
