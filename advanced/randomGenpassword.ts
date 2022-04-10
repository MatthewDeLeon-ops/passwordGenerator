import { program } from "commander";
import createPassword from "./passwordParams";

program
  .option("-l, --length <number>", "length of password", "25")
  .option("-s, --save", "save password to passwords.txt")
  .option("-nn, --no-numbers", "remove numbers")
  .option("-ns, --no-symbols", "remove symbols")
  .parse();

const { length, numbers, symbols } = program.opts();

const generatedPassword = createPassword(length, numbers, symbols);

console.log("generated password:", generatedPassword);
