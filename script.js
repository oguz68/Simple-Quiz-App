const questions = [
  {
      question: "What is the capital of France?",
      answers: ["Berlin", "Paris", "Rome", "Madrid"],
      correctAnswer: 2 // Index of the correct answer
  },
  {
      question: "Which is the largest planet in our solar system?",
      answers: ["Earth", "Jupiter", "Saturn", "Mars"],
      correctAnswer: 1
  },
  {
      question: "What is 2 + 2?",
      answers: ["3", "4", "5", "6"],
      correctAnswer: 1
  }
];

let currentQuestionIndex = 0;

function loadQuestion() {
  const question = questions[currentQuestionIndex];
  document.getElementById('question').textContent = question.question;
  const buttons = document.querySelectorAll('.answer-btn');
  buttons.forEach((button, index) => {
      button.textContent = question.answers[index];
  });

  // Hide result and next button until answer is selected
  document.getElementById('result-container').style.display = 'none';
}

function checkAnswer(selectedIndex) {
  const question = questions[currentQuestionIndex];
  const resultContainer = document.getElementById('result-container');
  const resultText = document.getElementById('result');
  
  if (selectedIndex === question.correctAnswer) {
      resultText.textContent = "Correct!";
      resultContainer.style.backgroundColor = "#2ecc71";
  } else {
      resultText.textContent = "Incorrect!";
      resultContainer.style.backgroundColor = "#e74c3c";
  }

  resultContainer.style.display = 'block';
  document.getElementById('next-btn').style.display = 'block';
}

function nextQuestion() {
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
      loadQuestion();
  } else {
      document.getElementById('quiz-container').innerHTML = "<h2>Quiz Complete!</h2>";
  }
}

// Initial question load
loadQuestion();
