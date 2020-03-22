// Assignment Code
var userLength = document.getElementById("userLength"); 
var userNumber = document.getElementById("userNumber"); 
var userUpper = document.getElementById("userUpper"); 
var userSpecial = document.getElementById("userSpecial"); 
var passwordText = document.querySelector("#password"); 
var generateBtn = document.querySelector("#generate"); 

var charLcase = "abcdefghjklmnpqrstuvwxyz";
var charUcase = "ABCDEFGHJKLMPQRSHUVWXYZ";
var charNumber = "0123456789";
var charSpecial = "~!@#$%^&*";

generateBtn.addEventListener("click", writePassword);

function writePassword(){
  var finalChar = charLcase; 
  var charLength = userLength.value;

    if (userNumber.checked==true){
      finalChar+= charNumber;
    }

    if (userUpper.checked == true){
      finalChar+= charUcase;
    }

    if (userSpecial.checked == true){
      finalChar+= charSpecial;
    }
  var password = generatePassword(charLength, finalChar);
  passwordText.value = password;
}

function generatePassword(charLength, chars){ 
  var randomString = "";
  var rnum = 0;
    for (var i=0; i<charLength; i++) {
      rnum = Math.floor(Math.random() * chars.length);
      randomString+=chars[rnum];
    }
  return randomString; 
}






