var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "/", "'", ":", ";", ",", "=", ">", "<", "?", "[", "]", "}", "{", "|", "~"];

// code given
var generateBtn = document.querySelector("#generate");

// From Haymanot
 document.querySelector("#generate").addEventListener("click" , writePassword);

// code given
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


function generatePassword() {
    enter = (prompt("How long of password do you want? (needs to be between 8 - 128 characters)"));
    if (!enter) {
        alert("Enter a number!");
    } else if (enter < 8 || enter > 128) {
        enter = (prompt("Password length must be 8-128 characters"));
    } else {
      confirmUppercase = confirm("Do you want to include UPPERCASE letters in your password?");
      confirmLowercase = confirm("Do you want to include LOWERCASE letters in your password?");
      confirmNumbers = confirm("Do you want to use NUMBERS in your password?");
      confirmCharacters = confirm("Do you want to use SPECIAL CHARACTERS in your password?");
    };


    // if no to all prompts
    if (!confirmUppercase && !confirmLowercase && !confirmNumbers && !confirmCharacters) {
        alert("Say 'OK' to something!");
    }



    // if ok to all prompts
    else if (confirmUppercase && confirmLowercase && confirmNumbers && confirmCharacters) {
       choices = uppercase.concat(lowercase, numbers, specialCharacter);
    }



    // if ok to 3 prompts
  // ok to uppercase, lowercase, and numbers
    else if (confirmUppercase && confirmLowercase && confirmNumbers) {
        choices = uppercase.concat(lowercase, numbers);
    }
  // ok to uppercase, lowercase, and special characters
    else if (confirmUppercase && confirmLowercase && confirmCharacters) {
        choices = uppercase.concat(lowercase, specialCharacters);
    }  
  // ok to uppercase, numbers, and special characters
    else if (confirmUppercase && confirmNumbers && confirmCharacters) {
        choices = uppercase.concat(numbers, specialCharacters);
    }
  // ok to lowercase, numbers, and special characters
    else if (confirmLowercase && confirmNumbers && confirmCharacters) {
        choices = lowercase.concat(numbers, specialCharacters);
    }



    // if ok to 2 prompts
  // ok to uppercase and lowercase
    else if  (confirmUppercase && confirmLowercase) {
        choices = uppercase.concat(lowercase);
    } 
  // ok to uppercase and numbers  
    else if  (confirmUppercase && confirmNumbers ) {
        choices = uppercase.concat(numbers);
    }
  // ok to uppercase and special characters 
    else if  (confirmUppercase && confirmCharacters) {
        choices = uppercase.concat(specialCharacter);
    }
  // ok to lowercase and numbers
    else if  (confirmLowercase && confirmNumber) {
        choices = lowercase.concat(numbers);
    } 
  // ok to lowercase and special characters   
    else if  (confirmLowercase && confirmCharacters) {
        choices = lowercase.concat(specialCharacters);
    } 
  // ok to numbers and special characters
    else if  (confirmNumbers && confirmCharacters) {
        choices = numbers.concat(specialCharacters);
    } 


    


    // if ok to only 1 prompt
  // ok to just uppercase
    else if (confirmUppercase) {
      choices = uppercase;
    }
  // ok to just lowercase
    else if (confirmLowercase) {
        choices = lowercase;
    }
  // ok to just numbers
    else if (confirmNumbers) {
        choices = numbers;
    }
  // ok to just special characters 
    else if (confirmCharacters) {
        choices = specialCharacters;
    }
  

    // password variable is an array placeholder for user generated amount of length
    var password = [];

    // Random selection for all variables: 
    for (var i = 0; i < enter; i++) {
        var pickChoices = choices[Math.floor(Math.random() * choices.length)];
        password.push(pickChoices);
    }


    // This joins the password array and converts it to a string
    var password = password.join("");
    UserInput(password);
    return password;
}

function UserInput(password) {
   document.querySelector("#password").textContent = password;

} 

