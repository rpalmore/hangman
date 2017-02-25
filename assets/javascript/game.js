// Our array of possible computer choices for Classic Cocktail theme:

var computerChoices = [
    "dark and stormy",
    "caipirinha",
    "sazerac",
    "manhattan",
    "pimms cup",
    "moscow mule"
];

// Define empty string to represent computer's random selection:

var computerGuess = "";

// Define blank array of letters comprising each computerGuess:

var computerGuessLetters = [];

// Define variable that will represent computerGuess with blank spaces:

var numberBlanks = 0;

// Define blank array of winning letters:

var blanksWins = [];

// Define blank array of losing letters:

var blanksLosses = [];

// Define variables for tracking wins and losses: 

var wins = 0;
var losses = 0;

// Define variable for number of guesses player has:

var chances = 9;

/* Set the computerGuess variable equal to a random 
   choice from the computerChoices array. */
function letComputerChoose() {
    computerGuess = computerChoices[
    Math.floor(Math.random() * computerChoices.length)
    ];

    console.log("this is random word generated " + computerGuess);
}

letComputerChoose();

// Check this is working in console.log:

console.log("this is the computerGuess: " + computerGuess)

// Change computerGuess to string of letters:

computerGuessLetters = computerGuess.split("");

// Check this is working in console.log:

console.log("here are computerGuessLetters " + computerGuessLetters);

// Define number of blank spaces needed to represent computerGuess:

numberBlanks = computerGuessLetters.length;
// numberBlanks = (computerGuess.length);

// Check this is working in console.log:

console.log("Here is numberBlanks " + numberBlanks);

// Create for loop to convert letters in computerGuess to hyphens:

for (var i = 0; i < numberBlanks; i++) {
    blanksWins.push("_");

// Write the hyphens to the document

document.getElementById("blanks-wins").innerHTML = blanksWins.join(" ");
}

document.getElementById("chances-left").innerHTML = chances;

// Next: capture input from user pressing in key:

document.onkeyup = function(event) {

// Determine which key was pressed and convert to lower case:
var userGuess = event.key.toLowerCase();

// Check this is working in console.log:
console.log("this is my guess " + userGuess);

// In console log, compare userGuess with each letter in ComputerGuess:
console.log(computerGuess.includes(userGuess));

// Now try comparison as if / then statement:
if (computerGuess.includes(userGuess)) {

    console.log("here is index of " + computerGuess.indexOf(userGuess));
}
else {
    blanksLosses.push(userGuess);
    chances--;
}

if (computerGuess === blanksWins){
    wins++;
    document.getElementById("win-counter").innerHTML = wins;
    chances = 9;
    blanksLosses = [];
    blanksWins = [];
    letComputerChoose();

}

if (chances === 0) {
    losses++;
    document.getElementById("loss-counter").innerHTML = losses;
    chances = 9;
    blanksLosses = [];
    blanksWins = [];
    letComputerChoose();
}

// Update remaining chances to HTML, wrong letter guesses.
    document.getElementById("chances-left").innerHTML = chances;
    document.getElementById("blanks-losses").innerHTML = blanksLosses.join(" ");
}