const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const result = document.getElementById('result');
const buttons = document.querySelectorAll('button');
let userChoice;

buttons.forEach(choice=> choice.addEventListener("click",(e)=>{
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
}))

