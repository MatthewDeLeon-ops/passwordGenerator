import { program } from "commander";
import createPassword from "./passwordParams";

program
  .option("-l, --length <number>", "length of password", "25")
  .parse();

const { length, numbers, symbols } = program.opts();

const generatedPassword = createPassword(length, numbers, symbols);

console.log("generated password:", generatedPassword);
