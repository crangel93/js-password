// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword(){
  // password length prompt
  var length = window.prompt("what is your password length. It needs to be between 8 and 128 characters.")
  //boolean value for all four inputs
  var lowercase = window.confirm("Do you want lowercase characters in your password.")
  var uppercase = window.confirm("Do you want uppercase characters in your password.")
  var numeric = window.confirm("Do you want numbers in your password.")
  var specialCharacters = window.confirm("Do you want special characters in your password.")
  //initializing a password string where the password will be stored
  var password = "";
  //all uppercase letters
  var characterUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  //the character base for the options chosen
  var charBase= "";
  //lowercase letters
  var characterLower = "abcdefghijklmnopqrstuvwxy";
  //special characters
  var specialChar = `!"#$%&'()*+,-./:;<=>?@[\]^_{|}~`;
  //numbers
  var numbers="0123456789";
  
  //if lowercase is chosen lowercase letters get added to charbase
  if (lowercase) {
      charBase += characterLower;
     
     
  }
   //if uppercase is chosen uppercase letters get added to charbase
  if (uppercase) {
     
      charBase += characterUpper
      console.log(charBase);
  }
   //if numbers is chosen numbers get added to charbase
  if (numeric) {
     
      charBase += numbers;
      console.log(charBase);
  } 
   //if special characters is chosen special characters get added to charbase
  if (specialCharacters) {
      charBase += specialChar;
      
      console.log(charBase);
  }
  //for the the integer value of length password is appended at a random location based on charbaseLength
  for (let x = 1; x < parseInt(length) + 1; x++) {


       password+= charBase.charAt(Math.floor(Math.random() * charBase.length));
  





  }

//returns the password
return password;





}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
