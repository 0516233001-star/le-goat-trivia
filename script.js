console.log("script started");

// First, let's create some sample questions with typed answers
let questions = [
    {
        question: "What sport is played at Wimbledon?",
        correctAnswer: "tennis"
    },
    {
        question: "How many players are on a basketball team on the court?",
        correctAnswer: "5"
    }
];

let currentQuestionIndex = 0;

// Function to display a question
function displayQuestion() {
    let questionElement = document.getElementById("question");
    questionElement.innerText = questions[currentQuestionIndex].question;
    
    // Clear the input field
    let answerInput = document.getElementById("answer-input");
    answerInput.value = "";
}
