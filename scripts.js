let rock = "rock";
let paper = "paper";
let scissors = "scissors";

let win = "You Win! ";
let lose = "You Lose! ";
let tie = "You Tie! ";

let playerScore = 0;
let computerScore = 0;

let playerSelection = "";
let computerSelection = "";

const button = document.querySelectorAll('button');

button.forEach(choice => choice.addEventListener('click', () => {
    resetColors();
    playerSelection = choice.innerHTML.toLowerCase();
    computerSelection = computerPlay();
    result(singleRound(playerSelection, computerSelection));
    score(playerScore, computerScore);
}));

function computerPlay() {
    let value = Math.floor(Math.random() * 3 + 1);

    if (value === 1) {
        return rock;
    } else if (value === 2) {
        return paper;
    } else {
        return scissors;
    }
}

function singleRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        return tie;
    } else {
        return winOrLose(playerSelection, computerSelection);
    }
}

function result(round) {
    document.getElementById('result').innerHTML = round;
    if (round.includes(win)) {
        flashResult(win);
    }

    if (round.includes(lose)) {
        flashResult(lose);
    }
}

function score(playerScore, computerScore) {
    document.getElementById('player-score').innerHTML = "Player Score: " + playerScore;
    document.getElementById('computer-score').innerHTML = "Computer Score: " + computerScore;

    if (playerScore === 5 && computerScore < 5) {
        alert("YOU WIN!");
        reset();
    } else if (computerScore === 5 && playerScore < 5) {
        alert("YOU LOSE!");
        reset();
    }
}

function reset() {
    playerScore = 0;
    computerScore = 0;
    document.getElementById('result').innerHTML = "";
    document.getElementById('score').innerHTML = "";
}

function winOrLose(playerSelection, computerSelection) {
    if (playerSelection === rock && computerSelection != paper) {
        playerScore++;
        return win + rock + " beats " + scissors;
    } else if (playerSelection === rock && computerSelection === paper) {
        computerScore++;
        return lose + paper + " beats " + rock;
    }

    if (playerSelection === paper && computerSelection != scissors) {
        playerScore++;
        return win + paper + " beats " + rock;
    } else if (playerSelection === paper && computerSelection === scissors) {
        computerScore++;
        return lose + scissors + " beats " + paper;
    }

    if (playerSelection === scissors && computerSelection != rock) {
        playerScore++;
        return win + scissors + " beats " + paper;
    } else if (playerSelection === scissors && computerSelection === rock) {
        computerScore++;
        return lose + rock + " beats " + scissors;
    }
}

function flashResult (result) {
    if (result === win) {
        document.getElementById('win').style.backgroundColor = "green"; 
    } 
    
    if (result === lose) {
        document.getElementById('lose').style.backgroundColor = "red"; 
    }
}

function resetColors () {
    document.getElementById('win').style.backgroundColor = "white"; 
    document.getElementById('lose').style.backgroundColor = "white"; 
}
