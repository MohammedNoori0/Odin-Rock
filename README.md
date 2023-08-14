# Odin-Rock
Project rock paper scissors

const rps = ["rock", "paper", "scissors"]


function getComputerPlay(){
  let random = rps[Math.floor(Math.random() * rps.length)]
  return random
}


function checkWinner(playerSelection, computerSelection){
if(playerSelection == computerSelection){
  return "tie"
}
else if (
  (playerSelection == "rock" && computerSelection == "scissors") ||
  (playerSelection == "scissors" && computerSelection == "paper") || 
  (playerSelection == "paper" && computerSelection == "rock")
){
  return "player"
}

else{
  return "computer"
}
}


function playRound(playerSelection, computerSelection){
  const result = checkWinner(playerSelection, computerSelection)
  if(result == "tie"){
return " its a tie!"
  }
 else if(result == "player")
 {
  return `you win! ${playerSelection} beats ${computerSelection}` 
 }
 else{
  return `you lost ${computerSelection} beats ${playerSelection}`
 }
}

function getPlayerChoice(){
  let validatedInput = false;
  while(validatedInput == false){
    const choice = prompt("rock, paper, scissors?")
    if (choice == null){
      continue;
    }
    const choiceInLower = choice.toLowerCase();
    if (rps.includes(choiceInLower)){
      validatedInput = true;
      return choiceInLower; 
    }
  }
}




function game(){
  let scorePlayer = 0;
  let scoreComputer = 0;

  console.log("welcome")
for(let i = 0; i < 5; i++){
  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerPlay();
  console.log(playRound(playerSelection, computerSelection))
  console.log("------------------")
  if(checkWinner(playerSelection, computerSelection) == "player"){
    scorePlayer++;
  }
  else if(playerSelection,computerSelection == 'computer'){
    scoreComputer++
  }
}
console.log("Game Over!")
if(scorePlayer > scoreComputer){
   console.log('player wins!')
}
else if(scorePlayer < scoreComputer){
   console.log('computer wins!')
}
else{
  console.log("we have a tie!")
}
}




game();

