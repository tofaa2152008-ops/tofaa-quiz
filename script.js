// ======================================================
// 🎮 TOFAA QUIZ - SCRIPT.JS
// ======================================================

// ======================================================
// المتغيرات الأساسية
// ======================================================

let currentQuestion = 0;
let score = 0;
let combo = 0;
let maxCombo = 0;
let hearts = 3;
let timer = null;

let selectedCategory = "general";
let gameQuestions = [];

let scoreSaved = false;

// ======================================================
// 🎮 أوضاع اللعب
// ======================================================

let gameMode = "normal";

const QUICK_QUESTION_COUNT = 10;
const HARD_QUESTION_COUNT = 15;
const MIXED_QUESTION_COUNT = 20;
const VIP_QUESTION_COUNT = 20;

const NORMAL_TIME = 15;
const QUICK_TIME = 8;
const HARD_TIME = 12;
const MIXED_TIME = 15;
const VIP_TIME = 15;

// ======================================================
// 🪙 نظام العملات
// ======================================================

const CORRECT_ANSWER_COINS = 2;
const VIP_CORRECT_ANSWER_COINS = 4;

const QUIZ_COMPLETE_COINS = 10;
const VIP_QUIZ_COMPLETE_COINS = 20;

// ======================================================
// 💎 VIP
// ======================================================

let hasVIP = false;

// ======================================================
// XP
// ======================================================

let earnedXP = 0;

// ======================================================
// 🎯 Daily Challenge
// ======================================================

let isDailyChallenge = false;
let dailyCorrect = 0;

const DAILY_TARGET = 5;
const DAILY_QUESTION_COUNT = 20;

const DAILY_REWARD_SCORE = 500;
const DAILY_REWARD_XP = 200;

// ======================================================
// عناصر الصفحة
// ======================================================

const questionElement =
    document.getElementById("question") ||
    document.querySelector(".question");

const answersElement =
    document.getElementById("answers") ||
    document.querySelector(".answers");

const scoreElement =
    document.getElementById("score") ||
    document.querySelector(".score");

const comboElement =
    document.getElementById("combo") ||
    document.querySelector(".combo");

const heartsElement =
    document.getElementById("hearts") ||
    document.querySelector(".hearts");

const timerElement =
    document.getElementById("timer") ||
    document.querySelector(".timer");

const progressElement =
    document.getElementById("progress") ||
    document.querySelector(".progress");

const dailyCard =
    document.getElementById("daily-card");

const dailyProgressText =
    document.getElementById("daily-progress-text");

const dailyProgressBar =
    document.getElementById("daily-progress-bar");

const dailyStatus =
    document.getElementById("daily-status");

const dailyStreak =
    document.getElementById("daily-streak");

const dailyPlayButton =
    document.getElementById("daily-play-btn");

// ======================================================
// URL
// ======================================================

const urlParams =
    new URLSearchParams(
        window.location.search
    );

selectedCategory =
    urlParams.get("category") || "general";

isDailyChallenge =
    urlParams.get("daily") === "true";

// ======================================================
// 🎮 تحديد وضع اللعب
// ======================================================

gameMode =
    urlParams.get("mode") || "normal";

console.log(
    "🎮 وضع اللعب:",
    gameMode
);

// ======================================================
// 🔔 Toast Notifications
// ======================================================

function showToast(
    message,
    type = "success",
    duration = 1800
) {

    let container =
        document.getElementById(
            "tofaa-toast-container"
        );

    if (!container) {

        container =
            document.createElement(
                "div"
            );

        container.id =
            "tofaa-toast-container";

        document.body.appendChild(
            container
        );

    }

    const toast =
        document.createElement(
            "div"
        );

    toast.className =
        `tofaa-toast ${type}`;

    toast.textContent =
        message;

    container.appendChild(
        toast
    );

    setTimeout(
        () => {

            toast.classList.add(
                "hide"
            );

            setTimeout(
                () => {

                    toast.remove();

                },
                300
            );

        },
        duration
    );

}

// ======================================================
// 🪙 حركة العملات
// ======================================================

function showCoinPop(
    amount
) {

    const coin =
        document.createElement(
            "div"
        );

    coin.className =
        "coin-pop";

    coin.textContent =
        `+${amount} 🪙`;

    coin.style.left =
        "50%";

    coin.style.top =
        "42%";

    document.body.appendChild(
        coin
    );

    setTimeout(
        () => {

            coin.remove();

        },
        900
    );

}

// ======================================================
// 🔥 حركة Combo
// ======================================================

function showComboPop(
    currentCombo
) {

    if (
        currentCombo < 2
    ) {

        return;

    }

    const comboElement =
        document.getElementById(
            "combo"
        );

    if (!comboElement) {

        return;

    }

    comboElement.classList.remove(
        "combo-pop"
    );

    void comboElement.offsetWidth;

    comboElement.classList.add(
        "combo-pop"
    );

}

// ======================================================
// 🔥 إشعار الـ Combo
// ======================================================

function showComboToast(
    currentCombo
) {

    if (
        currentCombo === 3 ||
        currentCombo === 5 ||
        currentCombo === 10
    ) {

        showToast(
            `🔥 Combo ×${currentCombo} — +50 نقطة!`,
            "success",
            2000
        );

    }

}

