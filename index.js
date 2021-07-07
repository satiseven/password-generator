#!/usr/bin/env node
const program = require("commander");
const log = console.log;
const savePassword = require("./utils/savePassword");
const chalk = require("chalk");
const clipboardy = require("clipboardy");
const createPassword = require("./utils/createPassword");
program.program
  .version("1.0.0")
  .description("Simple Password Generator written in Nodejs For terminal usage")
  .option("-l,--length <number>", "Length of Password", 10)
  .option("-s,--save", "save password to text file")
  .option("-nn,--no-numbers", "remove numbers")
  .option("-ns,--no-symbols", "remove symbols")
  .parse();
const { length, save, numbers, symbols } = program.program.opts();

const generatedPasword = createPassword(length, numbers, symbols);
if (save) {
  savePassword(generatedPasword);
}
clipboardy.writeSync(generatedPasword);
log(chalk.blue("Generated Password : ") + chalk.bold(generatedPasword));
log(chalk.yellow("Password Copy to Clipboard"));
