const startBtn = document.getElementById("start");
const submitBtn = document.getElementById("submit");

startBtn.addEventListener("click", startQuiz);
submitBtn.addEventListener("click", submitScore);

function startQuiz() {
    document.getElementById("start-screen").classList.add("hide");
    document.getElementById("questions").classList.remove("hide");
    startQuizLogic();
  }

function submitScore() {
    submitScoreLogic();
}

function loadHighscores() {
    const highscoresList = document.getElementById("highscores");
    highscoresList.innerHTML = "";
    window.onload = function () {
    loadHighscores();
    };

    const scores = JSON.parse(localStorage.getItem("scores")) || [];

    scores.sort((a, b) => b.score - a.score);
    scores.forEach((score, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${index + 1}. ${score.initials} - ${score.score}`;
    highscoresList.appendChild(listItem);
    });
}

const clearBtn = document.getElementById("clear");
clearBtn.addEventListener("click", clearHighscores);

function clearHighscores() {
localStorage.removeItem("scores");
loadHighscores(); 
}
localStorage.clear()

function loadHighscores() {
    const highscoresList = document.getElementById("highscores");
    highscoresList.innerHTML = "";
    


    const scores = JSON.parse(localStorage.getItem("scores")) || [];


    scores.sort((a, b) => b.score - a.score);


    scores.forEach((score, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${index + 1}. ${score.initials} - ${score.score}`;
    highscoresList.appendChild(listItem);
    });
}

window.onload = function () {
    loadHighscores();
};

