


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
    playerSelection = choice.innerHTML.toLowerCase();
    computerSelection = computerPlay(); 
    console.log("player: " + playerSelection + " computer: " + computerSelection); 
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
        playerScore++;
        computerScore++; 
        return tie; 
    } else {
        return winOrLose(playerSelection, computerSelection);   
    }
}

function result (round) {
    document.getElementById('result').innerHTML = round;
}

function score (playerScore, computerScore) {
    document.getElementById('score').innerHTML = "Player Score: " + playerScore + " Computer Score: " + computerScore; 
    if (playerScore === 5 && computerScore < 5) {
        alert("YOU WIN!");
    } else if (playerScore === 5 && computerScore === 5) {
        alert("YOU TIED!");
    } else if (computerScore === 5 && playerScore < 5) {
        alert("YOU LOSE!");
    }
}

function winOrLose (playerSelection, computerSelection) {
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
