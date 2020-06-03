// Assignment Code
let generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
    let password = generatePassword();
    let passwordText = document.querySelector('#password');

    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);



// Create series of options that allow user to generate password when press 'Generate Password Button'

function generatePassword() {
    console.log("I work!");

    const charLength = Number(prompt("select password length between 8 - 128 characters"));

    if (charLength >= 8 && charLength <= 128) {

        const LowercaseChar = confirm("Use lowercase characters?");
        const uppercaseChar = confirm("Use uppercase characters?");
        const numericalChar = confirm("Use numerical characters?");
        const specialChar = confirm("Use Special characters?");







    } else {
        alert("Password length must be between 8 - 128 characters!");
    };








};


//Options:
//Length of Password
//lowercase
//uppercase
//numerical characters 
//Special characters


// take user inputs and generate password using the following conditions:
//generated password = pwLength
//all character types = TRUE
// RANDOMLY loop through each TRUE character type function and print new character to PasswordText String
// When nominated password length is reached, return final password and print on html