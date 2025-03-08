const question = document.querySelector(".question");
const btns = document.querySelectorAll(".btn");

btns.forEach(btn => {
  btn.addEventListener("click" , () => {
    if(!(btn.classList.contains("opperation"))){
      question.innerText += btn.innerText;
    }
    
  })
});
