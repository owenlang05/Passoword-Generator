// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
  passwordLength = promptLength();
  characterTypes = promptTypes();

  var password = generatePassword(passwordLength, characterTypes);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function promptLength() {
  length = 0;
  //prompts for length
  var passwordLength = window.prompt("Password Length(8-128): ");
  // checks if length is in range
  if (passwordLength >= 8 && passwordLength <= 128) {
    return passwordLength;
  }
  // tells user to put in a correct value if not in range and calls this function again
  window.alert("Please enter a length between 8 and 128.");
  //funny recursion
  length = promptLength();
  return length;
}


function promptTypes() {
  // sets the types for the password
  var types = [1, 1, 1, 1];
  
  types[0] = promptYesOrNo("Include lowercase characters (y/n): ");
  types[1] = promptYesOrNo("Include uppercase characters (y/n): ");
  types[2] = promptYesOrNo("Include numeric characters (y/n): ");
  types[3] = promptYesOrNo("Include special characters (y/n): ");
  
  if (types.includes(1)){
    return types;
  }

  window.alert("Please select a character type to include in the password.");
  //funny recursion
  types = promptTypes();
  return types;
}

function promptYesOrNo(message){
  // prompt message for types since it is almost the same prompt 4 times
  var yesOrNo = "";
  while (yesOrNo.toLowerCase() !== "y" && yesOrNo.toLowerCase() !== "n") {
    yesOrNo = window.prompt(message);
    yesOrNo = yesOrNo.toLowerCase();
    if (yesOrNo !== "y" && yesOrNo !== "n"){
      window.alert("Please put either y or n")
    };
  };
  // changes ys and ns to 1s and 0s
  if (yesOrNo === "y"){
    return 1;
  }
  return 0;
}

function generatePassword(length, types){
  console.log(length, types);
  var password = "";
  // makes an array with all possible character types to match with the selected types
  const characters = [
    "abcdefghijklmnopqrstuvwxyz",
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    "1234567890",
    "!@#$%^&*"];
  // string that the chosen types will be appended to
  var chosenTypes = "";
  // adds chosen characters to the string
  for (var i = 0; i < types.length; i++){
    if (types[i]){
      chosenTypes += characters[i];
    }
  }
  // generates the password by randomly selecting characters in chosenTypes
  for (var j = 0; j < length; j++){
    index = Math.floor(Math.random() * chosenTypes.length);
    password += chosenTypes[index];
  }

  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
