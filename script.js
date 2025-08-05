// DOM Elements
const buttonsContainer = document.querySelector(".pokemon-buttons");
const choiceDisplay = document.querySelector(".choices-display");
const fightButton = document.querySelector(".fight-button");
const resultDisplay = document.querySelector(".result-display");

const playerScoreElement = document.querySelector('.score-container h2:first-child');
const botScoreElement = document.querySelector('.score-container h2:last-child');

// Game State
let playerScore = 0;
let computerScore = 0;
let selectedPokemon = null;

const winConditions = {
    Charmander: "Bulbasaur",
    Squirtle: "Charmander",
    Bulbasaur: "Squirtle"
};

// Helpers
function createStyledPokemonName(pokemon) {
    const styledName = document.createElement("span");
    styledName.textContent = pokemon;

    const typeClassMap = {
        Charmander: "pokemon-name--fire",
        Squirtle: "pokemon-name--water",
        Bulbasaur: "pokemon-name--grass"
    };

    styledName.classList.add(typeClassMap[pokemon] || "");
    return styledName;
}

function showMessage(prefix, pokemon) {
    const message = document.createElement("p");
    message.append(prefix, createStyledPokemonName(pokemon), "!");
    choiceDisplay.appendChild(message);
}

function updateScoreDisplay() {
    playerScoreElement.textContent = `You: ${playerScore}`;
    botScoreElement.textContent = `Bot: ${computerScore}`;
}

function getComputerChoice() {
    const choices = Object.keys(winConditions);
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(computerChoice, playerChoice) {
    if (playerChoice === computerChoice) {
        resultDisplay.textContent = "It's a Draw!";
    } else if (winConditions[playerChoice] === computerChoice) {
        playerScore++;
        resultDisplay.textContent = "You win!";
    } else {
        computerScore++;
        resultDisplay.textContent = "CPU wins!";
    }

    updateScoreDisplay();
}

// Event Listeners
buttonsContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
        selectedPokemon = e.target.id;

        // Update selection highlight
        document.querySelectorAll(".pokemon-btn").forEach(btn =>
            btn.classList.remove("selected")
        );
        e.target.classList.add("selected");

        // Show player choice
        choiceDisplay.textContent = "";
        showMessage("You chose ", selectedPokemon);
    }
});

fightButton.addEventListener("click", () => {
    if (!selectedPokemon) return;

    choiceDisplay.textContent = "";
    resultDisplay.textContent = "";

    showMessage("You chose ", selectedPokemon);

    const computerChoice = getComputerChoice();
    showMessage("CPU chose ", computerChoice);

    playRound(computerChoice, selectedPokemon);
});