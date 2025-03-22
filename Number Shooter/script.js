const container = document.querySelector(".container");
const timeDisplay = document.querySelector("#time");
const targetDisplay = document.querySelector("#target");
const scoreDisplay = document.querySelector("#score");
const grid = document.querySelector(".grid");
const originalTime = 20;

let cellCount = 65;
let score = 0;
let leftTime = originalTime;

const updateTarget = () => {
  target.innerText = Math.floor(Math.random() * 10);
};

const createcells = () => {
  grid.innerHTML = "";
  updateTarget();
  for (let i = 1; i <= cellCount; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cells");
    cell.innerText = Math.floor(Math.random() * 10);
    grid.append(cell);
  }
};

const updateTime = () => {
  timeDisplay.textContent = leftTime;
};

let timer = setInterval(() => {
  leftTime--;
  updateTime()
  if (leftTime <= 0) {
    clearInterval(timer);
    gameOver();
  }
}, 1000);

const gameOver = () => {
  grid.innerHTML = `<div class="game-over">
                     <p>Game Over</p>
                     <p>Your score is : <strong id="final-score">${score}</strong></p>
                     <button id="restart" onclick="reset()">Restart</button>
                    </div>`;
};

const reset = () => {
  score = 0;
  leftTime = originalTime;
  scoreDisplay.textContent = score;
  timer = setInterval(() => {
    leftTime--;
    updateTime();
    if (leftTime <= 0) {
      clearInterval(timer);
      gameOver();
    }
  }, 1000);
  startGame();
};

const updateScore = (e) => {
  let target = Number(targetDisplay.innerText);
  let num = Number(e.target.innerText);

  if(target == num){
    score = score + 10;
  }else{
    score = score - 5;
  }
  scoreDisplay.textContent = score;
  startGame();
}

const startGame = () => {
  createcells();
  updateTime();
  const cells = document.querySelectorAll(".cells");
  cells.forEach((cell) => {
    cell.addEventListener("click" , updateScore);
  })
};

startGame();