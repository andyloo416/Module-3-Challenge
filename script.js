// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  var length = prompt("Length of the pasword?");
  var lowerCase = confirm("Lower case?");
  var upperCase = confirm("Upper case?");
  var specialChar = confirm("Special characther?");
  var numbers = confirm("numbers?");
  var password = generatePassword(
    length,
    lowerCase,
    upperCase,
    specialChar,
    numbers
  );
  passwordText.value = password;
}
function generatePassword(length, lowerCase, upperCase, specialChar, numbers) {
  var password = "";
  var charSet = "";
  if (lowerCase) {
    charSet += "abcdefghijklmnopqrstuvwxyz";
  }
  if (upperCase) {
    charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (specialChar) {
    charSet += " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  }
  if (numbers) {
    charSet += "0123456789";
  }
  for (var i = 0, n = charSet.length; i < length; i++) {
    password += charSet.charAt(Math.floor(Math.random() * n));
  }
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//
