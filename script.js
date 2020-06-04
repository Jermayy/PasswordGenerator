// Assignment Code
let generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
    
    let password = generatePassword();
    let passwordText = document.querySelector('#password');

    // 1.User clicks password generate btn
    // 1.1 user's button triggers password generator function:

    // 2. Browser prompts user charactor types:

    // 2.2 Prompt inputs "Select length of password" (8-128 characters)
    let Length = null;


    function generatePassword() {
        let Length = Number(prompt("Select length of password (8 - 128 Characters)"));

        if (Length === Number && Length >= 8 && Length <= 128) {
            let userLength = Length;
        } else {
            alert("invalid password length");
            length = null;
        };

        let userLowercase = confirm("Use Lowercase characters?");
        let userUppercase = confirm("Use Uppercase characters?");
        let userNumber = confirm("Use Numbers?");
        let userSpecial = confirm("Use Special Characters?");

        let validityCheck = [userLength, userLowercase, userUppercase, userNumber, userSpecial];
        console.log(validityCheck);


    }

    // alert("password length: " + userLength);
    // console.log(userLength);


    // // 2.3 Confirm Lowercase "Use Lowercase characters"
    // let userLowercase = confirm("Use Lowercase characters");

    // if (userLowercase === true) {
    //     alert("Use lowercase");
    //     console.log(userLowercase);

    //     // 2.4 Confirm Uppercase "Use Uppercase characters"

    //     let userUppercase = confirm("Use Uppercase characters");

    //     if (userUppercase === true) {
    //         alert("Use Uppercase");
    //         console.log(userUppercase);

    //     }








    // 2.5 Confirm Numbers "Use Numbers"
    // 2.6 Confirm Special Characters "Use Special characters?"

    // 3. Filter out any unwanted password types
    // 3. Loop over length call generator function for each type



    // 4. Add final Password to password
    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);


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
    special: getRandomSpecial
};


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

function getRandomSpecial() {
    const special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '[', ']', '{', '}', '=', '/', '.'];
    return special[Math.floor(Math.random() * special.length)];
}
console.log(getRandomSpecial());