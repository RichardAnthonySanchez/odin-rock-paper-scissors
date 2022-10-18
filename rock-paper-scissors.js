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

//converts user's input to lowercase
function playerSelection(){
let userInput = prompt("rock paper or scissors?");
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

//compare both inputs and output result in console
function compareInputs() {
    let computerInput = getComputerChoice();
    let playerInput = userNumber();

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

function checkInputs() {
    let playerInput = userNumber();

    if (playerInput === 0 || playerInput === 1 || playerInput === 2 ) {
        return compareInputs();
    } else {
        return "invalid input";
    }
}

console.log(checkInputs()); 

//promt happens twice
//result doesn't say who won
