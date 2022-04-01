let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice(){
    const choices = ["r" ,"p", "s"];
    const randomNumber = Math.floor(Math.random()*3); //Math.random me dá um número entre 0 e 1, vezes 3, o retorno do Math.floor será de 0 a 2.
    return choices[randomNumber];
}

const gameResult = (result) => {
    if (result == "WIN") {
        userScore++;
        userScore_span.innerHTML = userScore;
        result_p.innerHTML = "User WINS"
    }
    if (result == "LOSE") {
        computerScore++;
        computerScore_span.innerHTML = computerScore;
        result_p.innerHTML = "User LOSES"
    }
    if (result == "DRAW") {
        result_p.innerHTML = "DRAW"
    }
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rp":
        case "pr":
        case "sp":
            gameResult("WIN")    
            break;
        case "rp":
        case "ps":
        case "sr":
            gameResult("LOSE")      
            break;
        case "rr":
        case "pp":
        case "ss":
            gameResult("DRAW")    
            break;
    }
}


function main(){
    rock_div.addEventListener("click", function(){
        game("r")
    })

    paper_div.addEventListener("click", function(){
        game("p")
    })

    scissors_div.addEventListener("click", function(){
        game("s")
    })
}

main();