var lowerAlpha = "abcdefghijklmnopqrstuvwxyz";
var lowerAlphaArray = lowerAlpha.split("");
var upperAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var upperAlphaArray = upperAlpha.split("");
var numbers = "0123456789";
var numbersArray = numbers.split("");
var symbols = "~!@#$%^&_-+=";
var symbolsArray = symbols.split("");
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var generatedPassword = "";
  var allCharacters = [];
  var passwordText = document.querySelector("#password");
  var characterCount = prompt(
    "How many characters would you like your password to be? \n8-128"
  );
  if (characterCount < 8 || characterCount > 128) {
    alert("the password character count must be over 8\nPlease re-start");
  } else {
    if (confirm("Contain uppercase letters?")) {
      Array.prototype.push.apply(allCharacters, upperAlphaArray);
    }
    if (confirm("Contain lowercase letters?")) {
      Array.prototype.push.apply(allCharacters, lowerAlphaArray);
    }
    if (confirm("Contain numbers?")) {
      Array.prototype.push.apply(allCharacters, numbersArray);
    }
    if (confirm("Contain symbols?")) {
      Array.prototype.push.apply(allCharacters, symbolsArray);
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
