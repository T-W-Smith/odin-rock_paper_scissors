let roundCount = 0;
let playerScore = 0;
let computerScore = 0;

var rockBtn = document.getElementById('rock');
var paperBtn = document.getElementById('paper');
var scissorsBtn = document.getElementById('scissors');
var roundResults = document.getElementById('round');
var scoreResults = document.getElementById('score');
var winnerResults = document.getElementById('winner');
var askReset = document.getElementById('ask-reset');

scoreResults.setAttribute('style', 'white-space: pre')

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
    if (computerSelection === "rock" && playerSelection === "scissors") {
        computerScore++;
        roundResults.textContent = "You Lose! The computer's Rock beats your Scissors";
        game();
    }
    else if (computerSelection === "paper" && playerSelection === "rock") {
        computerScore++;
        roundResults.textContent = "You Lose! The computer's Paper beats your Rock"
        game();
    }
    else if (computerSelection === "scissors" && playerSelection === "paper") {
        computerScore++;
        roundResults.textContent = "You Lose! The computer's Scissors beats your Paper"
        game();
    }
    else if (computerSelection === "rock" && playerSelection === "paper") {
        playerScore++;
        roundResults.textContent = "You Win! Your Paper beats the computer's Rock"
        game();
    }
    else if (computerSelection === "paper" && playerSelection === "scissors") {
        playerScore++;
        roundResults.textContent = "You Win! Your Scissors beats the computer's Paper"
        game();
    }
    else if (computerSelection === "scissors" && playerSelection === "rock") {
        playerScore++;
        roundResults.textContent = "You win! Your Rock beats the computer's Scissors"
        game();
    }
    else {
        roundResults.textContent = "Its a Tie!"
        game();
    }
}

function game () {
    scoreResults.textContent = 'Player score: ' + playerScore + '\r\nComputer score: ' + computerScore;

    if (playerScore >= 5) {
        winnerResults.textContent = 'Congratulations! You win!';
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
        resetGame();
    }

    if (computerScore >= 5) {
        winnerResults.textContent = "I'm sorry! You lose!";
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
        resetGame();
    }
}

function resetGame () {
    var resetText = document.createElement('h2');
    resetText.id = 'reset-text';
    resetText.appendChild(document.createTextNode('Would you like to play again?'));
    askReset.appendChild(resetText);

    var yesBtn = document.createElement('button');
    yesBtn.appendChild(document.createTextNode('Yes'));
    yesBtn.id = 'yes';
    var noBtn = document.createElement('button');
    noBtn.appendChild(document.createTextNode('No'));
    noBtn.id = 'no';
    askReset.appendChild(yesBtn);
    askReset.appendChild(noBtn);

    yesBtn.addEventListener('click', yesReset);
    noBtn.addEventListener('click', noReset);
    
}

function yesReset () {
    location.reload();
}

function noReset () {
    askReset.removeChild(document.getElementById('reset-text'));
    askReset.removeChild(document.getElementById('yes'));
    askReset.removeChild(document.getElementById('no'));
}