// ======================================================
// 🔐 حماية صفحة الكويز
// ======================================================

document.addEventListener(
    "DOMContentLoaded",
    async () => {

        console.log(
            "🎮 ToFaa Quiz بدأ"
        );

        console.log(
            "📂 القسم:",
            selectedCategory
        );

        console.log(
            "🎯 Daily Challenge:",
            isDailyChallenge
        );

        console.log(
            "🎮 Game Mode:",
            gameMode
        );

        // ==================================================
        // التأكد من Firebase
        // ==================================================

        if (
            typeof firebase === "undefined"
        ) {

            console.error(
                "❌ Firebase غير موجود"
            );

            showToast(
                "حدث خطأ في Firebase ❌",
                "error",
                3000
            );

            return;
        }

        // ==================================================
        // 🔐 التأكد من تسجيل الدخول
        // ==================================================

        const user =
            await getCurrentUser();

        if (!user) {

            alert(
                "🔐 لازم تسجل دخول الأول علشان تبدأ اللعب."
            );

            const returnUrl =
                window.location.pathname +
                window.location.search;

            window.location.href =
                `login.html?returnUrl=${encodeURIComponent(returnUrl)}`;

            return;
        }

        console.log(
            "👤 المستخدم:",
            user.displayName ||
            user.email
        );

        // ==================================================
        // 💎 تحميل حالة VIP
        // ==================================================

        await loadVIPStatus();

        // ==================================================
        // 💎 منع دخول VIP
        // ==================================================

        if (
            gameMode === "vip" &&
            !hasVIP
        ) {

            alert(
                "💎 وضع VIP متاح لأعضاء VIP فقط."
            );

            window.location.href =
                "store.html";

            return;
        }

        // ==================================================
        // التأكد من وجود الأسئلة
        // ==================================================

        if (
            typeof questions === "undefined" ||
            !Array.isArray(questions)
        ) {

            console.error(
                "❌ لم يتم العثور على questions"
            );

            if (questionElement) {

                questionElement.textContent =
                    "حدث خطأ في تحميل الأسئلة";

            }

            showToast(
                "حدث خطأ في تحميل الأسئلة ❌",
                "error",
                3000
            );

            return;
        }

        // ==================================================
        // تحميل حالة Daily
        // ==================================================

        await loadDailyState();

        // ==================================================
        // Daily Challenge
        // ==================================================

        if (isDailyChallenge) {

            if (dailyCard) {

                dailyCard.style.display =
                    "none";

            }

            const today =
                getEgyptDate();

            try {

                const dailyDoc =
                    await db
                        .collection(
                            "dailyChallenges"
                        )
                        .doc(
                            user.uid
                        )
                        .get();

                if (
                    dailyDoc.exists &&
                    dailyDoc.data()
                        .completedDate ===
                    today
                ) {

                    alert(
                        "🎉 أنت خلصت التحدي اليومي النهارده بالفعل!"
                    );

                    window.location.href =
                        "index.html";

                    return;
                }

            }

            catch (error) {

                console.error(
                    "❌ خطأ في فحص Daily:",
                    error
                );

            }

        }

        // ==================================================
        // 🎮 اختيار الأسئلة
        // ==================================================

        if (isDailyChallenge) {

            gameQuestions =
                [...questions];

        }

        else if (
            gameMode === "quick"
        ) {

            gameQuestions =
                [...questions];

        }

        else if (
            gameMode === "mixed"
        ) {

            gameQuestions =
                [...questions];

        }

        else if (
            gameMode === "hard"
        ) {

            gameQuestions =
                questions.filter(
                    question =>
                        question.difficulty ===
                        "hard"
                );

            if (
                gameQuestions.length === 0
            ) {

                console.warn(
                    "⚠️ لا توجد أسئلة Hard، سيتم استخدام أسئلة القسم."
                );

                gameQuestions =
                    questions.filter(
                        question =>
                            question.category ===
                            selectedCategory
                    );

            }

        }

        else if (
            gameMode === "vip"
        ) {

            gameQuestions =
                [...questions];

        }

        else {

            gameQuestions =
                questions.filter(
                    question =>
                        question.category ===
                        selectedCategory
                );

        }

        // ==================================================
        // لو مفيش أسئلة
        // ==================================================

        if (
            gameQuestions.length === 0
        ) {

            console.warn(
                "⚠️ لا توجد أسئلة للقسم:",
                selectedCategory
            );

            gameQuestions =
                [...questions];

        }

        // ==================================================
        // خلط الأسئلة
        // ==================================================

        gameQuestions.sort(
            () =>
                Math.random() - 0.5
        );

        // ==================================================
        // 🎮 تحديد عدد الأسئلة
        // ==================================================

        if (isDailyChallenge) {

            gameQuestions =
                gameQuestions.slice(
                    0,
                    Math.min(
                        DAILY_QUESTION_COUNT,
                        gameQuestions.length
                    )
                );

        }

        else if (
            gameMode === "quick"
        ) {

            gameQuestions =
                gameQuestions.slice(
                    0,
                    Math.min(
                        QUICK_QUESTION_COUNT,
                        gameQuestions.length
                    )
                );

        }

        else if (
            gameMode === "hard"
        ) {

            gameQuestions =
                gameQuestions.slice(
                    0,
                    Math.min(
                        HARD_QUESTION_COUNT,
                        gameQuestions.length
                    )
                );

        }

        else if (
            gameMode === "mixed"
        ) {

            gameQuestions =
                gameQuestions.slice(
                    0,
                    Math.min(
                        MIXED_QUESTION_COUNT,
                        gameQuestions.length
                    )
                );

        }

        else if (
            gameMode === "vip"
        ) {

            gameQuestions =
                gameQuestions.slice(
                    0,
                    Math.min(
                        VIP_QUESTION_COUNT,
                        gameQuestions.length
                    )
                );

        }

        // ==================================================
        // Console
        // ==================================================

        console.log(
            "🎮 الوضع:",
            gameMode
        );

        console.log(
            "✅ عدد الأسئلة:",
            gameQuestions.length
        );

        console.log(
            "💎 VIP:",
            hasVIP
                ? "نعم"
                : "لا"
        );

        // ==================================================
        // بدء اللعبة
        // ==================================================

        showQuestion();

    }
);

