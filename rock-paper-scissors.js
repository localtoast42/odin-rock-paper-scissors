
function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)]
}

function playRound(playerSelection, computerSelection) {
    if (!choices.includes(playerSelection.toLowerCase())) {
        return "Invalid player selection, try again"
    }

    let playerSelectionIndex = choices.findIndex(playerSelection.toLowerCase());
    let computerSelectionIndex = choices.findIndex(computerSelection.toLowerCase());
    let message = ""

    if (playerSelectionIndex === computerSelectionIndex) {
        message = "You Tied! Try again"
    } else if (((playerSelectionIndex + 1) % 3) === computerSelectionIndex) {
        message = "You Lose! " + computerSelection + " beats " + playerSelection
    } else {
        message = "You Win! " + playerSelection + " beats " + computerSelection
    }
    
    return message
}

const choices = ["rock", "paper", "scissors"];
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection))