let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".user-score");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

const game = (userChoice) => {
    getWinner(userChoice, getComputerChoice());
}

const getWinner = (userChoice, computerChoice) => {
    const match = userChoice + computerChoice;
    switch (match) {
        case 'rr':
        case 'pp':
        case 'ss':
            console.log("USER: ", String(userChoice).toUpperCase(), "|| COMPUTER: ", String(computerChoice).toUpperCase());
            console.log("DRAW");
            gameResult('draw');
            break;
        case 'rs':
        case 'pr':
        case 'sp':
            console.log("USER: ", String(userChoice).toUpperCase(), "|| COMPUTER: ", String(computerChoice).toUpperCase());
            console.log("User win!");
            gameResult('winner');
            break;
        case 'sr':
        case 'rp':
        case 'ps':
            console.log("USER: ", String(userChoice).toUpperCase(), "|| COMPUTER: ", String(computerChoice).toUpperCase());
            console.log("Computer win!");
            gameResult('loser');
            break;
    }
}

const gameResult = (result) => {
    switch (result) {
        case 'draw':
            result_p.innerHTML = 'Empate!'
            break;
        case 'winner':
            userScore++;
            userScore_span.innerHTML = userScore;
            result_p.innerHTML = 'O usuario venceu!';
            userScore_span.classList.add('score-green');
            break;
        case 'loser':
            computerScore++;
            computerScore_span.innerHTML = computerScore;
            result_p.innerHTML = 'O Computador venceu!';
            computerScore_span.classList.add('score-green');
            break;

    }
    setTimeout( function() {
        rock_div.classList.remove('green')
        paper_div.classList.remove('green');
        scissor_div.classList.remove('green');
        userScore_span.classList.remove('score-green');
        computerScore_span.classList.remove('score-green');
    }, 700)
}

const getComputerChoice = () => {
    const choices = ["r", "p", "s"]
    return choices[Math.floor(Math.random() * choices.length)];
}

rock_div.addEventListener("click", () => {
    rock_div.classList.add('green');
    game("r");
});

paper_div.addEventListener("click", () => {
    paper_div.classList.add('green');
    game("p");
});

scissor_div.addEventListener("click", () => {
    scissor_div.classList.add('green');
    game("s");
});