// ======================================================
// 🇪🇬 تاريخ مصر
// ======================================================

function getEgyptDate() {

    return new Intl.DateTimeFormat(
        "en-CA",
        {
            timeZone: "Africa/Cairo",
            year: "numeric",
            month: "2-digit",
            day: "2-digit"
        }
    ).format(
        new Date()
    );

}

// ======================================================
// حساب أمس
// ======================================================

function getYesterday(
    dateString
) {

    const date =
        new Date(
            dateString +
            "T00:00:00Z"
        );

    date.setUTCDate(
        date.getUTCDate() - 1
    );

    return date
        .toISOString()
        .slice(
            0,
            10
        );

}

// ======================================================
// 💎 تحميل حالة VIP
// ======================================================

async function loadVIPStatus() {

    try {

        const user =
            await getCurrentUser();

        if (!user) {

            hasVIP =
                false;

            return;

        }

        const vipDoc =
            await db
                .collection(
                    "users"
                )
                .doc(
                    user.uid
                )
                .collection(
                    "purchases"
                )
                .doc(
                    "vip"
                )
                .get();

        hasVIP =
            vipDoc.exists;

        console.log(
            "💎 حالة VIP:",
            hasVIP
        );

    }

    catch (error) {

        console.error(
            "❌ خطأ في تحميل حالة VIP:",
            error
        );

        hasVIP =
            false;

    }

}

// ======================================================
// تحميل حالة Daily
// ======================================================

async function loadDailyState() {

    try {

        const user =
            firebase.auth().currentUser;

        if (!user) {

            return;

        }

        const today =
            getEgyptDate();

        const doc =
            await db
                .collection(
                    "dailyChallenges"
                )
                .doc(
                    user.uid
                )
                .get();

        if (!doc.exists) {

            updateDailyUI(
                0,
                0,
                false
            );

            return;

        }

        const data =
            doc.data();

        const completedToday =
            data.completedDate ===
            today;

        const streak =
            Number(
                data.streak
            ) || 0;

        const progress =
            data.progressDate === today
                ? Math.min(
                    Number(
                        data.progress
                    ) || 0,
                    DAILY_TARGET
                )
                : 0;

        dailyCorrect =
            completedToday
                ? DAILY_TARGET
                : progress;

        updateDailyUI(
            completedToday
                ? DAILY_TARGET
                : progress,
            streak,
            completedToday
        );

        console.log(
            "🎯 Daily State:",
            dailyCorrect,
            "/",
            DAILY_TARGET
        );

    }

    catch (error) {

        console.error(
            "❌ خطأ في تحميل Daily Challenge:",
            error
        );

    }

}

// ======================================================
// تحديث Daily UI
// ======================================================

function updateDailyUI(
    progress,
    streak,
    completed
) {

    if (dailyProgressText) {

        dailyProgressText.textContent =
            `${progress} / ${DAILY_TARGET}`;

    }

    if (dailyProgressBar) {

        const percent =
            Math.min(
                100,
                (
                    progress /
                    DAILY_TARGET
                ) * 100
            );

        dailyProgressBar.style.width =
            `${percent}%`;

    }

    if (dailyStreak) {

        dailyStreak.textContent =
            `🔥 Streak: ${streak}`;

    }

    if (dailyStatus) {

        if (completed) {

            dailyStatus.textContent =
                "✅ خلصت تحدي النهارده وأخدت المكافأة!";

        }

        else {

            dailyStatus.textContent =
                "🎯 جاهز؟ أجب عن 5 أسئلة صحيحة متتالية.";

        }

    }

    if (dailyPlayButton) {

        if (completed) {

            dailyPlayButton.textContent =
                "✅ التحدي مكتمل اليوم";

            dailyPlayButton.disabled =
                true;

            dailyPlayButton.style.opacity =
                "0.5";

            dailyPlayButton.style.cursor =
                "default";

            if (dailyCard) {

                dailyCard.classList.add(
                    "daily-completed"
                );

            }

        }

        else {

            dailyPlayButton.textContent =
                "🎯 ابدأ التحدي اليومي";

            dailyPlayButton.disabled =
                false;

            dailyPlayButton.style.opacity =
                "1";

            dailyPlayButton.style.cursor =
                "pointer";

            if (dailyCard) {

                dailyCard.classList.remove(
                    "daily-completed"
                );

            }

        }

    }

}

