// Assignment Code
let generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
    let password = generatePassword();
    let passwordText = document.querySelector('#password');

    // 1.initiate password variable
    // 2. Filter out any unwanted password types
    // 3. Loop over length call generator function for each type



    // 4. Add final Password to password
    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);


// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

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