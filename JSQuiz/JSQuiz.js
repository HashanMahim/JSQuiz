const questions = [
    {
        question: "What is the capital of France?",
        answers: ["Berlin", "Madrid", "Paris", "Lisbon"],
        correct: 2
    },
    {
        question: "Which programming language is known as the language of the web?",
        answers: ["Python", "C++", "Java", "JavaScript"],
        correct: 3
    },
    {
        question: "What is 2 + 2?",
        answers: ["3", "4", "5", "6"],
        correct: 1
    },
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const questionElement = document.getElementById("question");
    const answerButtons = document.querySelectorAll(".answer");
    const currentQuestion = questions[currentQuestionIndex];

    questionElement.textContent = currentQuestion.question;
    answerButtons.forEach((button, index) => {
        button.textContent = currentQuestion.answers[index];
        button.classList.remove("correct", "wrong");
        button.disabled = false;
    });
}

function selectAnswer(answerIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    const answerButtons = document.querySelectorAll(".answer");

    answerButtons.forEach((button, index) => {
        button.disabled = true;
        if (index === currentQuestion.correct) {
            button.classList.add("correct");
        } else if (index === answerIndex) {
            button.classList.add("wrong");
        }
    });

    if (answerIndex === currentQuestion.correct) {
        score++;
    }

    document.getElementById("next-button").disabled = false;
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
        document.getElementById("next-button").disabled = true;
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById("quiz").classList.add("hidden");
    document.getElementById("result").classList.remove("hidden");
    document.getElementById("score").textContent = `You scored ${score} out of ${questions.length}`;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById("result").classList.add("hidden");
    document.getElementById("quiz").classList.remove("hidden");
    loadQuestion();
    document.getElementById("next-button").disabled = true;
}

// Initialize the quiz
loadQuestion();
