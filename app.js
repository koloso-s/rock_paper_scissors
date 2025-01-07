const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const buttons = document.querySelectorAll('button');
let userChoice;
let computerChoice;
let result;

buttons.forEach(choice=> choice.addEventListener("click",(e)=>{
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    generateResult();
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

function generateResult(){
    if(userChoice == computerChoice)result = "Draw";
    switch (userChoice) {
        case "rock":
            if(computerChoice == "paper")result = "computer win";
            if(computerChoice == "scissors")result= "player win";
            break;

        case "paper":
            if(computerChoice == "scissors")result = "computer win";
            if(computerChoice == "rock")result = "player win";
            break;  

        case "scissors":
            if(computerChoice == "rock")result = "computer win";
            if(computerChoice == "paper")result = "player win";
            break;

        default:
            break;
    }
    resultDisplay.innerHTML = result;
}