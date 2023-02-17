//Variables
const btns = document.querySelectorAll("button");
const computerChoice = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const result = document.getElementById("result");

btns.forEach(element => element.addEventListener("click", function (e) {
    let userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    resultDisplay();
}));

//Computer Choice generator
function generateComputerChoice() {
   const randomComputerSelection = Math.floor(Math.random() * 4);

    if (randomComputerSelection == 0) {
        computerChoice.innerHTML = "Rock 🗿"
    } else if (randomComputerSelection == 1) {
        computerChoice.innerHTML = "Paper 📄"
    } else {
        computerChoice.innerHTML = "Scissors ✂"
    };
    console.log(randomComputerSelection);
};

//Result Display
function resultDisplay() {
    if (computerChoice.innerHTML == "Rock 🗿" && userChoiceDisplay.innerHTML == "paper" || computerChoice.innerHTML == "Paper 📄" && userChoiceDisplay.innerHTML == "scissors" || computerChoice.innerHTML == "Scissors ✂" && userChoiceDisplay.innerHTML == "rock") {
       return result.innerHTML = "YOU win 🤴";
    }else if (computerChoice.innerHTML == "Rock 🗿" && userChoiceDisplay.innerHTML == "scissors" || computerChoice.innerHTML == "Paper 📄" && userChoiceDisplay.innerHTML == "rock" || computerChoice.innerHTML == "Scissors ✂" && userChoiceDisplay.innerHTML == "paper") {
       return result.innerHTML = "COMPUTER wins 💻";
    }else {
        return result.innerHTML = "It's a DRAW 💥";
    };
};