// ======================================================
// بدء Daily Challenge
// ======================================================

async function startDailyChallenge() {

    try {

        const user =
            await getCurrentUser();

        if (!user) {

            window.location.href =
                "login.html?returnUrl=quiz.html%3Fdaily%3Dtrue";

            return;

        }

        const today =
            getEgyptDate();

        const doc =
            await db
                .collection(
                    "dailyChallenges"
                )
                .doc(
                    user.uid
                )
                .get();

        if (
            doc.exists &&
            doc.data()
                .completedDate ===
            today
        ) {

            alert(
                "🎉 أنت خلصت التحدي اليومي النهارده بالفعل!"
            );

            return;

        }

        window.location.href =
            "quiz.html?daily=true";

    }

    catch (error) {

        console.error(
            "❌ خطأ في بدء Daily Challenge:",
            error
        );

    }

}

// ======================================================
// عرض السؤال
// ======================================================

function showQuestion() {

    clearInterval(timer);

    if (
        currentQuestion >=
        gameQuestions.length
    ) {

        showResult();

        return;

    }

    const questionData =
        gameQuestions[
            currentQuestion
        ];

    console.log(
        "🧠 السؤال:",
        questionData.question
    );

    if (questionElement) {

        questionElement.textContent =
            questionData.question;

    }

    if (answersElement) {

        answersElement.innerHTML =
            "";

    }

    const questionNumber =
        document.getElementById(
            "question-number"
        );

    if (questionNumber) {

        if (isDailyChallenge) {

            questionNumber.textContent =
                `🎯 التحدي اليومي - ${dailyCorrect} / ${DAILY_TARGET} صح متتالية`;

        }

        else if (
            gameMode === "quick"
        ) {

            questionNumber.textContent =
                `⚡ الوضع السريع - السؤال ${currentQuestion + 1} / ${gameQuestions.length}`;

        }

        else if (
            gameMode === "hard"
        ) {

            questionNumber.textContent =
                `🔥 الوضع الصعب - السؤال ${currentQuestion + 1} / ${gameQuestions.length}`;

        }

        else if (
            gameMode === "mixed"
        ) {

            questionNumber.textContent =
                `🔀 الوضع المختلط - السؤال ${currentQuestion + 1} / ${gameQuestions.length}`;

        }

        else if (
            gameMode === "vip"
        ) {

            questionNumber.textContent =
                `💎 وضع VIP - السؤال ${currentQuestion + 1} / ${gameQuestions.length}`;

        }

        else {

            questionNumber.textContent =
                `السؤال ${currentQuestion + 1} / ${gameQuestions.length}`;

        }

    }

    // ==================================================
    // خلط الإجابات
    // ==================================================

    const shuffledAnswers =
        questionData.answers
            .map(
                (
                    answer,
                    index
                ) => ({

                    answer:
                        answer,

                    index:
                        index

                })
            )
            .sort(
                () =>
                    Math.random() - 0.5
            );

    shuffledAnswers.forEach(
        item => {

            const button =
                document.createElement(
                    "button"
                );

            button.className =
                "answer-btn";

            button.textContent =
                item.answer;

            button.addEventListener(
                "click",
                () => {

                    checkAnswer(
                        button,
                        item.index,
                        questionData.correct
                    );

                }
            );

            if (answersElement) {

                answersElement.appendChild(
                    button
                );

            }

        }
    );

    updateUI();

    startTimer();

}

// ======================================================
// المؤقت
// ======================================================

function startTimer() {

    let timeLeft =
        NORMAL_TIME;

    if (
        isDailyChallenge
    ) {

        timeLeft =
            NORMAL_TIME;

    }

    else if (
        gameMode === "quick"
    ) {

        timeLeft =
            QUICK_TIME;

    }

    else if (
        gameMode === "hard"
    ) {

        timeLeft =
            HARD_TIME;

    }

    else if (
        gameMode === "mixed"
    ) {

        timeLeft =
            MIXED_TIME;

    }

    else if (
        gameMode === "vip"
    ) {

        timeLeft =
            VIP_TIME;

    }

    if (timerElement) {

        timerElement.textContent =
            timeLeft;

        timerElement.classList.remove(
            "timer-warning"
        );

    }

    timer =
        setInterval(
            () => {

                timeLeft--;

                if (timerElement) {

                    timerElement.textContent =
                        timeLeft;

                    if (
                        timeLeft <= 5
                    ) {

                        timerElement.classList.add(
                            "timer-warning"
                        );

                    }

                }

                if (
                    timeLeft <= 0
                ) {

                    clearInterval(
                        timer
                    );

                    const currentData =
                        gameQuestions[
                            currentQuestion
                        ];

                    showToast(
                        "⏰ الوقت خلص!",
                        "error",
                        1200
                    );

                    handleWrongAnswer(
                        currentData,
                        null
                    );

                }

            },
            1000
        );

}

// ======================================================
// فحص الإجابة
// ======================================================

