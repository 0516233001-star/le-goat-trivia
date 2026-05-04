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
    },
    {
        question: "What sport does Lebron James play?",
        correctAnswer: "basketball"
    },
       { 
        question: "How many people can a football team have on the field?",
        correctAnswer: "11"
    },
    { 
        question: "Who won the 2025 MLB world Championship?",
        correctAnswer: "dodgers"
    },
    {
        question: "What sport uses a puck?",
        correctAnswer: "hockey"
    },
    {
        question: "How much points is a Tochdown worth?",
        correctAnswer: "6"
    },
    {
        question: "What team won the Superbowl in 2022?",
        correctAnswer: "rams"
    },
    {
        question: "How many people can a soccer team have on the field?",
        correctAnswer: "11"
    },
    {
        question: "Who won the 2024 Nba Finals",
        correctAnswer: "celtics"
    },
    {
        question: "How many Nfl teames are there?",
        correctAnswer: "32"
    },
    {
        question: "How many Nba teams are there?",
        correctAnswer: "30"
    },
    {
        question: "How many championships do the Celtics have?",
        correctAnswer: "18"
    },
    {
        question: "How many rings does Stephen Curry have?",
        correctAnswer: "4"
    },
    {
        question: "How many rings does Lebron James have?",
        correctAnswer: "4"
    },
    {
        question: "What sport does Cristiano Ronaldo play?",
        correctAnswer: "Soccer"
    },
    {
        question: "Kobe Bryant played for what team",
        correctAnswer: " los angeles lakers"
    },
    {
        question: "Stephen Curry plays for what team?",
        correctAnswer: "golden state warriors"
    },
    {
        question: "Who is the only unanimous MVP in Nba history? ",
        correctAnswer: "Stephen Curry"
    },
    {
        question: "What was the second team Wayne Gretzky played for?",
        correctAnswer: "los angles kings"
    },
    {
        question: "What team does Paul Skenes play for?",
        correctAnswer: "Pittsburgh Pirates"
    },
    {
        question: "Who is the only person in Nba history to score 100 points?",
        correctAnswer: "wilt chamberlain"
    },
    {
        question: "How many teams did Wayne Gretzky play for?",
        correctAnswer: "4"
    },
    {
        question: "What player has the most rings in the Nba?",
        correctAnswer: "bill russell"
    },
     {
        question: "How many rings does Bill Russell have?",
        correctAnswer: "11"
    },
     {
        question: "What Nba player is nicknamed the Chef?",
        correctAnswer: "Stephen Curry"
    },

    {
        question: "What is Lebron James nickname?",
        correctAnswer: "King James"
    },
    {
        question: "What is Kobe Bryant's nickname?",
        correctAnswer: "the black mamba"
    },
    {
        question: "What center in Nba likes Horses?",
        correctAnswer: "Nikola Jokic"
    }, 
    {
        question: "What Nba player is know for there shoes brand Jordan?",
        correctAnswer: "Micheal Jordan"
    },
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

function nextQuestion() {
    // Check if there are more questions
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex = currentQuestionIndex + 1;
        displayQuestion();
    } else {
        alert("Quiz finished! You've completed all questions!");
    }
}



function checkAnswer() {
    let userAnswer = document.getElementById("answer-input").value;
    let correctAnswer = questions[currentQuestionIndex].correctAnswer;
    
    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        alert("Correct! Great job!");
    } else {
        alert("Wrong! The correct answer is: " + correctAnswer);
    }

    nextQuestion();

}

// Display the first question when page loads
displayQuestion();

// Add event listener to the submit button
let submitButton = document.getElementById("submit-btn");
submitButton.addEventListener("click", checkAnswer);

function startGame() {
    // Hide the start screen
    let startScreen = document.getElementById("start-screen");
    startScreen.style.display = "none";
    
    // Show the game screen
    let gameScreen = document.getElementById("game-screen");
    gameScreen.style.display = "block";
}
function startGame() {
    alert("Game started!");
}

let startButton = document.getElementById("start-btn");
startButton.addEventListener("click", startGame);
