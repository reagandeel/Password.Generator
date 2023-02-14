// Assignment code here

// Setting specifications for the password/variables
var lowerCaseArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCaseArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numArray = ['0','1','2','3','4','5','6','7','8','9'];
var specialCharArray = ['!','@','#','$','*','&','[', ']', '(', ')','%', '>', '<', '+', '.', ':', ';','=','^','{', '}', ',','_' ]; // !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~
var emptyArray =[];

// generated prompts and password inputs will be in this function container
function generatePassword() {

// prompt - meets minimum and maxium character requirement (8-128 characters.)
passwordLength = prompt("How many characters would you like in your password? Please choose between 8 - 128 characters.");
if (passwordLength < 8 || passwordLength > 128) {
  return "Please choose a number between 8-128.";
} else if (isNaN(passwordLength)) {
  return ("Please enter a valid numerical value.");
} else {
  alert("Your password will be " + passwordLength +" characters long.");
}

// prompt - meets lower case letter requirement
inputLowerCase = confirm ("Would you like your password to have lowercase letters?");
if (inputLowerCase) {
  alert("Your password will contain lowercase letters!");
} else {
  return("Your password will NOT contain lowercase letters.");
}

// prompt - meets upper case letter requirement.
inputUpperCase = confirm("Would you like for your password to have uppercase letters?");
if (inputUpperCase) {
  alert("Your password will contain uppercase letters!");
} else {
  return ("Your password will NOT have uppercase letters.");
}

// prompt - meets number requirement
inputNum = confirm ("Would you like for your password to have numbers?");
if (inputNum) {
  alert("Your password will contain numbers!");
} else {
  return ("Your password will NOT contain numbers.");

}

// prompt - special character requirement.
inputSpecialChar = confirm("Would you like for your password to contain special characters?");
if (inputSpecialChar) {
  alert("Your password will contain special characters!");
} else {
  return ("Your password will NOT contain special characters.");
}

// What goes on behind the scenes to get the password generated.
let endResult = "";
for (let i = 0; i < passwordLength; i++) {
  let prng =[Math.floor(Math.random() * emptyArray.length)];
  endResult += emptyArray.length[prng];
 }
// The output!
  return endResult;

};
// sets task for HTML.
var generateBtn = document.querySelector ("#generate");

// sets function for generate password 
function writePassword () {
var password= generatePassword ();
var passwordText = document.querySelector("#password");
passwordText.value = password;

}


// creates a use/function for the button in the HTML.
generateBtn.addEventListener ("click", writePassword);