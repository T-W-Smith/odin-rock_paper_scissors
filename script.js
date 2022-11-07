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