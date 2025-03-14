let choices = document.querySelectorAll(".choice");
let youScore = document.querySelector("#you-score");
let compScore = document.querySelector("#comp-score");
let result = document.querySelector("#result");

let userScore = 0;
let computerScore = 0;

const genCompChoice = () => {
  const option = ["Rock", "Paper", "Scissor"];
  let idx = Math.floor(Math.random() * 3);
  return option[idx];
};

const draw = () => {
  result.classList.remove("win", "lose", "draw");
  void result.offsetWidth;
  classList.add("draw");
  result.innerText = "Game is Draw. Play again";
};

const showWinner = (userWin, userChoice, compChoice) => {
    result.classList.remove("win", "lose", "draw");
  void result.offsetWidth;
  if (userWin) {
    result.innerText = `You win , your ${userChoice} beats ${compChoice}`;
    result.classList.add("win");
    userScore++;
    youScore.innerText = userScore;
  } else {
    result.innerText = `You lost , ${compChoice} beats your ${userChoice}`;
    result.classList.add("lose");
    computerScore++;
    compScore.innerText = computerScore;
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    let userChoice = choice.getAttribute("id");
    let compChoice = genCompChoice();
    let userWin = true;

    if (userChoice === compChoice) {
      draw();
    } else if (userChoice === "Rock") {
      userWin = compChoice === "Scissor" ? true : false;
      showWinner(userWin, userChoice, compChoice);
    } else if (userChoice === "Paper") {
      userWin = compChoice === "Rock" ? true : false;
      showWinner(userWin, userChoice, compChoice);
    } else {
      userWin = compChoice === "Paper" ? true : false;
      showWinner(userWin, userChoice, compChoice);
    }
  });
});
