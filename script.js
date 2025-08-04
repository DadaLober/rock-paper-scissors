// let computerScore = 0;
// let playerScore = 0; 

// const ROUNDS_LENGTH = 5;

// function playGame() {

// for (let i = 0;i < ROUNDS_LENGTH; i++) {
//     playRound(getComputerChoice(), getPlayerChoice());
//     }
    
//     console.log(formatResult(getResult()));
// }

// function getResult() {
//     if (computerScore === playerScore) return "Draw";
//     if (computerScore > playerScore) return "Computer";
//     return "Player";
// }

// function formatResult(winner) {
//     return winner === "Draw" ? `Game ended as a ${winner}` : `${winner} wins!`;
// }

// function playRound(computerChoice, playerChoice) {
//     const winConditions = {
//         rock: "scissors",
//         paper: "rock", 
//         scissors: "paper"
//     };
    
//     if (playerChoice === computerChoice) {
//         console.log(`Draw! You both chose ${playerChoice}`);
//     } else if (winConditions[playerChoice] === computerChoice) {
//         playerScore++;
//         console.log(`You win! ${playerChoice} beats ${computerChoice}`);
//     } else {
//         computerScore++;
//         console.log(`Computer wins! ${computerChoice} beats ${playerChoice}`);
//     }
// }

// function getComputerChoice() {
//     const choices = ["rock", "paper", "scissors"];
//     return choices[Math.floor(Math.random() * choices.length)];
// }

// function getPlayerChoice() {
//     return prompt("What do you want to play? (rock, paper, scissors):").toLowerCase();
// }

// playGame();