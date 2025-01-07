const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const result = document.getElementById('result');
const buttons = document.querySelectorAll('button');
let userChoice;
let computerChoice;

buttons.forEach(choice=> choice.addEventListener("click",(e)=>{
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
}))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random()*3)
    switch (randomNumber) {
        case 0:
            computerChoice = "rock";
            break;

        case 1:
            computerChoice = "paper";
            break;

        case 2:
            computerChoice = "scissors";
            break;

        default:
            break;
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}
