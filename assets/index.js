const startBtn = document.getElementById("start");
const submitBtn = document.getElementById("submit");
startBtn.addEventListener("click", startQuiz);
submitBtn.addEventListener("click", submitScore);

function startQuiz() {
    document.getElementById("start-screen").classList.add("hide");
    document.getElementById("questions").classList.remove("hide");
    startQuizLogic();
}
