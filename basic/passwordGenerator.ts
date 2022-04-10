function makePassword(maxLengthPass: any) {
  var generatedPassword = "";
  const charactersAllowed: string =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const size = charactersAllowed.length;
  for (var i = 0; i < maxLengthPass; ++i) {
    generatedPassword =
      generatedPassword +
      charactersAllowed.charAt(Math.ceil(Math.random() * size));
  }
  return generatedPassword;
}
console.log(makePassword(25));
