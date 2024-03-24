// Score counters
let roundCount = 0;
let playerScore = 0;
let computerScore = 0;

// Elements
var rockBtn = document.getElementById('rock');
var paperBtn = document.getElementById('paper');
var scissorsBtn = document.getElementById('scissors');
var roundResults = document.getElementById('round');
var scoreResults = document.getElementById('score');
var winnerResults = document.getElementById('winner');
var resetText = document.getElementById('reset-text')
var resetBtns = document.getElementById('reset-buttons');

scoreResults.setAttribute('style', 'white-space: pre')

// Event listeners
rockBtn.addEventListener('click', function(){
    playARound('rock', getComputerChoice());
});
paperBtn.addEventListener('click', function(){
    playARound('paper', getComputerChoice());
});
scissorsBtn.addEventListener('click', function(){
    playARound('scissors', getComputerChoice());
});

// Choice randomizer
function getComputerChoice () {
    // Generates a random number and returns a choice based on number
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

// Compares the computers choice with the players choice
// and determines who wins the round or if its a tie
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

// Keeps track of the game score and determines who wins
// the game out of 5 rounds
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

// Resets the game once a full game has finished
function resetGame () {
    var text = document.createElement('h2');
    text.appendChild(document.createTextNode('Would you like to play again?'));
    text.id = 'reset';
    resetText.appendChild(text);

    var yesBtn = document.createElement('button');
    yesBtn.appendChild(document.createTextNode('Yes'));
    yesBtn.id = 'yes';
    var noBtn = document.createElement('button');
    noBtn.appendChild(document.createTextNode('No'));
    noBtn.id = 'no';
    resetBtns.appendChild(yesBtn);
    resetBtns.appendChild(noBtn);

    yesBtn.addEventListener('click', yesReset);
    noBtn.addEventListener('click', noReset);
    
}

function yesReset () {
    location.reload();
}

function noReset () {
    resetText.removeChild(document.getElementById('reset'));
    resetBtns.removeChild(document.getElementById('yes'));
    resetBtns.removeChild(document.getElementById('no'));
}