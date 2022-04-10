function makePassword(maxLengthPass) {
    var generatedPassword = "";
    var charactersAllowed = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var size = charactersAllowed.length;
    for (var i = 0; i < maxLengthPass; ++i) {
        generatedPassword =
            generatedPassword +
                charactersAllowed.charAt(Math.ceil(Math.random() * size));
    }
    return generatedPassword;
}
console.log(makePassword(24));
