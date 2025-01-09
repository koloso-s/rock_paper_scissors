const computerChoiceDisplay = document.querySelectorAll(".computer-choice");
const userChoiceDisplay = document.querySelectorAll(".user-choice");
const resultDisplay = document.getElementById("result");
const buttons = document.querySelectorAll(".btn-select");
const selectionPage = document.getElementById("select-modal");
const resultPage = document.getElementById("result-modal");
const playAgainButton = document.getElementById("play-again");
const computerChoiceImg = document.querySelectorAll(".computer-choice-img");
const userChoiceImg = document.querySelectorAll(".user-choice-img");
const chooseTitle = document.getElementById("choose-title");
const ComputerCards = document.querySelectorAll(".card-computer");
const UserCards = document.querySelectorAll(".card-user");
const Clock = document.querySelector(".clock");
const ClockTitle = document.querySelector(".clock-title");

let userChoice = [];
let computerChoice = [];
let result;

const root = document.documentElement;
console.log(userChoiceDisplay);

//generateResult();
function setPropertyFunction(object, Property, value) {
  object.style.setProperty(Property, value);
}

function getplayerChoice() {
  return new Promise((resolve) => {
    buttons.forEach((choice) =>
      choice.addEventListener("click", (e) => {
        resolve(e.target.id);
      })
    );
  });
}

