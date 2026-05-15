console.log("script started");
let questionTimer; 
 let score = 0;

// First, let's create some sample questions with typed answers
let questions = [
    {
        question: "What sport is played at Wimbledon?",
        correctAnswer: "tennis"
    },
    {
        question: "What was the biggest margin of victory ever in a Triple Crown race?",
        correctAnswer: "31 lenghts"
    },
    {
        question: "What sport does Lebron James play?",
        correctAnswer: "basketball"
    },
       { 
        question: "The first NHL All-Star game was held as a benefit for what injured star?",
        correctAnswer: "Ace Bailey"
    },
    { 
        question: "How many total minutes of action are there in an average baseball game?",
        correctAnswer: "18 minutes"
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
        correctAnswer: "los angeles rams"
    },
    {
        question: "A sporting event is held every year on Memorial Day. What is it?",
        correctAnswer: "Indianapolis 500"
    },
    {
        question: "What is the only team to win the World Series in their home stadium?",
        correctAnswer: "Houston Astros"
    },
    {
        question: "How many Nfl teames are there?",
        correctAnswer: "32"
    },
    {
        question: "What country has competed the most times in the Summer Olympics without winning a gold medal?",
        correctAnswer: "Philippines"
    },
    {
        question: "How many championships do the Celtics have?",
        correctAnswer: "18"
    },
    {
        question: "Which Olympic athlete has won the most gold medals?",
        correctAnswer: "Michael Phelps"
    },
    {
        question: "How many rings does Lebron James have?",
        correctAnswer: "4"
    },
    {
        question: "What year was the first modern Olympics held?",
        correctAnswer: "1896"
    },
    {
        question: " How old was Tiger Woods when he won the Masters?",
        correctAnswer: "21"
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
        correctAnswer: "los angeles kings"
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
        question: "Who was the first golfer to reach one million dollars in career earnings on the PGA Tour?",
        correctAnswer: "Arnold Palmer"
    },
     {
        question: "How many Olympic games were held in countries that no longer exist?",
        correctAnswer: "3"
    },

    {
        question: "What is Lebron James nickname?",
        correctAnswer: "King James"
    },
    {
        question: "How many minutes was the longest recorded point in the history of tennis?",
        correctAnswer: "29 minutes"
    },
    {
        question: "Which is the only team to play in every soccer World Cup tournament?",
        correctAnswer: "Brazil"
    }, 
    {
        question: "What is the only nfl team to go 18-0?",
        correctAnswer: "miami dolphines"
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

    startQuestionTimer();
}

function startQuestionTimer() {
    // Reset time for each question
    timeLeft = 15;
    
    // Update the timer display immediately
    updateTimerDisplay();
    
    // Clear any existing timer
    if (questionTimer) {
        clearInterval(questionTimer);
    }
    
    // Start the countdown
    questionTimer = setInterval(function() {
        timeLeft = timeLeft - 1;
        updateTimerDisplay();
        
        // Check if time is up
        if (timeLeft <= 0) {
            clearInterval(questionTimer);
            alert("Time's up! The correct answer was: " + questions[currentQuestionIndex].correctAnswer);
            nextQuestion();
        }
    }, 1000); // Run every 1 second
}

function updateTimerDisplay() {
    let timerElement = document.getElementById("timer");
    timerElement.innerText = "Time: " + timeLeft + " seconds";
}

function nextQuestion() {
    // Check if there are more questions
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex = currentQuestionIndex + 1;
        displayQuestion();
    }  else {
    alert("Quiz finished! You've completed all questions! Your score: " + score + " out of " + questions.length);
}
}


function checkAnswer() {
    clearInterval(questionTimer); // Stop the timer when answer is submitted
    
    let userAnswer = document.getElementById("answer-input").value;
    let correctAnswer = questions[currentQuestionIndex].correctAnswer;
    
    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        alert("Correct! Great job!");
        score = score +1;
        updateScoreDisplay();
    } else {
        alert("Wrong! The correct answer is: " + correctAnswer);
    }

    nextQuestion();

}

// Add event listener to the submit button
let submitButton = document.getElementById("submit-btn");
submitButton.addEventListener("click", checkAnswer);

function startGame() {
    alert("Game started!");
    // Hide the start screen
    let startScreen = document.getElementById("start-screen");
    
    // Show the game screen
    let gameScreen = document.getElementById("game-screen");
    
    displayQuestion();
}

let startButton = document.getElementById("start-btn");
startButton.addEventListener("click", startGame);

function updateScoreDisplay() {
    let scoreElement = document.getElementById("score");
    scoreElement.innerText = score;
}





