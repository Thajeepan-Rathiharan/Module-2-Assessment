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

let currentQuestionIndex = 0;
let score = 0;
let timerMinutes = 0;
let timerSeconds = 0;
let timerInterval;

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

    questionText.innerHTML = "";
    answerButtons.innerHTML = "";

    incrementQuestionNumber();

    questionText.innerHTML = currentQuestion.question;

    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        button.classList.add("answer-button");
        answerButtons.appendChild(button);

        button.addEventListener("click", function () {
            checkAnswer(option);
        });
    });
}  