async function checkAnswer(
    button,
    selectedIndex,
    correctIndex
) {

    clearInterval(timer);

    const answerButtons =
        document.querySelectorAll(
            ".answer-btn"
        );

    answerButtons.forEach(
        btn => {

            btn.disabled =
                true;

        }
    );

    // ==================================================
    // صح
    // ==================================================

    if (
        selectedIndex ===
        correctIndex
    ) {

        button.classList.add(
            "correct"
        );

        score += 100;

        // ==================================================
        // 🪙 مكافأة الإجابة
        // ==================================================

        const answerCoins =
            hasVIP
                ? VIP_CORRECT_ANSWER_COINS
                : CORRECT_ANSWER_COINS;

        const coinsAdded =
            await addCoins(
                answerCoins
            );

        if (coinsAdded) {

            showCoinPop(
                answerCoins
            );

            showToast(
                `إجابة صحيحة! +${answerCoins} 🪙`,
                hasVIP
                    ? "vip"
                    : "success",
                1500
            );

        }

        // ==================================================
        // 🔥 Combo
        // ==================================================

        combo++;

        showComboPop(
            combo
        );

        if (
            combo >= 3
        ) {

            score += 50;

            showComboToast(
                combo
            );

        }

        if (
            combo >
            maxCombo
        ) {

            maxCombo =
                combo;

        }

        // ==================================================
        // 🎯 Daily
        // ==================================================

        if (
            isDailyChallenge
        ) {

            dailyCorrect++;

            updateDailyUI(
                dailyCorrect,
                0,
                false
            );

            await saveDailyProgress();

            console.log(
                "🎯 Daily Progress:",
                dailyCorrect,
                "/",
                DAILY_TARGET
            );

        }

        updateUI();

        // ==================================================
        // Daily completed
        // ==================================================

        if (
            isDailyChallenge &&
            dailyCorrect >=
            DAILY_TARGET
        ) {

            setTimeout(
                () => {

                    showResult();

                },
                700
            );

            return;

        }

        // ==================================================
        // السؤال التالي
        // ==================================================

        setTimeout(
            () => {

                currentQuestion++;

                showQuestion();

            },
            800
        );

    }

    // ==================================================
    // غلط
    // ==================================================

    else {

        button.classList.add(
            "wrong"
        );

        showToast(
            "إجابة غلط ❌",
            "error",
            1400
        );

        const questionData =
            gameQuestions[
                currentQuestion
            ];

        await handleWrongAnswer(
            questionData,
            selectedIndex
        );

    }

}

// ======================================================
// ❌ الإجابة الخاطئة + حفظ السؤال
// ======================================================

async function handleWrongAnswer(
    questionData = null,
    selectedIndex = null
) {

    clearInterval(timer);

    combo = 0;

    // ==================================================
    // 🧠 حفظ السؤال الغلط
    // ==================================================

    if (questionData) {

        await saveWrongQuestion(
            questionData,
            selectedIndex
        );

    }

    // ==================================================
    // 🎯 Daily
    // ==================================================

    if (
        isDailyChallenge
    ) {

        dailyCorrect = 0;

        await saveDailyProgress();

        updateDailyUI(
            0,
            0,
            false
        );

        console.log(
            "❌ Daily Streak اتصفر"
        );

    }

    // ==================================================
    // ❤️ القلوب
    // ==================================================

    hearts--;

    console.log(
        "❌ غلط | القلوب:",
        hearts
    );

    if (heartsElement) {

        heartsElement.classList.remove(
            "heart-lost"
        );

        void heartsElement.offsetWidth;

        heartsElement.classList.add(
            "heart-lost"
        );

    }

    updateUI();

    // ==================================================
    // تعطيل الإجابات
    // ==================================================

    const answerButtons =
        document.querySelectorAll(
            ".answer-btn"
        );

    answerButtons.forEach(
        btn => {

            btn.disabled = true;

        }
    );

    // ==================================================
    // انتهاء اللعبة
    // ==================================================

    if (
        hearts <= 0
    ) {

        setTimeout(
            () => {

                showResult();

            },
            1000
        );

        return;

    }

    // ==================================================
    // السؤال التالي
    // ==================================================

    setTimeout(
        () => {

            currentQuestion++;

            if (
                currentQuestion >=
                gameQuestions.length
            ) {

                showResult();

                return;

            }

            showQuestion();

        },
        1000
    );

}

// ======================================================
// 🧠 حفظ السؤال الغلط
// ======================================================

async function saveWrongQuestion(
    questionData,
    selectedIndex
) {

    try {

        const user =
            await getCurrentUser();

        if (!user) {

            return;

        }

        if (!questionData) {

            return;

        }

        const correctIndex =
            Number(
                questionData.correct
            );

        const selectedAnswer =
            selectedIndex !== null &&
            questionData.answers &&
            questionData.answers[
                selectedIndex
            ]
                ? questionData.answers[
                    selectedIndex
                ]
                : "لم تتم الإجابة";

        const correctAnswer =
            questionData.answers &&
            questionData.answers[
                correctIndex
            ]
                ? questionData.answers[
                    correctIndex
                ]
                : "غير معروف";

        await db
            .collection(
                "users"
            )
            .doc(
                user.uid
            )
            .collection(
                "wrongQuestions"
            )
            .add({

                question:
                    questionData.question,

                answers:
                    questionData.answers || [],

                selectedAnswer:
                    selectedAnswer,

                correctAnswer:
                    correctAnswer,

                category:
                    questionData.category ||
                    selectedCategory,

                difficulty:
                    questionData.difficulty ||
                    "normal",

                createdAt:
                    firebase.firestore
                        .FieldValue
                        .serverTimestamp()

            });

        console.log(
            "🧠 تم حفظ السؤال الغلط"
        );

    }

    catch (error) {

        console.error(
            "❌ خطأ حفظ السؤال الغلط:",
            error
        );

    }

}

