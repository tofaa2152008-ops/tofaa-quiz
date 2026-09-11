const questions = [

    // =========================
    // 🧠 معلومات عامة
    // =========================

    {
        question: "ما هي أكبر قارة في العالم من حيث المساحة؟",
        answers: ["أفريقيا", "آسيا", "أوروبا", "أمريكا الشمالية"],
        correct: 1,
        difficulty: "easy"
    },

    {
        question: "كم عدد الكواكب في المجموعة الشمسية؟",
        answers: ["7", "8", "9", "10"],
        correct: 1,
        difficulty: "easy"
    },

    {
        question: "ما هي عاصمة اليابان؟",
        answers: ["بكين", "سيول", "طوكيو", "بانكوك"],
        correct: 2,
        difficulty: "easy"
    },

    {
        question: "ما هو أكبر محيط على سطح الأرض؟",
        answers: ["الأطلسي", "الهندي", "الهادئ", "المتجمد الشمالي"],
        correct: 2,
        difficulty: "easy"
    },

    {
        question: "ما هو الكوكب المعروف بالكوكب الأحمر؟",
        answers: ["المريخ", "الزهرة", "المشتري", "عطارد"],
        correct: 0,
        difficulty: "easy"
    },

    {
        question: "كم عدد أيام السنة الكبيسة؟",
        answers: ["364", "365", "366", "367"],
        correct: 2,
        difficulty: "easy"
    },

    {
        question: "ما هي اللغة الأكثر تحدثًا من حيث عدد الناطقين الأصليين؟",
        answers: ["الإنجليزية", "الإسبانية", "العربية", "الصينية المندرينية"],
        correct: 3,
        difficulty: "medium"
    },

    {
        question: "ما هو أسرع حيوان بري؟",
        answers: ["الأسد", "الفهد", "الحصان", "النمر"],
        correct: 1,
        difficulty: "easy"
    },

    {
        question: "ما هو المعدن الذي رمزه الكيميائي Fe؟",
        answers: ["الذهب", "الفضة", "الحديد", "النحاس"],
        correct: 2,
        difficulty: "easy"
    },

    {
        question: "كم عدد ألوان قوس قزح التقليدية؟",
        answers: ["5", "6", "7", "8"],
        correct: 2,
        difficulty: "easy"
    },


    // =========================
    // 🔬 علوم
    // =========================

    {
        question: "ما هو العضو المسؤول بشكل أساسي عن ضخ الدم في جسم الإنسان؟",
        answers: ["الرئة", "الكبد", "القلب", "الكلى"],
        correct: 2,
        difficulty: "easy"
    },

    {
        question: "ما الغاز الذي تحتاجه النباتات لعملية البناء الضوئي؟",
        answers: ["الأكسجين", "ثاني أكسيد الكربون", "النيتروجين", "الهيدروجين"],
        correct: 1,
        difficulty: "easy"
    },

    {
        question: "ما هي وحدة قياس القوة في النظام الدولي؟",
        answers: ["جول", "واط", "نيوتن", "باسكال"],
        correct: 2,
        difficulty: "medium"
    },

    {
        question: "ما هو أقرب كوكب إلى الشمس؟",
        answers: ["الزهرة", "الأرض", "عطارد", "المريخ"],
        correct: 2,
        difficulty: "easy"
    },

    {
        question: "ما هو الرمز الكيميائي للماء؟",
        answers: ["CO2", "H2O", "O2", "NaCl"],
        correct: 1,
        difficulty: "easy"
    },

    {
        question: "أي جزء من الخلية يحتوي عادةً على المادة الوراثية DNA؟",
        answers: ["النواة", "الغشاء الخلوي", "السيتوبلازم", "الريبوسوم"],
        correct: 0,
        difficulty: "medium"
    },

    {
        question: "ما هي سرعة الضوء تقريبًا في الفراغ؟",
        answers: [
            "30 ألف كم/ث",
            "300 ألف كم/ث",
            "3 ملايين كم/ث",
            "3000 كم/ث"
        ],
        correct: 1,
        difficulty: "medium"
    },

    {
        question: "أي كوكب يمتلك أكبر عدد معروف من الأقمار في المجموعة الشمسية؟",
        answers: ["الأرض", "المريخ", "زحل", "عطارد"],
        correct: 2,
        difficulty: "medium"
    },

    {
        question: "ما هي أصغر وحدة بنائية للمادة تحتفظ بخواص العنصر؟",
        answers: ["الجزيء", "الذرة", "الخلية", "النواة"],
        correct: 1,
        difficulty: "easy"
    },

    {
        question: "ما اسم العملية التي تتحول فيها المادة من الحالة السائلة إلى الغازية؟",
        answers: ["التجمد", "التكثف", "التبخر", "الانصهار"],
        correct: 2,
        difficulty: "easy"
    },


    // =========================
    // 🌍 جغرافيا وتاريخ
    // =========================

    {
        question: "ما هي عاصمة مصر؟",
        answers: ["الإسكندرية", "القاهرة", "الجيزة", "الأقصر"],
        correct: 1,
        difficulty: "easy"
    },

    {
        question: "في أي قارة تقع مصر؟",
        answers: ["آسيا", "أوروبا", "أفريقيا", "أمريكا الجنوبية"],
        correct: 2,
        difficulty: "easy"
    },

    {
        question: "ما هو أطول نهر في أفريقيا؟",
        answers: ["النيل", "الكونغو", "النيجر", "الزامبيزي"],
        correct: 0,
        difficulty: "easy"
    },

    {
        question: "ما هي أكبر دولة في العالم من حيث المساحة؟",
        answers: ["الصين", "كندا", "روسيا", "الولايات المتحدة"],
        correct: 2,
        difficulty: "easy"
    },

    {
        question: "أين يقع برج إيفل؟",
        answers: ["لندن", "روما", "باريس", "مدريد"],
        correct: 2,
        difficulty: "easy"
    },

    {
        question: "ما البحر الذي يفصل بين قارتي أفريقيا وأوروبا؟",
        answers: ["البحر الأحمر", "البحر المتوسط", "بحر العرب", "بحر قزوين"],
        correct: 1,
        difficulty: "easy"
    },

    {
        question: "في أي دولة تقع أهرامات الجيزة؟",
        answers: ["المغرب", "مصر", "السودان", "الأردن"],
        correct: 1,
        difficulty: "easy"
    },

    {
        question: "ما هي عاصمة أستراليا؟",
        answers: ["سيدني", "ملبورن", "كانبرا", "بيرث"],
        correct: 2,
        difficulty: "medium"
    },

    {
        question: "ما هي أكبر صحراء حارة في العالم؟",
        answers: ["صحراء جوبي", "الصحراء الكبرى", "صحراء كالاهاري", "صحراء أتاكاما"],
        correct: 1,
        difficulty: "medium"
    },

    {
        question: "في أي قارة تقع دولة البرازيل؟",
        answers: ["أفريقيا", "آسيا", "أمريكا الجنوبية", "أوروبا"],
        correct: 2,
        difficulty: "easy"
    },


    // =========================
    // 💻 تكنولوجيا
    // =========================

    {
        question: "ماذا تعني كلمة CPU؟",
        answers: [
            "وحدة معالجة الرسومات",
            "وحدة المعالجة المركزية",
            "وحدة تخزين البيانات",
            "ذاكرة الوصول العشوائي"
        ],
        correct: 1,
        difficulty: "medium"
    },

    {
        question: "ما اللغة الأساسية المستخدمة لبناء هيكل صفحات الويب؟",
        answers: ["HTML", "CSS", "Python", "SQL"],
        correct: 0,
        difficulty: "easy"
    },

    {
        question: "ما اللغة المستخدمة غالبًا لتنسيق وتصميم صفحات الويب؟",
        answers: ["HTML", "CSS", "JavaScript", "C++"],
        correct: 1,
        difficulty: "easy"
    },

    {
        question: "ما اللغة التي تستخدم لإضافة التفاعل إلى صفحات الويب؟",
        answers: ["HTML", "CSS", "JavaScript", "SQL"],
        correct: 2,
        difficulty: "easy"
    },

    {
        question: "ماذا تعني RAM؟",
        answers: [
            "ذاكرة الوصول العشوائي",
            "وحدة المعالجة المركزية",
            "ذاكرة القراءة فقط",
            "وحدة التخزين"
        ],
        correct: 0,
        difficulty: "medium"
    },


    // =========================
    // ➗ رياضيات - صعب
    // =========================

    {
        question: "إذا كان 3x + 7 = 25، فما قيمة x؟",
        answers: ["4", "5", "6", "7"],
        correct: 1,
        difficulty: "medium"
    },

    {
        question: "ما ناتج 15² - 10²؟",
        answers: ["100", "125", "150", "175"],
        correct: 1,
        difficulty: "medium"
    },

    {
        question: "إذا كان x² = 144 و x عدد موجب، فما قيمة x؟",
        answers: ["10", "11", "12", "14"],
        correct: 2,
        difficulty: "easy"
    },

    {
        question: "ما قيمة √(144 + 25)؟",
        answers: ["12", "13", "14", "15"],
        correct: 1,
        difficulty: "medium"
    },

    {
        question: "إذا كان 2x - 5 = 3x - 17، فما قيمة x؟",
        answers: ["10", "11", "12", "13"],
        correct: 2,
        difficulty: "medium"
    },

    {
        question: "ما ناتج 2³ × 3²؟",
        answers: ["36", "48", "72", "96"],
        correct: 2,
        difficulty: "medium"
    },

    {
        question: "مثلث قائم الزاوية ضلعا القائمة فيه 6 و8، فما طول الوتر؟",
        answers: ["9", "10", "12", "14"],
        correct: 1,
        difficulty: "hard"
    },

    {
        question: "إذا كان x + 1/x = 5، فما قيمة x² + 1/x²؟",
        answers: ["21", "23", "25", "27"],
        correct: 1,
        difficulty: "hard"
    },

    {
        question: "إذا كان x - 1/x = 3، فما قيمة x² + 1/x²؟",
        answers: ["7", "9", "11", "13"],
        correct: 2,
        difficulty: "hard"
    },

    {
        question: "ما قيمة مجموع الأعداد الصحيحة من 1 إلى 100؟",
        answers: ["5000", "5050", "5100", "5150"],
        correct: 1,
        difficulty: "hard"
    },

    {
        question: "إذا كان 5x + 2 = 2x + 20، فما قيمة x؟",
        answers: ["4", "5", "6", "7"],
        correct: 2,
        difficulty: "medium"
    },

    {
        question: "ما ناتج (3 + 2)² - (3 - 2)²؟",
        answers: ["16", "20", "24", "26"],
        correct: 2,
        difficulty: "hard"
    },

    {
        question: "إذا كان محيط مربع يساوي 48 سم، فما مساحته؟",
        answers: ["121 سم²", "144 سم²", "169 سم²", "196 سم²"],
        correct: 1,
        difficulty: "medium"
    },

    {
        question: "عدد إذا ضربته في نفسه ثم أضفت إليه 6 أصبح الناتج 42، فما العدد الموجب؟",
        answers: ["5", "6", "7", "8"],
        correct: ["36 + 6 = 42", "42", "48", "56"].indexOf("42"),
        difficulty: "hard"
    },

    {
        question: "إذا كانت زاويتان متكاملتان وإحداهما تساوي ضعف الأخرى، فما قياس الزاوية الأكبر؟",
        answers: ["60°", "90°", "120°", "135°"],
        correct: 2,
        difficulty: "hard"
    },

    {
        question: "ما قيمة 2⁵ + 2⁴؟",
        answers: ["32", "40", "48", "64"],
        correct: 2,
        difficulty: "medium"
    },

    {
        question: "إذا كان متوسط 5 أعداد هو 18، فما مجموع هذه الأعداد؟",
        answers: ["80", "90", "100", "110"],
        correct: 1,
        difficulty: "medium"
    },

    {
        question: "ما أصغر عدد موجب يقبل القسمة على 6 و8 و15 دون باقٍ؟",
        answers: ["60", "90", "120", "180"],
        correct: 2,
        difficulty: "hard"
    },

    {
        question: "إذا كان 20% من عدد يساوي 36، فما العدد؟",
        answers: ["160", "180", "200", "220"],
        correct: 1,
        difficulty: "medium"
    },

    {
        question: "إذا كان a = 2 و b = 3، فما قيمة a³ + b³؟",
        answers: ["27", "31", "35", "37"],
        correct: 1,
        difficulty: "medium"
    },

    {
        question: "ما قيمة 1 + 2 + 3 + ... + 50؟",
        answers: ["1225", "1250", "1275", "1300"],
        correct: 2,
        difficulty: "hard"
    },

    {
        question: "إذا كان نصف قطر دائرة يساوي 7 سم، فما محيطها باستخدام π = 22/7؟",
        answers: ["22 سم", "44 سم", "49 سم", "154 سم"],
        correct: 1,
        difficulty: "medium"
    },

    {
        question: "إذا كان 4x² = 100، فما قيمة x الموجبة؟",
        answers: ["4", "5", "10", "25"],
        correct: 1,
        difficulty: "medium"
    },

    {
        question: "إذا كان x + y = 10 و x - y = 4، فما قيمة x؟",
        answers: ["5", "6", "7", "8"],
        correct: 1,
        difficulty: "hard"
    },

    {
        question: "ما قيمة 99²؟",
        answers: ["9801", "9901", "9999", "10001"],
        correct: 0,
        difficulty: "hard"
    },

    {
        question: "إذا كان 2ˣ = 32، فما قيمة x؟",
        answers: ["4", "5", "6", "8"],
        correct: 1,
        difficulty: "medium"
    },

    {
        question: "ما قيمة √(81) + √(49)؟",
        answers: ["14", "15", "16", "17"],
        correct: 2,
        difficulty: "easy"
    },

    {
        question: "إذا كان طول مستطيل 12 سم وعرضه 5 سم، فما طول قطره؟",
        answers: ["13 سم", "14 سم", "15 سم", "17 سم"],
        correct: 0,
        difficulty: "hard"
    },

    {
        question: "إذا كان مجموع ثلاثة أعداد متتالية يساوي 72، فما العدد الأوسط؟",
        answers: ["22", "23", "24", "25"],
        correct: 2,
        difficulty: "hard"
    },

    {
        question: "ما قيمة 7! ÷ 5!؟",
        answers: ["12", "14", "21", "35"],
        correct: 1,
        difficulty: "hard"
    },

    {
        question: "إذا كان 3/4 من عدد يساوي 45، فما العدد؟",
        answers: ["50", "55", "60", "65"],
        correct: 2,
        difficulty: "medium"
    },

    {
        question: "ما قيمة 0.25 × 0.4؟",
        answers: ["0.01", "0.1", "1", "10"],
        correct: 1,
        difficulty: "medium"
    },

    {
        question: "إذا كان x² - 9 = 0، فما مجموع القيم الممكنة لـ x؟",
        answers: ["-9", "0", "3", "9"],
        correct: 1,
        difficulty: "hard"
    },

    {
        question: "ما قيمة 2⁰ + 3⁰ + 4⁰؟",
        answers: ["0", "1", "2", "3"],
        correct: 3,
        difficulty: "medium"
    },

    {
        question: "إذا كان عدد ما يزيد بنسبة 25% فأصبح 100، فما قيمته الأصلية؟",
        answers: ["75", "80", "85", "90"],
        correct: 1,
        difficulty: "hard"
    },

    {
        question: "ما العدد التالي في النمط: 2، 6، 12، 20، 30، ؟",
        answers: ["36", "40", "42", "44"],
        correct: 2,
        difficulty: "hard"
    },

    {
        question: "إذا كان حاصل ضرب عددين يساوي 48 ومجموعهما 14، فما العددان؟",
        answers: [
            "4 و10",
            "5 و9",
            "6 و8",
            "7 و7"
        ],
        correct: 2,
        difficulty: "hard"
    },

    {
        question: "ما قيمة 10³ - 9³؟",
        answers: ["171", "181", "271", "361"],
        correct: 2,
        difficulty: "hard"
    },

    {
        question: "إذا كان 2x + 3y = 12 و x = 3، فما قيمة y؟",
        answers: ["1", "2", "3", "4"],
        correct: 1,
        difficulty: "medium"
    },

    {
        question: "ما احتمال ظهور رقم زوجي عند رمي حجر نرد عادل مرة واحدة؟",
        answers: ["1/6", "1/3", "1/2", "2/3"],
        correct: 2,
        difficulty: "medium"
    },

    {
        question: "كم عدد الأعداد الأولية بين 1 و20؟",
        answers: ["6", "7", "8", "9"],
        correct: 1,
        difficulty: "hard"
    },

    {
        question: "إذا كان محيط مثلث متساوي الأضلاع 36 سم، فما طول كل ضلع؟",
        answers: ["9 سم", "10 سم", "12 سم", "18 سم"],
        correct: 2,
        difficulty: "easy"
    },

    {
        question: "ما قيمة 5² + 12²؟",
        answers: ["144", "169", "175", "194"],
        correct: 1,
        difficulty: "medium"
    },

    {
        question: "إذا كان x/3 = 7، فما قيمة x؟",
        answers: ["10", "18", "21", "24"],
        correct: 2,
        difficulty: "easy"
    }

];