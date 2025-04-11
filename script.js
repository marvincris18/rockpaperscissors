// console.log("Hello, World!");

const htmlChoices = document.querySelector(".choices");
const htmlResult = document.querySelector(".result");
    //   const lowOrHi = document.querySelector(".lowOrHi");
const choiceSubmit = document.querySelector(".choiceSubmit");
const choiceField = document.querySelector(".choiceField");
const htmlRounds = document.querySelector(".rounds");
    //   const guessField = document.querySelector(".guessField");
choiceField.value = "Scissors";
choiceSubmit.addEventListener("click",playGame);

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
    //htmlComputerChoice.textContent = `Computer choice: ${computerChoice}`;
    //console.log(`Computer choice: ${computerChoice}`);
    return computerChoice;
}


function getHumanChoice(){
    let humanChoice = "";
    // humanChoice=  prompt("Enter your choice: Rock, Paper, or Scissors","Scissors");
    humanChoice = choiceField.value;
    humanChoice = humanChoice.toLowerCase();
    humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1);
    //htmlResult.textContent = `Your choice: ${humanChoice}`;
   // console.log(`Your choice: ${humanChoice}`);
    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;
let round =1;


function playRound(){
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    console.log(`Your choice: ${humanChoice}  vs  Computer choice: ${computerChoice}`);
    htmlChoices.textContent = `Your choice: ${humanChoice} \t\t      vs   \t\t      Computer choice: ${computerChoice}`;

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
        htmlResult.textContent = "It's a tie!";
      
    } else if (
        (humanChoice === "Rock" && computerChoice === "Scissors") ||
        (humanChoice === "Scissors" && computerChoice === "Paper") ||
        (humanChoice === "Paper" && computerChoice === "Rock")
    ) {
        humanScore++;
        returnString = `You win! ${humanChoice} beats ${computerChoice}`;
        htmlResult.textContent = returnString;
        console.log(returnString);
       
    } else {
        computerScore++;
        returnString = `You lose! ${computerChoice} beats ${humanChoice}`;
        htmlResult.textContent = returnString;
        console.log(returnString);
     
    }
    console.log(`Your score: ${humanScore}      Computer score: ${computerScore}`);

 
}

// console.log(playRound("Rock", "Paper"));
// console.log(playRound("Rock", "Scissors"));  
// console.log(playRound("Rock", "Rock"));



function playGame() {
   
    if (round<6){
        playRound();
        htmlRounds.textContent = `Round: ${round}`;
        console.log(`Round: ${round}`);
        round++;
        // choiceField.value = "";
        // choiceField.focus();
        console.log("-------------");
    } 
    
    if (round === 6) {
        console.log("\n-------------\n");
        console.log("Final Results");
        let returnString = "Final Result: ";

        if (humanScore > computerScore) {
            console.log("You win the game!");
            returnString += "You win the game!";
        }
        else if (humanScore < computerScore) {
            console.log("You lose the game!");
            returnString += "You lose the game!";
        }
        else {
            console.log("It's a tie!");
            returnString += "It's a tie!";   
        }

        console.log("\n\nGame Over");
        const finalResult = document.createElement("div");
        finalResult.classList.add("finalResult");
        returnString += `\nYour score: ${humanScore} \t\t      Computer score: ${computerScore}`;
        finalResult.textContent = returnString;
        document.body.appendChild(finalResult);
        

        // Reset the game

        setGameOver();
    }
}

function setGameOver(){
   
    choiceSubmit.disabled = true;
    choiceField.disabled = true;
    const resetButton = document.createElement("button");
    resetButton.textContent = "Play Again";
    resetButton.classList.add("resetButton");
    document.body.appendChild(resetButton);
    resetButton.addEventListener("click",resetGame);
}

function resetGame() {
    htmlChoices.textContent = "";
    htmlResult.textContent = "";
    htmlRounds.textContent = "";
    choiceField.value = "Scissors";
    choiceField.focus();
    round = 1;
    humanScore = 0;
    computerScore = 0;
    choiceSubmit.disabled = false;
    choiceField.disabled = false;
    const resetButton = document.querySelector(".resetButton");
    resetButton.parentNode.removeChild(resetButton);
    const finalResult = document.querySelector(".finalResult");
    finalResult.parentNode.removeChild(finalResult);
    console.log("Game Reset");
    console.log("-------------");
 


}

// playGame();


