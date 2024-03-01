const empty = "";
const uCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lCase = "abcdefghijklmnopqrstuvwxyz";
const number ="0123456789";
const symbol = "!@#$%^&*-_";

const password = document.getElementById("password");
const pLength = document.getElementById("p-length");
const uppercase = document.getElementById("p-uppercase");
const lowercase = document.getElementById("p-lowercase");
const pNumber = document.getElementById("p-number");
const pSymbol = document.getElementById("p-symbol");
const submit = document.getElementById("submit");

submit.addEventListener("click",()=>{
    let initialPassword = empty;
    (uppercase.checked) ? initialPassword += uCase : "";
    (lowercase.checked) ? initialPassword += lCase : "";
    (pNumber.checked) ? initialPassword += number : "";
    (pSymbol.checked) ? initialPassword += symbol : "";
    password.value = generatePassword(pLength.value, initialPassword);
})
function generatePassword(len, initialPassword){
    let pass = " ";
    for(let i=0; i<len; i++){
        pass += initialPassword.charAt(Math.floor(Math.random()* initialPassword.length));
    }
    return pass;
}
// Copy passward to clipboard
const copy = document.getElementById("copy");
console.log(copy)
copy.addEventListener("click",()=>{
    if(password.value == ""){
        alert("please generate password");
    }else{
        password.select();
        document.execCommand("copy");
        alert("Password coppied to clipboard");
    }


});