// Questions for the quiz are stored in the lines of code shown below.
// Here are the array of quiz questions that will appear on the page once the previous one has been answered. 
// A new question will appear on the page for the user(s) no matter if the answer the they chose is correct or incorrect.
const quizQuestions = [
    {
        question: "Who is the main character in the show 'Naruto Shippuden'?",
        options: ["Naruto Uzumaki", "Sasuke Uchiha", "Minato Namikaze", "Boruto Uzumaki"],
        correctAnswer: "Naruto Uzumaki"
    },
    {
        question: "Who is Naruto's best friend?",
        options: ["Shikamaru Nara", "Killer Bee", "Nagato Uzumaki", "Sasuke Uchiha"],
        correctAnswer: "Sasuke Uchiha"
    },
    {
        question: "What is Naruto's catchphrase?",
        options: ["What a drag", "Believe it!", "Rasengan", "SASUKE!!"],
        correctAnswer: "Believe it!"
    },
    {
        question: "Who did Naruto train with for 3 years at the end of the 'Naruto' series?",
        options: ["Yamato", "Jiraiya The Gallant", "Kakashi Hatake", "Sasuke Uchiha"],
        correctAnswer: "Jiraiya The Gallant"
    },
    {
        question: "What is the name of the 'monster' that resides inside Naruto?",
        options: ["Kurama", "Nine Tailed Fox", "Akatsuki", "Susanoo"],
        correctAnswer: "Kurama"
    },
    {
        question: "What is the name Naruto's special move he learns from Jiraiya?",
        options: ["Summoning Jutsu", "Rasengan", "Shadow Clone Jutsu", "Substitution Jutsu"],
        correctAnswer: "Rasengan"
    },
    {
        question: "What war takes place in 'Naruto Shippuden' ?",
        options: ["First Great Ninja War", "Second Great Ninja War", "Third Great Ninja War", "Fourth Great Ninja War"],
        correctAnswer: "Fourth Great Ninja War"
    },
    {
        question: "Who were the first main antagonists Naruto came across?",
        options: ["Kabuto", "Orochimaru", "Zabuza and Haku", "Gaara"],
        correctAnswer: "Zabuza and Haku"
    },
    {
        question: "Who is the person who grants Naruto and Sasuke the Sage of Six Paths powers?",
        options: ["Sage of Six Paths Hagoromo", "Orochimaru", "Jiraiya the Gallant", "Kaguya Otsuski"],
        correctAnswer: "Sage of Six Paths Hagoromo"
    },
    {
        question: "Who is the brother of Hagaromo Otsuski?",
        options: ["Hamura Otsuski", "Ashura Otsuski", "Indra Otsuski", "Toneri Otsuski"],
        correctAnswer: "Hamura Otsuski"
    },
    {
        question: " Who is the leader of Team 7?",
        options: ["Baki", "Asuma Sarutobi", "Kakashi Hatake", "Yamato"],
        correctAnswer: "Kakashi Hatake"
    },
    {
        question: "What technique does Sasuke mention that Naruto uses showing his loneliness?",
        options: ["Shadow Clone Jutsu", "Rasengan", "Reverse Harem Jutsu", "Summoning Jutsu"],
        correctAnswer: "Shadow Clone Jutsu"
    },
    {
        question: "Who marries Naruto at the end of the series?",
        options: ["Sakura Haruno", "Shizune", "Karin Uzumaki", "Hinata Hyuuga"],
        correctAnswer: "Hinata Hyuuga"
    },
    {
        question: "Who is the creator of 'Naruto'?",
        options: ["Oda Eichiro", "Tite Kubo", "Akira Toriyama", "Masashi Kishimoto"],
        correctAnswer: "Masashi Kishimoto"
    },
    {
        question: "What Hokage does Naruto end up becoming in the end?",
        options: ["Fourth Hokage", "Sixth Hokage", "Seventh Hokage", "Eighth Hokage"],
        correctAnswer: "Seventh Hokage"
    }
];
// All 15 questions are about the show 'Naruto Shippuden' and were made using knowledge from watching the show.
// Each question is an object with properties for the question in the forms of text, answer options and the correct answer.

let currentQuestionIndex = 0;
let score = 0;
let timerMinutes = 0;
let timerSeconds = 0;
let timerInterval;
// Global variables are used to track the quiz state.
// These global variables contain the current question, the users score, minutes on the timer and the second on the timer as well as the time interval delay between showing each question. 

function startQuiz() {
    document.getElementById("timer-container").style.display = "block";
    document.getElementById("question-number").style.display = "block";
    document.getElementById("start-button").style.display = "none";
    document.getElementById("how-to-play-button").style.display = "none";
    document.getElementById("quiz-heading").style.display = "none";
    document.getElementById("quiz-content").style.display = "none";
    displayQuestion();
    startTimer();
}
// When the user(s) click on the 'start quiz' button, 'function startQuiz()' will be called to start the quiz.
// When 'function startQuiz() is called, it hides the start button and other content on the main quiz page and displays first question.
// After the other content disappear, the question and timer starts to be displayed once the quiz starts. 

function openPopup() {
    document.getElementById('popupContainer').style.display = 'block';
}

  
function closePopup() {
    document.getElementById('popupContainer').style.display = 'none';
}

