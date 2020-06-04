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



function generatePassword() {
    console.log("I work!");

    let generatedPassword = "";

    const charLength = Number(prompt("select password length between 8 - 128 characters"));

    if (charLength < 8 || charLength > 128) {
        alert("Password length must be between 8 - 128 characters!");
    } else if (charLength >= 8 && charLength <= 128) {

        const lowercaseChar = confirm("Use lowercase characters?");
        const uppercaseChar = confirm("Use uppercase characters?");
        const numericalChar = confirm("Use numerical characters?");
        const specialChar = confirm("Use Special characters?");
        const typesArr = [lowercaseChar, uppercaseChar, numericalChar, specialChar];

        console.log(typesArr)


        typesArr.forEach(typesArr => {
            for (let i = generatedPassword.length; generatedPassword.length < charLength; i++) {

                if (lowercaseChar === true) {
                    generatedPassword += getLowercase();
                    console.log(generatedPassword);
                };

                if (uppercaseChar === true) {
                    generatedPassword += getUppercase();
                    console.log(generatedPassword)
                };

                if (numericalChar === true) {
                    generatedPassword += getRandomNumber();
                    console.log(generatedPassword);
                };



                if (specialChar === true) {
                    generatedPassword += getRandomSymbol();
                    console.log(generatedPassword);

                };

            }
        });

        return generatedPassword;

    };

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

function getRandomSymbol() {
    const special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '[', ']', '{', '}', '=', '/', '.'];
    return special[Math.floor(Math.random() * special.length)];
}
console.log(getRandomSymbol());