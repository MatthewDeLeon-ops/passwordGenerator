const characters: string =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers: string = "0123456789";
const symbols: string = "!#$%&-+=";

const generatePassword = (length: number, chars: string) => {
  let password = "";
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
};
const createPassword = (
  length: number = 25,
  hasNumbers = true,
  hasSymbols = false
) => {
  let letters = characters;
  hasNumbers ? (letters += numbers) : "";
  hasSymbols ? (letters += symbols) : "";
  return generatePassword(length, letters);
};

export default createPassword;
