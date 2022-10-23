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

    //event listener for buttons

    //rock button
    const rockBtn = document.querySelector('.rock');
    rockBtn.addEventListener('click',()=> {
        playRound(getComputerChoice(),0)
    })
    //paper button
    const paperBtn = document.querySelector('.paper');
    paperBtn.addEventListener('click',()=> {
        playRound(getComputerChoice(),1)
        //console.log("you picked paper")
    })
    //scissors button
    const scissorsBtn = document.querySelector('.scissors');
    scissorsBtn.addEventListener('click',()=> {
        playRound(getComputerChoice(),2)
        //console.log("you picked scissors")
    })

    // these global arrays hold the scores of each player
    let computerPoints = [];
    let playerPoints = [];
        
        //keep score after each round and display results
        function playRound(computerSelection,playerSelection) {
            
            if (computerSelection === playerSelection) {
                roundDisplay("Tie")
            } else if (computerSelection === 0 && playerSelection === 2) {
                computerPoints.push(1);
                roundDisplay("You lose! Rock beats Scissors")
            } else if (playerSelection === 0 && computerSelection === 2) {
                playerPoints.push(1);
                roundDisplay("You win! Rock beats Scissors")
            } else if (computerSelection === 1 && playerSelection === 0) {
                computerPoints.push(1);
                roundDisplay("You lose! Paper beats Rock")
            } else if (playerSelection === 1 && computerSelection === 0) {
                playerPoints.push(1);
                roundDisplay("You win! Paper beats Rock")
            } else if (computerSelection === 2 && playerSelection === 1) {
                computerPoints.push(1);
                roundDisplay("You lose! Scissors beats Paper")
            } else if (playerSelection === 2 && computerSelection === 1) {
                playerPoints.push(1);
                roundDisplay("You win! Scissors beats Paper")
            } else {
                roundDisplay("invalid input");
            }

            game();
        }

        //display results after each round
        function roundDisplay(x) {
            const content = document.querySelector('.content');

            const hThree = document.createElement('h3');
            hThree.textContent = x;

            content.appendChild(hThree);
        }

        //end the game if a player reaches 5 points
    function game(){
        if (playerPoints.length >= 5 || computerPoints.length >= 5){
            finalScore();
        }
    }

    //display final winner and their points
    function finalScore(){
        clearBoard();
        if (computerPoints > playerPoints) {
            return gameDisplay("computer wins with " + computerPoints.length + " points");
        } else {
            return gameDisplay("player wins with " + playerPoints.length + " points");
        }
    }

    //display the final result to the user
    function gameDisplay(x) {
        const content = document.querySelector('.content');

        const hOne = document.createElement('h1');
        hOne.textContent = x;

        content.appendChild(hOne);
        console.log(x);
    }

    //remove the buttons and round results when the game is over
    function clearBoard(){
        const content = document.querySelector('.content');
        const hThree = document.querySelectorAll('h3');
        const button = document.querySelectorAll('button');

        for (let i = 0; i < hThree.length; i++){
            hThree[i].remove();
        }

        for (let i =0; i < button.length; i ++){
            button[i].remove();
        }
    }
