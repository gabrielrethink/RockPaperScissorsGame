// alert("Está funcionando")
let userScore = 0;
let computerScore = 0;
const userScore_spam = document.getElementById("user-score");
const computerScore_spam = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const result_spam = document.querySelector(".result > spam");
const result_placar = document.querySelector(".result > placar");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

const getComputerChoice = () => {
    const choices = ["Rock", "Scissor", "Paper"];
    return choices[Math.floor(Math.random() * choices.length)];
};

const iconChoice = (choice) => {
    if(choice === "Rock")
        return '<img src="images/rock.png" alt="" />'
    if(choice === "Paper")
        return '<img src="images/paper.png" alt="" />'
    if(choice === "Scissor")
        return '<img src="images/scissors.png" alt="" />'
}

const gameResult= (gameResult, winner) => {
    if(winner === "win"){
        userScore++;
        userScore_spam.innerHTML = userScore;
        result_p.innerHTML = `${gameResult.userChoice} beats ${gameResult.computerChoice}!`;
        result_spam.innerHTML = `User Wins This Round`;
        result_placar.innerHTML = ` ${iconChoice(gameResult.userChoice) } X ${iconChoice(gameResult.computerChoice)}`
        // document.getElementById(gameResult.userChoice).classList.add("gree-glow");
    }
    if(winner === "lose"){
        computerScore++;
        computerScore_spam.innerHTML = computerScore;
        result_p.innerHTML = `${gameResult.userChoice} loses ${gameResult.computerChoice}!`;
        result_spam.innerHTML = "User Lost This Round";
        result_placar.innerHTML = ` ${iconChoice(gameResult.userChoice) } X ${iconChoice(gameResult.computerChoice)}`
        // document.getElementById(gameResult.userChoice).classList.add("gree-glow");    
    }
    if(winner === "draw"){
        result_p.innerHTML = `${gameResult.userChoice} draw with ${gameResult.computerChoice}!`
        result_spam.innerHTML = "It's a Draw! Nobody wins!";
        result_placar.innerHTML = ` ${iconChoice(gameResult.userChoice) } X ${iconChoice(gameResult.computerChoice)}`
    }
}

const game = (userChoice) =>{
    const computerChoice = getComputerChoice();
    switch(userChoice + "/" + computerChoice){
        case "Rock/Rock":
        case "Paper/Paper":
        case "Scissor/Scissor":
            gameResult({userChoice, computerChoice}, "draw");
            break;
        case "Rock/Scissor":
        case "Paper/Scissor":
        case "Scissor/Paper":
            gameResult({userChoice, computerChoice}, "win");
            break;
        case "Scissor/Rock":
        case "Rock/Paper":
        case "Paper/Rock":
            gameResult({userChoice, computerChoice}, "lose");
            break;
    }
};

rock_div.addEventListener("click", () =>{
    game("Rock");
});

paper_div.addEventListener("click", () =>{
    game("Paper");
});

scissor_div.addEventListener("click", () =>{
    game("Scissor");
});
