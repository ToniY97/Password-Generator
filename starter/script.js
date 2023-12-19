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


// Function to prompt user for password options
function getPasswordOptions() {

  // You can store the generatedPassword as a string and concat each character OR
  // as an array and push each character, then join once you have enough characters

  // Prompt for password length//
  // Conditional to check that the number that was entered is in range//
  // Prompts store data as strings, so need to parse into a number//
  // If the user's input is out of range, call the function again//
  let getLength = parseInt(
    prompt("Choose a password length between 8 and 128 char.")
  );

  if (getLength < 8 || getLength > 128) {
    alert("Invalid input. Choose a number between 8 and 128.");
    return;
  }

  //Prompt to choose special char and cap letter as boolean
  // Confirm which character sets to use//
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
    return;
  }

  return {
    getLength: getLength,
    getCapital: getCapital,
    getLowerCase: getLowerCase,
    getNum: getNum,
    getSpecialChar: getSpecialChar
  }


}

// Function for getting a random element from an array
// Generate a random number
// That number is the index for a character in the mega-array
function getRandom(arr) {
  // Need a variable to hold the password as it's being generated//
  // Need a variable to hold the index that's being generated
  const indexChar = arr[Math.floor(Math.random() * arr.length)];

  return indexChar
}

// Function to generate password with user input
function generatePassword() {
  let charOptions = [];
  let generatedPassword = '';
  const options = getPasswordOptions() //assigning var to access objects in function getPasswordOptions

  // mega-array[generated-index] is the actual character
  // Add that characters to the password
  if (options.getCapital === true) {
    charOptions = charOptions.concat(upperCasedCharacters);
  } if (options.getLowerCase === true) {
    charOptions = charOptions.concat(lowerCasedCharacters);
  } if (options.getNum === true) {
    charOptions = charOptions.concat(numericCharacters);
  } if (options.getSpecialChar === true) {
    charOptions = charOptions.concat(specialCharacters);
  }

  // For loop that loops the number of times that matches the length the user chose
  // Once we finish the for loop, return the generated password
  for (let i = 0; i < options.getLength; i++) {
    const randomLetter = getRandom(charOptions);
    generatedPassword += randomLetter;

  }
  return generatedPassword

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