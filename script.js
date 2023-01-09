let roundCount = 0;
let playerScore = 0;
let computerScore = 0;

var rockBtn = document.getElementById('rock');
var paperBtn = document.getElementById('paper');
var scissorsBtn = document.getElementById('scissors');
var results = document.getElementById('text-results');

rockBtn.addEventListener('click', function(){
    playARound('rock', getComputerChoice());
});
paperBtn.addEventListener('click', function(){
    playARound('paper', getComputerChoice());
});
scissorsBtn.addEventListener('click', function(){
    playARound('scissors', getComputerChoice());
});

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
    results.textContent = playerSelection + "   " + computerSelection
    console.log(playerSelection + "   " + computerSelection);
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
    else if (computerSelection === playerSelection) {
        return "Its a Tie!"
    }
    else {
        roundCount--;
        return "Invalid Input!"
    }
}

function game () {
    /*for (roundCount; roundCount < 5; roundCount++) {
        const playerChoice = prompt("What do you choose?").toLowerCase();
        const computerChoice = getComputerChoice();
        console.log(playARound(playerChoice, computerChoice));
    }*/

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