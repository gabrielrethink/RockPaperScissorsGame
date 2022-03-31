let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const result_p = document.querySelector(".result > p");
const result_span = document.querySelector(".result > span");
const rock_div = document.getElementById("Rock");
const paper_div = document.getElementById("Paper");
const scissor_div = document.getElementById("Scissor");

const computerChoice = () =>{
    const options = ["Rock", "Paper", "Scissor"];
    const randomNumber = Math.floor(Math.random() * options.length);
    return options[randomNumber];
}

const gameScoreBoard = (moves, result) => {
if (result === "DRAW") {
    result_p.innerHTML = "It's a Draw!!";
    result_span.innerHTML = `${moves.userChoice} Draw ${moves.computerMove}`
}
if (result === "WIN") {
    userScore++;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = "User Wins!!";
    result_span.innerHTML = `${moves.userChoice} Beat's ${moves.computerMove}`
}
if (result === "LOSE") {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = "User Lose...";
    result_span.innerHTML = `${moves.userChoice} Lose To ${moves.computerMove}`
}
}

const game = (userChoice) => {
    const computerMove = computerChoice();
    //console.log('userChoice');
    //console.log('computerMove');
    switch (userChoice + computerMove){
        case "RockRock":
        case "PaperPaper":
        case "ScissorScissor":
            console.log("DRAW");
            gameScoreBoard({userChoice, computerMove}, "DRAW");
            break;
        case "RockScissor":
        case "PaperRock":
        case "ScissorPaper":
            console.log("WIN");
            gameScoreBoard({userChoice, computerMove},"WIN");
            break;
        case "ScissorRock":
        case "RockPaper":
        case "PaperScissor":
            console.log("LOSE");
            gameScoreBoard({userChoice, computerMove},"LOSE");
            break;
    }
};

rock_div.addEventListener("click", () => {
    game("Rock");
});
paper_div.addEventListener("click", () => {
    game("Paper");
});
scissor_div.addEventListener("click", () => {
    game("Scissor");
});
