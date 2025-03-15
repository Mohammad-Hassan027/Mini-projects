let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let declarationPage = document.querySelector(".declaration-page");
let newGameBtn = document.querySelector(".new-game-btn");
let msg = document.querySelector("#msg");
let Oscore = document.querySelector("#o-score");
let Xscore = document.querySelector("#x-score");
let O = 0;
let X = 0;
let count = 0;
let turnO = true;
let win;

const winingPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const showWinner = (Winner) => {
  msg.innerText = `Congratulations, Winner is ${Winner}`;
  declarationPage.classList.remove("hide");
  if (Winner === "O") {
    O++;
  } else {
    X++;
  }
};

const draw = (count, Win) => {
  if (count == 9 && !Win) {
    msg.innerText = "Draw";
    declarationPage.classList.remove("hide");
  }
};

const checkWinner = () => {
  for (let pattern of winingPatterns) {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if (pos1val !== "" && pos1val !== "" && pos1val !== "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        showWinner(pos1val);
        win = true;
      }
    }
  }
};

const reset = () => {
  if (count % 2 != 0) {
    if (turnO) {
      turnO = false;
    } else {
      turnO = true;
    }
  } else {
    if (turnO) {
      turnO = true;
    } else {
      turnO = false;
    }
  }
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
  });
  declarationPage.classList.add("hide");
  count = 0;
  win = false;
};

const newGame = () => {
  count = 0;
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
  });
  declarationPage.classList.add("hide");
  win = false;
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.classList.add("o-color");
      box.classList.remove("x-color");
      box.innerText = "O";
      turnO = false;
    } else {
      box.classList.add("x-color");
      box.classList.remove("o-color");
      box.innerText = "X";
      turnO = true;
    }

    box.disabled = true;
    checkWinner();
    Oscore.innerText = O;
    Xscore.innerText = X;
    count++;
    draw(count, win);
  });
});

resetBtn.addEventListener("click", reset);
newGameBtn.addEventListener("click", newGame);
