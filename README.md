# PasswordGenerator
Full Stack Flex Homework Assignment #3 - Password Generator


# Description/Purpose of Project
This exercise required us to demonstrate our knowledge of Javascript and create a functioning Password Generator based on a number of different user-entered parameters:

- Password Length (between -128 characters)
- Use of lowercase character
- Use of uppercase characters
- Use of numerical characters
- Use of special characters 



Deployed application URL: https://jermayy.github.io/PasswordGenerator/



![](/screenshots/initialScreen.png)

1. initial screen when you open deployed app



![](/screenshots/promptCharLength.png)
2. Browser will prompt user to enter a password length between 8 and 128 characters


![](/screenshots/alertCharLength.png)
 *2a. If user does not enter a numerical value between 8 and 128 the above prompt appears*
 
 
![](/screenshots/confirmLowercase.png)
3. Browser will prompt user if they would like lowercase characters in their generated password

![](/screenshots/confirmUppercase.png)
4. Browser will prompt user if they would like uppercase characters in their generated password

![](/screenshots/confirmLNumerical.png)
5. Browser will prompt user if they would like numerical characters in their generated password

![](/screenshots/confirmSpecial.png)
6. Browser will prompt user if they would like special characters in their generated password
 

![](/screenshots/finalScreen.png)
7. Browser will then take all user parameters, generate new password accordingly and return it to browser




## Issues/Difficulties/Key Points

* Main difficulty of this task was to translate the user's inputs from the browser prompts to trigger the corresponding functions associated with each character type.

* Multiple attempts to make write this javascript were made trying to learn from online sources and also messy code/hard to follow code; however after further reiterating pseudocode and understanding the logic for this application it made a lot more sense.

* Doing some research and viewing some online tutorials, each followed different approaches to the same problem - most however worked with checkboxes for user input rather than browser prompts.

* Learned how to reference browser character codes 'fromCharCode.' to randomly select between a range of characters

* Initial intent was to have the password randomly select each of the character types that are 'truthy' after user input, however due to complexity and time constraint, working code will loop in order of prompts eg. lowercase,uppercase, numerical & special --> repeat.

* Had difficulty getting the newly generated password to appear back onto the webpage.

Since below was already provided:

```let password = generatePassword();
    let passwordText = document.querySelector('#password');

    passwordText.value = password;
} 
```
returning the final generated password within the 'generatePassword()' function allow this to work.

```
    return generatedPassword;
```


* Generated password length was only generating to the number of 'true' character types selected by the user eg. lowercase = True, uppercase = True, Numerical = True, Special = True - returns generated password length of 4 only.

This was corrected by changing the loop variable 'i' to equal generatedPassword.length and continuing to loop until generatedPasswordlength matched the nominated CharLength from the user.

```
 for (let i = generatedPassword.length; generatedPassword.length < charLength; i++) {

 }
```


Last Edit 04/06/2020