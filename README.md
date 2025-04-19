# rockpaperscissors
Rock Paper Scissors Game TOP Learning Project

** rps-ui branch **
practice git branching

merge branch to main

computer choice
- Rock, Paper, Scissors -- Math.random
computerRandom = Math.floor(Math.random()*300)+1
if computerRandom>200 
    computerChoice = "Rock"
else if ComputerRandom>100
        computerChoice = "Scissors"
    else
        computerChoice = "Paper"


human choice
- prompt 

console.prompt("Enter your choice Rock/Scissors/Paper?");


playRound
- compare computer choice vs human choice
- Wins  Rock vs scissors, Scissors vs Paper, Paper vs Rock
- human vs computer comparison
  switch(human){
    case: "Rock"
        If computer == "Scissors" 
            humanwins++;
            console.log(`You won Round ${round}`);
        else if computer == "Paper"
                computerWins++;
                console.log(`You lose Round ${round}`);
            else
                console.log("It's a tie")
        break;
    case: "Scissors"
        If computer == "Scissors" 
            console.log("It's a tie")
        else if computer == "Paper"
                humanwins++;
                console.log(`You won Round ${round}`);            
            else
                computerWins++;
                console.log(`You lose Round ${round}`);
        break;
    case: "Paper"
         If computer == "Scissors" 
            computerWins++;
            console.log(`You lose Round ${round}`);
        else if computer == "Paper"
                console.log("It's a tie");                   
            else
                 humanwins++;
                 console.log(`You won Round ${round}`);          
        break;
  }

- playGame

humanWins=0;
computerWins=0;

for (round=1,round++,round<6){

}


playGame
