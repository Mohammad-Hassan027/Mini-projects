const input = document.querySelector("#input-number");
const submitBtn = document.querySelector(`form button[type="submit"]`);
const newGameBtn = document.querySelector(".new-game");
const previousGuess = document.querySelector(".previous-guess");
const remainGuesses = document.querySelector(".number-guess");
const msg = document.querySelector(".msg");
let guess = 0;
let RandomNum = Math.floor(Math.random() * 100 + 1);

const disabling = () => {
  submitBtn.classList.add("disabled");
  input.classList.add("disabled");
};

const manageClass = (element, toAdd, toRemove1, toRemove2) => {
  element.classList.add(toAdd);
  element.classList.remove(toRemove1, toRemove2);
};

const reset = () => {
  guess = 0;
  RandomNum = Math.floor(Math.random() * 100 + 1);
  input.value = "";
  msg.innerText = "";
  previousGuess.innerText = "Previous guesses : ";
  remainGuesses.innerText = "Remaining guesses : 6";
  submitBtn.classList.remove("disabled");
  input.classList.remove("disabled");
  manageClass(msg, "hidden", "correct-guess", "incorrect-guess");
};

const updateGuesses = () => {
  remainGuesses.innerText = `Remaining guesses : ${6 - guess}`;
};

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  guess++;
  updateGuesses();
  const num = parseInt(input.value);
  previousGuess.innerText += ` ${num} `;
  if (num === RandomNum) {
    msg.innerText = "Congratulations , correct guess";
    manageClass(msg, "correct-guess", "hidden", "incorrect-guess");
    disabling();
  } else if (num < RandomNum) {
    if (guess == 6) {
      msg.innerText = `You lost , the number was ${RandomNum}`;
      input.value = "";
      disabling();
    } else {
      msg.innerText = "Incorrect guess , try greater number";
    }
    manageClass(msg, "incorrect-guess", "hidden", "correct-guess");
  } else if (num > RandomNum) {
    if (guess == 6) {
      msg.innerText = `You lost , the number was ${RandomNum}`;
      input.value = "";
      disabling();
    } else {
      msg.innerText = "Incorrect guess , try smaller number";
    }
    manageClass(msg, "incorrect-guess", "hidden", "correct-guess");
  }
  input.value = "";
});

newGameBtn.addEventListener("click", reset);
