function getComputerChoice () {
    let randChoice = Math.floor(Math.random() * 3);
    if (randChoice === 0) {
        return "rock"
    }
    else if (randChoice === 1) {
        return "paper"
    }
    else {
        return "scissors"
    }
}

function playARound (playerSelection, computerSelection) {
    if (computerSelection === "rock" && playerSelection === "scissors") {
        computerScore++;
        return "You Lose! Rock beats Scissors"
    }
    else if (computerSelection === "paper" && playerSelection === "rock") {
        computerScore++;
        return "You Lose! Paper beats Rock"
    }
    else if (computerSelection === "scissors" && playerSelection === "paper") {
        computerScore++;
        return "You Lose! Scissors beats Paper"
    }
    else if (computerSelection === "rock" && playerSelection === "paper") {
        playerScore++;
        return "You Win! Paper beats Rock"
    }
    else if (computerSelection === "paper" && playerSelection === "scissors") {
        playerScore++;
        return "You Win! Scissors beats Paper"
    }
    else if (computerSelection === "scissors" && playerSelection === "rock") {
        playerScore++;
        return "You win! Rock beats Scissors"
    }
    else {
        return "Its a Tie!"
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        const playerChoice = prompt("What do you choose?").toLowerCase();
        const computerChoice = getComputerChoice();
        playARound(playerChoice, computerChoice);
        console.log("playerscore: " + playerScore + "   ComputerScore: " + computerScore);
    }

    if (playerScore > computerScore) {
        return "You win!"
    }
    else if (computerScore > playerScore) {
        return "You lose!"
    }
    else {
        return "Its a Tie!"
    }
}

let playerScore = 0;
let computerScore = 0;
console.log(game());