const computerChoice = getComputerChoice();
const playerChoice = getPlayerChoice();

function getComputerChoice() {
    const randomNumber = Math.random();

    if (randomNumber <= 0.34) {
        return "rock";
    }
    else if (randomNumber <= 0.64) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getPlayerChoice() {
    const promptResult = prompt("What do you want to play? (rock, paper, scissors):");
    return promptResult.toLowerCase();
}