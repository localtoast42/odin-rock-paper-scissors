
function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
};

function playRound(playerSelection) {
    let computerSelection = getComputerChoice();

    if (!choices.includes(playerSelection.toLowerCase())) {
        roundResult.textContent = "Invalid player selection, try again";
        return;
    };

    let playerSelectionIndex = choices.indexOf(playerSelection.toLowerCase());
    let computerSelectionIndex = choices.indexOf(computerSelection.toLowerCase());
    let message = "";
    let playerWin = 0;

    if (playerSelectionIndex === computerSelectionIndex) {
        roundResult.textContent = "You Tied! Try again";
        return;
    } else if (((playerSelectionIndex + 1) % 3) === computerSelectionIndex) {
        message = "You Lose! " + computerSelection + " beats " + playerSelection;
    } else {
        message = "You Win! " + playerSelection + " beats " + computerSelection;
        playerWin = 1;
    };
    
    return [message, playerWin];
};

const choices = ["rock", "paper", "scissors"];
const buttons = document.querySelectorAll('button');
const roundResult = document.querySelector('#round-result');
const runningScore = document.querySelector('#running-score');
const gameResult = document.querySelector('#game-result');

let playerWins = 0;
let computerWins = 0;
let gameResultMessage = '';

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (playerWins >= 5 || computerWins >= 5) {
            playerWins = 0;
            computerWins = 0;
            gameResult.textContent = '';
        };

        [message, result] = playRound(button.id);
        if (result === 1) {playerWins += 1} else {computerWins += 1};
        roundResult.textContent = message;
        runningScore.textContent = "Player Wins: " + playerWins + " Computer Wins: " + computerWins;
        if (playerWins >= 5 || computerWins >= 5) {
            gameResultMessage = playerWins >= 5 ? "You win! Play again?" : "You are defeated! Play again?";
            gameResult.textContent = gameResultMessage;
        };
    });
});
