function getComputerChoice() {
let computerMove = Math.floor(Math.random() * 3);
if (computerMove === 0) {
return "Computer used rock."
}
else if (computerMove === 1) {
return "Computer used paper."
}
else 
return "Computer used scissors."
}

console.log(getComputerChoice())