const fs = require("fs");
const path = require("path");
const os = require("os");
const chalk = require("chalk");

const savePassword = (password) => {
  const passFile = path.join(__dirname, "../", "password.txt");
  fs.open(passFile, "a", 777, (e, id) => {
    fs.write(id, password + os.EOL, null, "utf8", () => {
      fs.close(id, () => {
        console.log(chalk.green(`Password saved to file ${passFile}`));
      });
    });
  });
};
module.exports = savePassword;
