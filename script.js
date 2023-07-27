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

function play(playerChoice, computerChoice){
    playerChoice = playerChoice.toLowerCase();
    if (playerChoice == computerChoice){
        return `No one wins, the player and computer both chose ${computerChoice}`
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
        winnerchoice = playerChoice
        loserchoice = computerChoice
    }
    else{
        winnerchoice = computerChoice
        loserchoice = playerChoice
    }
    return `The winner is ${winner}, ${winnerchoice} beats ${loserchoice}`
}

function game(round_num){
    for(let i = 0; i < 5; i++){
        console.log(play(prompt(), getComputerChoice()))
    }
}