function displayQuestion() {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    const questionText = document.getElementById("question-text");
    const answerButtons = document.getElementById("answer-buttons");
// 'function displayQuestion() is called to display the current question.
//  The function clears the previous question and answer options, adds a question number to the current question number (for example goes from question 1 to question 2 by adding 1), and displays a new current question and answer options.     

    questionText.innerHTML = "";
    answerButtons.innerHTML = "";
 //Clears previous question and answer options. 

    incrementQuestionNumber();
 // Increments the question number. 
 // Increments is another way of saying increasing/ adding on. In this case question 1 has 1 added to it, making it then show question 2 when question 1 is answered.

    questionText.innerHTML = currentQuestion.question;
// The line displays the current question.

    currentQuestion.options.forEach(option => {
// Create answer buttons for each option.
        const button = document.createElement("button");
        button.innerText = option;
        button.classList.add("answer-button");
        answerButtons.appendChild(button);

        button.addEventListener("click", function () {
// Added click event listener to check the answer when an answer is clicked on.
            checkAnswer(option);
        });
    });
}  

function incrementQuestionNumber() {
    const currentQuestionNumber = document.getElementById("current-question");
    currentQuestionNumber.textContent = currentQuestionIndex + 1; 
// In the line above, 1 is added to display the current question index.

    const totalQuestions = document.getElementById("total-questions");
    totalQuestions.textContent = quizQuestions.length; 
// Set the total number of questions in the quiz.
}
// The function above is to increment the question number. It updates the displayed current question and shows total number of questions.

//Function for checking the selected answer to see if it is correct or incorrect. 
function checkAnswer(selectedOption) {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    const answerButtons = document.getElementById("answer-buttons");
    const buttons = answerButtons.querySelectorAll("button");

// The function below is to check correct and wrong answers and display both with respective background colors.
// 'green' for the correct answer and 'red' is for the incorrect answer.
// Both buttons will be highlighted at the same time.    
    buttons.forEach(button => {
        button.disabled = true;
 
        if (button.innerText === currentQuestion.correctAnswer) {
            button.style.backgroundColor = "green";
// If the answer is correct the buttons background colour will change to green.            

        } else if (button.innerText === selectedOption) {
            button.style.backgroundColor = "red";
// If the answer the user(s) chose in incorrect, the buttons backgrund colour will change to red. 
        }
    });

    if (selectedOption === currentQuestion.correctAnswer) {
        score++;
    }
// The function above is to check if the selected answer is correct, and if it is, it adds points to the score in the end.

// The function below is used to move on to the next question, or the end of the quiz if all quiz questions are answered.
    currentQuestionIndex++;

    if (currentQuestionIndex < quizQuestions.length) {
        setTimeout(() => {
            displayQuestion();
        }, 1500);
// When a question is answered, there is a delay for a moment to check if there are more questions to be displayed, and if there is, the user is moved on to the next question.        

    } else {
        setTimeout(() => {
            endQuiz();
        }, 1500);
// Here when a question is answered, there is a delay for a moment to check if there are more questions to be displayed, and if there is no more, the user is moved to final score page.
    }
}

// Below is the function to start the timer when the quiz is started and the timer updates every second.
function startTimer() {
    timerInterval = setInterval(function () {
        if (timerSeconds === 59) {
// If the seconds reach 59 seconds, increment minutes and reset seconds to 0.

            timerMinutes++;
            timerSeconds = 0;
        } else {
// Increment seconds.
            timerSeconds++;
        }

// Format for the timer displayed to the user(s).         
        const formattedMinutes = timerMinutes < 10 ? `0${timerMinutes}` : timerMinutes;
        const formattedSeconds = timerSeconds < 10 ? `0${timerSeconds}` : timerSeconds;
        document.getElementById("timer").textContent = `${formattedMinutes}:${formattedSeconds}`;
    }, 1000);
}

// Below is the function to end the quiz game.
function endQuiz() {
// Stops the timer. 
    clearInterval(timerInterval);
    document.getElementById("timer-container").style.display = "none";

// Calculates the score percentage.
    const scorePercentage = Math.round((score / quizQuestions.length) * 100);

// Displays the users final score.
    const questionContainer = document.getElementById("question-container");
    questionContainer.innerHTML = `
    <h2>Quiz Completed</h2>
    <p>Congratulations! You answered ${score} out of ${quizQuestions.length} questions correctly
     in ${timerMinutes} mins : ${timerSeconds} secs</p>
    <p>Your score percentage is ${scorePercentage}%</p>
    `;

// Show the 'retry button' button.     
document.getElementById("retry-button").style.display = "block";
}

// Function to retry the quiz by reloading the page to the start of the quiz (home page with the 'start quiz' button).
function retryQuiz() {
    window.location.reload();
}

// Add event listener for the "DOMContentLoaded" event.
addEventListener("DOMContentLoaded", (event) => {

// Initially the timer, question-number and retry-button container are set to not to show up on main quiz page, in other words they are hidden on the main quiz page. 
    document.getElementById("timer-container").style.display = "none";
    document.getElementById("question-number").style.display = "none";
    document.getElementById("retry-button").style.display = "none";
// 'display' being set to none makes the timer-container, question number and retry button invisible on the home page.

// Added an event listener to start the quiz when the start button is clicked using the 'startQuiz' function.
    document.getElementById("start-button").addEventListener("click", startQuiz);

// Added an event listener to the 'restart quiz' button so the retryQuiz function is activated.     
    document.getElementById("retry-button").addEventListener("click", retryQuiz);
});