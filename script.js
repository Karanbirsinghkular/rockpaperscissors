let playerWins = 0;
let computerWins = 0;
let round_num = 1;

const current = document.querySelector("#current");
const playerScore = document.querySelector("#playerScore");
const computerScore = document.querySelector("#computerScore");
const choices = document.querySelectorAll(".choice");
const result = document.querySelector("#result");
const winner = document.querySelector("#winner");


current.textContent = "Please start playing";
playerScore.textContent = playerWins;
computerScore.textContent = computerWins;

function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3)
    if (choice == 0){    
        return "rock"
    }
    else if(choice == 1){
        return "paper"
    }
    else {
        return "scissors"
    }
}

function play(playerChoice){
    computerChoice = getComputerChoice();
    playerChoice = playerChoice.toLowerCase();
    if (playerChoice == computerChoice){
        current.textContent = `No one wins Round ${round_num}, the player and computer both chose ${computerChoice}, the same round will start again`;
        return 0;
    }
    let winner;
    switch(playerChoice){
        case "rock":
            winner = computerChoice == "scissors" ? "player" : "computer";
        case "paper":
            winner = computerChoice == "scissors" ? "player" : "computer";
        case "scissors":
            winner = computerChoice == "rock" ? "player" : "computer";     
    }
    let winnerchoice;
    let loserchoice;
    if (winner == "player"){
        winnerchoice = playerChoice;
        loserchoice = computerChoice;
    }
    else{
        winnerchoice = computerChoice;
        loserchoice = playerChoice;
    }
    current.textContent =`The winner of Round ${round_num} is ${winner}, ${winnerchoice} beats ${loserchoice}`;
    return winner == "player" ? 1 : 2;
}

function game(playerChoice){
    x = play(playerChoice)
    if (x == 0){
        return;
    }
    else if (x == 1){
        playerWins += 1;
        round_num += 1;
    }
    else{
        computerWins += 1;
        round_num += 1;
    }
    playerScore.textContent = playerWins;
    computerScore.textContent = computerWins;

    if (playerWins == 3 || computerWins == 3){
        for(let choice of choices){
            choice.style.pointerEvents = "none";
        }
        if (playerWins > 1){
            winner.textContent = "player";
        }
        else{
            winner.textContent = "computer";
        }
        result.style.color = "orangered";
        result.style.textDecorationColor = "orangered";
    }
}


const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", () => {game("rock")});
paper.addEventListener("click", () => {game("paper")});
scissors.addEventListener("click", () => {game("scissors")});
