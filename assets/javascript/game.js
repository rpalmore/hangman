// Our array of possible computer choices for Classic Cocktail theme:

var computerChoices = [
    "margarita",
    "caipirinha",
    "sazerac",
    "manhattan",
    "daiquiri",
    "hurricane"
];

// Empty string to represent computer's random selection:
var computerGuess = "";

// Blank array of winning letters:
var blanksWins = [];

// Blank array of losing letters:
var blanksLosses = [];

// Tracking wins and losses: 
var wins = 0;
var losses = 0;

// Number of guesses player has:
var chances = 9;

// Set computerGuess equal to a random 
// choice from computerChoices array 
function letComputerChoose() {
    computerGuess = computerChoices[
        Math.floor(Math.random() * computerChoices.length)
    ];
    console.log("this is the computerGuess: " + computerGuess)
}
letComputerChoose();

function createBlanks() {
    for (var i = 0; i < computerGuess.length; i++) {
        blanksWins.push("_");
        document.getElementById("blanks-wins").innerHTML = blanksWins.join(" ");
    }
}

createBlanks();

function showAnswer() {
    event.preventDefault();
    blanksWins.push(computerGuess + "!");
    setTimeout(advance, 3000);
}

function advance() {
    blanksWins.pop(computerGuess);
    letComputerChoose();
    createBlanks();
}


// Capture input from user pressing in key:
document.onkeyup = function(event) {

    // Determine which key was pressed and convert to lower case:
    var userGuess = event.key.toLowerCase();
    console.log("this is my guess " + userGuess);
    console.log(computerGuess.includes(userGuess));

    // Now try comparison as if / then statement:
    if (computerGuess.includes(userGuess)) {
        for (var i = 0; i < computerGuess.length; i++) {
            if (computerGuess[i] === userGuess) {
                blanksWins[i] = userGuess;
            }
            document.getElementById("blanks-wins").innerHTML = blanksWins.join(" ");
            console.log("here is position of userGuess " + computerGuess.indexOf(userGuess));
        }
    } else {
        blanksLosses.push(userGuess);
        chances--;
    }

    if (computerGuess === blanksWins.join("")) {
        wins++;
        document.getElementById("win-counter").innerHTML = wins;
        chances = 9;
        blanksLosses = [];
        blanksWins = [];
        showAnswer();
    }


    if (chances === 0) {
        losses++;
        document.getElementById("loss-counter").innerHTML = losses;
        chances = 9;
        blanksLosses = [];
        blanksWins = [];
        showAnswer();
    }


    document.getElementById("chances-left").innerHTML = chances;
    document.getElementById("blanks-losses").innerHTML = blanksLosses.join(" ");
    document.getElementById("blanks-wins").innerHTML = blanksWins.join(" ");

}
