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