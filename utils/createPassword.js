const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+";
const createPassword = (
  length,

  hasNumbers = true,
  hasSymbols = true
) => {
  let chars = alpha + alpha.toLowerCase();
  hasNumbers ? (chars += numbers) : "";
  hasSymbols ? (chars += symbols) : "";

  return generatePassword(length, chars);
};
const generatePassword = (length, chars) => {
  let password = "";
  for (let counter = 0; counter < length; counter++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
};
module.exports = createPassword;