// ======================================================
// تحديث الواجهة
// ======================================================

function updateUI() {

    if (scoreElement) {

        scoreElement.textContent =
            score;

    }

    if (comboElement) {

        comboElement.textContent =
            combo;

    }

    if (heartsElement) {

        heartsElement.textContent =
            "❤️".repeat(
                Math.max(
                    0,
                    hearts
                )
            ) +
            "🖤".repeat(
                Math.max(
                    0,
                    3 - hearts
                )
            );

    }

    if (progressElement) {

        if (
            gameQuestions.length > 0
        ) {

            const percent =
                (
                    currentQuestion /
                    gameQuestions.length
                ) * 100;

            progressElement.style.width =
                `${percent}%`;

        }

    }

}

// ======================================================
// شاشة النتيجة
// ======================================================

async function showResult() {

    clearInterval(timer);

    earnedXP =
        Math.floor(
            score / 10
        );

    console.log(
        "🏆 النتيجة:",
        score
    );

    console.log(
        "⭐ XP:",
        earnedXP
    );

    console.log(
        "🔥 أعلى Combo:",
        maxCombo
    );

    // ==================================================
    // 🪙 مكافأة إنهاء الكويز
    // ==================================================

    const completeQuizCoins =
        hasVIP
            ? VIP_QUIZ_COMPLETE_COINS
            : QUIZ_COMPLETE_COINS;

    console.log(
        "🪙 مكافأة إنهاء الكويز:",
        completeQuizCoins
    );

    // ==================================================
    // حفظ النتيجة + المكافأة
    // ==================================================

    if (!scoreSaved) {

        scoreSaved =
            true;

        await saveScore(
            score,
            earnedXP
        );

        const completeCoinsAdded =
            await addCoins(
                completeQuizCoins
            );

        if (completeCoinsAdded) {

            showCoinPop(
                completeQuizCoins
            );

        }

    }

    // ==================================================
    // 🎯 المكافأة اليومية
    // ==================================================

    let dailyReward =
        null;

    if (
        isDailyChallenge &&
        dailyCorrect >=
        DAILY_TARGET
    ) {

        dailyReward =
            await claimDailyReward();

    }

    // ==================================================
    // البحث عن Container
    // ==================================================

    const quizContainer =
        document.querySelector(
            ".quiz-container"
        );

    if (!quizContainer) {

        console.error(
            "❌ لم يتم العثور على quiz-container"
        );

        return;

    }

    let dailyHTML =
        "";

    // ==================================================
    // 🎯 Daily Result
    // ==================================================

    if (
        isDailyChallenge &&
        dailyCorrect >=
        DAILY_TARGET
    ) {

        if (
            dailyReward &&
            dailyReward.rewardGranted
        ) {

            dailyHTML = `

                <div class="daily-result">

                    <h3>
                        🎉 أنهيت التحدي اليومي!
                    </h3>

                    <p>
                        🔥 Streak:
                        ${dailyReward.streak}
                        يوم
                    </p>

                    <div class="reward-line">
                        🎁 +500 نقطة
                    </div>

                    <div class="reward-line">
                        ⭐ +200 XP
                    </div>

                </div>

            `;

        }

        else {

            dailyHTML = `

                <div class="daily-result">

                    <h3>
                        🎉 أنهيت التحدي اليومي!
                    </h3>

                    <p>
                        تم استلام المكافأة اليومية بالفعل.
                    </p>

                </div>

            `;

        }

    }

    // ==================================================
    // 💎 رسالة VIP
    // ==================================================

    const vipHTML =
        hasVIP
            ? `

                <div class="vip-result">

                    <div>
                        💎 أنت لاعب VIP
                    </div>

                    <p>
                        🪙 الإجابة الصحيحة:
                        +${VIP_CORRECT_ANSWER_COINS} عملات
                    </p>

                    <p>
                        🎁 مكافأة إنهاء الكويز:
                        +${VIP_QUIZ_COMPLETE_COINS} 🪙
                    </p>

                </div>

            `
            : "";

    // ==================================================
    // 🎮 اسم وضع اللعب
    // ==================================================

    let modeName =
        "عادي";

    if (
        gameMode === "quick"
    ) {

        modeName =
            "⚡ سريع";

    }

    else if (
        gameMode === "hard"
    ) {

        modeName =
            "🔥 صعب";

    }

    else if (
        gameMode === "mixed"
    ) {

        modeName =
            "🔀 مختلط";

    }

    else if (
        gameMode === "vip"
    ) {

        modeName =
            "💎 VIP";

    }

    else if (
        isDailyChallenge
    ) {

        modeName =
            "🎯 التحدي اليومي";

    }

    // ==================================================
    // النتيجة
    // ==================================================

    quizContainer.innerHTML = `

        <div class="result-screen">

            <p class="result-small">
                ${modeName}
            </p>

            <p class="result-small">
                النتيجة النهائية
            </p>

            <h1>
                انتهت اللعبة! 🎉
            </h1>

            ${vipHTML}

            ${dailyHTML}

            <h2>
                🏆 نتيجتك:
                <span>${score}</span>
            </h2>

            <h3>
                ⭐ XP المكتسب:
                <span>${earnedXP}</span>
            </h3>

            <h3>
                🔥 أعلى Combo:
                <span>${maxCombo}</span>
            </h3>

            <h3>
                ❤️ القلوب المتبقية:
                <span>${hearts}</span>
            </h3>

            <h3>
                🪙 مكافأة إنهاء الكويز:
                <span>+${completeQuizCoins}</span>
            </h3>

            <button
                class="result-btn"
                onclick="playAgain()"
            >
                🔄 العب مرة أخرى
            </button>

            <button
                class="result-btn"
                onclick="goLeaderboard()"
            >
                🏆 المتصدرين
            </button>

            <button
                class="result-btn"
                onclick="goProfile()"
            >
                👤 الملف الشخصي
            </button>

        </div>

    `;

}

