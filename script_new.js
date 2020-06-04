// Assignment Code
let generateBtn = document.querySelector('#generate');
let passwordText = document.querySelector('#password');


// Add event listener to generate button

generateBtn.addEventListener('click', writePassword);

// Write password to the #password input

function writePassword() {
    userPrompt();
    let password = generatePassword();
}

//1.1 prompt("Please Select length of password between 8 -128 characters")
//1.2 confirm("lowercase characters?")
//1.3 confirm("uppercase characters?")
//1.4 confirm("numbers?")
//1.5 confirm("symbols?")


function userPrompt() {
    let userLength = Number(prompt("Please Select length of password between 8 -128 characters"));
    console.log(userLength);

    let userLowercase = confirm("lowercase characters?");
    console.log('Use Lowercase?: ' + userLowercase);


    let userUppercase = confirm("uppercase characters?");
    console.log('Use Uppercase?: ' + userUppercase);


    let userNumber = confirm("numbers?")
    console.log('Use Numbers?: ' + userNumber);


    let userSymbols = confirm("symbols?");
    console.log('Use Symbols?: ' + userNumber);

    //2 Create array and check user inputs:

    const lengthEl = userLength;
    const lowercaseEl = userLowercase;
    const uppercaseEl = userUppercase;
    const numbersEl = userNumber;
    const symbolsEl = userSymbols;

    console.log(userLength, userLowercase, userUppercase, userNumber, userSymbols);

    passwordText.textContent = generatePassword(lowercaseEl, uppercaseEl, numbersEl, symbolsEl, lengthEl);


    // let userInputs = [userLength, userLowercase, userUppercase, userNumber, userSymbols];
    // console.log(userInputs);
    // return userInputs;

    return userLength;
}

const randomFunc = {
    lower: getLowercase,
    upper: getUppercase,
    number: getRandomNumber,
    symbol: getRandomSymbol
};

function generatePassword(lower, upper, number, symbol, lengthEl) {
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

    for (let i = 0; i <= lengthEl; i += typesCount) {
        typesArr.forEach(types => {
            const funcName = Object.keys(types)[0];
            console.log('funcName: ', funcName);

            generatedPassword += randomFunc[funcName]();
        });

        console.log(generatedPassword.slice(0, lengthEl));

        return generatedPassword;

    }


    //4. Add final password back to variable and return
}





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