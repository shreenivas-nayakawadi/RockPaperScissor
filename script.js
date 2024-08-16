let userScore = 0;
let compScore = 0;

let result = document.querySelector(".result");
const choices = document.querySelectorAll(".box");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const reset = document.querySelector(".reset");

const drawGame = () => {
  result.innerText = "Game Draw!";
  result.style.backgroundColor = "black";
};

const showWinner = (userWin, userChoice, compchoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    result.innerText = `You Won!. Your ${userChoice} Beats Computer's ${compchoice}`;
    result.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    result.innerText = `You lost!. Computer's ${compchoice} Beats Your ${userChoice}`;
    result.style.backgroundColor = "red";
  }
};

const genCompChoice = () => {
  let options = ["rock", "paper", "scissor"];
  let choice = Math.floor(Math.random() * 3);
  return options[choice];
};

const playGame = (userChoice) => {
  const compchoice = genCompChoice();
  if (userChoice === compchoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compchoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compchoice === "scissor" ? false : true;
    } else {
      userWin = compchoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compchoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const choiceId = choice.getAttribute("id");
    playGame(choiceId);
  });
});

reset.addEventListener("click", () => {
  userScore = 0;
  compScore = 0;
  compScorePara.innerText = compScore;
  userScorePara.innerText = userScore;
  result.innerText = "Your Turn";
  result.style.backgroundColor = "black";
});
