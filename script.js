// ================================
// Tofaa Quiz 🎮
// ================================

let currentQuestion = 0;
let score = 0;
let hearts = 3;
let combo = 0;
let maxCombo = 0;
let timeLeft = 15;
let timer;


// ================================
// زر ابدأ اللعب
// ================================

const startButton = document.querySelector(".start-btn");

if (startButton) {

    startButton.addEventListener("click", function () {

        window.location.href = "quiz.html";

    });

}


// ================================
// بدء اللعبة
// ================================

function startGame() {

    currentQuestion = 0;
    score = 0;
    hearts = 3;
    combo = 0;
    maxCombo = 0;

    showQuiz();
    showQuestion();

}


// ================================
// شاشة اللعبة
// ================================

function showQuiz() {

    document.querySelector("main").innerHTML = `

        <section class="quiz-container">

            <div class="quiz-top">

                <div>
                    ❤️ <span id="hearts">3</span>
                </div>

                <div>
                    ⭐ <span id="score">0</span>
                </div>

                <div>
                    🔥 Combo:
                    <span id="combo">0</span>
                </div>

                <div>
                    ⏱️ <span id="timer">15</span>
                </div>

            </div>

            <div class="quiz-card">

                <div class="question-number">

                    السؤال
                    <span id="current-number">1</span>
                    من
                    ${questions.length}

                </div>

                <h1 id="question">
                    السؤال هنا
                </h1>

                <div id="answers" class="answers"></div>

                <div id="message"></div>

                <button
                    id="next-button"
                    class="next-button"
                >
                    السؤال التالي ➡️
                </button>

            </div>

        </section>

    `;

    document
        .getElementById("next-button")
        .addEventListener("click", nextQuestion);

}


// ================================
// عرض السؤال
// ================================

function showQuestion() {

    clearInterval(timer);

    timeLeft = 15;

    const questionData = questions[currentQuestion];

    document.getElementById("timer").textContent = timeLeft;

    document.getElementById("question").textContent =
        questionData.question;

    document.getElementById("current-number").textContent =
        currentQuestion + 1;

    document.getElementById("hearts").textContent =
        hearts;

    document.getElementById("score").textContent =
        score;

    document.getElementById("combo").textContent =
        combo;

    const answersContainer =
        document.getElementById("answers");

    answersContainer.innerHTML = "";

    document.getElementById("message").textContent = "";

    document.getElementById("next-button").style.display =
        "none";


    // إنشاء الاختيارات

    questionData.answers.forEach(function (answer, index) {

        const button = document.createElement("button");

        button.className = "answer-button";

        button.textContent = answer;

        button.addEventListener("click", function () {

            checkAnswer(index, button);

        });

        answersContainer.appendChild(button);

    });


    startTimer();

}


// ================================
// المؤقت ⏱️
// ================================

function startTimer() {

    timer = setInterval(function () {

        timeLeft--;

        const timerElement =
            document.getElementById("timer");

        if (timerElement) {

            timerElement.textContent = timeLeft;

        }

        if (timeLeft <= 0) {

            clearInterval(timer);

            timeUp();

        }

    }, 1000);

}


// ================================
// انتهاء الوقت
// ================================

function timeUp() {

    const allButtons =
        document.querySelectorAll(".answer-button");

    allButtons.forEach(function (button) {

        button.disabled = true;

    });

    const questionData =
        questions[currentQuestion];

    allButtons[questionData.correct].style.background =
        "#22C55E";

    hearts--;

    combo = 0;

    document.getElementById("hearts").textContent =
        hearts;

    document.getElementById("combo").textContent =
        combo;

    document.getElementById("message").textContent =
        "⏰ انتهى الوقت!";

    document.getElementById("next-button").style.display =
        "block";

}


// ================================
// التحقق من الإجابة
// ================================

function checkAnswer(selectedAnswer, selectedButton) {

    clearInterval(timer);

    const questionData =
        questions[currentQuestion];

    const allButtons =
        document.querySelectorAll(".answer-button");


    // منع الضغط مرة ثانية

    allButtons.forEach(function (button) {

        button.disabled = true;

    });


    // إجابة صحيحة ✅

    if (selectedAnswer === questionData.correct) {

        combo++;

        if (combo > maxCombo) {

            maxCombo = combo;

        }

        let points = 100;

        points += combo * 25;

        points += timeLeft * 5;

        score += points;

        selectedButton.style.background =
            "#22C55E";

        selectedButton.style.color =
            "white";

        document.getElementById("message").textContent =
            `🎉 إجابة صحيحة! +${points} نقطة 🔥`;

    }


    // إجابة خاطئة ❌

    else {

        hearts--;

        combo = 0;

        selectedButton.style.background =
            "#EF4444";

        selectedButton.style.color =
            "white";

        allButtons[questionData.correct].style.background =
            "#22C55E";

        document.getElementById("message").textContent =
            "❌ إجابة خاطئة! الـ Combo رجع للصفر";

    }


    document.getElementById("hearts").textContent =
        hearts;

    document.getElementById("score").textContent =
        score;

    document.getElementById("combo").textContent =
        combo;

    document.getElementById("next-button").style.display =
        "block";

}


// ================================
// السؤال التالي
// ================================

function nextQuestion() {

    currentQuestion++;

    if (
        currentQuestion >= questions.length ||
        hearts <= 0
    ) {

        clearInterval(timer);

        showResult();

        return;

    }

    showQuestion();

}


// ================================
// النتيجة 🏆
// ================================

function showResult() {

    clearInterval(timer);

    document.querySelector("main").innerHTML = `

        <section class="result-container">

            <div class="result-card">

                <div class="result-icon">
                    🏆
                </div>

                <h1>
                    انتهى التحدي!
                </h1>

                <p>
                    نتيجتك النهائية
                </p>

                <div class="final-score">
                    ⭐ ${score}
                </div>

                <p>
                    🔥 أعلى Combo:
                    ${maxCombo}
                </p>

                <p>
                    أحسنت! استمر في اللعب 🚀
                </p>

                <button
                    id="restart-button"
                    class="start-btn"
                >
                    🔄 العب مرة أخرى
                </button>

                <button
                    id="home-button"
                    class="home-button"
                >
                    🏠 الرئيسية
                </button>

            </div>

        </section>

    `;


    document
        .getElementById("restart-button")
        .addEventListener("click", startGame);


    document
        .getElementById("home-button")
        .addEventListener("click", function () {

            window.location.href = "index.html";

        });

}


// ================================
// تشغيل اللعبة تلقائيًا في quiz.html
// ================================

if (
    window.location.pathname.endsWith("quiz.html")
) {

    startGame();

}