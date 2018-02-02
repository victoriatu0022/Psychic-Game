
//for the alphabet
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
    "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//variables 
var wins = 0;
var losses = 0;
var guesses = 9;
var userLetters = []

function addLetters(userChoice) {
    userLetters.push(userChoice);
    console.log("Your Guesses so far: " + userLetters.join(", "));
}
;

//use to get the information that is grabbed back

var userWinsDiv = document.getElementById("wins");
var userLossesDiv = document.getElementById("losses");
var userGuessLeftDiv = document.getElementById("guesses");
var userLettersDiv = document.getElementById("userLetters");

//functions
    document.onkeyup = function (event) {

    
    var userChoice = event.key;
    var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log(computerChoice)

    //show use of array
    var myArray = [userChoice]

    //how to show up on scoring

    if (userChoice === computerChoice) {
        wins++ && guesses--;
    } else if (userChoice != computerChoice) {
        guesses--;
        addLetters(userChoice)
    }
 
    if (guesses === 0) {
        losses++;
        guesses = 10
        userLetters = []
    }

    // update scores

    userWinsDiv.textContent = wins;
    userLossesDiv.textContent = losses;
    userGuessLeftDiv.textContent = guesses;
    userLettersDiv.textContent = userLetters.join(", ");
}
