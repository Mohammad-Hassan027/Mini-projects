let choices = document.querySelectorAll(".choice");
let youScore = document.querySelector("#you-score");
let compScore = document.querySelector("#comp-score");
let result = document.querySelector("#result");

let userScore = 0;
let computerScore = 0;

const genCompChoice = () => {
    const option = ["Rock","Paper","Scissor"];
    let idx =Math.floor(Math.random()*3);
    return option[idx];
};

const draw = () => {
    result.innerText = "Game is Draw.Play again";
    result.style.backgroundColor = "black";
};

const showWinner = (userWin, userChoice ,compChoice) => {
    if(userWin){
        result.innerText = `You win , your ${userChoice} beats ${compChoice}`;
        result.style.backgroundColor = "green";
        userScore++;
        youScore.innerText = userScore;
    }else{
        result.innerText = `You lost , ${compChoice} beats your ${userChoice}`;
        result.style.backgroundColor = "red";
        computerScore++;
        compScore.innerText = computerScore;
    }
};

choices.forEach(choice => {
    choice.addEventListener("click" ,() => {
        let userChoice = choice.getAttribute("id");
        let compChoice = genCompChoice();
        let userWin = true;
        
        if(userChoice === compChoice){
            draw();
        }else if(userChoice === "Rock"){
            userWin = compChoice ==="Scissor" ? true : false ;
            showWinner(userWin ,userChoice ,compChoice);
        }else if(userChoice === "Paper"){
            userWin = compChoice ==="Rock" ? true : false ;
            showWinner(userWin ,userChoice ,compChoice);
        }else{
            userWin = compChoice ==="Paper" ? true : false ;
            showWinner(userWin ,userChoice ,compChoice);
        }
    });    
}); 