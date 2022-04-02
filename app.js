var userScore=0;
var computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const placar_user = document.getElementById("hand1");
const placar_computer = document.getElementById("hand2");

function getComputerChoice(){
    const choices = ['r','p','s'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}



function game(userChoice){
    const computerChoice = getComputerChoice();
    console.log(userChoice+computerChoice)
    setPlacar(userChoice,computerChoice);
    switch (userChoice+computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(convertToWord(userChoice),convertToWord(computerChoice));
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(convertToWord(userChoice),convertToWord(computerChoice));
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(convertToWord(userChoice),convertToWord(computerChoice));
        break;
    }
}
function setPlacar(userChoice,computerChoice){
    if(userChoice=='p'){placar_user.src = "images/paper.png"; 
    }else if(userChoice=='r'){placar_user.src = "images/rock.png";
    }else if(userChoice=='s'){placar_user.src = "images/scissor.png"; }
    if(computerChoice=='p'){placar_computer.src = "images/paper.png"; 
    }else if(computerChoice=='r'){placar_computer.src = "images/rock.png";
    }else if(computerChoice=='s'){placar_computer.src = "images/scissor.png"; }
    // if(choice == "s") return "Scissor";
    // return "Paper";
}
function placarLight(user,computer){
    let glows="";
    document.querySelector(".score-board").classList.remove('red-glow');
    document.querySelector(".score-board").classList.remove('gray-glow');
    document.querySelector(".score-board").classList.remove('green-glow');
    if(user>computer){ glows = 'green-glow';
    }else if(user<computer){ glows = 'red-glow';
    }else {glows = 'gray-glow'};
    document.querySelector(".score-board").classList.add(glows);
}

function lose(userChoice,computerChoice) {
    computerScore++;
    computerScore_span.innerHTML=computerScore;
    result_p.innerHTML = `${computerChoice} beats ${userChoice}. You lose!`;
    document.getElementById(getUserChoice(userChoice)).classList.add('red-glow');
    removeGlows('red-glow');
    setTimeout(function() { document.getElementById(getUserChoice(userChoice)).classList.remove('red-glow')}, 300)
    
    placarLight(userScore, computerScore);
}

function draw(userChoice,computerChoice) {
    result_p.innerHTML = `${computerChoice} is equals to ${userChoice}. It's a draw!`;
    document.getElementById(getUserChoice(userChoice)).classList.add('gray-glow');
    setTimeout(function() { document.getElementById(getUserChoice(userChoice)).classList.remove('gray-glow')}, 300)
    // document.querySelector(".hands>div").classList.add('gray-glow');
    removeGlows('gray-glow');
    // document.querySelector(".hands>.choice>h1").classList.add('gray-glow');
    placarLight(userScore, computerScore);
}

function win(userChoice,computerChoice) {   
    userScore++;
    userScore_span.innerHTML=userScore;
    result_p.innerHTML =  `${userChoice} beats ${computerChoice}. You won!`;
    document.getElementById(getUserChoice(userChoice)).classList.add('green-glow');
    setTimeout(function() { document.getElementById(getUserChoice(userChoice)).classList.remove('green-glow')}, 300)
    removeGlows('green-glow');

    placarLight(userScore, computerScore);
}

function removeGlows(glow){
    document.querySelector(".hands>.choice").classList.remove('red-glow');
    document.querySelector(".hands>.choice2").classList.remove('red-glow');
    document.querySelector(".hands>.choice").classList.remove('gray-glow');
    document.querySelector(".hands>.choice2").classList.remove('gray-glow');
    document.querySelector(".hands>.choice").classList.remove('green-glow');
    document.querySelector(".hands>.choice2").classList.remove('green-glow');
    document.querySelector(".hands>.choice").classList.add(glow);
    document.querySelector(".hands>.choice2").classList.add(glow);
}

function getUserChoice(choice){
    if(choice=="Rock") return "r";
    if(choice == "Paper") return "p";
    return "s";
}

function convertToWord(choice){
    if(choice=="r") return "Rock";
    if(choice == "s") return "Scissor";
    return "Paper";
}
function main(){
    rock_div.addEventListener('click', function(){
        game("r");
    })
    paper_div.addEventListener('click', function(){
        game("p");
    })
    scissors_div.addEventListener('click', function(){
        game("s");
    })
}

main();