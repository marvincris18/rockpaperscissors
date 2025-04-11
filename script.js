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

console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());