# Rock Paper Scissors Game

A console-based Rock Paper Scissors game built with JavaScript, featuring clean code architecture and a user-friendly interface.

<a href="https://dadalober.github.io/rock-paper-scissors/" target="_blank">
  <img src="https://img.shields.io/badge/Live%20Preview-Console%20Game-2b2b2b?style=for-the-badge&logo=javascript&logoColor=white" alt="Console Game" />
</a>

## Project Overview

This project is a classic Rock Paper Scissors game that runs in the browser console. It features a clean, modular code structure with proper separation of concerns. The game allows players to compete against the computer for a configurable number of rounds, with real-time score tracking and a final winner declaration.

## Project Structure

```
rock-paper-scissors/
├── index.html      # Simple HTML file to run the game
├── script.js       # Main game logic
└── README.md       # This file
```

## Technologies Used

-   JavaScript ES6+ (functions, arrays, objects, loops)
-   HTML5 (minimal structure for script execution)
-   Browser Console API (user interaction and output)

## Features

-   **Configurable rounds**: Easy to change game length
-   **Clean architecture**: Modular functions with single responsibilities
-   **Lookup table implementation**: Efficient win condition checking
-   **Real-time feedback**: Round-by-round results and final winner
-   **Input validation**: Handles user input gracefully

## Code Highlights

-   **Separation of concerns**: Game logic, result calculation, and display formatting are separated
-   **Lookup table pattern**: Uses object-based win conditions instead of repetitive if-else statements
-   **Array-based approach**: Stores game choices for potential future features
-   **Modern JavaScript**: Uses const/let, arrow functions, and template literals

## How to Play

1. Open `index.html` in your browser
2. Open the browser's developer console (F12)
3. The game will prompt you to enter your choice for each round
4. Enter "rock", "paper", or "scissors" (case insensitive)
5. View round results and final winner in the console

## Contact

John Miller Lorenzo - johnmillerlorenzo@gmail.com

Project Link: https://github.com/DadaLober/rock-paper-scissors

This project was created as part of [The Odin Project](https://www.theodinproject.com/) curriculum to practice JavaScript fundamentals including functions, loops, conditionals, and clean code architecture.

---
