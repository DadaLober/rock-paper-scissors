const buttonsContainer = document.querySelector(".pokemon-buttons");
const choiceDisplay = document.querySelector(".choices-display");

buttonsContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "BUTTON") {
        const userChoice = e.target.id;

        // Remove previous selection highlight
        document.querySelectorAll(".pokemon-btn").forEach(btn =>
            btn.classList.remove("selected")
        );

        // Highlight the selected button
        e.target.classList.add("selected");

        // Clear previous choice
        choiceDisplay.innerHTML = "";

        // Create a span for the styled Pokémon name
        const styledName = document.createElement("span");
        styledName.textContent = userChoice;

        if (userChoice === "Charmander") {
            styledName.classList.add("pokemon-name--fire");
        } else if (userChoice === "Squirtle") {
            styledName.classList.add("pokemon-name--water");
        } else if (userChoice === "Bulbasaur") {
            styledName.classList.add("pokemon-name--grass");
        }

        // Add text node and styled name together
        const message = document.createElement("p");
        message.append("You chose ", styledName, "!");

        choiceDisplay.appendChild(message);
    }
});








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