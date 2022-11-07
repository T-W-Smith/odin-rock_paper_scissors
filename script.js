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
        return "You Lose! Rock beats Scissors"
    }
    else if (computerSelection === "paper" && playerSelection === "rock") {
        return "You Lose! Paper beats Rock"
    }
    else if (computerSelection === "scissors" && playerSelection === "paper") {
        return "You Lose! Scissors beats Paper"
    }
    else if (computerSelection === "rock" && playerSelection === "paper") {
        return "You Win! Paper beats Rock"
    }
    else if (computerSelection === "paper" && playerSelection === "scissors") {
        return "You Win! Scissors beats Paper"
    }
    else if (computerSelection === "scissors" && playerSelection === "rock") {
        return "You win! Rock beats Scissors"
    }
    else {
        return "Its a Tie!"
    }
}

const playerChoice = prompt("What do you choose?").toLowerCase();
const computerChoice = getComputerChoice();
console.log(playARound(playerChoice, computerChoice));