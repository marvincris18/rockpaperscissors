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

function getHumanChoice(){
    let humanChoice = "";
    humanChoice=  prompt("Enter your choice: Rock, Paper, or Scissors");
    humanChoice = humanChoice.toLowerCase();
    humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1);
    return humanChoice;
}

// console.log(getHumanChoice());
// console.log(getComputerChoice());

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (humanChoice === "Rock" && computerChoice === "Scissors") ||
        (humanChoice === "Scissors" && computerChoice === "Paper") ||
        (humanChoice === "Paper" && computerChoice === "Rock")
    ) {
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}`;
    } else {
        computerScore++;
        return `You lose! ${computerChoice} beats ${humanChoice}`;
    }
}

// console.log(playRound("Rock", "Paper"));
// console.log(playRound("Rock", "Scissors"));  
// console.log(playRound("Rock", "Rock"));

let mmChoice = getHumanChoice();

console.log(playRound(mmChoice, getComputerChoice()));
console.log(playRound(mmChoice, getComputerChoice()));
console.log(playRound(mmChoice, getComputerChoice()));
console.log(playRound(mmChoice, getComputerChoice()));
console.log(playRound(mmChoice, getComputerChoice()));

console.log("\n-------------\n");
console.log("Final Results");

console.log(`Your score: ${humanScore}`);
console.log(`Computer score: ${computerScore}`);

if (humanScore > computerScore) {
    console.log("You win the game!");
}
else if (humanScore < computerScore) {
    console.log("You lose the game!");
}
else {
    console.log("It's a tie!");
}

console.log("\n\nGame Over");
