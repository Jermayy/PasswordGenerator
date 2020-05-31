// Assignment Code
let generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
    userPrompts();
    let password = generatePassword();
    let passwordText = document.querySelector('#password');


    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);


//1 Prompt User:
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const generateEl = document.getElementById('generate');


const randomFunc = {
    lower: getLowercase,
    upper: getUppercase,
    number: getRandomNumber,
    symbol: getRandomSymbol
};



function generatePassword() {


    //1.1 prompt("Please Select length of password between 8 -128 characters")
    let userLength = Number(prompt("Please Select length of password between 8 -128 characters"));
    console.log(userLength);
    //1.2 confirm("lowercase characters?")
    let userLowercase = confirm("lowercase characters?");
    console.log('Use Lowercase?: ' + userLowercase);

    //1.3 confirm("uppercase characters?")
    let userUppercase = confirm("uppercase characters?");
    console.log('Use Uppercase?: ' + userUppercase);

    //1.4 confirm("numbers?")
    let userNumber = confirm("numbers?")
    console.log('Use Numbers?: ' + userNumber);

    //1.5 confirm("symbols?")
    let userSymbols = confirm("symbols?");


    //2 Create array and check user inputs:
    // Length: numbers
    // lower:  T/F
    // upper:  T/F
    // Num:    T/F
    // Symbol: T/F




    let userInputs = [userLength, userLowercase, userUppercase, userNumber, userSymbols];
    console.log(userInputs);
    return userInputs;

}



//3 Filter new array to only 'True' values
// eg.   userValid = [16,False, True,True,True];


//4 Write loop that runs the following per loop:
// 4.1 Randomly selects between 'True' User Selected properties
// 4.2 Trigger function to randomly select character for property
// 4.3 Join generated character to new passoword string
// 4.4 Repeat till loopends
















function getLowercase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
console.log(getLowercase());

function getUppercase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
console.log(getUppercase());

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
console.log(getRandomNumber());

function getRandomSymbol() {
    const special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '[', ']', '{', '}', '=', '/', '.'];
    return special[Math.floor(Math.random() * special.length)];
}
console.log(getRandomSymbol());