// ======================================================
// الحصول على المستخدم
// ======================================================

async function getCurrentUser() {

    let user =
        firebase.auth().currentUser;

    if (user) {

        return user;

    }

    user =
        await new Promise(
            resolve => {

                let finished =
                    false;

                const unsubscribe =
                    firebase
                        .auth()
                        .onAuthStateChanged(
                            currentUser => {

                                if (
                                    finished
                                ) {

                                    return;

                                }

                                finished =
                                    true;

                                unsubscribe();

                                resolve(
                                    currentUser
                                );

                            }
                        );

            }
        );

    return user;

}

// ======================================================
// 🪙 إضافة العملات
// ======================================================

async function addCoins(
    amount
) {

    try {

        const user =
            await getCurrentUser();

        if (!user) {

            console.error(
                "❌ لا يوجد مستخدم لإضافة العملات"
            );

            return false;

        }

        const userRef =
            db
                .collection(
                    "users"
                )
                .doc(
                    user.uid
                );

        await db.runTransaction(
            async transaction => {

                const userDoc =
                    await transaction.get(
                        userRef
                    );

                const data =
                    userDoc.exists
                        ? userDoc.data()
                        : {};

                const currentCoins =
                    Number(
                        data.coins
                    ) || 0;

                transaction.set(
                    userRef,
                    {
                        coins:
                            currentCoins +
                            amount
                    },
                    {
                        merge:
                            true
                    }
                );

            }
        );

        console.log(
            `🪙 +${amount} عملة`
        );

        return true;

    }

    catch (error) {

        console.error(
            "❌ خطأ في إضافة العملات:",
            error
        );

        return false;

    }

}

// ======================================================
// حفظ النتيجة
// ======================================================

async function saveScore(
    finalScore,
    finalXP
) {

    try {

        console.log(
            "🔵 saveScore بدأت"
        );

        if (
            typeof firebase ===
            "undefined"
        ) {

            console.error(
                "❌ Firebase غير موجود"
            );

            return;

        }

        if (
            typeof db ===
            "undefined"
        ) {

            console.error(
                "❌ db غير موجود"
            );

            return;

        }

        const user =
            await getCurrentUser();

        if (!user) {

            console.error(
                "❌ لا يوجد مستخدم مسجل الدخول"
            );

            return;

        }

        const scoreToSave =
            Number(
                finalScore
            );

        const xpToSave =
            Number(
                finalXP
            );

        // ==================================================
        // جلب اسم المستخدم
        // ==================================================

        let playerName =
            user.displayName ||
            "لاعب";

        try {

            const userDoc =
                await db
                    .collection(
                        "users"
                    )
                    .doc(
                        user.uid
                    )
                    .get();

            if (
                userDoc.exists &&
                userDoc.data().name
            ) {

                playerName =
                    userDoc.data().name;

            }

        }

        catch (error) {

            console.log(
                "⚠️ لم يتم جلب اسم المستخدم من users",
                error
            );

        }

        // ==================================================
        // تحديد القسم / الوضع
        // ==================================================

        let scoreCategory =
            selectedCategory;

        if (
            isDailyChallenge
        ) {

            scoreCategory =
                "daily";

        }

        else if (
            gameMode === "quick"
        ) {

            scoreCategory =
                "quick";

        }

        else if (
            gameMode === "hard"
        ) {

            scoreCategory =
                "hard";

        }

        else if (
            gameMode === "mixed"
        ) {

            scoreCategory =
                "mixed";

        }

        else if (
            gameMode === "vip"
        ) {

            scoreCategory =
                "vip";

        }

        // ==================================================
        // حفظ النتيجة
        // ==================================================

        const docRef =
            await db
                .collection(
                    "scores"
                )
                .add({

                    uid:
                        user.uid,

                    name:
                        playerName,

                    score:
                        scoreToSave,

                    xp:
                        xpToSave,

                    category:
                        scoreCategory,

                    quizCategory:
                        selectedCategory,

                    mode:
                        gameMode,

                    maxCombo:
                        Number(
                            maxCombo
                        ),

                    createdAt:
                        firebase.firestore
                            .FieldValue
                            .serverTimestamp()

                });

        console.log(
            "✅ تم حفظ النتيجة"
        );

        console.log(
            "📄 ID:",
            docRef.id
        );

    }

    catch (error) {

        console.error(
            "❌ خطأ saveScore:",
            error
        );

    }

}

