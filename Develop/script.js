var lowerCaseAlpha = "abcdefghijklmnopqrstuvwxyz";
var lowerCaseAlphaArray = lowerCaseAlpha.split("");
var upperCaseAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var upperCaseAlphaArray = upperCaseAlpha.split("");
var numbers = "0123456789";
var numbersArray = numbers.split("");
var specialCharacters = "~!@#$%^&_-+=";
var specialCahractersArray = specialCharacters.split("");
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var generatedPassword = "";
  var allCharacters = [];
  var passwordText = document.querySelector("#password");
  var characterCount = prompt(
    "How many characters would you like your password to be? \n(8-128)"
  );
  if (characterCount < 8 || characterCount > 128) {
    alert(
      "the password character count must be over 8 and under 128.\nPlease re-start"
    );
  } else {
    if (confirm("Do you want it to contain uppercase letters?")) {
      Array.prototype.push.apply(allCharacters, upperCaseAlphaArray);
    }
    if (confirm("Do you want it to contain lowercase letters?")) {
      Array.prototype.push.apply(allCharacters, lowerCaseAlphaArray);
    }
    if (confirm("Do you want it to contain numbers?")) {
      Array.prototype.push.apply(allCharacters, numbersArray);
    }
    if (confirm("Do you want it to contain special characters?")) {
      Array.prototype.push.apply(allCharacters, specialCahractersArray);
    }
    if (allCharacters.length === 0) {
      alert(
        "You must select at least one type of character to generate password\nPlease re-start"
      );
    } else {
      for (var i = 0; i < characterCount; i++) {
        var random = Math.floor(Math.random() * allCharacters.length);
        generatedPassword += allCharacters[random];
      }
    }
  }
  passwordText.innerHTML = generatedPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
