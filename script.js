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

//converts user's input of rock paper scissor to lowercase
function getPlayerChoice(){
    let userInput = prompt("rock paper or scissors?");
    
    console.log("you picked " + userInput)
    
    let revisedInput = userInput.toLowerCase();

    if (revisedInput === "rock") {
        return 0;
    } else if (revisedInput === "paper") {
        return 1;
    } else if (revisedInput === "scissors") {
        return 2;
    } else {
        getPlayerChoice();
    }
    }
    
    // these global arrays hold the scores of each player
    let computerPoints = [];
    let playerPoints = [];
    
    //keep score after each round and display results
    function playRound(computerSelection,playerSelection) {
        if (computerSelection === playerSelection) {
            console.log("Tie")
        } else if (computerSelection === 0 && playerSelection === 2) {
            computerPoints.push(1);
            console.log("You lose! Rock beats Scissors")
        } else if (playerSelection === 0 && computerSelection === 2) {
            playerPoints.push(1);
            console.log("You win! Rock beats Scissors")
        } else if (computerSelection === 1 && playerSelection === 0) {
            computerPoints.push(1);
            console.log("You lose! Paper beats Rock")
        } else if (playerSelection === 1 && computerSelection === 0) {
            playerPoints.push(1);
            console.log("You win! Paper beats Rock")
        } else if (computerSelection === 2 && playerSelection === 1) {
            computerPoints.push(1);
            console.log("You lose! Scissors beats Paper")
        } else if (playerSelection === 2 && playerSelection === 1) {
            playerPoints.push(1);
            console.log("You win! Scissors beats Paper")
        } else {
            console.log("invalid input");
        }
    }

    //display winner after 5 rounds
    function game(){
        for (let i = 0; i < 5; i++){
            const computerSelection = getComputerChoice();
            const playerSelection = getPlayerChoice();

            playRound(computerSelection,playerSelection);
        }

        if (computerPoints > playerPoints) {
            return "computer wins with " + computerPoints.length + " points"
        } else {
            return "player wins with " + playerPoints.length + " points"
        }
    }

    console.log(game());



