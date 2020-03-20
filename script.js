// Assignment Code
var generateBtn = document.querySelector("#generate");
var stringLength = 10; 
// Write password to the #password input
function writePassword() {
  var modalText = document.querySelector("#ModalCenter");
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//The following function is used for creating 10 characters long password
function generatePassword(){ 
  var chars ="abcdefghjklmnpqrstuvwxyz0123456789ABCDEFGHJKLMPQRSHUVWXYZ~!@#$%^&*";
  var randomString = '';
  var rnum = 0;
    for (var i=0; i<stringLength; i++) {
      rnum = Math.floor(Math.random() * chars.length);
      randomString+=chars[rnum];
    }
  return randomString; 
}




