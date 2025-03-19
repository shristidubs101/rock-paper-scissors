console.log("File loaded");
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let options = ['rock', 'paper', 'scissors'];
    return options[Math.floor(Math.random() * options.length)];
}

function getHumanChoice() {
    let choice = prompt("Enter rock, paper, or scissors:");
    
    if (!choice) {
        console.log("Game cancelled by user.");
        return null;
    }

    choice = choice.toLowerCase();
    if (['rock', 'paper', 'scissors'].includes(choice)) {
        return choice;
    } else {
        console.log("Invalid input. Please enter rock, paper, or scissors.");
        return getHumanChoice(); // Ask again if input is invalid
    }
}

function playRound(humanChoice, computerChoice) {
    if (!humanChoice) return; 

    console.log(`You chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
}

function playGame() {
    while (humanScore < 5 && computerScore < 5) { // ✅ Fixed loop condition
        const humanSelection = getHumanChoice();
        if (humanSelection === null) return; // Stop the game if user cancels

        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);

        console.log(`Score: Human ${humanScore} - ${computerScore} Computer`);
    }

    // Announce winner
    if (humanScore === 5) {
        console.log("🎉 Congratulations! You won the game!");
    } else {
        console.log("😔 Game over! The computer won.");
    }
}

playGame();
