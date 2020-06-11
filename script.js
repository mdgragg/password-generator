
var characters = prompt("Length of password you want? (needs to be between 8 - 128 characters)");

var confirmUppercase = confirm("Do you want to include uppercase letters in your password?");
var confirmLowercase = confirm("Do you want to include lowercase letters in your password?");
var confirmNumbers = confirm("Do you want to use numbers in your password?");
var confirmSymbols = confirm("Do you want to use special characters/symbols in your password?");

var Uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var Lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var Numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var Symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "?", ";"];



// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
