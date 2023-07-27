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

function play(playerChoice, computerChoice, round_num){
    playerChoice = playerChoice.toLowerCase();
    if (playerChoice == computerChoice){
        console.log(`No one wins Round ${round_num}, the player and computer both chose ${computerChoice}, the same round will start again`);
        return 0;
    }
    let winner;
    switch(playerChoice){
        case "rock":
            winner = computerChoice == "scissors" ? "player" : "computer";
        case "paper":
            winner = computerChoice == "rock" ? "player" : "computer";
        case "scissors":
            winner = computerChoice == "paper" ? "player" : "computer";     
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
    console.log(`The winner of Round ${round_num} is ${winner}, ${winnerchoice} beats ${loserchoice}`);
    return winner == "player" ? 1 : 2;
}

function game(max_rounds){
    let playerWins = 0;
    let computerWins = 0
    let round_num = 1;
    for(let i = 0; i < max_rounds; i++){
        x = play(prompt(), getComputerChoice(), round_num)
        if (x == 0){
            i -= 1;
            continue;
        }
        else if (x == 1){
            playerWins += 1;
            round_num += 1;
        }
        else{
            computerWins += 1;
            round_num += 1;
        }

    }
    console.log(`The overall winner is ${computerWins > playerWins ? "computer" : "player"} with ${Math.max(computerWins, playerWins)} to ${Math.min(playerWins, computerWins)} wins`)
}
game(3)