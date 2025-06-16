let userScore = 0;
let computerScore = 0;

const userScore_Span = document.getElementById("user-score");
const computerScore_Span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const actionMsg = document.getElementById("action-message");

function getComputerChoice(){
    const choices = ['r', 'p', 's'];
    const randomNum = Math.floor(Math.random() * 3);
    return choices[randomNum];
}

function resetGame(message) {
    result.textContent = message;
    userScore = 0;
    computerScore = 0;
    userScore_Span.textContent = userScore;
    computerScore_Span.textContent = computerScore;
}

function wins() {
    userScore++;
    userScore_Span.textContent = userScore;

    if (userScore === 10) {
        resetGame(" User wins the match! Scores reset.");
    } else {
        result.textContent = "User Wins!";
    }
}

function lose() {
    computerScore++;
    computerScore_Span.textContent = computerScore;

    if (computerScore === 10) {
        resetGame(" Computer wins the match! Scores reset.");
    } else {
        result.textContent = "Computer Wins!";
    }
}


function game(userChoice) {
    const computerChoice = getComputerChoice();

    const choiceMap = {
        r: "rock",
        p: "paper",
        s: "scissors"
    };

    actionMsg.textContent = `You chose ${choiceMap[userChoice]}, Computer chose ${choiceMap[computerChoice]}`;

    switch (userChoice + computerChoice) {
        case "rs":
        case "sp":
        case "pr":
            wins();
            break;
        case "sr":
        case "ps":
        case "rp":
            lose();
            break;
        case "rr":
        case "pp":
        case "ss":
            result.textContent = "It's a draw!";
            break;
    }
}

function main() {
    rock_div.addEventListener('click', () => game("r"));
    paper_div.addEventListener('click', () => game("p"));
    scissors_div.addEventListener('click', () => game("s"));
}

main();
