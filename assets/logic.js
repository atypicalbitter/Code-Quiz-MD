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
    },];

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
            document.getElementById("choices").innerHTML = "";}