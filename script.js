let computerScore = 0;
let playerScore = 0; 

function playRound(computerChoice, playerChoice) {
    switch (playerChoice) {
    case "rock":
        if (computerChoice === "paper") {
            computerScore++;
            console.log(`Computer wins! ${computerChoice} beats ${playerChoice}`);
        }
        else if (computerChoice === "scissors") {
            playerScore++
            console.log(`You wins! ${playerChoice} beats ${computerChoice}`);
        }
        else {
            console.log(`Draw! You and Computer both chooses ${computerChoice}`);
        }
        break;
    case "paper":
        if (computerChoice === "scissors") {
            computerScore++;    
            console.log(`Computer wins! ${computerChoice} beats ${playerChoice}`);
        }
        else if (computerChoice === "rock") {
            playerScore++
            console.log(`You wins! ${playerChoice} beats ${computerChoice}`);
        }
        else {
            console.log(`Draw! You and Computer both chooses ${computerChoice}`);
        }
        break;
    case "scissors":
        if (computerChoice === "rock") {
            computerScore++;
            console.log(`Computer wins! ${computerChoice} beats ${playerChoice}`);
        }
        else if (computerChoice === "paper") {
            playerScore++
            console.log(`You wins! ${playerChoice} beats ${computerChoice}`);
        }
        else {
            console.log(`Draw! You and Computer both chooses ${computerChoice}`);
        }
        break;
    default:
        console.log(`Something went wrong`);
    }
}

const computerSelection = getComputerChoice();
const playerSelection = getPlayerChoice();

playRound(computerSelection, playerSelection)

function getComputerChoice() {
    const randomNumber = Math.random();
    console.log(`computer val: ${randomNumber}`);

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

console.log(`computerScore: ${computerScore}, playerScore ${playerScore}`)