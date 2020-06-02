// Assignment Code
let generateBtn = document.querySelector('#generate');
let passwordText = document.querySelector('#password');
// Write password to the #password input
function writePassword() {
    userPrompt();
    let password = generatePassword();
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);


//1 Prompt User:
// const resultEl = document.getElementById('password');
// const lengthEl = document.getElementById('length');
// const uppercaseEl = document.getElementById('uppercase');
// const lowercaseEl = document.getElementById('lowercase');
// const numbersEl = document.getElementById('numbers');
// const symbolsEl = document.getElementById('symbols');
// const generateEl = document.getElementById('generate');


const randomFunc = {
    lower: getLowercase,
    upper: getUppercase,
    number: getRandomNumber,
    symbol: getRandomSymbol
};



function userPrompt() {


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
    console.log('Use Symbols?: ' + userNumber);

    //2 Create array and check user inputs:

    const lengthEl = userLength;
    const lowercaseEl = userLowercase;
    const uppercaseEl = userUppercase;
    const numbersEl = userNumber;
    const symbolsEl = userSymbols;

    console.log(userLength, userLowercase, userUppercase, userNumber, userSymbols);

    passwordText.value = generatePassword(lowercaseEl, uppercaseEl, numbersEl, symbolsEl, lengthEl);



    // let userInputs = [userLength, userLowercase, userUppercase, userNumber, userSymbols];
    // console.log(userInputs);
    // return userInputs;

}


function generatePassword(lower, upper, number, symbol, length) {
    //1. create password variable

    let generatedPassword = '';
    const typesCount = lower + upper + number + symbol;
    console.log("typesCount: ", typesCount);


    //2. filter False types

    const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(item => Object.values(item)[0]);
    console.log('typesArr: ', typesArr);

    //3. Loop over declared length

    if (typesCount === 0) {
        return "";
    }

    for (let i = 0; i < length; i += typesCount) {
        typesArr.forEach(types => {
            const funcName = Object.keys(types)[0];
            console.log('funcName: ', funcName);

            generatedPassword += randomFunc[funcName]();
        });

        console.log(generatedPassword);

        const finalPassword = generatedPassword;
        return finalPassword;

    }


    //4. Add final password back to variable and return
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