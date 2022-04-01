let userScore = 0;
let computerScore = 0;

const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');

const result_p = document.querySelector('.result > p');

const rock_div = document.getElementById('Rock');
const paper_div = document.getElementById('Paper');
const scissor_div = document.getElementById('Scissor');

const computerChoice = () => {
    const options = ["Rock", "Paper", "Scissor"];
    const randomOption = Math.floor(Math.random() * options.length);
    return options[randomOption];
}

const gameResult = (playerMove, comp, result) => {
    if(result === "DRAW"){
        result_p.innerHTML = "It's a Draw";
    }
    if(result === "WIN"){
        userScore++;
        userScore_span.innerHTML = userScore;
        result_p.innerHTML = "User WINS this Round";
    }
    if(result === "LOSE"){
        computerScore++;
        computerScore_span.innerHTML = computerScore;
        result_p.innerHTML = "User LOSE this Round";
    }
}

const game = (playerMove) => {
    const comp = computerChoice();
    switch (playerMove + comp) {
        case "RockRock":
        case "ScissorScissor":
        case "PaperPaper":
            gameResult(playerMove, comp, "DRAW");
            break;
        case "PaperRock":
        case "RockScissor":
        case "ScissorPaper":
            gameResult(playerMove, comp, "WIN");
            break;
        case "RockPaper":
        case "ScissorRock":
        case "PaperScissor":
            gameResult(playerMove, comp, "LOSE");
            break;
    }
}

rock_div.addEventListener('click', () => {
    game("Rock");
});

paper_div.addEventListener('click', () => {
    game("Paper");
});

scissor_div.addEventListener('click', () => {
    game("Scissor");
});


