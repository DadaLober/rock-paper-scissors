let computerScore = 0;
let playerScore = 0; 

function playGame() {
const computerSelection = getComputerChoice();
const playerSelection = getPlayerChoice();
playRound(computerSelection,playerSelection);

const computerSelection2 = getComputerChoice();
const playerSelection2 = getPlayerChoice();
playRound(computerSelection2,playerSelection2);

const computerSelection3 = getComputerChoice();
const playerSelection3 = getPlayerChoice();
playRound(computerSelection3,playerSelection3);

const computerSelection4 = getComputerChoice();
const playerSelection4 = getPlayerChoice();
playRound(computerSelection4,playerSelection4);

const computerSelection5 = getComputerChoice();
const playerSelection5 = getPlayerChoice();
playRound(computerSelection5,playerSelection5);

declareWinner();
}

function declareWinner() {
    if (playerScore === computerScore) {
        console.log(`Match ended in a draw! Both You and Computer score ${playerScore}`)
    }
    else if (playerScore > computerScore) {
        console.log(`You win! with the score of ${playerScore}`)
    }
    else {
        console.log(`Computer wins! with the score of ${computerScore}}`)
    }
}

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

playGame();

console.log(`computerScore: ${computerScore}, playerScore ${playerScore}`)