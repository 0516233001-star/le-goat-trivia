console.log("script started");
// Variables to track the game
let currentScore = 0;
let currentQuestionIndex = 0;



// One sample sports question to start with
let currentQuestion = {
    question: "Which team won the Super Bowl in 2023?",
    answers: ["Kansas City Chiefs", "Philadelphia Eagles", "Buffalo Bills", "Cincinnati Bengals"],
    correctAnswer: 0  // Index 0 means first answer is correct
};

// Function to display the current question
function displayQuestion() {
    // Your turn: use document.getElementById to get the question text element
    
    // Set its innerText to currentQuestion.question
    let questionText = document.getElementById("question-text");
    questionText.innerText = currentQuestion.question;

}

// Function to check if answer is correct
function checkAnswer(selectedIndex) {
    // Your turn: write an if-else statement
    // If selectedIndex equals currentQuestion.correctAnswer, it's correct!
    // Use alert() to show "Correct!" or "Wrong!"
}

// Show first q
displayQuestion();