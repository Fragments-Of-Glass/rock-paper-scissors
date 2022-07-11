let value;

function computerPlay() {
    let randomizer = Math.random();
    if (randomizer <= 0.33) (value = 'Rock');
    else if (randomizer > 0.33 && randomizer <= 0.66) (value = 'Paper');
    else (value = 'Scissors');
}
function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'Rock') {
        if (computerSelection === 'Paper') console.log("You lose!");
        else if (computerSelection === 'Scissors') console.log("You win!");
        else console.log("It's a tie!")
        console.log(computerSelection);
    }
    else if (playerSelection === 'Paper') {
        if (computerSelection === 'Scissors') console.log("You lose!");
        else if (computerSelection === 'Rock') console.log("You win!");
        else console.log("It's a tie!")
        console.log(computerSelection);
    }
    else {
        if (computerSelection === 'Rock') console.log("You lose!");
        else if (computerSelection === 'Paper') console.log("You win!");
        else console.log("It's a tie!")
        console.log(computerSelection);

    }

}
function game() {
    for (let i = 1; i <= 5; i++) {
        let choice = prompt('Enter value:');
        computerPlay();
        playRound(choice, value);
    }
}
game();