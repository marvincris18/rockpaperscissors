// console.log("Hello, World!");

function getComputerChoice() {
    let computerChoice = "";
    const computerRandom = Math.floor(Math.random() * 300) + 1;
    if (computerRandom > 200) {
        computerChoice = "Rock";
    } else if (computerRandom > 100) {
        computerChoice = "Scissors";
    } else {
        computerChoice = "Paper";
    }
    return computerChoice;
}

// console.log(getComputerChoice());
// console.log(getComputerChoice());
// console.log(getComputerChoice());
// console.log(getComputerChoice());
// console.log(getComputerChoice());

function getHumanChoice(){
    let humanChoice = "";
    humanChoice=  prompt("Enter your choice: Rock, Paper, or Scissors");
    humanChoice = humanChoice.toLowerCase();
    humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1);
    return humanChoice;
}

console.log(getHumanChoice());