let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice")
const message = document.querySelector("#msg")

const userScorePara = document.querySelector("#user-score")
const computerScorePara = document.querySelector("#computer-score")

const genComChoice = () => {
    const options = ["rock", "paper", "scissors"]
    const randIdx = Math.floor(Math.random() * 3)
    return options[randIdx]
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore
        // console.log("you win");
        message.innerText = `you won! your ${userChoice} beats ${compChoice}`
        message.style.backgroundColor = "green"
    } else {
        computerScore++;
        computerScorePara.innerText = computerScore
        // console.log("you lose");
        message.innerText = `you lose! ${compChoice} beats your ${userChoice}`
        message.style.backgroundColor = "red"
    }
}

const drawGame = () => {
    // console.log("game is draw");
    message.innerText = "game is draw"
    message.style.backgroundColor = "black"
}

const playGame = (userChoice) => {

    // console.log("user choice = ", userChoice);
    const compChoice = genComChoice();
    // console.log("computer choice = ", compChoice);

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin, userChoice, compChoice)
    }
}

choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        // console.log('choice with clicked ' + userChoice);
        playGame(userChoice);
    })
})