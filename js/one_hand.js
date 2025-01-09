const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const buttons = document.querySelectorAll('.btn-select');
const selectionPage = document.getElementById("select-modal");
const resultPage = document.getElementById("result-modal");
const playAgainButton = document.getElementById('play-again');
const computerChoiceImg = document.getElementById('computer-choice-img');
const userChoiceImg = document.getElementById('user-choice-img');

let userChoice;
let computerChoice;
let result;

const root = document.documentElement;

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
            computerChoiceImg.setAttribute('src','../img/rock.png');
            break;

        case 1:
            computerChoice = "paper";
            computerChoiceImg.setAttribute('src','../img/paper.png');
            break;

        case 2:
            computerChoice = "scissors";
            computerChoiceImg.setAttribute('src','../img/scissors.png');
            break;

        default:
            break;
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}
function setPropertyFunction(object,Property,value){
    object.style.setProperty(Property,value);
}
function generateResult(){
    if(userChoice == computerChoice)result = "Draw!";
    switch (userChoice) {
        case "rock":
            if(computerChoice == "paper")result = "Computer Win!";
            if(computerChoice == "scissors")result= "Player Win!";
            userChoiceImg.setAttribute('src','../img/rock.png');
            break;

        case "paper":
            if(computerChoice == "scissors")result = "Computer Win!";
            if(computerChoice == "rock")result = "Player Win!";
            userChoiceImg.setAttribute('src','../img/paper.png');
            break;  

        case "scissors":
            if(computerChoice == "rock")result = "Computer Win!";
            if(computerChoice == "paper")result = "Player Win!";
            userChoiceImg.setAttribute('src','../img/scissors.png');
            break;

        default:
            break;
    }
    switch (result) {
        case "Computer Win!":
            setPropertyFunction(resultDisplay,'color','rgb(255, 47, 47)')
            setPropertyFunction(resultDisplay,'background-color','rgba(52, 16, 16, 0.609)');
            setPropertyFunction(root,'--container-shadow-color', 'rgb(255, 47, 47)');
            break;
        case "Player Win!":
            setPropertyFunction(resultDisplay,'color','rgb(37, 186, 11)');
            setPropertyFunction(resultDisplay,'background-color','rgba(16, 52, 18, 0.609)');
            setPropertyFunction(root,'--container-shadow-color', 'rgb(37, 186, 11)');
            break;  
        default:
            setPropertyFunction(resultDisplay,'color','rgb(97, 97, 97)');
            setPropertyFunction(resultDisplay,'background-color','rgba(35, 35, 35, 0.609)');
            setPropertyFunction(root,'--container-shadow-color', 'rgb(97, 97, 97)');
            break;
    }
    resultDisplay.innerHTML = result;
    setPropertyFunction(resultPage,'display','flex');
}

playAgainButton.addEventListener('click',()=>{
    setPropertyFunction(selectionPage,'display','flex');
    setPropertyFunction(resultPage,'display','none');
    computerChoiceImg.setAttribute('src','../img/start.png');
    userChoiceImg.setAttribute('src','../img/start.png');
    computerChoiceDisplay.innerHTML = "?";
    userChoiceDisplay.innerHTML = "?";
    setPropertyFunction(root,'--container-shadow-color', 'rgb(97, 97, 97)');
})
let theme;
function setTheme(){
    theme = localStorage.getItem("theme");
if(theme != "dark"){
setPropertyFunction(root,'--background-color', 'rgb(157, 157, 157)');
setPropertyFunction(root,'--container-color', 'rgb(122, 122, 122)');
setPropertyFunction(root,'--background-color-card', 'rgb(220, 220, 220)');
}else{
setPropertyFunction(root,'--background-color', 'rgb(29, 29, 29)');
setPropertyFunction(root,'--container-color', 'rgb(15, 15, 15)');
setPropertyFunction(root,'--background-color-card', 'rgb(0, 0, 0)');
}
}
setTheme();
document.querySelector('.change-of-theme').addEventListener('click',()=>{
    theme == "dark"? localStorage.setItem("theme", "white") : localStorage.setItem("theme", "dark");
setTheme();
})