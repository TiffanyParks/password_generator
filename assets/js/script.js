var generateBtn = document.querySelector("#generate");

var lowercase_chars = "abcdefghijklmnopqrstuvwxyz";
var uppercase_chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers_chars = "0123456789";
var symbols_chars = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

function generatePassword() {
    

    let  length = prompt("choose length of password");
    console.log(length);
    if(length <8 || length >128 || length===""){
        alert("pasword has to be more than 8 or less than 128 in length")
    }else{
        let finalPassword = "";
        if(window.confirm("do you want to include uppdercase letters?")){
            finalPassword += uppercase_chars;
            console.log(finalPassword);
        }
        if(window.confirm("do you want to include lowercase letters?")){
            finalPassword += lowercase_chars;
            console.log(finalPassword);
        }
        if(window.confirm("do you want to include numbers?")){
            finalPassword += numbers_chars;
            console.log(finalPassword);
        }
        if(window.confirm("do you want to include symbols")){
            finalPassword += symbols_chars;
            console.log(finalPassword);
        }

        let randomPssword = "";
        for(let i=0; i<length; i++){
            randomPssword = randomPssword + finalPassword.charAt(Math.floor(Math.random()*finalPassword.length));
        }
        console.log(randomPssword);
        return randomPssword;

    }
}

//Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
