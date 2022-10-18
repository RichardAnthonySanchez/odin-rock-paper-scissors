//computer chooses between rock paper or scissors
function getComputerChoice() {
let computerMove = Math.floor(Math.random() * 3);
if (computerMove === 0) {
console.log("computer picked rock")
return 0;
}
else if (computerMove === 1) {
console.log("computer picked paper")
return 1;
}
else 
console.log("computer picked scissors")
return 2;
}

//converts user's input to lowercase
function playerSelection(){
let userInput = prompt("rock paper or scissors?");

console.log("you picked " + userInput)

let revisedInput = userInput.toLowerCase();
return revisedInput;
}

//converted input to number
function userNumber() {
    let userActualNumber = playerSelection();
    if (userActualNumber === "rock") {
        return 0;
    } else if (userActualNumber === "paper") {
        return 1;
    } else if (userActualNumber === "scissors") {
        return 2;
    } else {
        return "use a valid input"
    }
}

//store player input as a global variable to prevent calling function more than once
let playerInput = userNumber();
let computerInput = getComputerChoice();

//compare both inputs and output result in console
function compareInputs() {
    if (computerInput === playerInput) {
        return "Tie"
    } else if (computerInput === 0 || playerInput === 0 && computerInput === 2 || playerInput === 2) {
        return "rock beats scissors"
    } else if (computerInput === 1 || playerInput === 1 && computerInput === 0 || playerInput === 0) {
        return "paper beats rock."
    } else if (computerInput === 2 || playerInput === 2 && computerInput === 1 || playerInput === 1) {
        return "scissors beats paper."
    } else {
        return "invalid input"
    }
}

//check if input is invalid
function checkInputs() {
    if (playerInput === 0 || playerInput === 1 || playerInput === 2 ) {
        return compareInputs();
    } else {
        return "invalid input";
    }
}

//console.log(checkInputs()); 

//output winner in console
function whoWon() {
    let gameResult = compareInputs();
    checkInputs();

    if (gameResult === "rock beats scissors" && computerInput === 0) {
        return "you lost"
    } else if (gameResult === "rock beats scissors" && playerInput === 0){
        return "you won!"
    } else if (gameResult === "paper beats rock." && computerInput === 1){
        return "you lost"
    } else if (gameResult === "paper beats rock." && playerInput === 1){
        return "you won!"
    } else if (gameResult === "scissors beats paper." && computerInput === 2){
        return "you lost"
    } else if (gameResult === "scissors beats paper." && playerInput === 2){
        return "you won!"
    } else {
        return "tie"
    }     
}

console.log(whoWon());



