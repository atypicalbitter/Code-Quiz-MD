
let quizData = [
    {
      question: "What is JavaScript?",
      choices: ["A programming language", "A coffee brand", "A car model", "An island"],
      correctAnswer: "A programming language",
    },
    {
      question: "What does HTML stand for?",
      choices: ["Hyper Text Markup Language", "High-level Text Machine Language", "Hyperlink and Text Markup Language", "Home Tool Markup Language"],
      correctAnswer: "Hyper Text Markup Language",
    },
    {
      question: "What is the capital of France?",
      choices: ["London", "Berlin", "Madrid", "Paris"],
      correctAnswer: "Paris",
    },
    {
      question: "Which programming language is known for building dynamic websites?",
      choices: ["Java", "Python", "Ruby", "JavaScript"],
      correctAnswer: "JavaScript",
    },
    {
      question: "What does CSS stand for?",
      choices: ["Counter Strike: Source", "Corrective Style Sheet", "Computer Style Sheet", "Cascading Style Sheet"],
      correctAnswer: "Cascading Style Sheet",
    },
  ];
  
  
  let currentQuestionIndex = 0;
  let timer;
  let timeLeft = 60;
  
  
  function startQuizLogic() {
    displayQuestion();
    startTimer();
  }
  
  
  function submitScoreLogic() {
    submitScore();
  }
  
  
  function displayQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
  
  
    document.getElementById("question-title").textContent = currentQuestion.question;
  
  
    document.getElementById("choices").innerHTML = "";
  
  
    currentQuestion.choices.forEach((choice, index) => {
      const choiceBtn = document.createElement("button");
      choiceBtn.textContent = choice;
      choiceBtn.addEventListener("click", () => checkAnswer(choice));
      document.getElementById("choices").appendChild(choiceBtn);
    });
  }
  
  
  function checkAnswer(selectedAnswer) {
    const currentQuestion = quizData[currentQuestionIndex];
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
  
    if (isCorrect) {
      alert("Correct!");
      currentQuestionIndex++;
    } else {
      alert("Incorrect!");
      timeLeft -= 10;
      if (timeLeft < 0) timeLeft = 0;
    }
  
  
  if (currentQuestionIndex === quizData.length || timeLeft <= 0) {
    endQuiz();
  } else {
  
    setTimeout(() => {
      displayQuestion();
    }, 1000);
  }
  }
  
  
  
  
  
  
  function endQuiz() {
  
    clearInterval(timer);
  
  
    document.getElementById("final-score").textContent = timeLeft;
  
  
    document.getElementById("end-screen").classList.remove("hide");
  }
  
  
  function startTimer() {
    timer = setInterval(function () {
      timeLeft--;
      document.getElementById("time").textContent = timeLeft;
  
  
      if (timeLeft <= 0) {
        endQuiz();
      }
    }, 1000);
  }
  
  
  function submitScoreLogic() {
  
    const initials = document.getElementById("initials").value;
  
  
    if (!initials) {
      alert("Please enter your initials before submitting.");
      return;
    }
  
  
    const scores = JSON.parse(localStorage.getItem("scores")) || [];
    scores.push({ initials, score: timeLeft });
    localStorage.setItem("scores", JSON.stringify(scores));
    window.location.href = "highscores.html";
  }
  
  
  
  