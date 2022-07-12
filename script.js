let value;
let choice;
let playerVictory = 0;
let computerVictory = 0;
const container = document.querySelector('.results');
function counter(victor) {
    
    console.log(victor);
    if (victor === 'Computer') {
        computerVictory++;
        console.log(computerVictory);
    }
    else {
        playerVictory++;
        console.log(playerVictory);
    }
    container.textContent=`Player has won (${(playerVictory)}) times, and computer has won (${(computerVictory)}) times`;
    if (playerVictory === 5) container.textContent='Player has won';
    if (computerVictory === 5) container.textContent='Computer has won';

}
function computerPlay() {
    let randomizer = Math.random();
    if (randomizer <= 0.33) (value = 'Rock');
    else if (randomizer > 0.33 && randomizer <= 0.66) (value = 'Paper');         
    else (value = 'Scissors');
}
function playRound(playerSelection, computerSelection) {
    let format = playerSelection.toLowerCase();
    format = format.charAt(0).toUpperCase() + format.slice(1);

    if (format === 'Rock') {
        if (computerSelection === 'Paper') {
            console.log("You lose!");
            counter('Computer');
        }
        else if (computerSelection === 'Scissors') {
            console.log("You win!");
            counter('Player');
        }
        else console.log("It's a tie!");
        console.log(computerSelection);
    }
    else if (format === 'Paper') {
        if (computerSelection === 'Scissors') {
            console.log("You lose!");
            counter('Computer');
        }
        else if (computerSelection === 'Rock') {
            console.log("You win!");
            counter('Player');
        }
        else console.log("It's a tie!");
        console.log(computerSelection);
    }
    else {
        if (computerSelection === 'Rock') {
            console.log("You lose!");
            counter('Computer');
        }
        else if (computerSelection === 'Paper') {
            console.log("You win!");
            counter('Player');
        }
        else console.log("It's a tie!");
        console.log(computerSelection);

    }

}

function game() {
    const btnRock = document.querySelector('#rock');
    btnRock.addEventListener('click', () => {
        choice = 'rock';
        console.log(choice);
        computerPlay();
        playRound(choice, value);
    });
    const btnPaper = document.querySelector('#paper');
    btnPaper.addEventListener('click', () => {
        choice = 'paper';
        console.log(choice);
        computerPlay();
        playRound(choice, value);
    });
    const btnScissors = document.querySelector('#scissors');
    btnScissors.addEventListener('click', () => {
        choice = 'scissors';
        console.log(choice);
        computerPlay();
        playRound(choice, value);
    });
}
game();