let value;
let choice;
let playerVictory = 0;
let computerVictory = 0;
const current=document.querySelector('.currentRound');
const container = document.querySelector('.results');
function counter(victor) {

    console.log(victor);
    if(victor!='Computer'&&victor!='Player'){
        current.textContent=`It's a tie!`;
    }
    else if (victor === 'Computer') {
        computerVictory++;
        current.textContent='Computer wins!';
        console.log(computerVictory);
    }
    else if(victor==='Player'){
        playerVictory++;
        current.textContent='Player wins!';
        console.log(playerVictory);
    }
   
    container.textContent = `Player has won ${(playerVictory)} times, and computer has won ${(computerVictory)} times`;
    if (playerVictory === 5) {
        container.textContent = `Player has won ${(playerVictory)} to ${(computerVictory)}`;
        return;
        
    }
    if (computerVictory === 5) {
        container.textContent = `Computer has won ${(computerVictory)} to ${(playerVictory)}`;
      
    }
    

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
        else counter();
        
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
        else counter();
        
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
        else counter();
        
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