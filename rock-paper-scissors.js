//computer chooses between rock paper or scissors
function getComputerChoice() {
let computerMove = Math.floor(Math.random() * 3);
if (computerMove === 0) {
return 0;
}
else if (computerMove === 1) {
return 1;
}
else 
return 2;
}
//console.log(getComputerChoice())

//converts user's input to lowercase
function playerSelection(){
let userInput = prompt("rock paper or scissors?");
let revisedInput = userInput.toLowerCase();
return revisedInput;
}
//console.log(playerSelection())

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
//console.log(userNumber())

//compare both inputs
function compareInputs() {
    let computerInput = getComputerChoice();
    let playerInput = userNumber();

    if (computerInput === playerInput) {
        return "Tie"
    }
}