// import parameters from "./types";
function makePassword(maxLengthPass: any) {
  var generatedPassword = "";
  let charactersAllowed: string =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  // var collectionOfCharacters: string[] = ["#", "!", "$", "%", "+", "-"];
  var size = charactersAllowed.length;
  for (var i = 0; i < maxLengthPass; ++i) {
    generatedPassword =
      generatedPassword +
      charactersAllowed.charAt(Math.floor(Math.random() * size))
  }
  return generatedPassword;
}
console.log(makePassword(20));

// Math.floor(Math.random() * (max - min) + min)
// collectionOfCharacters.charAt(Math.floor(Math.random() * (max - min) + min));

//   collectionOfCharacters.charAt(Math.floor(Math.random() * charsize));
// collectionOfCharacters.charCodeAt(Math.floor * (max - min));
// Math.
// var collectionOfCharacters = ["#", "!", "$", "%", "+", "-"];
// var charsize = collectionOfCharacters;
// console.log(charsize.charAt(2))
