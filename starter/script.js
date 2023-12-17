// Array of special characters to be included in password
const specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
const numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
const lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
const upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

const charOptions = [];
const generatedPassword = '';
// You can store the generatedPassword as a string and concat each character OR
// as an array and push each character, then join once you have enough characters

// Function to prompt user for password options
function getPasswordOptions() {
  // Prompt for password length//
    // Conditional to check that the number that was entered is in range//
  // Prompts store data as strings, so need to parse into a number//
  // If the user's input is out of range, call the function again//
  let getLength;
  getLength = parseInt(
    prompt("Choose a password length between 8 and 128 char.")
  );
  if (getLength > 7 && getLength < 129) {
    charOptions.length = getLength;
  } else {
    alert("Invalid input. Choose a number between 8 and 128.");
    getPasswordOptions;
    return;
  }

  //Prompt to choose special char and cap letter as boolean
    // Confirm which character sets to use//
  function getSpecial() {//Create nested function to avoid a user going back to selecting password length//
    let getCapital = confirm("Include upper case letters?");
    let getLowerCase = confirm("Include lower case letters?");
    let getNum = confirm("Include numbers?");
    let getSpecialChar = confirm("Include special characters?");

    // Once they select a character set:
    // If the user answers false for all, either return out of the function or call the function again//
  // Generate a random character for each selected character set//
  // Either push selected character sets to a mega-array of all selected characters//
  // OR you can keep the arrays separate and generate a random number to select the array and another to select the index
    if (getCapital === false && getLowerCase === false && getNum === false && getSpecialChar === false) {
      alert("Please select at least one character type.");
      getSpecial(); // Call the function again to prompt the user for character types
      return;
    } else if (getCapital === true) {
      const indexCapital = Math.floor(Math.random() * upperCasedCharacters.length);
      charOptions.push(indexCapital);
      console.log(charOptions);
    } else if (getLowerCase === true) {
      const indexLowerCase = Math.floor(Math.random() * lowerCasedCharacters.length);
      charOptions.push(indexLowerCase);
      console.log(charOptions);
    } else if (getNum === true) {
      const indexNum = Math.floor(Math.random() * numericCharacters.length);
      charOptions.push(indexNum);
      console.log(charOptions);
    } else if (getSpecialChar === true) {
      const indexSpecialChar = Math.floor(Math.random() * specialCharacters.length);
      charOptions.push(indexSpecialChar);
      console.log(charOptions);
    }
  }
  getSpecial()

  
}
getPasswordOptions()

// Function for getting a random element from an array
function getRandom(arr) {
  // Need a variable to hold the password as it's being generated//
  // Need a variable to hold the index that's being generated

  // For loop that loops the number of times that matches the length the user chose
  // Generate a random number
  // That number is the index for a character in the mega-array
  // So then, mega-array[generated-index] is the actual character
  // Add that character to the password

  // Once we finish the for loop, return the generated password
}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
const generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);