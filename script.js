// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//Function to ask the length of password that checks if there is a Y or N in putted, if not it will ask again
var askLength= function(){
  var length=window.prompt("What is your password length? Must be between 8 and 128 characters.");
  if(length>=8 && length<=128){
    return length;
  }else{
    askLength();
  }
}
//Function to ask if you want lowercase in the password that checks if there is a Y or N in putted, if not it will ask again
var askLower= function(){
  var decision="l"
  var charLower=window.prompt("Do you want lowercase in your password? Type Y or N for yes or no.");
  if(charLower==="Y" || charLower==="N"){
    if (charLower==="Y"){
  
      return decision;
       
        }if(charLower==="N"){
          return;
        }
  }else{
    askLower();
  }
}
//Function to ask if you want uppercase in the password that checks if there is a Y or N in putted, if not it will ask again
var askUpper= function(){
  var decision="u"
  var charUpper=window.prompt("Do you want uppercase in your password? Type Y or N for yes or no.");
  if(charUpper==="Y" || charUpper==="N"){
    if (charUpper==="Y"){
  
      return decision;
       
        }if(charUpper==="N"){
          return;
        }
  }else{
    askUpper();
  }
}
//Function to ask if you want numbers in the password that checks if there is a Y or N in putted, if not it will ask again
var askNumber= function(){
  var decision="n"
  var charNumbers=window.prompt("Do you want numbers in your password? Type Y or N for yes or no.");
  if(charNumbers==="Y" || charNumbers==="N"){
    if (charNumbers==="Y"){
  
      return decision;
       
        }if(charNumbers==="N"){
          return;
        }
  }else{
    askNumber();
  }
}
//Function to ask if you want special characters in the password that checks if there is a Y or N in putted, if not it will ask again
var askSpecial= function(){
  var decision="s"
  var charSpecial=window.prompt("Do you want special characters in your password? Type Y or N for yes or no.");
  if(charSpecial==="Y" || charSpecial==="N"){
    if (charSpecial==="Y"){
  
      return decision;
       
        }if(charSpecial==="N"){
          return;
        }
  }else{
    askSpecial();
  }
}
var generatePassword=function(){
  //password specifications variable
  var passSpec="";
  var characters="!@#$%^&*()_+'~><?/.,+-`";
  var upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lower="abcdefghijklmnopqrstuvwxyz";
  var numbers="123456789";
  //variable to hold the newly created password
var password="";
 
var length=askLength();

passSpec=passSpec+askLower();
passSpec=passSpec+askUpper();
passSpec=passSpec+askNumber();
passSpec=passSpec+askSpecial();




  //loop to create password
  for(var i=0;i<length;i++){
 //selects a number based how long passSpec is and that is what the char is based at to be selected
var passLength=getRandomInt(0,passSpec.length-1);
   //assigns a random letter standing for lowercase,uppercase,numbers, and special characters
var selected=passSpec.charAt(passLength);
//if the selected value stands for lowercase it select a random lowercase letter
if(selected==="l"){
password=password+lower.charAt(getRandomInt(0,lower.length-1));
}
//if the selected value stands for uppercase it select a random uppercase letter
if(selected==="u"){
  password=password+upper.charAt(getRandomInt(0,upper.length-1));
}
//if the selected value stands for a number it selects a random number between 0 and 9
if(selected==="n"){
  password=password+numbers.charAt(getRandomInt(0,numbers.length-1));
}
//if the selected value stands for special character it selects a random special character
if(selected==="s"){
  password=password+characters.charAt(getRandomInt(0,characters.length-1));
}









  
  }//end of for loop
  //returns the newly created password
  return password;
}
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
