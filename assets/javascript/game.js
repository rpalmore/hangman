// Our array of possible computer choices for Classic Cocktail theme:

var computerChoices = [
    "dark and stormy",
    "caipirinha",
    "sazerac",
    "manhattan",
    "pimm's cup",
    "moscow mule"
];

// Define blank array of letters comprising each computerGuess:

var computerGuessLetters = [];

// Define variable that will represent computerGuess with blanks:

var numberBlanks = 0;

// Define blank array of winning letters:

var blanksWins = [];

// Define blank array of losing letters:

var blanksLosses = [];

// Define variables for tracking wins and losses: 

var wins = 0;
var losses = 0;

/* Set the computerGuess variable equal to a random 
   choice from the computerChoices array. */

var computerGuess = computerChoices[
    Math.floor(Math.random() * computerChoices.length)
];

// Check this is working in console.log:

console.log("this is the computerGuess: " + computerGuess)

// Change computerGuess to string of letters:

computerGuessLetters = computerGuess.split("");

// Check this is working in console.log:

console.log("here are computerGuessLetters " + computerGuessLetters);

// Define number of blank spaces needed to represent computerGuess:

numberBlanks = (computerGuess.length);

// Check this is working in console.log:

console.log(numberBlanks);

// Create for loop to convert letters in computerGuess to hyphens:

for (var i = 0; i < numberBlanks; i++) {
    blanksWins.push("_");

// Write the hyphens to the document

document.getElementById("blanks-wins").innerHTML = blanksWins.join(" ");
}

// Capture input from user pressing in key:

document.onkeyup = function(event) {

// Determine which key was pressed and convert to lower case:
        
var userGuess = event.key.toLowerCase();

// Check this is working in console.log:

console.log("this is my guess " + userGuess);

// Write userGuess to document. 
// INCOMPLETE: Below works but does not retain letters on page.

// document.getElementById("user-Guess").innerHTML = userGuess;

// In console log, compare userGuess with each letter in ComputerGuess:

console.log(computerGuess.includes(userGuess));

// Now try comparison as if / then statement:

if (computerGuess.includes(userGuess)) {

// Write the userGuess to the correct blank spot in html:
 

	// alert("Yay!");
	// document.getElementById("blanks-wins").innerHTML = blanksWins;

// else {
//     alert("Wah wah ...");
//     // document.getElementById("blanks-losses").innerHTML = blanksLosses;
// }

}
}




