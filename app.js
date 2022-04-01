let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const result_span = document.querySelector(".result > span");
const rock_div  = document.getElementById("Rock");
const paper_div  = document.getElementById("Paper");
const scissor_div  = document.getElementById("Scissor");
const image1_img = document.getElementById("image1");
const image2_img = document.getElementById("image2");

const getComputerChoice = () =>{
    const choices = ["Rock", "Paper", "Scissor"];
    return choices[Math.floor(Math.random() * choices.length)];
};

const gameResult = (result, winner) => {
    console.log(result)
    if (winner === "win"){
        userScore++;
        userScore_span.innerHTML = userScore;
        result_p.innerHTML = `${result.userChoice} win ${result.computerChoice}`
        result_span.innerHTML = 'You Win'
    }
    if (winner === "lose"){
        computerScore++;
        computerScore_span.innerHTML = computerScore;
        result_p.innerHTML = `${result.userChoice} defeat ${result.computerChoice}`
        result_span.innerHTML = 'You Lose'

    }
    if(winner === "draw"){
        result_p.innerHTML = `${result.userChoice} draw with ${result.computerChoice}`
        result_span.innerHTML = 'Draw'

    }
    if(result.userChoice === 'Rock'){
        image1_img.src = "images/rock.png";
    }
    if(result.userChoice === 'Paper'){
        image1_img.src = "images/paper.png";
    }
    if(result.userChoice === 'Scissor'){
        image1_img.src = "images/scissor.png";
    }
    if(result.computerChoice === 'Rock'){
        image2_img.src = "images/rock.png";
    }
    if(result.computerChoice === 'Paper'){
        image2_img.src = "images/paper.png";
    }
    if(result.computerChoice === 'Scissor'){
        image2_img.src = "images/scissor.png";
    }

}

const game = (userChoice) => {
    const computerChoice = getComputerChoice();
    switch(userChoice + "/" +computerChoice){
        case 'Rock/Rock':
        case 'Paper/Paper':
        case 'Scissor/Scissor':
            gameResult({userChoice, computerChoice} ,'draw');
            break;
        case 'Rock/Scissor':
        case 'Paper/Rock':
        case 'Scissor/Paper':
            gameResult({userChoice, computerChoice} ,'win');
            break;
        case 'Rock/Paper':
        case 'Paper/Scissor':
        case 'Scissor/Rock':
            gameResult({userChoice, computerChoice} ,'lose');
            break;
    }
};

rock_div.addEventListener('click', () =>{
    game("Rock")
});
paper_div.addEventListener('click', () =>{
    game("Paper")
});
scissor_div.addEventListener('click', () =>{
    game("Scissor")
});


