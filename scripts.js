


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
    let playerInput = playerSelection.toLowerCase(); 
    
    if (playerInput === computerSelection) {
        computerScore++; 
        playerScore++; 
        return tie;
    }

    if (playerInput === rock && computerSelection != paper) {
        playerScore++; 
        return win + rock + " beats " + scissors; 
    } else if (playerInput === rock && computerSelection === paper) {
        computerScore++;
        return lose + paper + " beats " + rock; 
    }

    if (playerInput === paper && computerSelection != scissors) {
        playerScore++;
        return win + paper + " beats " + rock; 
    } else if (playerInput === paper && computerSelection === scissors) {
        computerScore++; 
        return lose + scissors + " beats " + paper; 
    }

    if (playerInput === scissors && computerSelection != rock) {
        playerScore++;
        return win + scissors + " beats " + paper; 
    } else if (playerInput === scissors && computerSelection === rock) {
        computerScore++;
        return lose + rock + " beats " + scissors; 
    }
}

function result (round) {
    const scoreKeeper = document.getElementById('result').innerHTML(round);

}



// function game(singleRound) {
//     for (let i = 0; i < 5; i++) {
//         singleRound;
//         console.log(singleRound); 
//     }

//     if (playerScore > computerScore) {
//         return "You win the game!"; 
//     } else if (playerScore < computerScore) {
//         return "You lost the game"; 
//     } else {
//         return "You tied the game"; 
//     }
// }

// console.log(game(singleRound(playerSelection, computerSelection)));

