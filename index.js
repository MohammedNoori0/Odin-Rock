const rps = ["rock", "paper", "scissors"]





function getComputerPlay(){
  let computerPlay = rps[Math.floor(Math.random() * rps.length)];
  return computerPlay
}




function playRound(playerSelection, computerSelection){
if(playerSelection == computerSelection){
  return "tie"
}
else if(
  (playerSelection == "rock" && computerSelection == "scissors") ||
  (playerSelection == "paper" && computerSelection == "rock") ||
  (playerSelection == "scissors" && computerSelection == "paper") 
){
    return "player"
}
else {
  return "computer"
}
}

function roundWinner(playerSelection, computerSelection){
  const result = playRound(playerSelection,computerSelection)
  if(result == "player"){
    return `you win! ${playerSelection} beats ${computerSelection}` 
  }
  else if(result == "computer"){
    return `you lose.. ${computerSelection} beats ${playerSelection}`
  }
  else{
    return "its a tie"
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
  let playerScore = 0
  let computerScore = 0


  console.log("welcome")
  for(let i = 0; i<5; i++){
    const playerSelection = getPlayerChoice()
    const computerSelection = getComputerPlay()
    console.log(roundWinner(playerSelection, computerSelection))
    console.log("---------------")
    
    if(playRound(playerSelection, computerSelection) == "player"){
      playerScore++;
    }
    if(playRound(playerSelection, computerSelection) == "computer"){
      computerScore++;
    }
  }

console.log("Game Over!")
if(playerScore > computerScore){
   console.log('player wins!')
}
else if(playerScore < computerScore){
   console.log('computer wins!')
}
else{
  console.log("we have a tie!")
}
console.log(playerScore)
console.log(computerScore)
}
  


game();

