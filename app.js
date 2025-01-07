const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const buttons = document.querySelectorAll('.btn-secondary');
const selectionPage = document.getElementById("select-modal");
const resultPage = document.getElementById("result-modal");
const playAgainButton = document.getElementById('play-again');
let userChoice;
let computerChoice;
let result;

buttons.forEach(choice=> choice.addEventListener("click",(e)=>{
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    selectionPage.style.setProperty('display','none');
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
    if(userChoice == computerChoice)result = "Draw!";
    switch (userChoice) {
        case "rock":
            if(computerChoice == "paper")result = "Computer Win!";
            if(computerChoice == "scissors")result= "Player Win!";
            break;

        case "paper":
            if(computerChoice == "scissors")result = "Computer Win!";
            if(computerChoice == "rock")result = "Player Win!";
            break;  

        case "scissors":
            if(computerChoice == "rock")result = "Computer Win!";
            if(computerChoice == "paper")result = "Player Win!";
            break;

        default:
            break;
    }
    switch (result) {
        case "Computer Win!":
            resultDisplay.style.setProperty('color','rgb(255, 47, 47)');
            resultDisplay.style.setProperty('background-color','rgba(52, 16, 16, 0.609)');
            break;
        case "Player Win!":
            resultDisplay.style.setProperty('color','rgb(106, 255, 47)');
            resultDisplay.style.setProperty('background-color','rgba(16, 52, 18, 0.609)');
            break;  
        default:
            resultDisplay.style.setProperty('color','rgb(97, 97, 97)');
            resultDisplay.style.setProperty('background-color','rgba(35, 35, 35, 0.609)');
            break;
    }
    resultDisplay.innerHTML = result;
    resultPage.style.setProperty('display','flex');
}

playAgainButton.addEventListener('click',()=>{
    selectionPage.style.setProperty('display','flex');
    resultPage.style.setProperty('display','none');
})