// Our array of possible computer choices

var computerChoices = [
    "dark and stormy",
    "caipirinha",
    "sazerac",
    "manhattan",
    "pimm's cup",
    "moscow mule"
];

// Define blank array of letters within computerGuess. 

var computerGuessLetters = [];

// Define variable that will represent computerGuess with blank spaces.
// It starts at zero.

var numberBlanks = 0;

// Define blank array of winning letters

var blanksWins = [];

/* Define variables for tracking our wins and losses. 
    They begin at 0. */

var wins = 0;
var losses = 0;

/* Sets the computerGuess variable equal to a random 
choice from the computerChoices array. */

var computerGuess = computerChoices[
    Math.floor(Math.random() * computerChoices.length)
];

console.log("this is the computerGuess: " + computerGuess)

// Change computerGuess to string of letters

// computerGuessLetters = computerGuess.split("").join("_");

computerGuessLetters = computerGuess.split("");

console.log(computerGuessLetters);

numberBlanks = (computerGuess.length);

console.log(numberBlanks);

// Create for loop to convert letters to hyphens

for (var i = 0; i < numberBlanks; i++) {
    blanksWins.push("_");

// console.log(blanksWins);

document.getElementById("blanks-wins").innerHTML = blanksWins.join(" ");
}

// function myFunction() {
//     computerGuessLetters = document.getElementById("numberBlanks").innerHTML; 
//     var res = computerGuessLetters.replace("_");
//     document.getElementById("numberBlanks").innerHTML = res;
// }


// Add blank spaces to represent computerGuessLetters

/* When the user presses a key, it will run the following 
    function. */

document.onkeyup = function(event) {

// Determine which key was pressed and convert to lower case.
        
var userGuess = event.key.toLowerCase();

console.log("this is my guess " + userGuess);

// Compare userGuess with each letter in ComputerGuess.//

// console.log(computerGuess[0]);

function checkLetters () {



	// write function here //
}

if ((userGuess) == (computerGuess[0])) {
	alert("Wow!!!");

}
}