async function playerChoice() {
  for (let i = 0; i < 2; i++) {
    userChoice[i] = await getplayerChoice();
    userChoiceDisplay[i].innerHTML = userChoice[i];
    generateUserImage(i);
    chooseTitle.innerHTML = "Choose your option 2:";
  }
  setPropertyFunction(selectionPage, "display", "none");
  generateComputerChoice();
  UserCards.forEach((choice) => {
    choice.addEventListener("click", () => {
      clearCard(UserCards);
      choice.classList.add("card-checked");
    });
  });
  ClockTitle.innerHTML = await ClockFunction();
  ComputerOption();
  UserOption();
  ResultFunction();
}
playerChoice();
function clearCard(cards) {
  cards.forEach((choice) => choice.classList.remove("card-checked"));
}
function showCard(cards) {
  cards.forEach((choice) => setPropertyFunction(choice, "display", ""));
}
async function ClockFunction() {
  return new Promise((resolve) => {
    setPropertyFunction(Clock, "display", "flex");
    setTimeout(() => (ClockTitle.innerHTML = "2"), "1000");
    setTimeout(() => (ClockTitle.innerHTML = "1"), "2000");
    setTimeout(() => resolve("Time is up"), "3000");
  });
}
let NumberComputerChoice;
function ComputerOption() {
  NumberComputerChoice = Math.floor(Math.random() * 2);
  ComputerCards[NumberComputerChoice].classList.add("card-checked");
  ComputerCards.forEach((el) => {
    if (el.className != "card-computer card-checked")
      setPropertyFunction(el, "display", "none");
  });
}
let NumberUserChoice;
function UserOption() {
  let i = 0;
  UserCards.forEach((el) => {
    if (el.className != "card-user card-checked")
      setPropertyFunction(el, "display", "none");
    if (i == 0 && el.className == "card-user card-checked")
      NumberUserChoice = 0;
    else if (i == 1 && el.className == "card-user card-checked")
      NumberUserChoice = 1;
    i++;
  });
}
function generateComputerChoice() {
  for (let i = 0; i < 2; i++) {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
        computerChoice[i] = "rock";
        computerChoiceImg[i].setAttribute("src", "../img/rock.png");
        break;

      case 1:
        computerChoice[i] = "paper";
        computerChoiceImg[i].setAttribute("src", "../img/paper.png");
        break;

      case 2:
        computerChoice[i] = "scissors";
        computerChoiceImg[i].setAttribute("src", "../img/scissors.png");
        break;

      default:
        break;
    }
    computerChoiceDisplay[i].innerHTML = computerChoice[i];
  }
}
function generateUserImage(i) {
  switch (userChoice[i]) {
    case "rock":
      userChoiceImg[i].setAttribute("src", "../img/rock.png");
      break;

    case "paper":
      userChoiceImg[i].setAttribute("src", "../img/paper.png");
      break;

    case "scissors":
      userChoiceImg[i].setAttribute("src", "../img/scissors.png");
      break;
  }
}
function ResultFunction() {
  console.log(NumberUserChoice);

  if (NumberUserChoice == undefined) {
    result = "Computer Win!";
  }
  if (userChoice[NumberUserChoice] == computerChoice[NumberComputerChoice]) {
    result = "Draw!";
  }
  switch (userChoice[NumberUserChoice]) {
    case "rock":
      if (computerChoice[NumberComputerChoice] == "paper")
        result = "Computer Win!";
      if (computerChoice[NumberComputerChoice] == "scissors")
        result = "Player Win!";
      break;

    case "paper":
      if (computerChoice[NumberComputerChoice] == "scissors")
        result = "Computer Win!";
      if (computerChoice[NumberComputerChoice] == "rock")
        result = "Player Win!";
      break;

    case "scissors":
      if (computerChoice[NumberComputerChoice] == "rock")
        result = "Computer Win!";
      if (computerChoice[NumberComputerChoice] == "paper")
        result = "Player Win!";
      break;
  }
  switch (result) {
    case "Computer Win!":
      setPropertyFunction(resultDisplay, "color", "rgb(255, 47, 47)");
      setPropertyFunction(
        resultDisplay,
        "background-color",
        "rgba(52, 16, 16, 0.609)"
      );
      setPropertyFunction(root, "--container-shadow-color", "rgb(255, 47, 47)");
      break;
    case "Player Win!":
      setPropertyFunction(resultDisplay, "color", "rgb(37, 186, 11)");
      setPropertyFunction(
        resultDisplay,
        "background-color",
        "rgba(16, 52, 18, 0.609)"
      );
      setPropertyFunction(root, "--container-shadow-color", "rgb(37, 186, 11)");
      break;
    default:
      setPropertyFunction(resultDisplay, "color", "rgb(97, 97, 97)");
      setPropertyFunction(
        resultDisplay,
        "background-color",
        "rgba(35, 35, 35, 0.609)"
      );
      setPropertyFunction(root, "--container-shadow-color", "rgb(97, 97, 97)");
      break;
  }
  resultDisplay.innerHTML = result;
  setPropertyFunction(resultPage, "display", "flex");
}
playAgainButton.addEventListener("click", () => {
  setPropertyFunction(selectionPage, "display", "flex");
  setPropertyFunction(resultPage, "display", "none");
  for (let i = 0; i < 2; i++) {
    computerChoiceImg[i].setAttribute("src", "../img/start.png");
    userChoiceImg[i].setAttribute("src", "../img/start.png");
    computerChoiceDisplay[i].innerHTML = "?";
    userChoiceDisplay[i].innerHTML = "?";
  }
  clearCard(UserCards);
  clearCard(ComputerCards);
  showCard(UserCards);
  showCard(ComputerCards);
  chooseTitle.innerHTML = "Choose your option:";
  setPropertyFunction(Clock, "display", "none");
  ClockTitle.innerHTML = "3";
  setPropertyFunction(root, "--container-shadow-color", "rgb(97, 97, 97)");
  NumberUserChoice = undefined;
  playerChoice();
});
let theme;
function setTheme() {
  theme = localStorage.getItem("theme");
  if (theme != "dark") {
    setPropertyFunction(root, "--background-color", "rgb(157, 157, 157)");
    setPropertyFunction(root, "--container-color", "rgb(122, 122, 122)");
    setPropertyFunction(root, "--background-color-card", "rgb(220, 220, 220)");
  } else {
    setPropertyFunction(root, "--background-color", "rgb(29, 29, 29)");
    setPropertyFunction(root, "--container-color", "rgb(15, 15, 15)");
    setPropertyFunction(root, "--background-color-card", "rgb(0, 0, 0)");
  }
}
setTheme();
document.querySelector(".change-of-theme").addEventListener("click", () => {
  theme == "dark"
    ? localStorage.setItem("theme", "white")
    : localStorage.setItem("theme", "dark");
  setTheme();
});