// ======================================================
// 💾 حفظ تقدم Daily Challenge
// ======================================================

async function saveDailyProgress() {

    try {

        const user =
            await getCurrentUser();

        if (!user) {

            return;

        }

        if (!isDailyChallenge) {

            return;

        }

        const today =
            getEgyptDate();

        const dailyRef =
            db
                .collection(
                    "dailyChallenges"
                )
                .doc(
                    user.uid
                );

        await dailyRef.set(
            {

                uid:
                    user.uid,

                progress:
                    Math.min(
                        dailyCorrect,
                        DAILY_TARGET
                    ),

                progressDate:
                    today,

                updatedAt:
                    firebase.firestore
                        .FieldValue
                        .serverTimestamp()

            },
            {
                merge:
                    true
            }
        );

        console.log(
            "💾 تم حفظ تقدم Daily:",
            dailyCorrect,
            "/",
            DAILY_TARGET
        );

    }

    catch (error) {

        console.error(
            "❌ خطأ حفظ تقدم Daily:",
            error
        );

    }

}

// ======================================================
// 🎁 المطالبة بالمكافأة اليومية
// ======================================================

async function claimDailyReward() {

    try {

        const user =
            await getCurrentUser();

        if (!user) {

            console.error(
                "❌ لا يوجد مستخدم"
            );

            return {

                rewardGranted:
                    false,

                streak:
                    0

            };

        }

        const today =
            getEgyptDate();

        const dailyRef =
            db
                .collection(
                    "dailyChallenges"
                )
                .doc(
                    user.uid
                );

        const result =
            await db.runTransaction(
                async transaction => {

                    const snapshot =
                        await transaction.get(
                            dailyRef
                        );

                    if (
                        snapshot.exists &&
                        snapshot.data()
                            .completedDate ===
                        today
                    ) {

                        return {

                            rewardGranted:
                                false,

                            streak:
                                Number(
                                    snapshot.data()
                                        .streak
                                ) || 0

                        };

                    }

                    let streak =
                        1;

                    // ==================================================
                    // حساب Streak
                    // ==================================================

                    if (
                        snapshot.exists
                    ) {

                        const data =
                            snapshot.data();

                        const lastDate =
                            data.completedDate;

                        if (
                            lastDate ===
                            getYesterday(
                                today
                            )
                        ) {

                            streak =
                                (
                                    Number(
                                        data.streak
                                    ) || 0
                                ) + 1;

                        }

                    }

                    // ==================================================
                    // عدد التحديات المكتملة
                    // ==================================================

                    const totalCompleted =
                        snapshot.exists
                            ? (
                                Number(
                                    snapshot.data()
                                        .totalCompleted
                                ) || 0
                            ) + 1
                            : 1;

                    // ==================================================
                    // حفظ Daily
                    // ==================================================

                    transaction.set(
                        dailyRef,
                        {

                            uid:
                                user.uid,

                            completedDate:
                                today,

                            streak:
                                streak,

                            totalCompleted:
                                totalCompleted,

                            progress:
                                DAILY_TARGET,

                            progressDate:
                                today,

                            updatedAt:
                                firebase.firestore
                                    .FieldValue
                                    .serverTimestamp()

                        },
                        {

                            merge:
                                true

                        }
                    );

                    return {

                        rewardGranted:
                            true,

                        streak:
                            streak,

                        totalCompleted:
                            totalCompleted

                    };

                }
            );

        // ==================================================
        // إضافة المكافأة
        // ==================================================

        if (
            result.rewardGranted
        ) {

            await db
                .collection(
                    "scores"
                )
                .add({

                    uid:
                        user.uid,

                    name:
                        user.displayName ||
                        "لاعب",

                    score:
                        DAILY_REWARD_SCORE,

                    xp:
                        DAILY_REWARD_XP,

                    category:
                        "daily_reward",

                    maxCombo:
                        0,

                    createdAt:
                        firebase.firestore
                            .FieldValue
                            .serverTimestamp()

                });

            console.log(
                "🎁 تم إعطاء المكافأة اليومية"
            );

            console.log(
                "🏆 +",
                DAILY_REWARD_SCORE,
                "نقطة"
            );

            console.log(
                "⭐ +",
                DAILY_REWARD_XP,
                "XP"
            );

        }

        return result;

    }

    catch (error) {

        console.error(
            "❌ خطأ Daily Reward:",
            error
        );

        return {

            rewardGranted:
                false,

            streak:
                0

        };

    }

}

// ======================================================
// 🔄 العب مرة أخرى
// ======================================================

function playAgain() {

    if (
        isDailyChallenge
    ) {

        window.location.href =
            "quiz.html?daily=true";

        return;

    }

    window.location.href =
        `quiz.html?category=${encodeURIComponent(selectedCategory)}&mode=${encodeURIComponent(gameMode)}`;

}

// ======================================================
// 🏆 المتصدرين
// ======================================================

function goLeaderboard() {

    window.location.href =
        "leaderboard.html";

}

// ======================================================
// 👤 الملف الشخصي
// ======================================================

function goProfile() {

    console.log(
        "👤 تم الضغط على الملف الشخصي"
    );

    window.location.href =
        "profile.html";

}