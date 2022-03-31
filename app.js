let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_spam = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const result_spam = document.querySelector(".result > spam");
const rock_div = document.getElementById("Rock");
const paper_div = document.getElementById("Paper");
const scissor_div = document.getElementById("Scissor");

const getComputerChoice = () => {
  const choices = ["Rock", "Paper", "Scissor"];
  return choices[Math.floor(Math.random() * choices.length)];
};

const animationGlow = (userChoice, className) => {
  document.getElementById(userChoice).classList.add(className);
  setTimeout(() => {
    document.getElementById(userChoice).classList.remove(className);
  }, 1000);
};

const gameResult = (gameResult, winner) => {
  if (winner === "win") {
    userScore++;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = `${gameResult.userChoice} beats ${gameResult.cumputerChoice}`;
    result_spam.innerHTML = "User Wins This Round";
    animationGlow(gameResult.userChoice, "green-glow");
  }
  if (winner === "lose") {
    computerScore++;
    computerScore_spam.innerHTML = computerScore;
    result_p.innerHTML = `${gameResult.userChoice} loses ${gameResult.cumputerChoice}`;
    result_spam.innerHTML = "User Loses This Round";
    animationGlow(gameResult.userChoice, "red-glow");
  }
  if (winner === "draw") {
    result_p.innerHTML = `${gameResult.userChoice} draw with ${gameResult.cumputerChoice}`;
    result_spam.innerHTML = "It's a Draw!! Nobody wins!";
  }
};

const game = (userChoice) => {
  const cumputerChoice = getComputerChoice();
  switch (userChoice + "/" + cumputerChoice) {
    case "Rock/Rock":
    case "Paper/Paper":
    case "Scissor/Scissor":
      gameResult({ userChoice, cumputerChoice }, "draw");
      break;
    case "Rock/Scissor":
    case "Paper/Rock":
    case "Scissor/Paper":
      gameResult({ userChoice, cumputerChoice }, "win");
      break;
    case "Scissor/Rock":
    case "Rock/Paper":
    case "Paper/Scissor":
      gameResult({ userChoice, cumputerChoice }, "lose");
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
