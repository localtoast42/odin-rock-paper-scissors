
function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)]
}

function playRound(playerSelection, computerSelection) {
    if (!choices.includes(playerSelection.toLowerCase())) {
        console.log("Invalid player selection, try again")
        playerSelection = window.prompt("Choose rock, paper, or scissors");
        computerSelection = getComputerChoice();
        return playRound(playerSelection, computerSelection)
    }

    let playerSelectionIndex = choices.indexOf(playerSelection.toLowerCase());
    let computerSelectionIndex = choices.indexOf(computerSelection.toLowerCase());
    let message = ""
    let playerWin = 0

    if (playerSelectionIndex === computerSelectionIndex) {
        console.log("You Tied! Try again")
        playerSelection = window.prompt("Choose rock, paper, or scissors");
        computerSelection = getComputerChoice();
        return playRound(playerSelection, computerSelection)
    } else if (((playerSelectionIndex + 1) % 3) === computerSelectionIndex) {
        message = "You Lose! " + computerSelection + " beats " + playerSelection
    } else {
        message = "You Win! " + playerSelection + " beats " + computerSelection
        playerWin = 1
    }
    
    return [message, playerWin]
}

function game() {
    let playerSelection = ''
    let computerSelection = ''
    let message = ''
    let result = 0
    let playerWinCount = 0

    for (let i = 0; i < 5; i++) {
        playerSelection = window.prompt("Choose rock, paper, or scissors");
        computerSelection = getComputerChoice();
        [message, result] = playRound(playerSelection, computerSelection)
        console.log(message)
        playerWinCount += result
    }

    console.log("You won " + playerWinCount + " of 5 matches.")
    if (playerWinCount > 2) {
        console.log("You win! Play again?")
    } else {
        console.log("You are defeated! Play again?")
    }
}

const choices = ["rock", "paper", "scissors"];
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id);
    });
});
