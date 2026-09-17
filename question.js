// ============================================
// Tofaa Quiz 🎮
// 🧠 معلومات عامة — 150 سؤال
// 50 سهل + 50 متوسط + 50 صعب
// ============================================

const questions = [

    // =========================
    // 🟢 EASY — 50 سؤال
    // =========================

    {
        question: "ما عاصمة فرنسا؟",
        answers: ["باريس", "روما", "مدريد", "برلين"],
        correct: 0,
        category: "general",
        difficulty: "easy"
    },
    {
        question: "كم عدد أيام الأسبوع؟",
        answers: ["5", "6", "7", "8"],
        correct: 2,
        category: "general",
        difficulty: "easy"
    },
    {
        question: "ما لون الموز عادةً عندما ينضج؟",
        answers: ["أحمر", "أصفر", "أزرق", "بنفسجي"],
        correct: 1,
        category: "general",
        difficulty: "easy"
    },
    {
        question: "ما أكبر محيط على سطح الأرض؟",
        answers: ["المحيط الأطلسي", "المحيط الهندي", "المحيط الهادئ", "المحيط المتجمد الشمالي"],
        correct: 2,
        category: "general",
        difficulty: "easy"
    },
    {
        question: "كم عدد أشهر السنة؟",
        answers: ["10", "11", "12", "13"],
        correct: 2,
        category: "general",
        difficulty: "easy"
    },
    {
        question: "ما الحيوان الذي يُعرف بأنه أكبر حيوان بري؟",
        answers: ["الفيل الإفريقي", "الأسد", "الزرافة", "وحيد القرن"],
        correct: 0,
        category: "general",
        difficulty: "easy"
    },
    {
        question: "ما عاصمة إيطاليا؟",
        answers: ["ميلانو", "روما", "نابولي", "تورينو"],
        correct: 1,
        category: "general",
        difficulty: "easy"
    },
    {
        question: "ما الكوكب الذي نعيش عليه؟",
        answers: ["المريخ", "الأرض", "الزهرة", "المشتري"],
        correct: 1,
        category: "general",
        difficulty: "easy"
    },
    {
        question: "كم عدد أصابع اليد الواحدة؟",
        answers: ["4", "5", "6", "7"],
        correct: 1,
        category: "general",
        difficulty: "easy"
    },
    {
        question: "ما اللغة الأكثر استخدامًا في البرازيل؟",
        answers: ["الإسبانية", "الإنجليزية", "البرتغالية", "الفرنسية"],
        correct: 2,
        category: "general",
        difficulty: "easy"
    },
    {
        question: "ما عاصمة المملكة المتحدة؟",
        answers: ["لندن", "ليفربول", "مانشستر", "برمنغهام"],
        correct: 0,
        category: "general",
        difficulty: "easy"
    },
    {
        question: "ما لون السماء غالبًا في يوم صافٍ؟",
        answers: ["أخضر", "أزرق", "برتقالي", "بنفسجي"],
        correct: 1,
        category: "general",
        difficulty: "easy"
    },
    {
        question: "كم عدد أرجل العنكبوت؟",
        answers: ["6", "8", "10", "12"],
        correct: 1,
        category: "general",
        difficulty: "easy"
    },
    {
        question: "ما عاصمة اليابان؟",
        answers: ["أوساكا", "كيوتو", "طوكيو", "هيروشيما"],
        correct: 2,
        category: "general",
        difficulty: "easy"
    },
    {
        question: "أي حيوان يُعرف بأنه صديق الإنسان الوفي؟",
        answers: ["الكلب", "النمر", "الثعلب", "الذئب"],
        correct: 0,
        category: "general",
        difficulty: "easy"
    },
    {
        question: "ما العضو المسؤول عن ضخ الدم في جسم الإنسان؟",
        answers: ["الرئة", "الكبد", "القلب", "المعدة"],
        correct: 2,
        category: "general",
        difficulty: "easy"
    },
    {
        question: "ما أكبر قارة في العالم من حيث المساحة؟",
        answers: ["أفريقيا", "أوروبا", "آسيا", "أستراليا"],
        correct: 2,
        category: "general",
        difficulty: "easy"
    },
    {
        question: "ما عاصمة ألمانيا؟",
        answers: ["برلين", "ميونخ", "هامبورغ", "فرانكفورت"],
        correct: 0,
        category: "general",
        difficulty: "easy"
    },
    {
        question: "ما المعدن الذي يُصنع منه الذهب؟",
        answers: ["الذهب", "الحديد", "النحاس", "الفضة"],
        correct: 0,
        category: "general",
        difficulty: "easy"
    },
    {
        question: "ما اسم القمر الطبيعي للأرض؟",
        answers: ["فوبوس", "القمر", "أوروبا", "تيتان"],
        correct: 1,
        category: "general",
        difficulty: "easy"
    },
    {
        question: "ما عاصمة إسبانيا؟",
        answers: ["برشلونة", "مدريد", "إشبيلية", "فالنسيا"],
        correct: 1,
        category: "general",
        difficulty: "easy"
    },
    {
        question: "أي حيوان يعطي الحليب؟",
        answers: ["البقرة", "النسر", "الثعبان", "التمساح"],
        correct: 0,
        category: "general",
        difficulty: "easy"
    },
    {
        question: "ما الجهاز الذي نستخدمه لقياس درجة الحرارة؟",
        answers: ["البارومتر", "الترمومتر", "البوصلة", "الساعة"],
        correct: 1,
        category: "general",
        difficulty: "easy"
    },
    {
        question: "كم عدد ألوان قوس قزح التقليدية؟",
        answers: ["5", "6", "7", "8"],
        correct: 2,
        category: "general",
        difficulty: "easy"
    },
    {
        question: "ما عاصمة كندا؟",
        answers: ["تورونتو", "فانكوفر", "أوتاوا", "مونتريال"],
        correct: 2,
        category: "general",
        difficulty: "easy"
    },
    {
        question: "أي طائر لا يستطيع الطيران؟",
        answers: ["النسر", "النعامة", "الصقر", "الحمامة"],
        correct: 1,
        category: "general",
        difficulty: "easy"
    },
    {
        question: "ما أكبر كوكب في المجموعة الشمسية؟",
        answers: ["زحل", "الأرض", "المشتري", "نبتون"],
        correct: 2,
        category: "general",
        difficulty: "easy"
    },
    {
        question: "ما عاصمة الصين؟",
        answers: ["شنغهاي", "بكين", "هونغ كونغ", "نانجينغ"],
        correct: 1,
        category: "general",
        difficulty: "easy"
    },
    {
        question: "ما الحيوان المعروف بامتلاكه خرطومًا؟",
        answers: ["الفيل", "الزرافة", "الحصان", "الدب"],
        correct: 0,
        category: "general",
        difficulty: "easy"
    },
    {
        question: "ما لون الزمرد الشائع؟",
        answers: ["أخضر", "أصفر", "أزرق", "أبيض"],
        correct: 0,
        category: "general",
        difficulty: "easy"
    },
    {
        question: "ما عاصمة روسيا؟",
        answers: ["موسكو", "سانت بطرسبرغ", "قازان", "سوتشي"],
        correct: 0,
        category: "general",
        difficulty: "easy"
    },
    {
        question: "ما الحاسة المرتبطة بالعين؟",
        answers: ["السمع", "الشم", "البصر", "التذوق"],
        correct: 2,
        category: "general",
        difficulty: "easy"
    },
    {
        question: "ما أسرع حيوان بري معروف؟",
        answers: ["الأسد", "الفهد", "الحصان", "الغزال"],
        correct: 1,
        category: "general",
        difficulty: "easy"
    },
    {
        question: "ما عاصمة تركيا؟",
        answers: ["إسطنبول", "أنقرة", "إزمير", "بورصة"],
        correct: 1,
        category: "general",
        difficulty: "easy"
    },
    {
        question: "ما اسم صوت الأسد؟",
        answers: ["نقيق", "زئير", "صهيل", "نباح"],
        correct: 1,
        category: "general",
        difficulty: "easy"
    },
    {
        question: "ما الشكل الذي له ثلاثة أضلاع؟",
        answers: ["المربع", "الدائرة", "المثلث", "المستطيل"],
        correct: 2,
        category: "general",
        difficulty: "easy"
    },
    {
        question: "ما عاصمة اليونان؟",
        answers: ["أثينا", "سالونيك", "باتراس", "كريت"],
        correct: 0,
        category: "general",
        difficulty: "easy"
    },
    {
        question: "ما اسم الكوكب الأحمر؟",
        answers: ["المريخ", "الزهرة", "عطارد", "نبتون"],
        correct: 0,
        category: "general",
        difficulty: "easy"
    },
    {
        question: "ما الحيوان الذي يُنتج العسل؟",
        answers: ["النحلة", "الفراشة", "النملة", "الجرادة"],
        correct: 0,
        category: "general",
        difficulty: "easy"
    },
    {
        question: "ما عاصمة أستراليا؟",
        answers: ["سيدني", "ملبورن", "كانبرا", "بريزبن"],
        correct: 2,
        category: "general",
        difficulty: "easy"
    },
    {
        question: "ما اسم العملية التي يتحول فيها الماء إلى بخار؟",
        answers: ["التجمد", "التبخر", "التكثف", "الذوبان"],
        correct: 1,
        category: "general",
        difficulty: "easy"
    },
    {
        question: "ما عاصمة الهند؟",
        answers: ["مومباي", "نيودلهي", "كولكاتا", "بنغالور"],
        correct: 1,
        category: "general",
        difficulty: "easy"
    },
    {
        question: "ما الحيوان الذي يُعرف برقبة طويلة؟",
        answers: ["الفيل", "الزرافة", "الحمار الوحشي", "الدب"],
        correct: 1,
        category: "general",
        difficulty: "easy"
    },
    {
        question: "ما اسم القارة التي تقع فيها مصر؟",
        answers: ["آسيا", "أفريقيا", "أوروبا", "أمريكا الجنوبية"],
        correct: 1,
        category: "general",
        difficulty: "easy"
    },
    {
        question: "ما الجهاز المستخدم لمعرفة الاتجاهات؟",
        answers: ["البوصلة", "الترمومتر", "المجهر", "البارومتر"],
        correct: 0,
        category: "general",
        difficulty: "easy"
    },
    {
        question: "كم عدد عجلات الدراجة العادية؟",
        answers: ["1", "2", "3", "4"],
        correct: 1,
        category: "general",
        difficulty: "easy"
    },
    {
        question: "ما عاصمة الولايات المتحدة الأمريكية؟",
        answers: ["نيويورك", "واشنطن العاصمة", "لوس أنجلوس", "شيكاغو"],
        correct: 1,
        category: "general",
        difficulty: "easy"
    },
    {
        question: "ما الكوكب الأقرب إلى الشمس؟",
        answers: ["الأرض", "الزهرة", "عطارد", "المريخ"],
        correct: 2,
        category: "general",
        difficulty: "easy"
    },
    {
        question: "ما الحيوان الذي يعيش غالبًا في المناطق القطبية ولونه أبيض؟",
        answers: ["الدب القطبي", "الأسد", "الفهد", "الفيل"],
        correct: 0,
        category: "general",
        difficulty: "easy"
    },
    {
        question: "ما اسم الجهاز الذي نستخدمه للتحدث عبر مسافات بعيدة؟",
        answers: ["الهاتف", "الميزان", "المصباح", "البوصلة"],
        correct: 0,
        category: "general",
        difficulty: "easy"
    },
    {
        question: "ما عاصمة المملكة العربية السعودية؟",
        answers: ["جدة", "مكة", "الرياض", "الدمام"],
        correct: 2,
        category: "general",
        difficulty: "easy"
    },

    // =========================
    // 🟡 MEDIUM — 50 سؤال
    // =========================

    {
        question: "ما الدولة التي تُعرف بأرض الشمس المشرقة؟",
        answers: ["الصين", "اليابان", "كوريا الجنوبية", "تايلاند"],
        correct: 1,
        category: "general",
        difficulty: "medium"
    },
    {
        question: "ما أكبر دولة في العالم من حيث المساحة؟",
        answers: ["الصين", "كندا", "روسيا", "الولايات المتحدة"],
        correct: 2,
        category: "general",
        difficulty: "medium"
    },
    {
        question: "ما البحر الذي يفصل بين أوروبا وأفريقيا؟",
        answers: ["البحر الأحمر", "البحر المتوسط", "بحر العرب", "بحر قزوين"],
        correct: 1,
        category: "general",
        difficulty: "medium"
    },
    {
        question: "من رسم لوحة الموناليزا؟",
        answers: ["فان جوخ", "ليوناردو دا فينشي", "بيكاسو", "رافائيل"],
        correct: 1,
        category: "general",
        difficulty: "medium"
    },
    {
        question: "ما العنصر الكيميائي الذي رمزه Fe؟",
        answers: ["الفلور", "الحديد", "الفضة", "الفرانسيوم"],
        correct: 1,
        category: "general",
        difficulty: "medium"
    },
    {
        question: "ما أطول نهر في أوروبا؟",
        answers: ["الدانوب", "الفولغا", "الراين", "السين"],
        correct: 1,
        category: "general",
        difficulty: "medium"
    },
    {
        question: "في أي قارة تقع دولة الأرجنتين؟",
        answers: ["أوروبا", "آسيا", "أمريكا الجنوبية", "أفريقيا"],
        correct: 2,
        category: "general",
        difficulty: "medium"
    },
    {
        question: "ما اسم أكبر صحراء حارة في العالم؟",
        answers: ["صحراء جوبي", "الصحراء الكبرى", "صحراء كالاهاري", "صحراء أتاكاما"],
        correct: 1,
        category: "general",
        difficulty: "medium"
    },
    {
        question: "من كتب مسرحية روميو وجولييت؟",
        answers: ["تشارلز ديكنز", "ويليام شكسبير", "مارك توين", "جورج أورويل"],
        correct: 1,
        category: "general",
        difficulty: "medium"
    },
    {
        question: "ما عاصمة سويسرا؟",
        answers: ["زيورخ", "جنيف", "برن", "لوزان"],
        correct: 2,
        category: "general",
        difficulty: "medium"
    },
    {
        question: "أي كوكب يمتلك حلقات بارزة جدًا؟",
        answers: ["زحل", "عطارد", "المريخ", "الزهرة"],
        correct: 0,
        category: "general",
        difficulty: "medium"
    },
    {
        question: "ما العملة الرسمية لليابان؟",
        answers: ["اليوان", "الوون", "الين", "الدولار"],
        correct: 2,
        category: "general",
        difficulty: "medium"
    },
    {
        question: "ما اسم العلم الذي يدرس الزلازل؟",
        answers: ["علم الزلازل", "علم الأحياء", "علم الفلك", "علم الأحياء الدقيقة"],
        correct: 0,
        category: "general",
        difficulty: "medium"
    },
    {
        question: "ما أصغر قارة من حيث المساحة؟",
        answers: ["أوروبا", "أستراليا", "أفريقيا", "أمريكا الجنوبية"],
        correct: 1,
        category: "general",
        difficulty: "medium"
    },
    {
        question: "ما عاصمة النمسا؟",
        answers: ["براغ", "فيينا", "بودابست", "وارسو"],
        correct: 1,
        category: "general",
        difficulty: "medium"
    },
    {
        question: "ما اسم أكبر بحيرة عذبة في العالم من حيث المساحة؟",
        answers: ["بحيرة فيكتوريا", "بحيرة سوبيريور", "بحيرة بايكال", "بحيرة تنجانيقا"],
        correct: 1,
        category: "general",
        difficulty: "medium"
    },
    {
        question: "أي معدن يُستخدم كثيرًا في صناعة الأسلاك الكهربائية؟",
        answers: ["النحاس", "الذهب", "الرصاص", "الزئبق"],
        correct: 0,
        category: "general",
        difficulty: "medium"
    },
    {
        question: "ما اسم المجرة التي توجد فيها المجموعة الشمسية؟",
        answers: ["أندروميدا", "درب التبانة", "سحابة ماجلان", "المجرة الحلزونية الكبرى"],
        correct: 1,
        category: "general",
        difficulty: "medium"
    },
    {
        question: "من اكتشف البنسلين؟",
        answers: ["ألكسندر فليمنغ", "لويس باستور", "إسحاق نيوتن", "جيمس واط"],
        correct: 0,
        category: "general",
        difficulty: "medium"
    },
    {
        question: "ما الدولة التي تقع فيها مدينة إسطنبول؟",
        answers: ["اليونان", "تركيا", "بلغاريا", "رومانيا"],
        correct: 1,
        category: "general",
        difficulty: "medium"
    },
    {
        question: "ما اسم أكبر محيط من حيث المساحة؟",
        answers: ["الأطلسي", "الهندي", "الهادئ", "المتجمد الجنوبي"],
        correct: 2,
        category: "general",
        difficulty: "medium"
    },
    {
        question: "ما الغاز الذي تحتاجه معظم الكائنات الحية للتنفس؟",
        answers: ["النيتروجين", "الأكسجين", "الهيدروجين", "الهيليوم"],
        correct: 1,
        category: "general",
        difficulty: "medium"
    },
    {
        question: "ما عاصمة البرتغال؟",
        answers: ["مدريد", "لشبونة", "بورتو", "إشبيلية"],
        correct: 1,
        category: "general",
        difficulty: "medium"
    },
    {
        question: "ما اسم القارة التي لا توجد فيها دول ذات سيادة؟",
        answers: ["أفريقيا", "القارة القطبية الجنوبية", "أوروبا", "أستراليا"],
        correct: 1,
        category: "general",
        difficulty: "medium"
    },
    {
        question: "من وضع نظرية النسبية؟",
        answers: ["نيوتن", "ألبرت أينشتاين", "غاليليو", "داروين"],
        correct: 1,
        category: "general",
        difficulty: "medium"
    },
    {
        question: "ما الدولة التي تشتهر ببرج بيزا المائل؟",
        answers: ["إيطاليا", "فرنسا", "إسبانيا", "اليونان"],
        correct: 0,
        category: "general",
        difficulty: "medium"
    },
    {
        question: "ما اسم أعمق نقطة معروفة في محيطات العالم؟",
        answers: ["خندق ماريانا", "خندق بيرو", "خندق اليابان", "خندق تونغا"],
        correct: 0,
        category: "general",
        difficulty: "medium"
    },
    {
        question: "ما عاصمة هولندا؟",
        answers: ["روتردام", "أمستردام", "لاهاي", "أوتريخت"],
        correct: 1,
        category: "general",
        difficulty: "medium"
    },
    {
        question: "ما اسم الجهاز الذي يقيس الضغط الجوي؟",
        answers: ["البارومتر", "الترمومتر", "المانومتر", "البوصلة"],
        correct: 0,
        category: "general",
        difficulty: "medium"
    },
    {
        question: "أي دولة تُعد موطنًا أصليًا للساموراي؟",
        answers: ["الصين", "اليابان", "منغوليا", "الهند"],
        correct: 1,
        category: "general",
        difficulty: "medium"
    },
    {
        question: "ما اسم أكبر كوكب قزم معروف في حزام كويبر؟",
        answers: ["بلوتو", "سيريس", "إيريس", "هاوميا"],
        correct: 2,
        category: "general",
        difficulty: "medium"
    },
    {
        question: "ما اسم القناة التي تربط البحر المتوسط بالبحر الأحمر؟",
        answers: ["قناة بنما", "قناة السويس", "قناة كيل", "قناة كورنث"],
        correct: 1,
        category: "general",
        difficulty: "medium"
    },
    {
        question: "ما عاصمة النرويج؟",
        answers: ["أوسلو", "ستوكهولم", "هلسنكي", "كوبنهاغن"],
        correct: 0,
        category: "general",
        difficulty: "medium"
    },
    {
        question: "ما اسم العملية التي تتحول فيها المادة من الحالة الغازية إلى السائلة؟",
        answers: ["التبخر", "التكثف", "التسامي", "الانصهار"],
        correct: 1,
        category: "general",
        difficulty: "medium"
    },
    {
        question: "ما الدولة التي تقع فيها جبال الألب جزئيًا؟",
        answers: ["سويسرا", "البرتغال", "الدنمارك", "أيرلندا"],
        correct: 0,
        category: "general",
        difficulty: "medium"
    },
    {
        question: "ما اسم أول عنصر في الجدول الدوري؟",
        answers: ["الأكسجين", "الهيدروجين", "الهيليوم", "الكربون"],
        correct: 1,
        category: "general",
        difficulty: "medium"
    },
    {
        question: "ما عاصمة كوريا الجنوبية؟",
        answers: ["بوسان", "سيول", "دايغو", "إنتشون"],
        correct: 1,
        category: "general",
        difficulty: "medium"
    },
    {
        question: "أي محيط يقع بين أفريقيا وأستراليا؟",
        answers: ["الأطلسي", "الهندي", "الهادئ", "المتجمد الشمالي"],
        correct: 1,
        category: "general",
        difficulty: "medium"
    },
    {
        question: "ما اسم الوحدة الأساسية لقياس شدة التيار الكهربائي؟",
        answers: ["الفولت", "الأمبير", "الواط", "الأوم"],
        correct: 1,
        category: "general",
        difficulty: "medium"
    },
    {
        question: "من مؤلف رواية 1984؟",
        answers: ["جورج أورويل", "إرنست همنغواي", "فيكتور هوغو", "تولستوي"],
        correct: 0,
        category: "general",
        difficulty: "medium"
    },
    {
        question: "ما عاصمة السويد؟",
        answers: ["أوسلو", "هلسنكي", "ستوكهولم", "ريكيافيك"],
        correct: 2,
        category: "general",
        difficulty: "medium"
    },
    {
        question: "ما اسم أكبر عضو داخلي في جسم الإنسان؟",
        answers: ["القلب", "الكبد", "الرئة", "المعدة"],
        correct: 1,
        category: "general",
        difficulty: "medium"
    },
    {
        question: "أي كوكب يُعد الأكثر حرارة في المجموعة الشمسية؟",
        answers: ["عطارد", "الزهرة", "المريخ", "المشتري"],
        correct: 1,
        category: "general",
        difficulty: "medium"
    },
    {
        question: "ما عاصمة المكسيك؟",
        answers: ["مونتيري", "مكسيكو سيتي", "غوادالاخارا", "كانكون"],
        correct: 1,
        category: "general",
        difficulty: "medium"
    },
    {
        question: "ما اسم الخط الوهمي الذي يقسم الأرض إلى نصفين شمالي وجنوبي؟",
        answers: ["خط جرينتش", "خط الاستواء", "مدار السرطان", "مدار الجدي"],
        correct: 1,
        category: "general",
        difficulty: "medium"
    },
    {
        question: "ما اسم أكبر دولة في أمريكا الجنوبية من حيث المساحة؟",
        answers: ["الأرجنتين", "البرازيل", "بيرو", "كولومبيا"],
        correct: 1,
        category: "general",
        difficulty: "medium"
    },
    {
        question: "من صاحب نظرية التطور بالانتخاب الطبيعي؟",
        answers: ["داروين", "مندل", "باستور", "فليمنغ"],
        correct: 0,
        category: "general",
        difficulty: "medium"
    },
    {
        question: "ما عاصمة الدنمارك؟",
        answers: ["كوبنهاغن", "أوسلو", "ستوكهولم", "هلسنكي"],
        correct: 0,
        category: "general",
        difficulty: "medium"
    },
    {
        question: "ما اسم أصغر دولة في العالم من حيث المساحة؟",
        answers: ["موناكو", "الفاتيكان", "سان مارينو", "مالطا"],
        correct: 1,
        category: "general",
        difficulty: "medium"
    },
    {
        question: "ما اسم العالم الذي وضع قوانين الحركة الثلاثة؟",
        answers: ["نيوتن", "أينشتاين", "كبلر", "ماكسويل"],
        correct: 0,
        category: "general",
        difficulty: "medium"
    },
    {
        question: "ما اسم البحر الواقع بين شبه الجزيرة العربية وشمال شرق أفريقيا؟",
        answers: ["البحر الأحمر", "البحر الأسود", "بحر العرب", "بحر قزوين"],
        correct: 0,
        category: "general",
        difficulty: "medium"
    },
    {
        question: "ما عاصمة فنلندا؟",
        answers: ["هلسنكي", "تالين", "أوسلو", "ريغا"],
        correct: 0,
        category: "general",
        difficulty: "medium"
    },
    {
        question: "ما اسم العلم الذي يدرس الكائنات الحية؟",
        answers: ["الفيزياء", "الكيمياء", "الأحياء", "الجيولوجيا"],
        correct: 2,
        category: "general",
        difficulty: "medium"
    },

    // =========================
    // 🔴 HARD — 50 سؤال
    // =========================

    {
        question: "ما عاصمة كازاخستان حاليًا؟",
        answers: ["ألماتي", "أستانا", "طشقند", "بيشكيك"],
        correct: 1,
        category: "general",
        difficulty: "hard"
    },
    {
        question: "ما العنصر الذي يحمل العدد الذري 79؟",
        answers: ["الفضة", "الذهب", "البلاتين", "الزئبق"],
        correct: 1,
        category: "general",
        difficulty: "hard"
    },
    {
        question: "ما أقدم جامعة ما زالت تعمل باستمرار وفق تاريخ تأسيسها التقليدي؟",
        answers: ["جامعة بولونيا", "جامعة أكسفورد", "جامعة القرويين", "جامعة باريس"],
        correct: 2,
        category: "general",
        difficulty: "hard"
    },
    {
        question: "ما اسم أعمق بحيرة في العالم؟",
        answers: ["بحيرة بايكال", "بحيرة سوبيريور", "بحيرة فيكتوريا", "بحيرة تنجانيقا"],
        correct: 0,
        category: "general",
        difficulty: "hard"
    },
    {
        question: "ما الدولة التي كانت تُعرف تاريخيًا باسم سيام؟",
        answers: ["ميانمار", "تايلاند", "كمبوديا", "لاوس"],
        correct: 1,
        category: "general",
        difficulty: "hard"
    },
    {
        question: "ما اسم أقدم ملحمة أدبية معروفة على نطاق واسع؟",
        answers: ["الإلياذة", "ملحمة جلجامش", "الأوديسة", "الإنيادة"],
        correct: 1,
        category: "general",
        difficulty: "hard"
    },
    {
        question: "ما أصغر عظمة في جسم الإنسان؟",
        answers: ["المطرقة", "السندان", "الركاب", "الترقوة"],
        correct: 2,
        category: "general",
        difficulty: "hard"
    },
    {
        question: "ما اسم الطبقة الجوية التي تحتوي على معظم الأوزون الجوي؟",
        answers: ["التروبوسفير", "الستراتوسفير", "الميزوسفير", "الثرموسفير"],
        correct: 1,
        category: "general",
        difficulty: "hard"
    },
    {
        question: "ما اسم المضيق الذي يفصل بين آسيا وأمريكا الشمالية؟",
        answers: ["مضيق جبل طارق", "مضيق بيرينغ", "مضيق ملقا", "مضيق هرمز"],
        correct: 1,
        category: "general",
        difficulty: "hard"
    },
    {
        question: "أي حضارة بنت مدينة ماتشو بيتشو؟",
        answers: ["المايا", "الإنكا", "الأزتك", "الفينيقيون"],
        correct: 1,
        category: "general",
        difficulty: "hard"
    },
    {
        question: "ما اسم أكبر قمر لكوكب زحل؟",
        answers: ["تيتان", "تريتون", "جانيميد", "كاليستو"],
        correct: 0,
        category: "general",
        difficulty: "hard"
    },
    {
        question: "ما العدد الذري للكربون؟",
        answers: ["4", "6", "8", "12"],
        correct: 1,
        category: "general",
        difficulty: "hard"
    },
    {
        question: "من وضع مبدأ عدم اليقين في ميكانيكا الكم؟",
        answers: ["هايزنبرغ", "شرودنغر", "بور", "بلانك"],
        correct: 0,
        category: "general",
        difficulty: "hard"
    },
    {
        question: "ما اسم العملية التي تنتج بها النباتات السكريات باستخدام الضوء؟",
        answers: ["التنفس الخلوي", "البناء الضوئي", "التخمر", "النتح"],
        correct: 1,
        category: "general",
        difficulty: "hard"
    },
    {
        question: "ما أعمق نقطة في المحيطات تقع ضمن أي خندق؟",
        answers: ["خندق تونغا", "خندق ماريانا", "خندق بيرو-تشيلي", "خندق اليابان"],
        correct: 1,
        category: "general",
        difficulty: "hard"
    },
    {
        question: "ما اسم الوحدة الفلكية المستخدمة تقريبًا لقياس المسافات داخل المجموعة الشمسية؟",
        answers: ["السنة الضوئية", "الوحدة الفلكية", "الفرسخ", "الميغابارسك"],
        correct: 1,
        category: "general",
        difficulty: "hard"
    },
    {
        question: "ما الدولة التي تضم إقليم ترانسيلفانيا تاريخيًا؟",
        answers: ["رومانيا", "المجر", "صربيا", "بلغاريا"],
        correct: 0,
        category: "general",
        difficulty: "hard"
    },
    {
        question: "ما اسم أقدم نظام كتابة معروف في بلاد الرافدين؟",
        answers: ["الهيروغليفية", "المسمارية", "الفينيقية", "اللاتينية"],
        correct: 1,
        category: "general",
        difficulty: "hard"
    },
    {
        question: "ما اسم الجسيم الحامل للقوة الكهرومغناطيسية؟",
        answers: ["الفوتون", "الغلوون", "النيوترينو", "بوزون هيغز"],
        correct: 0,
        category: "general",
        difficulty: "hard"
    },
    {
        question: "ما اسم أكبر قمر في المجموعة الشمسية؟",
        answers: ["تيتان", "جانيميد", "كاليستو", "القمر"],
        correct: 1,
        category: "general",
        difficulty: "hard"
    },
    {
        question: "ما عاصمة منغوليا؟",
        answers: ["أستانا", "أولان باتور", "بيشكيك", "طشقند"],
        correct: 1,
        category: "general",
        difficulty: "hard"
    },
    {
        question: "ما اسم البحر المغلق الأكبر في العالم من حيث المساحة؟",
        answers: ["البحر المتوسط", "بحر قزوين", "البحر الأسود", "بحر العرب"],
        correct: 1,
        category: "general",
        difficulty: "hard"
    },
    {
        question: "أي لغة تُعد من اللغات السامية؟",
        answers: ["العربية", "اللاتينية", "اليونانية", "الروسية"],
        correct: 0,
        category: "general",
        difficulty: "hard"
    },
    {
        question: "ما اسم الظاهرة التي يحدث فيها انحراف الضوء عند انتقاله بين وسطين؟",
        answers: ["الانعكاس", "الانكسار", "الحيود", "الاستقطاب"],
        correct: 1,
        category: "general",
        difficulty: "hard"
    },
    {
        question: "ما الوحدة الأساسية لقياس كمية المادة في النظام الدولي؟",
        answers: ["المول", "الكيلوجرام", "الأمبير", "الكلفن"],
        correct: 0,
        category: "general",
        difficulty: "hard"
    },
    {
        question: "ما اسم القارة التي تضم جبال الأنديز؟",
        answers: ["أفريقيا", "أمريكا الجنوبية", "آسيا", "أوروبا"],
        correct: 1,
        category: "general",
        difficulty: "hard"
    },
    {
        question: "من صاحب كتاب الأمير؟",
        answers: ["ميكافيلي", "أفلاطون", "أرسطو", "سقراط"],
        correct: 0,
        category: "general",
        difficulty: "hard"
    },
    {
        question: "ما اسم أكبر صحراء في العالم إذا شملت الصحارى القطبية؟",
        answers: ["الصحراء الكبرى", "صحراء جوبي", "صحراء القطب الجنوبي", "صحراء أتاكاما"],
        correct: 2,
        category: "general",
        difficulty: "hard"
    },
    {
        question: "ما اسم أقدم أبجدية معروفة أثرت في كثير من الأبجديات اللاحقة؟",
        answers: ["الأبجدية الفينيقية", "الأبجدية السنسكريتية", "الأبجدية السيريلية", "الأبجدية الجورجية"],
        correct: 0,
        category: "general",
        difficulty: "hard"
    },
    {
        question: "ما الكوكب الذي يدور حول نفسه في اتجاه معاكس لمعظم الكواكب؟",
        answers: ["المريخ", "الزهرة", "المشتري", "نبتون"],
        correct: 1,
        category: "general",
        difficulty: "hard"
    },
    {
        question: "ما اسم المقياس المستخدم لقياس صلابة المعادن؟",
        answers: ["مقياس ريختر", "مقياس موهس", "مقياس بوفورت", "مقياس ميركالي"],
        correct: 1,
        category: "general",
        difficulty: "hard"
    },
    {
        question: "ما اسم أكبر جزيرة في العالم وليست قارة؟",
        answers: ["مدغشقر", "جرينلاند", "غينيا الجديدة", "بورنيو"],
        correct: 1,
        category: "general",
        difficulty: "hard"
    },
    {
        question: "ما اسم العالم الذي اكتشف قوانين حركة الكواكب؟",
        answers: ["كبلر", "نيوتن", "غاليلو", "كوبرنيكوس"],
        correct: 0,
        category: "general",
        difficulty: "hard"
    },
    {
        question: "ما اسم أقدم حضارة معروفة في بلاد الرافدين؟",
        answers: ["السومريون", "الرومان", "الإغريق", "الفرس"],
        correct: 0,
        category: "general",
        difficulty: "hard"
    },
    {
        question: "ما اسم أقرب نجم إلى الشمس؟",
        answers: ["سيريوس", "بروكسيما قنطورس", "منكب الجوزاء", "النسر الواقع"],
        correct: 1,
        category: "general",
        difficulty: "hard"
    },
    {
        question: "ما اسم المادة الوراثية الموجودة في معظم الكائنات الحية؟",
        answers: ["DNA", "ATP", "الجلوكوز", "الكولاجين"],
        correct: 0,
        category: "general",
        difficulty: "hard"
    },
    {
        question: "ما اسم النهر الذي يمر بمدينة بودابست؟",
        answers: ["الراين", "الدانوب", "الفولغا", "الإلبه"],
        correct: 1,
        category: "general",
        difficulty: "hard"
    },
    {
        question: "ما اسم الحضارة التي استخدمت نظام الكتابة الهيروغليفية بشكل بارز؟",
        answers: ["المصرية القديمة", "الرومانية", "الفارسية", "المغولية"],
        correct: 0,
        category: "general",
        difficulty: "hard"
    },
    {
        question: "ما اسم الوحدة التي تقيس التردد؟",
        answers: ["الهرتز", "الجول", "النيوتن", "الباسكال"],
        correct: 0,
        category: "general",
        difficulty: "hard"
    },
    {
        question: "ما اسم أكبر كوكب صخري في المجموعة الشمسية؟",
        answers: ["الأرض", "المريخ", "الزهرة", "عطارد"],
        correct: 0,
        category: "general",
        difficulty: "hard"
    },
    {
        question: "ما اسم المضيق الذي يصل البحر المتوسط بالمحيط الأطلسي؟",
        answers: ["مضيق هرمز", "مضيق جبل طارق", "مضيق بيرينغ", "مضيق ملقا"],
        correct: 1,
        category: "general",
        difficulty: "hard"
    },
    {
        question: "ما اسم العالم الذي اقترح نموذجًا شمسيًا للمجموعة الشمسية في عصر النهضة؟",
        answers: ["كوبرنيكوس", "بطليموس", "أرخميدس", "إقليدس"],
        correct: 0,
        category: "general",
        difficulty: "hard"
    },
    {
        question: "ما اسم أعلى جبل في العالم فوق مستوى سطح البحر؟",
        answers: ["كيليمنجارو", "إيفرست", "إلبروس", "مون بلان"],
        correct: 1,
        category: "general",
        difficulty: "hard"
    },
    {
        question: "ما اسم العملية التي تفقد فيها الذرة إلكترونًا أو أكثر؟",
        answers: ["التأين", "التكاثف", "التبلور", "التسامي"],
        correct: 0,
        category: "general",
        difficulty: "hard"
    },
    {
        question: "ما اسم العلم الذي يدرس طبقات الأرض وبنيتها الداخلية؟",
        answers: ["علم الأعصاب", "علم الجيولوجيا", "علم الفلك", "علم الأحياء"],
        correct: 1,
        category: "general",
        difficulty: "hard"
    },
    {
        question: "ما اسم أول عنصر من الغازات النبيلة في الجدول الدوري؟",
        answers: ["النيون", "الهيليوم", "الأرجون", "الكريبتون"],
        correct: 1,
        category: "general",
        difficulty: "hard"
    },
    {
        question: "ما اسم الخط الذي يمر بمدينة جرينتش ويُستخدم أساسًا لخط الطول صفر؟",
        answers: ["خط الاستواء", "خط جرينتش", "مدار السرطان", "مدار الجدي"],
        correct: 1,
        category: "general",
        difficulty: "hard"
    },
    {
        question: "ما اسم الجهاز الذي يُستخدم لرصد الأجرام السماوية البعيدة؟",
        answers: ["المجهر", "التلسكوب", "البارومتر", "السيسموجراف"],
        correct: 1,
        category: "general",
        difficulty: "hard"
    },
    {
        question: "ما اسم أصغر كوكب في المجموعة الشمسية؟",
        answers: ["المريخ", "عطارد", "الزهرة", "الأرض"],
        correct: 1,
        category: "general",
        difficulty: "hard"
    },
    {
        question: "ما اسم العالم الذي ارتبط بتجارب البازلاء وقوانين الوراثة؟",
        answers: ["غريغور مندل", "لويس باستور", "روبرت هوك", "أنطوني فان ليفينهوك"],
        correct: 0,
        category: "general",
        difficulty: "hard"
    },
    {
        question: "ما اسم النجم الذي يُستخدم تقريبًا لتحديد اتجاه الشمال في نصف الكرة الشمالي؟",
        answers: ["الشعرى اليمانية", "النجم القطبي", "منكب الجوزاء", "النسر الواقع"],
        correct: 1,
        category: "general",
        difficulty: "hard"
    },
    {
        question: "ما اسم أقدم حضارة طورت نظامًا متقدمًا للكتابة المسمارية؟",
        answers: ["السومريون", "الفينيقيون", "الرومان", "الإغريق"],
        correct: 0,
        category: "general",
        difficulty: "hard"
    },

// ============================================
// 🔬 علوم — 120 سؤال
// 40 Easy + 40 Medium + 40 Hard
// ============================================

// =========================
// 🟢 EASY — 40
// =========================

{
    question: "ما الكوكب المعروف بالكوكب الأحمر؟",
    answers: ["المريخ", "الزهرة", "المشتري", "عطارد"],
    correct: 0,
    category: "science",
    difficulty: "easy"
},
{
    question: "ما الغاز الذي يحتاجه الإنسان للتنفس؟",
    answers: ["الأكسجين", "الهيدروجين", "الهيليوم", "النيتروجين"],
    correct: 0,
    category: "science",
    difficulty: "easy"
},
{
    question: "ما العضو الذي يضخ الدم في جسم الإنسان؟",
    answers: ["القلب", "الرئة", "الكبد", "المعدة"],
    correct: 0,
    category: "science",
    difficulty: "easy"
},
{
    question: "ما القوة التي تجذب الأشياء نحو الأرض؟",
    answers: ["الجاذبية", "المغناطيسية", "الاحتكاك", "الطفو"],
    correct: 0,
    category: "science",
    difficulty: "easy"
},
{
    question: "ما الحالة التي يكون عليها الماء عند درجة حرارة الغرفة عادةً؟",
    answers: ["صلبة", "سائلة", "غازية", "بلازما"],
    correct: 1,
    category: "science",
    difficulty: "easy"
},
{
    question: "ما أقرب كوكب إلى الشمس؟",
    answers: ["الزهرة", "الأرض", "عطارد", "المريخ"],
    correct: 2,
    category: "science",
    difficulty: "easy"
},
{
    question: "ما العضو المسؤول بشكل أساسي عن التنفس؟",
    answers: ["القلب", "الرئتان", "الكبد", "الكليتان"],
    correct: 1,
    category: "science",
    difficulty: "easy"
},
{
    question: "ما مصدر الضوء والحرارة الرئيسي للأرض؟",
    answers: ["القمر", "الشمس", "المريخ", "النجوم"],
    correct: 1,
    category: "science",
    difficulty: "easy"
},
{
    question: "ما وحدة قياس درجة الحرارة في النظام المئوي؟",
    answers: ["الدرجة المئوية", "الكيلوجرام", "المتر", "اللتر"],
    correct: 0,
    category: "science",
    difficulty: "easy"
},
{
    question: "ما العضو الذي يساعد على الرؤية؟",
    answers: ["الأذن", "العين", "الأنف", "الجلد"],
    correct: 1,
    category: "science",
    difficulty: "easy"
},
{
    question: "ما أكبر كوكب في المجموعة الشمسية؟",
    answers: ["زحل", "المشتري", "نبتون", "الأرض"],
    correct: 1,
    category: "science",
    difficulty: "easy"
},
{
    question: "ما الغاز الذي تطلقه النباتات أثناء البناء الضوئي؟",
    answers: ["الأكسجين", "النيتروجين", "الهيدروجين", "الهيليوم"],
    correct: 0,
    category: "science",
    difficulty: "easy"
},
{
    question: "ما العضو الذي يساعد الإنسان على السمع؟",
    answers: ["العين", "الأذن", "اللسان", "الأنف"],
    correct: 1,
    category: "science",
    difficulty: "easy"
},
{
    question: "ما المادة التي تتكون منها معظم الأسنان والعظام؟",
    answers: ["الزجاج", "معادن وأملاح معدنية", "الخشب", "المطاط"],
    correct: 1,
    category: "science",
    difficulty: "easy"
},
{
    question: "ما اسم العملية التي تصنع بها النباتات غذاءها باستخدام الضوء؟",
    answers: ["التنفس", "البناء الضوئي", "الهضم", "التبخر"],
    correct: 1,
    category: "science",
    difficulty: "easy"
},
{
    question: "ما الكوكب الذي نعيش عليه؟",
    answers: ["المريخ", "الأرض", "الزهرة", "زحل"],
    correct: 1,
    category: "science",
    difficulty: "easy"
},
{
    question: "ما الجهاز الذي يقيس درجة الحرارة؟",
    answers: ["البارومتر", "الترمومتر", "البوصلة", "المجهر"],
    correct: 1,
    category: "science",
    difficulty: "easy"
},
{
    question: "ما الحالة الصلبة للماء؟",
    answers: ["البخار", "الجليد", "الندى", "الضباب"],
    correct: 1,
    category: "science",
    difficulty: "easy"
},
{
    question: "ما العضو الذي ينقي الدم ويساعد في تكوين البول؟",
    answers: ["الكليتان", "القلب", "الرئتان", "المعدة"],
    correct: 0,
    category: "science",
    difficulty: "easy"
},
{
    question: "ما المعدن الذي ينجذب بقوة إلى المغناطيس؟",
    answers: ["الحديد", "الذهب", "الفضة", "الألومنيوم"],
    correct: 0,
    category: "science",
    difficulty: "easy"
},
{
    question: "ما اسم القمر الطبيعي للأرض؟",
    answers: ["تيتان", "القمر", "جانيميد", "فوبوس"],
    correct: 1,
    category: "science",
    difficulty: "easy"
},
{
    question: "ما الكوكب المعروف بحلقاته الواضحة؟",
    answers: ["عطارد", "زحل", "المريخ", "الزهرة"],
    correct: 1,
    category: "science",
    difficulty: "easy"
},
{
    question: "ما العضو الذي يساعد على هضم الطعام؟",
    answers: ["المعدة", "القلب", "العين", "الأذن"],
    correct: 0,
    category: "science",
    difficulty: "easy"
},
{
    question: "ما الحاسة المرتبطة بالأنف؟",
    answers: ["الشم", "السمع", "البصر", "اللمس"],
    correct: 0,
    category: "science",
    difficulty: "easy"
},
{
    question: "ما الحاسة المرتبطة باللسان؟",
    answers: ["الشم", "التذوق", "السمع", "البصر"],
    correct: 1,
    category: "science",
    difficulty: "easy"
},
{
    question: "ما الحاسة المرتبطة بالجلد؟",
    answers: ["اللمس", "الشم", "السمع", "التذوق"],
    correct: 0,
    category: "science",
    difficulty: "easy"
},
{
    question: "ما الكوكب الأقرب إلى الأرض في الحجم تقريبًا؟",
    answers: ["الزهرة", "المشتري", "نبتون", "عطارد"],
    correct: 0,
    category: "science",
    difficulty: "easy"
},
{
    question: "ما اسم تحول الماء من سائل إلى غاز؟",
    answers: ["التجمد", "التبخر", "الانصهار", "التكثف"],
    correct: 1,
    category: "science",
    difficulty: "easy"
},
{
    question: "ما اسم تحول الماء من غاز إلى سائل؟",
    answers: ["التبخر", "التكثف", "التجمد", "الانصهار"],
    correct: 1,
    category: "science",
    difficulty: "easy"
},
{
    question: "ما اسم تحول الماء من سائل إلى صلب؟",
    answers: ["التبخر", "التكثف", "التجمد", "التسامي"],
    correct: 2,
    category: "science",
    difficulty: "easy"
},
{
    question: "ما الوحدة الأساسية لقياس الكتلة في النظام الدولي؟",
    answers: ["المتر", "الكيلوجرام", "الثانية", "الأمبير"],
    correct: 1,
    category: "science",
    difficulty: "easy"
},
{
    question: "ما الوحدة الأساسية لقياس الزمن في النظام الدولي؟",
    answers: ["الثانية", "الدقيقة", "الساعة", "اليوم"],
    correct: 0,
    category: "science",
    difficulty: "easy"
},
{
    question: "ما اسم الجهاز الذي يكبر الأشياء الصغيرة جدًا لرؤيتها؟",
    answers: ["التلسكوب", "المجهر", "البارومتر", "البوصلة"],
    correct: 1,
    category: "science",
    difficulty: "easy"
},
{
    question: "ما اسم المسار الذي تسلكه الأرض حول الشمس؟",
    answers: ["المدار", "المحور", "خط الاستواء", "المجرة"],
    correct: 0,
    category: "science",
    difficulty: "easy"
},
{
    question: "ما الذي يدور حول الأرض؟",
    answers: ["الشمس", "القمر", "المريخ", "المشتري"],
    correct: 1,
    category: "science",
    difficulty: "easy"
},
{
    question: "ما الغاز الأكثر وفرة في الغلاف الجوي للأرض؟",
    answers: ["الأكسجين", "النيتروجين", "ثاني أكسيد الكربون", "الهيدروجين"],
    correct: 1,
    category: "science",
    difficulty: "easy"
},
{
    question: "ما اسم المادة التي تعطي النباتات لونها الأخضر؟",
    answers: ["الهيموغلوبين", "الكلوروفيل", "الكيراتين", "الكولاجين"],
    correct: 1,
    category: "science",
    difficulty: "easy"
},
{
    question: "ما الكوكب الثاني من حيث البعد عن الشمس؟",
    answers: ["الأرض", "الزهرة", "المريخ", "عطارد"],
    correct: 1,
    category: "science",
    difficulty: "easy"
},
{
    question: "ما القوة التي تعيق حركة جسم عند احتكاكه بسطح؟",
    answers: ["الجاذبية", "الاحتكاك", "الطفو", "الكهرباء"],
    correct: 1,
    category: "science",
    difficulty: "easy"
},
{
    question: "ما اسم مركز الذرة؟",
    answers: ["الإلكترون", "النواة", "الغلاف", "الفوتون"],
    correct: 1,
    category: "science",
    difficulty: "easy"
},

// =========================
// 🟡 MEDIUM — 40
// =========================

{
    question: "ما أصغر وحدة أساسية تحتفظ بخواص العنصر الكيميائية؟",
    answers: ["الذرة", "الخلية", "الجزيء", "النسيج"],
    correct: 0,
    category: "science",
    difficulty: "medium"
},
{
    question: "ما الرمز الكيميائي للصوديوم؟",
    answers: ["So", "Na", "S", "Sd"],
    correct: 1,
    category: "science",
    difficulty: "medium"
},
{
    question: "ما الرمز الكيميائي للحديد؟",
    answers: ["Ir", "Fe", "H", "Fd"],
    correct: 1,
    category: "science",
    difficulty: "medium"
},
{
    question: "ما العدد الذري للهيدروجين؟",
    answers: ["1", "2", "7", "8"],
    correct: 0,
    category: "science",
    difficulty: "medium"
},
{
    question: "ما الغاز الذي يشكل النسبة الأكبر من الغلاف الجوي للأرض؟",
    answers: ["الأكسجين", "النيتروجين", "الأرجون", "ثاني أكسيد الكربون"],
    correct: 1,
    category: "science",
    difficulty: "medium"
},
{
    question: "ما اسم الجزيء الذي يحمل المعلومات الوراثية في معظم الكائنات الحية؟",
    answers: ["DNA", "ATP", "الجلوكوز", "الهيموغلوبين"],
    correct: 0,
    category: "science",
    difficulty: "medium"
},
{
    question: "ما العضية التي تُعرف بأنها مركز إنتاج الطاقة في الخلية؟",
    answers: ["النواة", "الميتوكوندريا", "الريبوسوم", "الجدار الخلوي"],
    correct: 1,
    category: "science",
    difficulty: "medium"
},
{
    question: "ما العضية التي تحتوي على المادة الوراثية في الخلايا حقيقية النواة؟",
    answers: ["النواة", "الريبوسوم", "الفجوة", "الجسيم الحال"],
    correct: 0,
    category: "science",
    difficulty: "medium"
},
{
    question: "ما وحدة قياس القوة في النظام الدولي؟",
    answers: ["الجول", "النيوتن", "الواط", "الباسكال"],
    correct: 1,
    category: "science",
    difficulty: "medium"
},
{
    question: "ما وحدة قياس الطاقة في النظام الدولي؟",
    answers: ["الجول", "النيوتن", "الأمبير", "الهرتز"],
    correct: 0,
    category: "science",
    difficulty: "medium"
},
{
    question: "ما وحدة قياس القدرة الكهربائية؟",
    answers: ["الفولت", "الواط", "الأوم", "الأمبير"],
    correct: 1,
    category: "science",
    difficulty: "medium"
},
{
    question: "ما وحدة قياس المقاومة الكهربائية؟",
    answers: ["الأوم", "الفولت", "الواط", "الجول"],
    correct: 0,
    category: "science",
    difficulty: "medium"
},
{
    question: "ما وحدة قياس التردد؟",
    answers: ["الهرتز", "النيوتن", "الباسكال", "الكولوم"],
    correct: 0,
    category: "science",
    difficulty: "medium"
},
{
    question: "ما سرعة الضوء في الفراغ تقريبًا؟",
    answers: ["300 ألف كم/ث", "30 ألف كم/ث", "3 آلاف كم/ث", "3 ملايين كم/ث"],
    correct: 0,
    category: "science",
    difficulty: "medium"
},
{
    question: "ما اسم القوة التي تحفظ الكواكب في مداراتها حول الشمس؟",
    answers: ["الجاذبية", "الاحتكاك", "الكهرباء", "المغناطيسية"],
    correct: 0,
    category: "science",
    difficulty: "medium"
},
{
    question: "ما الطبقة الجوية التي توجد فيها معظم ظواهر الطقس؟",
    answers: ["الستراتوسفير", "التروبوسفير", "الميزوسفير", "الثرموسفير"],
    correct: 1,
    category: "science",
    difficulty: "medium"
},
{
    question: "أين توجد طبقة الأوزون بشكل رئيسي؟",
    answers: ["التروبوسفير", "الستراتوسفير", "الميزوسفير", "الإكسوسفير"],
    correct: 1,
    category: "science",
    difficulty: "medium"
},
{
    question: "ما اسم العملية التي تنقسم فيها الخلية إلى خليتين متماثلتين تقريبًا؟",
    answers: ["الانقسام المتساوي", "الانقسام الاختزالي", "الإخصاب", "الطفرة"],
    correct: 0,
    category: "science",
    difficulty: "medium"
},
{
    question: "ما نوع الانقسام الذي ينتج خلايا جنسية تحتوي على نصف عدد الكروموسومات؟",
    answers: ["الانقسام المتساوي", "الانقسام الاختزالي", "الانشطار الثنائي", "التبرعم"],
    correct: 1,
    category: "science",
    difficulty: "medium"
},
{
    question: "ما المادة التي تعطي الدم لونه الأحمر؟",
    answers: ["الكلوروفيل", "الهيموغلوبين", "الميلانين", "الكيراتين"],
    correct: 1,
    category: "science",
    difficulty: "medium"
},
{
    question: "ما الوعاء الدموي الذي ينقل الدم بعيدًا عن القلب؟",
    answers: ["الوريد", "الشريان", "الشعيرة", "الحويصلة"],
    correct: 1,
    category: "science",
    difficulty: "medium"
},
{
    question: "ما الوعاء الدموي الذي يعيد الدم إلى القلب؟",
    answers: ["الشريان", "الوريد", "الشعيرة", "الأبهر فقط"],
    correct: 1,
    category: "science",
    difficulty: "medium"
},
{
    question: "ما أكبر عضو في جسم الإنسان؟",
    answers: ["الكبد", "الجلد", "القلب", "الرئة"],
    correct: 1,
    category: "science",
    difficulty: "medium"
},
{
    question: "ما أكبر عضو داخلي في جسم الإنسان؟",
    answers: ["الكبد", "القلب", "الرئة", "المعدة"],
    correct: 0,
    category: "science",
    difficulty: "medium"
},
{
    question: "ما الفيتامين الذي يستطيع الجسم إنتاجه عند تعرض الجلد لأشعة الشمس؟",
    answers: ["فيتامين A", "فيتامين B12", "فيتامين C", "فيتامين D"],
    correct: 3,
    category: "science",
    difficulty: "medium"
},
{
    question: "ما الرقم الهيدروجيني للماء النقي عند درجة حرارة 25 درجة مئوية تقريبًا؟",
    answers: ["3", "5", "7", "9"],
    correct: 2,
    category: "science",
    difficulty: "medium"
},
{
    question: "ما العنصر الأكثر وفرة في الكون؟",
    answers: ["الأكسجين", "الهيدروجين", "الكربون", "الحديد"],
    correct: 1,
    category: "science",
    difficulty: "medium"
},
{
    question: "ما الكوكب المعروف بأنه يمتلك أكبر عدد من الأقمار المؤكدة في التصنيفات الحديثة؟",
    answers: ["الأرض", "المريخ", "زحل", "الزهرة"],
    correct: 2,
    category: "science",
    difficulty: "medium"
},
{
    question: "ما اسم أكبر قمر في المجموعة الشمسية؟",
    answers: ["تيتان", "جانيميد", "القمر", "تريتون"],
    correct: 1,
    category: "science",
    difficulty: "medium"
},
{
    question: "ما اسم المجرة التي تنتمي إليها المجموعة الشمسية؟",
    answers: ["أندروميدا", "درب التبانة", "مثلث", "سحابة ماجلان"],
    correct: 1,
    category: "science",
    difficulty: "medium"
},
{
    question: "ما اسم أقرب نجم إلى الشمس؟",
    answers: ["الشعرى اليمانية", "بروكسيما قنطورس", "النجم القطبي", "منكب الجوزاء"],
    correct: 1,
    category: "science",
    difficulty: "medium"
},
{
    question: "ما اسم العملية التي تتحول فيها المادة من صلب إلى غاز مباشرة؟",
    answers: ["الانصهار", "التسامي", "التكثف", "التجمد"],
    correct: 1,
    category: "science",
    difficulty: "medium"
},
{
    question: "ما نوع الرابطة الموجودة بين ذرتي الهيدروجين والأكسجين في جزيء الماء؟",
    answers: ["تساهمية", "فلزية", "نووية", "مغناطيسية"],
    correct: 0,
    category: "science",
    difficulty: "medium"
},
{
    question: "ما اسم الجسيم سالب الشحنة في الذرة؟",
    answers: ["البروتون", "النيوترون", "الإلكترون", "النواة"],
    correct: 2,
    category: "science",
    difficulty: "medium"
},
{
    question: "ما الجسيم الذي لا يحمل شحنة كهربائية؟",
    answers: ["البروتون", "الإلكترون", "النيوترون", "البوزيترون"],
    correct: 2,
    category: "science",
    difficulty: "medium"
},
{
    question: "ما الجسيم ذو الشحنة الموجبة في الذرة؟",
    answers: ["الإلكترون", "النيوترون", "البروتون", "الفوتون"],
    correct: 2,
    category: "science",
    difficulty: "medium"
},
{
    question: "ما اسم الجهاز المستخدم لتسجيل الموجات الزلزالية؟",
    answers: ["البارومتر", "السيزموجراف", "الترمومتر", "التلسكوب"],
    correct: 1,
    category: "science",
    difficulty: "medium"
},
{
    question: "ما العلم الذي يدرس الصخور وطبقات الأرض؟",
    answers: ["علم الجيولوجيا", "علم الفلك", "علم الأعصاب", "علم النبات"],
    correct: 0,
    category: "science",
    difficulty: "medium"
},
{
    question: "ما العلم الذي يدرس الكائنات الحية؟",
    answers: ["الفيزياء", "الأحياء", "الكيمياء", "الفلك"],
    correct: 1,
    category: "science",
    difficulty: "medium"
},
{
    question: "ما العلم الذي يدرس المادة وتفاعلاتها؟",
    answers: ["الكيمياء", "الفلك", "الجغرافيا", "علم الاجتماع"],
    correct: 0,
    category: "science",
    difficulty: "medium"
},

// =========================
// 🔴 HARD — 40
// =========================

{
    question: "ما العدد الذري للكربون؟",
    answers: ["4", "6", "8", "12"],
    correct: 1,
    category: "science",
    difficulty: "hard"
},
{
    question: "ما العدد الذري للأكسجين؟",
    answers: ["6", "7", "8", "10"],
    correct: 2,
    category: "science",
    difficulty: "hard"
},
{
    question: "ما العدد الذري للذهب؟",
    answers: ["47", "79", "80", "82"],
    correct: 1,
    category: "science",
    difficulty: "hard"
},
{
    question: "ما العنصر الذي رمزه الكيميائي K؟",
    answers: ["الكالسيوم", "البوتاسيوم", "الكربون", "الكوبالت"],
    correct: 1,
    category: "science",
    difficulty: "hard"
},
{
    question: "ما العنصر الذي رمزه الكيميائي W؟",
    answers: ["التنجستن", "التنغستن الزئبقي", "النيكل", "الزنك"],
    correct: 0,
    category: "science",
    difficulty: "hard"
},
{
    question: "ما العنصر الذي رمزه الكيميائي Hg؟",
    answers: ["الفضة", "الزئبق", "الذهب", "الهيدروجين"],
    correct: 1,
    category: "science",
    difficulty: "hard"
},
{
    question: "ما اسم الجسيم المسؤول عن نقل القوة الكهرومغناطيسية؟",
    answers: ["الفوتون", "الغلوون", "النيوترينو", "البروتون"],
    correct: 0,
    category: "science",
    difficulty: "hard"
},
{
    question: "ما الجسيم المرتبط بنقل القوة النووية الشديدة؟",
    answers: ["الفوتون", "الغلوون", "الإلكترون", "النيوترينو"],
    correct: 1,
    category: "science",
    difficulty: "hard"
},
{
    question: "ما اسم البوزون المرتبط بآلية اكتساب الجسيمات للكتلة في النموذج القياسي؟",
    answers: ["بوزون هيغز", "الفوتون", "الغلوون", "البوزيترون"],
    correct: 0,
    category: "science",
    difficulty: "hard"
},
{
    question: "من صاغ مبدأ عدم اليقين في ميكانيكا الكم؟",
    answers: ["فيرنر هايزنبرغ", "إسحاق نيوتن", "جيمس كليرك ماكسويل", "مايكل فاراداي"],
    correct: 0,
    category: "science",
    difficulty: "hard"
},
{
    question: "من وضع معادلة الموجة الشهيرة في ميكانيكا الكم؟",
    answers: ["إرفين شرودنغر", "نيلز بور", "ألبرت أينشتاين", "ماكس بلانك"],
    correct: 0,
    category: "science",
    difficulty: "hard"
},
{
    question: "ما القانون الذي يربط بين الجهد والتيار والمقاومة؟",
    answers: ["قانون نيوتن", "قانون أوم", "قانون بويل", "قانون هوك"],
    correct: 1,
    category: "science",
    difficulty: "hard"
},
{
    question: "ما العلاقة الصحيحة لقانون أوم؟",
    answers: ["V = IR", "P = IV فقط", "F = ma", "E = mc²"],
    correct: 0,
    category: "science",
    difficulty: "hard"
},
{
    question: "ما اسم القانون الذي ينص على أن الطاقة لا تفنى ولا تستحدث من العدم؟",
    answers: ["حفظ الطاقة", "قانون أوم", "قانون باسكال", "قانون الطفو"],
    correct: 0,
    category: "science",
    difficulty: "hard"
},
{
    question: "ما اسم القانون الذي يصف العلاقة بين الضغط والحجم لغاز عند ثبات درجة الحرارة؟",
    answers: ["قانون بويل", "قانون شارل", "قانون نيوتن", "قانون كولوم"],
    correct: 0,
    category: "science",
    difficulty: "hard"
},
{
    question: "ما القانون الذي يربط حجم الغاز بدرجة حرارته المطلقة عند ثبات الضغط؟",
    answers: ["قانون شارل", "قانون بويل", "قانون أوم", "قانون كبلر"],
    correct: 0,
    category: "science",
    difficulty: "hard"
},
{
    question: "ما اسم الثابت الذي يربط طاقة الفوتون بتردده؟",
    answers: ["ثابت بلانك", "ثابت الجاذبية", "ثابت الغاز", "ثابت أفوجادرو"],
    correct: 0,
    category: "science",
    difficulty: "hard"
},
{
    question: "ما قيمة عدد أفوجادرو تقريبًا؟",
    answers: ["6.022 × 10²³", "9.81 × 10²", "3.00 × 10⁸", "1.602 × 10⁻¹⁹"],
    correct: 0,
    category: "science",
    difficulty: "hard"
},
{
    question: "ما قيمة شحنة الإلكترون الأساسية تقريبًا؟",
    answers: ["1.602 × 10⁻¹⁹ كولوم", "9.81 × 10⁻²٧ كولوم", "6.022 × 10²³ كولوم", "3.00 × 10⁸ كولوم"],
    correct: 0,
    category: "science",
    difficulty: "hard"
},
{
    question: "ما الوحدة المستخدمة لقياس النشاط الإشعاعي في النظام الدولي؟",
    answers: ["البكريل", "الجول", "النيوتن", "التسلا"],
    correct: 0,
    category: "science",
    difficulty: "hard"
},
{
    question: "ما الوحدة الأساسية لقياس كمية المادة في النظام الدولي؟",
    answers: ["المول", "الكيلوجرام", "الكلفن", "الأمبير"],
    correct: 0,
    category: "science",
    difficulty: "hard"
},
{
    question: "ما الوحدة الأساسية لدرجة الحرارة الديناميكية الحرارية في النظام الدولي؟",
    answers: ["الكلفن", "المئوية", "الفهرنهايت", "الجول"],
    correct: 0,
    category: "science",
    difficulty: "hard"
},
{
    question: "ما اسم الجزيء الذي يعمل كعملة رئيسية للطاقة في الخلية؟",
    answers: ["ATP", "DNA", "RNA", "ADP فقط"],
    correct: 0,
    category: "science",
    difficulty: "hard"
},
{
    question: "ما الإنزيم الذي يبدأ هضم النشويات في الفم؟",
    answers: ["الأميليز", "البيبسين", "الليباز", "التربسين"],
    correct: 0,
    category: "science",
    difficulty: "hard"
},
{
    question: "أين يحدث معظم إنتاج ATP في الخلايا حقيقية النواة؟",
    answers: ["الميتوكوندريا", "النواة", "جهاز جولجي", "الريبوسومات"],
    correct: 0,
    category: "science",
    difficulty: "hard"
},
{
    question: "ما الحمض النووي الذي يحمل الشفرة الوراثية في معظم الكائنات الحية؟",
    answers: ["DNA", "ATP", "NADH", "الجلوكوز"],
    correct: 0,
    category: "science",
    difficulty: "hard"
},
{
    question: "ما نوع القواعد النيتروجينية الموجودة في DNA؟",
    answers: ["A وT وC وG", "A وU وC وG", "A وT وU وG", "C وU وT وA"],
    correct: 0,
    category: "science",
    difficulty: "hard"
},
{
    question: "أي قاعدة نيتروجينية توجد في RNA بدلًا من الثايمين؟",
    answers: ["اليوراسيل", "الجوانين", "السيتوسين", "الأدينين"],
    correct: 0,
    category: "science",
    difficulty: "hard"
},
{
    question: "ما العملية التي يتم فيها نسخ معلومات DNA إلى RNA؟",
    answers: ["الترجمة", "النسخ", "التضاعف", "الطفرات"],
    correct: 1,
    category: "science",
    difficulty: "hard"
},
{
    question: "ما العملية التي تُستخدم فيها معلومات mRNA لصنع بروتين؟",
    answers: ["الترجمة", "النسخ", "التضاعف", "الانقسام"],
    correct: 0,
    category: "science",
    difficulty: "hard"
},
{
    question: "ما الوحدة الأساسية لبناء البروتينات؟",
    answers: ["الأحماض الأمينية", "الأحماض الدهنية", "النيوكليوتيدات", "السكريات"],
    correct: 0,
    category: "science",
    difficulty: "hard"
},
{
    question: "ما اسم الجزيئات التي تحمل الأحماض الأمينية إلى الريبوسوم أثناء الترجمة؟",
    answers: ["tRNA", "DNA", "ATP فقط", "الدهون"],
    correct: 0,
    category: "science",
    difficulty: "hard"
},
{
    question: "ما اسم المنطقة التي تحدث فيها دورة كربس في الخلية حقيقية النواة؟",
    answers: ["مصفوفة الميتوكوندريا", "النواة", "السيتوبلازم فقط", "جهاز جولجي"],
    correct: 0,
    category: "science",
    difficulty: "hard"
},
{
    question: "ما اسم الصبغة الأساسية التي تمتص الضوء في عملية البناء الضوئي؟",
    answers: ["الكلوروفيل", "الهيموغلوبين", "الميلانين", "الكيراتين"],
    correct: 0,
    category: "science",
    difficulty: "hard"
},
{
    question: "ما الغاز الذي تمتصه النباتات من الهواء أثناء البناء الضوئي؟",
    answers: ["ثاني أكسيد الكربون", "الأكسجين", "الهيدروجين", "الهيليوم"],
    correct: 0,
    category: "science",
    difficulty: "hard"
},
{
    question: "ما الجزء من الدماغ المسؤول بشكل أساسي عن تنسيق الحركة والتوازن؟",
    answers: ["المخيخ", "النخاع المستطيل", "المهاد", "الغدة النخامية"],
    correct: 0,
    category: "science",
    difficulty: "hard"
},
{
    question: "ما الهرمون الذي يخفض مستوى الجلوكوز في الدم؟",
    answers: ["الإنسولين", "الجلوكاجون", "الأدرينالين", "الكورتيزول"],
    correct: 0,
    category: "science",
    difficulty: "hard"
},
{
    question: "ما الهرمون الذي يرفع مستوى الجلوكوز في الدم عند انخفاضه؟",
    answers: ["الجلوكاجون", "الإنسولين", "الميلاتونين", "الثيروكسين"],
    correct: 0,
    category: "science",
    difficulty: "hard"
},
{
    question: "ما اسم الصمام الموجود بين الأذين الأيسر والبطين الأيسر؟",
    answers: ["الصمام المترالي", "الصمام ثلاثي الشرفات", "الصمام الرئوي", "الصمام الأبهري"],
    correct: 0,
    category: "science",
    difficulty: "hard"
},
{
    question: "ما أكبر شريان في جسم الإنسان؟",
    answers: ["الأبهر", "الشريان الرئوي", "الشريان السباتي", "الشريان الكلوي"],
    correct: 0,
    category: "science",
    difficulty: "hard"
},
{
    question: "ما اسم العملية التي تنتقل فيها المادة الوراثية من DNA إلى RNA؟",
    answers: ["النسخ", "الترجمة", "الانقسام الاختزالي", "الطفرة"],
    correct: 0,
    category: "science",
    difficulty: "hard"
},
// ============================================
// 🌍 GEOGRAPHY — 120 سؤال
// 40 Easy + 40 Medium + 40 Hard
// ============================================

// =========================
// 🟢 EASY — 40
// =========================
{
    question: "ما عاصمة مصر؟",
    answers: ["القاهرة", "الإسكندرية", "الجيزة", "الأقصر"],
    correct: 0,
    category: "geography",
    difficulty: "easy"
},
{
    question: "ما أكبر قارة في العالم من حيث المساحة؟",
    answers: ["أفريقيا", "آسيا", "أوروبا", "أمريكا الجنوبية"],
    correct: 1,
    category: "geography",
    difficulty: "easy"
},
{
    question: "ما أكبر محيط في العالم؟",
    answers: ["الأطلسي", "الهندي", "الهادئ", "المتجمد الشمالي"],
    correct: 2,
    category: "geography",
    difficulty: "easy"
},
{
    question: "ما عاصمة فرنسا؟",
    answers: ["مدريد", "باريس", "روما", "برلين"],
    correct: 1,
    category: "geography",
    difficulty: "easy"
},
{
    question: "ما عاصمة إيطاليا؟",
    answers: ["روما", "ميلانو", "نابولي", "تورينو"],
    correct: 0,
    category: "geography",
    difficulty: "easy"
},
{
    question: "ما عاصمة اليابان؟",
    answers: ["كيوتو", "أوساكا", "طوكيو", "هيروشيما"],
    correct: 2,
    category: "geography",
    difficulty: "easy"
},
{
    question: "في أي قارة تقع الصحراء الكبرى؟",
    answers: ["آسيا", "أفريقيا", "أوروبا", "أستراليا"],
    correct: 1,
    category: "geography",
    difficulty: "easy"
},
{
    question: "ما أعلى جبل فوق مستوى سطح البحر؟",
    answers: ["إيفرست", "كيليمنجارو", "مون بلان", "كليمنجارو"],
    correct: 0,
    category: "geography",
    difficulty: "easy"
},
{
    question: "ما عاصمة المملكة المتحدة؟",
    answers: ["مانشستر", "لندن", "ليفربول", "إدنبرة"],
    correct: 1,
    category: "geography",
    difficulty: "easy"
},
{
    question: "ما عاصمة ألمانيا؟",
    answers: ["ميونخ", "برلين", "هامبورغ", "فرانكفورت"],
    correct: 1,
    category: "geography",
    difficulty: "easy"
},
{
    question: "ما عاصمة إسبانيا؟",
    answers: ["برشلونة", "مدريد", "إشبيلية", "فالنسيا"],
    correct: 1,
    category: "geography",
    difficulty: "easy"
},
{
    question: "ما عاصمة السعودية؟",
    answers: ["جدة", "مكة", "الرياض", "المدينة المنورة"],
    correct: 2,
    category: "geography",
    difficulty: "easy"
},
{
    question: "ما عاصمة الإمارات العربية المتحدة؟",
    answers: ["دبي", "أبوظبي", "الشارقة", "العين"],
    correct: 1,
    category: "geography",
    difficulty: "easy"
},
{
    question: "ما عاصمة تركيا؟",
    answers: ["إسطنبول", "أنقرة", "إزمير", "بورصة"],
    correct: 1,
    category: "geography",
    difficulty: "easy"
},
{
    question: "ما عاصمة روسيا؟",
    answers: ["سانت بطرسبرغ", "موسكو", "قازان", "سوتشي"],
    correct: 1,
    category: "geography",
    difficulty: "easy"
},
{
    question: "ما عاصمة الصين؟",
    answers: ["شنغهاي", "بكين", "هونغ كونغ", "نانجينغ"],
    correct: 1,
    category: "geography",
    difficulty: "easy"
},
{
    question: "ما عاصمة الهند؟",
    answers: ["مومباي", "نيودلهي", "بنغالور", "كولكاتا"],
    correct: 1,
    category: "geography",
    difficulty: "easy"
},
{
    question: "ما عاصمة الولايات المتحدة؟",
    answers: ["نيويورك", "لوس أنجلوس", "واشنطن العاصمة", "شيكاغو"],
    correct: 2,
    category: "geography",
    difficulty: "easy"
},
{
    question: "ما عاصمة كندا؟",
    answers: ["تورنتو", "فانكوفر", "أوتاوا", "مونتريال"],
    correct: 2,
    category: "geography",
    difficulty: "easy"
},
{
    question: "ما عاصمة البرازيل؟",
    answers: ["ريو دي جانيرو", "ساو باولو", "برازيليا", "سلفادور"],
    correct: 2,
    category: "geography",
    difficulty: "easy"
},
{
    question: "ما عاصمة أستراليا؟",
    answers: ["سيدني", "ملبورن", "كانبيرا", "بيرث"],
    correct: 2,
    category: "geography",
    difficulty: "easy"
},
{
    question: "ما أصغر قارة من حيث المساحة؟",
    answers: ["أوروبا", "أستراليا", "أفريقيا", "أمريكا الجنوبية"],
    correct: 1,
    category: "geography",
    difficulty: "easy"
},
{
    question: "كم عدد القارات المتعارف عليها عالميًا؟",
    answers: ["5", "6", "7", "8"],
    correct: 2,
    category: "geography",
    difficulty: "easy"
},
{
    question: "كم عدد المحيطات الرئيسية على الأرض؟",
    answers: ["3", "4", "5", "6"],
    correct: 2,
    category: "geography",
    difficulty: "easy"
},
{
    question: "ما الدولة التي تُعرف بأنها بلد الأهرامات القديمة في الجيزة؟",
    answers: ["مصر", "العراق", "الأردن", "المغرب"],
    correct: 0,
    category: "geography",
    difficulty: "easy"
},
{
    question: "في أي قارة تقع مصر؟",
    answers: ["آسيا", "أفريقيا", "أوروبا", "أمريكا الشمالية"],
    correct: 1,
    category: "geography",
    difficulty: "easy"
},
{
    question: "ما البحر الذي يفصل بين أوروبا وأفريقيا في جزء كبير منه؟",
    answers: ["البحر المتوسط", "البحر الأحمر", "بحر العرب", "بحر البلطيق"],
    correct: 0,
    category: "geography",
    difficulty: "easy"
},
{
    question: "ما النهر الذي يمر بمدينة القاهرة؟",
    answers: ["نهر النيل", "نهر دجلة", "نهر الفرات", "نهر الأردن"],
    correct: 0,
    category: "geography",
    difficulty: "easy"
},
{
    question: "ما الدولة التي تشتهر بشكلها الطويل على الساحل الغربي لأمريكا الجنوبية؟",
    answers: ["تشيلي", "البرازيل", "بيرو", "كولومبيا"],
    correct: 0,
    category: "geography",
    difficulty: "easy"
},
{
    question: "ما المحيط الواقع بين أفريقيا وأستراليا؟",
    answers: ["الأطلسي", "الهندي", "الهادئ", "المتجمد الشمالي"],
    correct: 1,
    category: "geography",
    difficulty: "easy"
},
{
    question: "ما عاصمة اليونان؟",
    answers: ["أثينا", "سالونيك", "رودس", "باتراس"],
    correct: 0,
    category: "geography",
    difficulty: "easy"
},
{
    question: "ما عاصمة البرتغال؟",
    answers: ["بورتو", "لشبونة", "فارو", "براغا"],
    correct: 1,
    category: "geography",
    difficulty: "easy"
},
{
    question: "ما عاصمة المغرب؟",
    answers: ["الدار البيضاء", "مراكش", "الرباط", "فاس"],
    correct: 2,
    category: "geography",
    difficulty: "easy"
},
{
    question: "ما عاصمة الجزائر؟",
    answers: ["وهران", "قسنطينة", "الجزائر", "عنابة"],
    correct: 2,
    category: "geography",
    difficulty: "easy"
},
{
    question: "ما عاصمة تونس؟",
    answers: ["صفاقس", "سوسة", "تونس", "بنزرت"],
    correct: 2,
    category: "geography",
    difficulty: "easy"
},
{
    question: "ما عاصمة الأردن؟",
    answers: ["عمان", "العقبة", "إربد", "الزرقاء"],
    correct: 0,
    category: "geography",
    difficulty: "easy"
},
{
    question: "ما عاصمة العراق؟",
    answers: ["البصرة", "الموصل", "بغداد", "أربيل"],
    correct: 2,
    category: "geography",
    difficulty: "easy"
},
{
    question: "ما عاصمة لبنان؟",
    answers: ["طرابلس", "صيدا", "بيروت", "زحلة"],
    correct: 2,
    category: "geography",
    difficulty: "easy"
},
{
    question: "ما عاصمة الكويت؟",
    answers: ["مدينة الكويت", "الجهراء", "حولي", "الفروانية"],
    correct: 0,
    category: "geography",
    difficulty: "easy"
},
{
    question: "ما عاصمة قطر؟",
    answers: ["الدوحة", "الريان", "الخور", "الوكرة"],
    correct: 0,
    category: "geography",
    difficulty: "easy"
},

// =========================
// 🟡 MEDIUM — 40
// =========================

{
    question: "ما أعمق بحيرة في العالم؟",
    answers: ["بحيرة فيكتوريا", "بحيرة بايكال", "بحيرة تنجانيقا", "بحيرة سوبيريور"],
    correct: 1,
    category: "geography",
    difficulty: "medium"
},
{
    question: "في أي دولة تقع بحيرة بايكال؟",
    answers: ["روسيا", "كازاخستان", "منغوليا", "الصين"],
    correct: 0,
    category: "geography",
    difficulty: "medium"
},
{
    question: "ما أطول سلسلة جبلية على اليابسة؟",
    answers: ["الألب", "الأنديز", "الهيمالايا", "الروكي"],
    correct: 1,
    category: "geography",
    difficulty: "medium"
},
{
    question: "في أي قارة تقع جبال الأنديز؟",
    answers: ["أفريقيا", "آسيا", "أمريكا الجنوبية", "أوروبا"],
    correct: 2,
    category: "geography",
    difficulty: "medium"
},
{
    question: "ما أكبر صحراء حارة في العالم؟",
    answers: ["جوبي", "الصحراء الكبرى", "كالاهاري", "أتاكاما"],
    correct: 1,
    category: "geography",
    difficulty: "medium"
},
{
    question: "ما أكبر صحراء في العالم من حيث المساحة، بما فيها الصحاري القطبية؟",
    answers: ["الصحراء الكبرى", "صحراء جوبي", "صحراء القطب الجنوبي", "صحراء أتاكاما"],
    correct: 2,
    category: "geography",
    difficulty: "medium"
},
{
    question: "ما أعلى شلال في العالم؟",
    answers: ["شلالات نياجرا", "شلال آنجل", "شلال فيكتوريا", "شلال إجوازو"],
    correct: 1,
    category: "geography",
    difficulty: "medium"
},
{
    question: "في أي دولة يقع شلال آنجل؟",
    answers: ["البرازيل", "فنزويلا", "بيرو", "كولومبيا"],
    correct: 1,
    category: "geography",
    difficulty: "medium"
},
{
    question: "ما المضيق الذي يفصل بين آسيا وأمريكا الشمالية؟",
    answers: ["مضيق جبل طارق", "مضيق بيرنغ", "مضيق هرمز", "مضيق ملقا"],
    correct: 1,
    category: "geography",
    difficulty: "medium"
},
{
    question: "ما المضيق الذي يربط البحر المتوسط بالمحيط الأطلسي؟",
    answers: ["مضيق هرمز", "مضيق جبل طارق", "مضيق بيرنغ", "مضيق ملقا"],
    correct: 1,
    category: "geography",
    difficulty: "medium"
},
{
    question: "ما البحر الذي يتصل بالمحيط الأطلسي عبر مضيق جبل طارق؟",
    answers: ["البحر الأحمر", "البحر المتوسط", "بحر العرب", "بحر قزوين"],
    correct: 1,
    category: "geography",
    difficulty: "medium"
},
{
    question: "ما أكبر جزيرة في العالم؟",
    answers: ["مدغشقر", "غرينلاند", "بورنيو", "نيو غينيا"],
    correct: 1,
    category: "geography",
    difficulty: "medium"
},
{
    question: "ما الدولة التي تمتلك أكبر مساحة في العالم؟",
    answers: ["كندا", "الصين", "روسيا", "الولايات المتحدة"],
    correct: 2,
    category: "geography",
    difficulty: "medium"
},
{
    question: "ما الدولة صاحبة أطول خط ساحلي في العالم؟",
    answers: ["روسيا", "كندا", "أستراليا", "الولايات المتحدة"],
    correct: 1,
    category: "geography",
    difficulty: "medium"
},
{
    question: "في أي دولة يقع جبل كليمنجارو؟",
    answers: ["كينيا", "تنزانيا", "إثيوبيا", "أوغندا"],
    correct: 1,
    category: "geography",
    difficulty: "medium"
},
{
    question: "في أي دولة تقع مدينة ماتشو بيتشو؟",
    answers: ["بيرو", "بوليفيا", "تشيلي", "الإكوادور"],
    correct: 0,
    category: "geography",
    difficulty: "medium"
},
{
    question: "ما النهر الذي يمر بمدينة لندن؟",
    answers: ["التايمز", "الراين", "السين", "الدانوب"],
    correct: 0,
    category: "geography",
    difficulty: "medium"
},
{
    question: "ما النهر الذي يمر بمدينة باريس؟",
    answers: ["الراين", "السين", "التايمز", "الدانوب"],
    correct: 1,
    category: "geography",
    difficulty: "medium"
},
{
    question: "ما النهر الذي يمر بمدينة روما؟",
    answers: ["التيبر", "البو", "السين", "الإلبه"],
    correct: 0,
    category: "geography",
    difficulty: "medium"
},
{
    question: "ما النهر الذي يمر بمدينة بغداد؟",
    answers: ["الفرات", "دجلة", "النيل", "الأردن"],
    correct: 1,
    category: "geography",
    difficulty: "medium"
},
{
    question: "ما البحر الذي يقع بين شبه الجزيرة العربية وشمال شرق أفريقيا؟",
    answers: ["البحر الأحمر", "البحر المتوسط", "بحر العرب", "بحر قزوين"],
    correct: 0,
    category: "geography",
    difficulty: "medium"
},
{
    question: "ما القناة التي تربط البحر المتوسط بالبحر الأحمر؟",
    answers: ["قناة بنما", "قناة السويس", "قناة كيل", "قناة كورنث"],
    correct: 1,
    category: "geography",
    difficulty: "medium"
},
{
    question: "ما القناة التي تربط المحيط الأطلسي بالمحيط الهادئ عبر أمريكا الوسطى؟",
    answers: ["قناة السويس", "قناة بنما", "قناة كيل", "قناة كورنث"],
    correct: 1,
    category: "geography",
    difficulty: "medium"
},
{
    question: "ما عاصمة النرويج؟",
    answers: ["ستوكهولم", "أوسلو", "هلسنكي", "كوبنهاغن"],
    correct: 1,
    category: "geography",
    difficulty: "medium"
},
{
    question: "ما عاصمة السويد؟",
    answers: ["أوسلو", "ستوكهولم", "هلسنكي", "ريكيافيك"],
    correct: 1,
    category: "geography",
    difficulty: "medium"
},
{
    question: "ما عاصمة فنلندا؟",
    answers: ["هلسنكي", "أوسلو", "ستوكهولم", "تالين"],
    correct: 0,
    category: "geography",
    difficulty: "medium"
},
{
    question: "ما عاصمة سويسرا؟",
    answers: ["زيورخ", "جنيف", "برن", "بازل"],
    correct: 2,
    category: "geography",
    difficulty: "medium"
},
{
    question: "ما عاصمة النمسا؟",
    answers: ["فيينا", "سالزبورغ", "غراتس", "إنسبروك"],
    correct: 0,
    category: "geography",
    difficulty: "medium"
},
{
    question: "ما عاصمة هولندا؟",
    answers: ["روتردام", "أمستردام", "لاهاي", "أوترخت"],
    correct: 1,
    category: "geography",
    difficulty: "medium"
},
{
    question: "ما عاصمة بلجيكا؟",
    answers: ["بروكسل", "أنتويرب", "بروج", "غنت"],
    correct: 0,
    category: "geography",
    difficulty: "medium"
},
{
    question: "ما عاصمة التشيك؟",
    answers: ["براغ", "برنو", "فيينا", "بودابست"],
    correct: 0,
    category: "geography",
    difficulty: "medium"
},
{
    question: "ما عاصمة المجر؟",
    answers: ["بودابست", "بوخارست", "بلغراد", "براتيسلافا"],
    correct: 0,
    category: "geography",
    difficulty: "medium"
},
{
    question: "ما عاصمة رومانيا؟",
    answers: ["صوفيا", "بوخارست", "بلغراد", "كيشيناو"],
    correct: 1,
    category: "geography",
    difficulty: "medium"
},
{
    question: "ما عاصمة بلغاريا؟",
    answers: ["صوفيا", "بخارست", "سكوبيه", "تيرانا"],
    correct: 0,
    category: "geography",
    difficulty: "medium"
},
{
    question: "ما عاصمة صربيا؟",
    answers: ["بلغراد", "زغرب", "سراييفو", "ليوبليانا"],
    correct: 0,
    category: "geography",
    difficulty: "medium"
},
{
    question: "ما عاصمة كرواتيا؟",
    answers: ["زغرب", "سبليت", "سراييفو", "بلغراد"],
    correct: 0,
    category: "geography",
    difficulty: "medium"
},
{
    question: "ما عاصمة أيرلندا؟",
    answers: ["بلفاست", "دبلن", "كورك", "غالواي"],
    correct: 1,
    category: "geography",
    difficulty: "medium"
},
{
    question: "ما عاصمة آيسلندا؟",
    answers: ["ريكيافيك", "أوسلو", "هلسنكي", "تالين"],
    correct: 0,
    category: "geography",
    difficulty: "medium"
},
{
    question: "ما عاصمة نيوزيلندا؟",
    answers: ["أوكلاند", "ويلينغتون", "كرايستشيرش", "هاميلتون"],
    correct: 1,
    category: "geography",
    difficulty: "medium"
},
{
    question: "ما عاصمة الأرجنتين؟",
    answers: ["بوينس آيرس", "سانتياغو", "ليما", "مونتيفيديو"],
    correct: 0,
    category: "geography",
    difficulty: "medium"
},

// =========================
// 🔴 HARD — 40
// =========================

{
    question: "ما أعمق نقطة معروفة في محيطات العالم؟",
    answers: ["خندق بورتوريكو", "تشالنجر ديب", "خندق تونغا", "خندق اليابان"],
    correct: 1,
    category: "geography",
    difficulty: "hard"
},
{
    question: "في أي خندق يقع تشالنجر ديب؟",
    answers: ["خندق ماريانا", "خندق بيرو-تشيلي", "خندق تونغا", "خندق اليابان"],
    correct: 0,
    category: "geography",
    difficulty: "hard"
},
{
    question: "ما أعلى عاصمة وطنية في العالم من حيث الارتفاع عن سطح البحر تقريبًا؟",
    answers: ["كيتو", "لاباز", "بوغوتا", "مكسيكو سيتي"],
    correct: 1,
    category: "geography",
    difficulty: "hard"
},
{
    question: "ما الدولة التي تقع فيها مدينة لاباز؟",
    answers: ["بيرو", "بوليفيا", "الإكوادور", "تشيلي"],
    correct: 1,
    category: "geography",
    difficulty: "hard"
},
{
    question: "ما أعلى بحيرة صالحة للملاحة التجارية الكبيرة من بين البحيرات الشهيرة؟",
    answers: ["تيتيكاكا", "بايكال", "فيكتوريا", "سوبيريور"],
    correct: 0,
    category: "geography",
    difficulty: "hard"
},
{
    question: "بين أي دولتين تقع بحيرة تيتيكاكا؟",
    answers: ["بيرو وبوليفيا", "تشيلي والأرجنتين", "البرازيل وبيرو", "الإكوادور وكولومبيا"],
    correct: 0,
    category: "geography",
    difficulty: "hard"
},
{
    question: "ما الدولة التي تضم أكبر عدد من البحيرات الطبيعية في العالم؟",
    answers: ["كندا", "روسيا", "فنلندا", "الولايات المتحدة"],
    correct: 0,
    category: "geography",
    difficulty: "hard"
},
{
    question: "ما النهر الذي يُعد أطول نهر في أوروبا؟",
    answers: ["الدانوب", "الفولغا", "الراين", "الدنيبر"],
    correct: 1,
    category: "geography",
    difficulty: "hard"
},
{
    question: "في أي بحر يصب نهر الفولغا؟",
    answers: ["البحر الأسود", "بحر قزوين", "بحر البلطيق", "بحر الشمال"],
    correct: 1,
    category: "geography",
    difficulty: "hard"
},
{
    question: "ما أطول نهر في أمريكا الجنوبية؟",
    answers: ["الأمازون", "بارانا", "أورينوكو", "ساو فرانسيسكو"],
    correct: 0,
    category: "geography",
    difficulty: "hard"
},
{
    question: "ما النهر الذي يحمل أكبر كمية من المياه في العالم؟",
    answers: ["النيل", "الأمازون", "الكونغو", "اليانغتسي"],
    correct: 1,
    category: "geography",
    difficulty: "hard"
},
{
    question: "ما ثاني أطول نهر في أفريقيا بعد النيل؟",
    answers: ["الكونغو", "النيجر", "الزامبيزي", "السنغال"],
    correct: 0,
    category: "geography",
    difficulty: "hard"
},
{
    question: "ما النهر الذي يمر بمدينة بودابست؟",
    answers: ["الدانوب", "الراين", "الفولغا", "الإلبه"],
    correct: 0,
    category: "geography",
    difficulty: "hard"
},
{
    question: "ما النهر الذي يمر بمدينة فيينا؟",
    answers: ["الدانوب", "الراين", "السين", "التايمز"],
    correct: 0,
    category: "geography",
    difficulty: "hard"
},
{
    question: "ما البحر الذي يصب فيه نهر الدانوب؟",
    answers: ["البحر المتوسط", "البحر الأسود", "بحر الشمال", "بحر البلطيق"],
    correct: 1,
    category: "geography",
    difficulty: "hard"
},
{
    question: "ما السلسلة الجبلية التي تُعد حدًا جغرافيًا تقليديًا بين أوروبا وآسيا؟",
    answers: ["جبال الألب", "جبال الأورال", "جبال الأنديز", "جبال الأطلس"],
    correct: 1,
    category: "geography",
    difficulty: "hard"
},
{
    question: "ما الدولة التي يقع فيها معظم جبل إلبروس؟",
    answers: ["جورجيا", "روسيا", "تركيا", "أرمينيا"],
    correct: 1,
    category: "geography",
    difficulty: "hard"
},
{
    question: "ما أعلى قمة في جبال الألب؟",
    answers: ["مون بلان", "ماترهورن", "دوفور شبيتسه", "غروسغلوكنر"],
    correct: 0,
    category: "geography",
    difficulty: "hard"
},
{
    question: "ما أعلى قمة في أفريقيا؟",
    answers: ["جبل كينيا", "كليمنجارو", "جبل توبقال", "جبل ستانلي"],
    correct: 1,
    category: "geography",
    difficulty: "hard"
},
{
    question: "ما أعلى قمة في أمريكا الجنوبية؟",
    answers: ["أكونكاغوا", "هواسْكاران", "تشيمبورازو", "إل مِستي"],
    correct: 0,
    category: "geography",
    difficulty: "hard"
},
{
    question: "في أي دولة تقع قمة أكونكاغوا؟",
    answers: ["تشيلي", "الأرجنتين", "بيرو", "بوليفيا"],
    correct: 1,
    category: "geography",
    difficulty: "hard"
},
{
    question: "ما أكبر جزيرة في البحر المتوسط؟",
    answers: ["صقلية", "كريت", "قبرص", "سردينيا"],
    correct: 0,
    category: "geography",
    difficulty: "hard"
},
{
    question: "ما الدولة التي تشترك مع فرنسا في أطول حدود برية بين دولتين في أمريكا الجنوبية؟",
    answers: ["البرازيل", "سورينام", "غيانا", "فنزويلا"],
    correct: 0,
    category: "geography",
    difficulty: "hard"
},
{
    question: "ما الدولة التي تقع فيها منطقة غويانا الفرنسية؟",
    answers: ["البرازيل", "فرنسا", "هولندا", "إسبانيا"],
    correct: 1,
    category: "geography",
    difficulty: "hard"
},
{
    question: "ما الدولة التي تحيط بها إيطاليا من جهات برية وتُعد دولة مستقلة؟",
    answers: ["سان مارينو", "موناكو", "أندورا", "الفاتيكان"],
    correct: 0,
    category: "geography",
    difficulty: "hard"
},
{
    question: "ما أصغر دولة مستقلة في العالم من حيث المساحة؟",
    answers: ["موناكو", "الفاتيكان", "سان مارينو", "ليختنشتاين"],
    correct: 1,
    category: "geography",
    difficulty: "hard"
},
{
    question: "ما الدولة التي تقع فيها مدينة موناكو؟",
    answers: ["فرنسا", "إيطاليا", "إسبانيا", "سويسرا"],
    correct: 0,
    category: "geography",
    difficulty: "hard"
},
{
    question: "ما الدولة التي لا تمتلك عاصمة رسمية محددة دستوريًا؟",
    answers: ["سويسرا", "فرنسا", "اليابان", "البرازيل"],
    correct: 0,
    category: "geography",
    difficulty: "hard"
},
{
    question: "ما المدينة التي تُعد مقر الحكومة الفيدرالية في سويسرا؟",
    answers: ["زيورخ", "جنيف", "برن", "لوزان"],
    correct: 2,
    category: "geography",
    difficulty: "hard"
},
{
    question: "ما الدولة التي تمتد أراضيها عبر أكبر عدد من المناطق الزمنية، عند احتساب أقاليمها؟",
    answers: ["روسيا", "فرنسا", "الولايات المتحدة", "الصين"],
    correct: 1,
    category: "geography",
    difficulty: "hard"
},
{
    question: "كم منطقة زمنية تمتد عبر أراضي روسيا الرئيسية؟",
    answers: ["7", "9", "11", "13"],
    correct: 2,
    category: "geography",
    difficulty: "hard"
},
{
    question: "ما الدولة التي تقع فيها صحراء أتاكاما؟",
    answers: ["تشيلي", "بيرو", "الأرجنتين", "بوليفيا"],
    correct: 0,
    category: "geography",
    difficulty: "hard"
},
{
    question: "ما الصحراء التي تُعد من أكثر المناطق غير القطبية جفافًا على الأرض؟",
    answers: ["أتاكاما", "جوبي", "كالاهاري", "الصحراء الكبرى"],
    correct: 0,
    category: "geography",
    difficulty: "hard"
},
{
    question: "ما الدولة التي يقع فيها معظم حوض نهر الأمازون؟",
    answers: ["البرازيل", "بيرو", "كولومبيا", "بوليفيا"],
    correct: 0,
    category: "geography",
    difficulty: "hard"
},
{
    question: "ما البحر الداخلي الأكبر في العالم من حيث المساحة؟",
    answers: ["البحر المتوسط", "بحر قزوين", "البحر الأسود", "بحر العرب"],
    correct: 1,
    category: "geography",
    difficulty: "hard"
},
{
    question: "ما الدول التي تطل على بحيرة تيتيكاكا؟",
    answers: ["بيرو وبوليفيا", "بيرو وتشيلي", "بوليفيا والأرجنتين", "الإكوادور وبيرو"],
    correct: 0,
    category: "geography",
    difficulty: "hard"
},
{
    question: "ما الدولة التي تقع فيها معظم غابات الأمازون المطيرة؟",
    answers: ["البرازيل", "بيرو", "كولومبيا", "الإكوادور"],
    correct: 0,
    category: "geography",
    difficulty: "hard"
},
{
    question: "ما المضيق الذي يفصل بين المغرب وإسبانيا؟",
    answers: ["مضيق هرمز", "مضيق جبل طارق", "مضيق البوسفور", "مضيق الدردنيل"],
    correct: 1,
    category: "geography",
    difficulty: "hard"
},
{
    question: "ما المضيق الذي يصل البحر الأسود ببحر مرمرة؟",
    answers: ["البوسفور", "الدردنيل", "جبل طارق", "هرمز"],
    correct: 0,
    category: "geography",
    difficulty: "hard"
},
{
    question: "ما المضيق الذي يصل بحر مرمرة ببحر إيجة؟",
    answers: ["البوسفور", "الدردنيل", "هرمز", "ملقا"],
    correct: 1,
    category: "geography",
    difficulty: "hard"
},
{
    question: "ما الدولة التي تقع فيها مدينة إسطنبول على جانبي قارتين؟",
    answers: ["تركيا", "اليونان", "بلغاريا", "جورجيا"],
    correct: 0,
    category: "geography",
    difficulty: "hard"
},
// ==================== HISTORY - EASY (40) ====================

{
    question: "من بنى الأهرامات في مصر القديمة؟",
    answers: ["المصريون القدماء", "الرومان", "الفينيقيون", "الفرس"],
    correct: 0,
    category: "history",
    difficulty: "easy"
},
{
    question: "ما النهر الذي قامت على ضفافه الحضارة المصرية القديمة؟",
    answers: ["نهر النيل", "نهر دجلة", "نهر الفرات", "نهر السند"],
    correct: 0,
    category: "history",
    difficulty: "easy"
},
{
    question: "من هو أول الخلفاء الراشدين؟",
    answers: ["أبو بكر الصديق", "عمر بن الخطاب", "عثمان بن عفان", "علي بن أبي طالب"],
    correct: 0,
    category: "history",
    difficulty: "easy"
},
{
    question: "أين نشأت الحضارة الرومانية؟",
    answers: ["شبه الجزيرة الإيطالية", "شبه الجزيرة العربية", "الهند", "الصين"],
    correct: 0,
    category: "history",
    difficulty: "easy"
},
{
    question: "ما الحضارة التي اشتهرت بالكتابة المسمارية؟",
    answers: ["السومرية", "الرومانية", "الإغريقية", "المصرية"],
    correct: 0,
    category: "history",
    difficulty: "easy"
},
{
    question: "من كان يُلقب بفرعون في مصر القديمة؟",
    answers: ["حاكم مصر", "قائد الجيش فقط", "كبير التجار", "رئيس الكهنة فقط"],
    correct: 0,
    category: "history",
    difficulty: "easy"
},
{
    question: "ما المدينة التي كانت عاصمة الدولة العباسية؟",
    answers: ["بغداد", "دمشق", "القاهرة", "المدينة المنورة"],
    correct: 0,
    category: "history",
    difficulty: "easy"
},
{
    question: "من هو القائد المسلم الذي فتح مصر في عهد الخليفة عمر بن الخطاب؟",
    answers: ["عمرو بن العاص", "خالد بن الوليد", "صلاح الدين الأيوبي", "طارق بن زياد"],
    correct: 0,
    category: "history",
    difficulty: "easy"
},
{
    question: "من بنى مدينة بغداد في العصر العباسي؟",
    answers: ["أبو جعفر المنصور", "هارون الرشيد", "المأمون", "المعتصم"],
    correct: 0,
    category: "history",
    difficulty: "easy"
},
{
    question: "ما الحضارة التي بنت مدينة ماتشو بيتشو؟",
    answers: ["الإنكا", "الرومان", "الفايكنج", "الفراعنة"],
    correct: 0,
    category: "history",
    difficulty: "easy"
},
{
    question: "من هو الإسكندر الأكبر؟",
    answers: ["ملك مقدوني وقائد عسكري", "إمبراطور روماني", "فرعون مصري", "ملك صيني"],
    correct: 0,
    category: "history",
    difficulty: "easy"
},
{
    question: "أين كانت تقع مدينة روما القديمة؟",
    answers: ["إيطاليا", "مصر", "اليونان", "إسبانيا"],
    correct: 0,
    category: "history",
    difficulty: "easy"
},
{
    question: "ما الحضارة التي اشتهرت بالمدن مثل أثينا وإسبرطة؟",
    answers: ["الحضارة اليونانية", "الحضارة المصرية", "الحضارة الفارسية", "الحضارة الصينية"],
    correct: 0,
    category: "history",
    difficulty: "easy"
},
{
    question: "من هو مؤسس الدولة الأموية؟",
    answers: ["معاوية بن أبي سفيان", "أبو جعفر المنصور", "صلاح الدين", "عمرو بن العاص"],
    correct: 0,
    category: "history",
    difficulty: "easy"
},
{
    question: "ما المدينة التي كانت عاصمة الدولة الأموية؟",
    answers: ["دمشق", "بغداد", "القاهرة", "قرطبة"],
    correct: 0,
    category: "history",
    difficulty: "easy"
},
{
    question: "من هو القائد الذي ارتبط بتحرير القدس من الصليبيين؟",
    answers: ["صلاح الدين الأيوبي", "هارون الرشيد", "محمد الفاتح", "عمرو بن العاص"],
    correct: 0,
    category: "history",
    difficulty: "easy"
},
{
    question: "من فتح القسطنطينية عام 1453م؟",
    answers: ["محمد الفاتح", "صلاح الدين الأيوبي", "سليم الأول", "هارون الرشيد"],
    correct: 0,
    category: "history",
    difficulty: "easy"
},
{
    question: "ما اسم الكتابة التي استخدمها المصريون القدماء؟",
    answers: ["الهيروغليفية", "المسمارية", "اللاتينية", "السنسكريتية"],
    correct: 0,
    category: "history",
    difficulty: "easy"
},
{
    question: "من هو العالم الذي اشتهر برحلاته في العالم الإسلامي وكتب عن مشاهداته؟",
    answers: ["ابن بطوطة", "الخوارزمي", "ابن سينا", "الطبري"],
    correct: 0,
    category: "history",
    difficulty: "easy"
},
{
    question: "في أي قارة قامت معظم الحضارة المصرية القديمة؟",
    answers: ["أفريقيا", "أوروبا", "آسيا", "أمريكا الجنوبية"],
    correct: 0,
    category: "history",
    difficulty: "easy"
},
{
    question: "ما اسم أشهر طريق تجاري قديم ربط الصين بمناطق غرب آسيا وأوروبا؟",
    answers: ["طريق الحرير", "طريق الذهب", "طريق الملوك", "طريق البحر"],
    correct: 0,
    category: "history",
    difficulty: "easy"
},
{
    question: "من هو النبي الذي ارتبط بقصة الخروج من مصر في الرواية التوراتية؟",
    answers: ["موسى", "نوح", "يونس", "إبراهيم"],
    correct: 0,
    category: "history",
    difficulty: "easy"
},
{
    question: "ما الدولة التي حكمتها أسرة الفراعنة في العصور القديمة؟",
    answers: ["مصر", "روما", "الصين", "بلاد فارس"],
    correct: 0,
    category: "history",
    difficulty: "easy"
},
{
    question: "من هو مؤسس الدولة الفاطمية في مصر؟",
    answers: ["المعز لدين الله الفاطمي", "صلاح الدين", "عمرو بن العاص", "أحمد بن طولون"],
    correct: 0,
    category: "history",
    difficulty: "easy"
},
{
    question: "ما المدينة التي تأسست فيها جامعة الأزهر؟",
    answers: ["القاهرة", "دمشق", "بغداد", "مكة"],
    correct: 0,
    category: "history",
    difficulty: "easy"
},
{
    question: "من هو أول رئيس لجمهورية مصر بعد إعلان الجمهورية عام 1953؟",
    answers: ["محمد نجيب", "جمال عبد الناصر", "أنور السادات", "حسني مبارك"],
    correct: 0,
    category: "history",
    difficulty: "easy"
},
{
    question: "من قاد الثورة الفرنسية في بداياتها؟",
    answers: ["الثوار الفرنسيون", "الرومان", "الإنكا", "المغول"],
    correct: 0,
    category: "history",
    difficulty: "easy"
},
{
    question: "في أي دولة بدأت الثورة الصناعية أولًا؟",
    answers: ["بريطانيا", "فرنسا", "إسبانيا", "روسيا"],
    correct: 0,
    category: "history",
    difficulty: "easy"
},
{
    question: "من اخترع المطبعة الحديثة في أوروبا؟",
    answers: ["يوهانس جوتنبرج", "إسحاق نيوتن", "جاليليو", "ليوناردو دافنشي"],
    correct: 0,
    category: "history",
    difficulty: "easy"
},
{
    question: "من هو الرحالة الذي وصل إلى الأمريكتين عام 1492م؟",
    answers: ["كريستوفر كولومبوس", "فاسكو دا جاما", "ماجلان", "ماركو بولو"],
    correct: 0,
    category: "history",
    difficulty: "easy"
},
{
    question: "من وصل إلى الهند بحرًا من أوروبا عبر رأس الرجاء الصالح؟",
    answers: ["فاسكو دا جاما", "كولومبوس", "ماجلان", "ماركو بولو"],
    correct: 0,
    category: "history",
    difficulty: "easy"
},
{
    question: "ما الحضارة التي استخدمت نظامًا ديمقراطيًا شهيرًا في أثينا؟",
    answers: ["اليونانية", "الرومانية", "المصرية", "الفارسية"],
    correct: 0,
    category: "history",
    difficulty: "easy"
},
{
    question: "من كان قائدًا مشهورًا في قرطاج خلال الحرب البونيقية الثانية؟",
    answers: ["هانيبال", "يوليوس قيصر", "أغسطس", "الإسكندر الأكبر"],
    correct: 0,
    category: "history",
    difficulty: "easy"
},
{
    question: "ما اسم القانون الشهير في بلاد بابل المرتبط بالملك حمورابي؟",
    answers: ["شريعة حمورابي", "قانون الألواح الاثني عشر", "القانون المدني", "قانون أثينا"],
    correct: 0,
    category: "history",
    difficulty: "easy"
},
{
    question: "من هو القائد الذي عبر جبال الألب لمهاجمة روما؟",
    answers: ["هانيبال", "نابليون", "قيصر", "الإسكندر"],
    correct: 0,
    category: "history",
    difficulty: "easy"
},
{
    question: "ما اسم العاصمة القديمة للإمبراطورية الرومانية الشرقية؟",
    answers: ["القسطنطينية", "روما", "أثينا", "قرطاج"],
    correct: 0,
    category: "history",
    difficulty: "easy"
},
{
    question: "ما اسم الحضارة التي ظهرت في بلاد الرافدين؟",
    answers: ["الحضارة السومرية", "الحضارة الإنكا", "الحضارة الرومانية", "الحضارة الإغريقية"],
    correct: 0,
    category: "history",
    difficulty: "easy"
},
{
    question: "من هو الملك المصري الذي ارتبط بقناع جنائزي ذهبي شهير؟",
    answers: ["توت عنخ آمون", "رمسيس الثاني", "خوفو", "أخناتون"],
    correct: 0,
    category: "history",
    difficulty: "easy"
},
{
    question: "ما اسم المدينة التي كانت مركزًا مهمًا للحضارة الإسلامية في الأندلس؟",
    answers: ["قرطبة", "روما", "باريس", "لندن"],
    correct: 0,
    category: "history",
    difficulty: "easy"
},
{
    question: "من هو القائد الفرنسي الذي أصبح إمبراطورًا لفرنسا؟",
    answers: ["نابليون بونابرت", "لويس الرابع عشر", "شارلمان", "ريشليو"],
    correct: 0,
    category: "history",
    difficulty: "easy"
},

// ==================== HISTORY - MEDIUM (40) ====================

{
    question: "ما المدينة التي تُعد من أقدم المدن الكبرى في بلاد الرافدين؟",
    answers: ["أوروك", "باريس", "روما", "قرطبة"],
    correct: 0,
    category: "history",
    difficulty: "medium"
},
{
    question: "من أسس الإمبراطورية الأكادية؟",
    answers: ["سرجون الأكدي", "حمورابي", "كورش الكبير", "نبوخذ نصر"],
    correct: 0,
    category: "history",
    difficulty: "medium"
},
{
    question: "ما الحضارة التي ارتبطت بمدينة موهينجو دارو؟",
    answers: ["حضارة وادي السند", "الحضارة الرومانية", "الحضارة المصرية", "الحضارة الفارسية"],
    correct: 0,
    category: "history",
    difficulty: "medium"
},
{
    question: "ما اسم الإمبراطورية التي أسسها كورش الكبير؟",
    answers: ["الإمبراطورية الأخمينية", "الإمبراطورية الرومانية", "الإمبراطورية البيزنطية", "الإمبراطورية المغولية"],
    correct: 0,
    category: "history",
    difficulty: "medium"
},
{
    question: "ما المعركة التي دارت بين المصريين والحيثيين في عهد رمسيس الثاني؟",
    answers: ["معركة قادش", "معركة اليرموك", "معركة حطين", "معركة بدر"],
    correct: 0,
    category: "history",
    difficulty: "medium"
},
{
    question: "من هو الفرعون المرتبط بإصلاح ديني ركز على عبادة آتون؟",
    answers: ["أخناتون", "خوفو", "رمسيس الثالث", "تحتمس الثالث"],
    correct: 0,
    category: "history",
    difficulty: "medium"
},
{
    question: "من هي الملكة المصرية التي ارتبط اسمها بيوليوس قيصر ومارك أنطونيوس؟",
    answers: ["كليوباترا السابعة", "حتشبسوت", "نفرتيتي", "تي"],
    correct: 0,
    category: "history",
    difficulty: "medium"
},
{
    question: "ما المدينة التي كانت مركز الإمبراطورية البيزنطية؟",
    answers: ["القسطنطينية", "روما", "الإسكندرية", "أثينا"],
    correct: 0,
    category: "history",
    difficulty: "medium"
},
{
    question: "ما اسم القانون الروماني الذي جمع قوانين الإمبراطورية في عهد جستنيان؟",
    answers: ["مجموعة جستنيان القانونية", "شريعة حمورابي", "قانون نابليون", "ألواح موسى"],
    correct: 0,
    category: "history",
    difficulty: "medium"
},
{
    question: "من هو الإمبراطور الروماني الذي أصدر مرسوم ميلانو؟",
    answers: ["قسطنطين الكبير", "نيرون", "أغسطس", "تراجان"],
    correct: 0,
    category: "history",
    difficulty: "medium"
},
{
    question: "ما المدينة التي كانت عاصمة الدولة العباسية قبل بغداد؟",
    answers: ["الكوفة", "القاهرة", "دمشق", "قرطبة"],
    correct: 0,
    category: "history",
    difficulty: "medium"
},
{
    question: "من هو الخليفة العباسي الذي اشتهر بازدهار حركة الترجمة في عصره؟",
    answers: ["المأمون", "أبو جعفر المنصور", "المعتصم", "المتوكل"],
    correct: 0,
    category: "history",
    difficulty: "medium"
},
{
    question: "ما اسم المعركة التي انتصر فيها المسلمون على البيزنطيين عام 636م؟",
    answers: ["اليرموك", "القادسية", "حطين", "عين جالوت"],
    correct: 0,
    category: "history",
    difficulty: "medium"
},
{
    question: "ما المعركة التي أنهت النفوذ الصليبي الكبير في القدس في عهد صلاح الدين؟",
    answers: ["حطين", "اليرموك", "القادسية", "ملاذكرد"],
    correct: 0,
    category: "history",
    difficulty: "medium"
},
{
    question: "من هو السلطان الذي انتصر على المغول في معركة عين جالوت؟",
    answers: ["سيف الدين قطز", "صلاح الدين", "محمد الفاتح", "نور الدين زنكي"],
    correct: 0,
    category: "history",
    difficulty: "medium"
},
{
    question: "من أسس الدولة الأيوبية؟",
    answers: ["صلاح الدين الأيوبي", "نور الدين زنكي", "قطز", "بيبرس"],
    correct: 0,
    category: "history",
    difficulty: "medium"
},
{
    question: "ما الدولة التي حكمت مصر قبل الدولة الأيوبية مباشرة؟",
    answers: ["الدولة الفاطمية", "الدولة العباسية", "الدولة الأموية", "الدولة العثمانية"],
    correct: 0,
    category: "history",
    difficulty: "medium"
},
{
    question: "من أسس الدولة الطولونية في مصر؟",
    answers: ["أحمد بن طولون", "محمد علي", "صلاح الدين", "المعز لدين الله"],
    correct: 0,
    category: "history",
    difficulty: "medium"
},
{
    question: "ما المدينة التي بناها أحمد بن طولون وجعلها مركزًا لحكمه؟",
    answers: ["القطائع", "الفسطاط", "القاهرة", "الإسكندرية"],
    correct: 0,
    category: "history",
    difficulty: "medium"
},
{
    question: "من هو مؤسس الدولة العثمانية؟",
    answers: ["عثمان الأول", "محمد الفاتح", "سليمان القانوني", "سليم الأول"],
    correct: 0,
    category: "history",
    difficulty: "medium"
},
{
    question: "من هو السلطان العثماني الذي فتح القسطنطينية؟",
    answers: ["محمد الثاني", "سليم الأول", "مراد الأول", "سليمان القانوني"],
    correct: 0,
    category: "history",
    difficulty: "medium"
},
{
    question: "ما اسم الإمبراطورية التي حكمت معظم الأناضول والبلقان بعد سقوط القسطنطينية؟",
    answers: ["الدولة العثمانية", "الإمبراطورية الرومانية", "الدولة الفاطمية", "الإمبراطورية الساسانية"],
    correct: 0,
    category: "history",
    difficulty: "medium"
},
{
    question: "من هو الرحالة المغربي الذي زار مناطق واسعة من العالم الإسلامي وخارجه؟",
    answers: ["ابن بطوطة", "الإدريسي", "المسعودي", "ابن خلدون"],
    correct: 0,
    category: "history",
    difficulty: "medium"
},
{
    question: "من مؤلف كتاب المقدمة؟",
    answers: ["ابن خلدون", "ابن بطوطة", "الطبري", "المسعودي"],
    correct: 0,
    category: "history",
    difficulty: "medium"
},
{
    question: "ما الحضارة التي طورت نظام الكتابة المسمارية؟",
    answers: ["السومريون", "الرومان", "الإغريق", "المايا"],
    correct: 0,
    category: "history",
    difficulty: "medium"
},
{
    question: "ما الإمبراطورية التي حكمها داريوس الأول؟",
    answers: ["الإمبراطورية الأخمينية", "الإمبراطورية الرومانية", "الإمبراطورية المغولية", "الإمبراطورية البيزنطية"],
    correct: 0,
    category: "history",
    difficulty: "medium"
},
{
    question: "من هو الملك البابلي المرتبط بحدائق بابل المعلقة في الروايات التاريخية؟",
    answers: ["نبوخذ نصر الثاني", "حمورابي", "سرجون الأكدي", "كورش الكبير"],
    correct: 0,
    category: "history",
    difficulty: "medium"
},
{
    question: "ما المدينة التي كانت عاصمة الإمبراطورية الآشورية في عهد آشور بانيبال؟",
    answers: ["نينوى", "بابل", "أوروك", "أور"],
    correct: 0,
    category: "history",
    difficulty: "medium"
},
{
    question: "ما اسم المعركة التي هُزم فيها نابليون هزيمته النهائية؟",
    answers: ["واترلو", "ترافالغار", "أوسترليتز", "لايبزيغ"],
    correct: 0,
    category: "history",
    difficulty: "medium"
},
{
    question: "ما الثورة التي بدأت عام 1789 في فرنسا؟",
    answers: ["الثورة الفرنسية", "الثورة الصناعية", "الثورة الروسية", "الثورة الأمريكية"],
    correct: 0,
    category: "history",
    difficulty: "medium"
},
{
    question: "ما الوثيقة التي أعلنت استقلال المستعمرات الأمريكية عن بريطانيا؟",
    answers: ["إعلان الاستقلال", "ماغنا كارتا", "معاهدة فرساي", "قانون الحقوق"],
    correct: 0,
    category: "history",
    difficulty: "medium"
},
{
    question: "في أي عام بدأت الثورة الفرنسية؟",
    answers: ["1789", "1776", "1815", "1848"],
    correct: 0,
    category: "history",
    difficulty: "medium"
},
{
    question: "ما اسم المعاهدة التي أنهت الحرب العالمية الأولى رسميًا مع ألمانيا؟",
    answers: ["معاهدة فرساي", "معاهدة باريس", "معاهدة روما", "معاهدة يالطا"],
    correct: 0,
    category: "history",
    difficulty: "medium"
},
{
    question: "في أي عام انتهت الحرب العالمية الثانية؟",
    answers: ["1945", "1939", "1942", "1950"],
    correct: 0,
    category: "history",
    difficulty: "medium"
},
{
    question: "ما المنظمة الدولية التي تأسست عام 1945 بهدف تعزيز التعاون الدولي؟",
    answers: ["الأمم المتحدة", "حلف الناتو", "الاتحاد الأوروبي", "عصبة الأمم"],
    correct: 0,
    category: "history",
    difficulty: "medium"
},
{
    question: "من كان أول رئيس للولايات المتحدة الأمريكية؟",
    answers: ["جورج واشنطن", "أبراهام لينكولن", "توماس جيفرسون", "جون آدامز"],
    correct: 0,
    category: "history",
    difficulty: "medium"
},
{
    question: "من هو الرئيس الأمريكي المرتبط بإعلان تحرير العبيد أثناء الحرب الأهلية الأمريكية؟",
    answers: ["أبراهام لينكولن", "جورج واشنطن", "توماس جيفرسون", "ثيودور روزفلت"],
    correct: 0,
    category: "history",
    difficulty: "medium"
},
{
    question: "ما الحدث الذي يُعد شرارة الحرب العالمية الأولى؟",
    answers: ["اغتيال الأرشيدوق فرانز فرديناند", "غزو بولندا", "قصف بيرل هاربر", "سقوط برلين"],
    correct: 0,
    category: "history",
    difficulty: "medium"
},
{
    question: "ما اسم الاتفاقية التي قسمت مناطق النفوذ في المشرق العربي بين بريطانيا وفرنسا أثناء الحرب العالمية الأولى؟",
    answers: ["سايكس–بيكو", "فرساي", "كامب ديفيد", "لوزان"],
    correct: 0,
    category: "history",
    difficulty: "medium"
},

// ==================== HISTORY - HARD (40) ====================

{
    question: "ما اسم أقدم نظام كتابة معروف على نطاق واسع في بلاد الرافدين؟",
    answers: ["الكتابة المسمارية", "الهيروغليفية", "اللاتينية", "الديموطيقية"],
    correct: 0,
    category: "history",
    difficulty: "hard"
},
{
    question: "ما المدينة السومرية التي تُعد من أقدم المدن الكبرى في التاريخ؟",
    answers: ["أوروك", "بابل", "نينوى", "ممفيس"],
    correct: 0,
    category: "history",
    difficulty: "hard"
},
{
    question: "ما الإمبراطورية التي تُعد من أوائل الإمبراطوريات الإقليمية في التاريخ وترتبط بسرجون الأكدي؟",
    answers: ["الإمبراطورية الأكادية", "الإمبراطورية الرومانية", "الإمبراطورية الأخمينية", "الإمبراطورية البيزنطية"],
    correct: 0,
    category: "history",
    difficulty: "hard"
},
{
    question: "أي ملك بابلي أصدر مجموعة قوانين شهيرة محفورة على مسلة؟",
    answers: ["حمورابي", "نبوخذ نصر الثاني", "سرجون الأكدي", "داريوس الأول"],
    correct: 0,
    category: "history",
    difficulty: "hard"
},
{
    question: "ما اسم الكتابة المصرية التي كانت تُستخدم في النصوص الدينية والنقوش الرسمية القديمة؟",
    answers: ["الهيروغليفية", "المسمارية", "الآرامية", "اللاتينية"],
    correct: 0,
    category: "history",
    difficulty: "hard"
},
{
    question: "ما الفرعون الذي ارتبط ببناء الهرم الأكبر في الجيزة؟",
    answers: ["خوفو", "خفرع", "منقرع", "زوسر"],
    correct: 0,
    category: "history",
    difficulty: "hard"
},
{
    question: "أي فرعون ارتبط ببناء الهرم المدرج في سقارة؟",
    answers: ["زوسر", "خوفو", "رمسيس الثاني", "أمنحتب الثالث"],
    correct: 0,
    category: "history",
    difficulty: "hard"
},
{
    question: "من هو القائد المصري الذي قاد توسعات عسكرية كبيرة في بلاد الشام خلال الأسرة الثامنة عشرة؟",
    answers: ["تحتمس الثالث", "خوفو", "أخناتون", "بيبي الثاني"],
    correct: 0,
    category: "history",
    difficulty: "hard"
},
{
    question: "ما الأسرة المصرية التي ينتمي إليها توت عنخ آمون؟",
    answers: ["الأسرة الثامنة عشرة", "الأسرة الرابعة", "الأسرة الثانية عشرة", "الأسرة التاسعة عشرة"],
    correct: 0,
    category: "history",
    difficulty: "hard"
},
{
    question: "ما الحجر الذي ساعد على فك رموز الكتابة المصرية القديمة؟",
    answers: ["حجر رشيد", "حجر بابل", "حجر قادش", "حجر طيبة"],
    correct: 0,
    category: "history",
    difficulty: "hard"
},
{
    question: "من العالم الذي ارتبط بفك رموز الكتابة الهيروغليفية اعتمادًا على حجر رشيد؟",
    answers: ["جان فرانسوا شامبليون", "إدوارد جينر", "إسحاق نيوتن", "جيمس واط"],
    correct: 0,
    category: "history",
    difficulty: "hard"
},
{
    question: "ما المعركة التي وقعت بين الرومان والقرطاجيين ضمن الحرب البونيقية الثانية وانتهت بانتصار حاسم لهانيبال؟",
    answers: ["معركة كاناي", "معركة واترلو", "معركة قادش", "معركة حطين"],
    correct: 0,
    category: "history",
    difficulty: "hard"
},
{
    question: "من هو القائد الروماني الذي اغتيل في مجلس الشيوخ عام 44 ق.م؟",
    answers: ["يوليوس قيصر", "أغسطس", "نيرون", "تراجان"],
    correct: 0,
    category: "history",
    difficulty: "hard"
},
{
    question: "من أصبح أول إمبراطور روماني بعد انتهاء مرحلة الجمهورية؟",
    answers: ["أغسطس", "يوليوس قيصر", "نيرون", "قسطنطين"],
    correct: 0,
    category: "history",
    difficulty: "hard"
},
{
    question: "ما اسم المعركة البحرية الشهيرة التي هُزم فيها الأسطول العثماني أمام الأسطول المسيحي عام 1571؟",
    answers: ["ليبانتو", "واترلو", "طرفالغار", "سلاميس"],
    correct: 0,
    category: "history",
    difficulty: "hard"
},
{
    question: "أي حضارة بنت مدينة تيكال الشهيرة في أمريكا الوسطى؟",
    answers: ["المايا", "الإنكا", "الأزتك", "الأولمك"],
    correct: 0,
    category: "history",
    difficulty: "hard"
},
{
    question: "ما المدينة التي كانت عاصمة إمبراطورية الأزتك؟",
    answers: ["تينوتشتيتلان", "كوسكو", "تيكال", "تيوتيهواكان"],
    correct: 0,
    category: "history",
    difficulty: "hard"
},
{
    question: "ما عاصمة إمبراطورية الإنكا؟",
    answers: ["كوسكو", "تينوتشتيتلان", "تيكال", "مكسيكو"],
    correct: 0,
    category: "history",
    difficulty: "hard"
},
{
    question: "من هو القائد المغولي الذي أسس أكبر إمبراطورية متصلة برية في التاريخ؟",
    answers: ["جنكيز خان", "تيمورلنك", "هولاكو", "قبلاي خان"],
    correct: 0,
    category: "history",
    difficulty: "hard"
},
{
    question: "ما السلالة الصينية التي ارتبط بها جيش التيراكوتا؟",
    answers: ["أسرة تشين", "أسرة هان", "أسرة تانغ", "أسرة مينغ"],
    correct: 0,
    category: "history",
    difficulty: "hard"
},
{
    question: "من هو أول إمبراطور وحد الصين سياسيًا في نهاية القرن الثالث قبل الميلاد؟",
    answers: ["تشين شي هوانغ", "كونفوشيوس", "ليو بانغ", "كانغشي"],
    correct: 0,
    category: "history",
    difficulty: "hard"
},
{
    question: "ما اسم الطريق التجاري الذي ربط الصين بالعالم الغربي عبر آسيا؟",
    answers: ["طريق الحرير", "طريق البخور فقط", "طريق الذهب", "طريق العنبر"],
    correct: 0,
    category: "history",
    difficulty: "hard"
},
{
    question: "أي سلالة حكمت الصين خلال فترة ارتبطت بازدهار التجارة وطريق الحرير في القرون الأولى للميلاد؟",
    answers: ["أسرة هان", "أسرة تشين", "أسرة مينغ", "أسرة تشينغ"],
    correct: 0,
    category: "history",
    difficulty: "hard"
},
{
    question: "ما اسم المعركة التي انتصر فيها المماليك على المغول عام 1260م؟",
    answers: ["عين جالوت", "حطين", "القادسية", "اليرموك"],
    correct: 0,
    category: "history",
    difficulty: "hard"
},
{
    question: "من هو السلطان المملوكي الذي ارتبط بانتصار عين جالوت إلى جانب قطز؟",
    answers: ["الظاهر بيبرس", "صلاح الدين", "نور الدين زنكي", "محمد الفاتح"],
    correct: 0,
    category: "history",
    difficulty: "hard"
},
{
    question: "ما المعركة التي أوقفت التوسع المغولي في بلاد الشام ومصر بشكل حاسم عام 1260م؟",
    answers: ["عين جالوت", "ملاذكرد", "حطين", "الزلاقة"],
    correct: 0,
    category: "history",
    difficulty: "hard"
},
{
    question: "ما المعركة التي انتصر فيها السلاجقة بقيادة ألب أرسلان على البيزنطيين عام 1071م؟",
    answers: ["ملاذكرد", "حطين", "عين جالوت", "القادسية"],
    correct: 0,
    category: "history",
    difficulty: "hard"
},
{
    question: "ما المعركة التي انتصر فيها المسلمون على الفرس الساسانيين في العراق عام 636م تقريبًا؟",
    answers: ["القادسية", "اليرموك", "حطين", "عين جالوت"],
    correct: 0,
    category: "history",
    difficulty: "hard"
},
{
    question: "من هو المؤرخ الذي يُعرف بلقب مؤسس علم العمران البشري؟",
    answers: ["ابن خلدون", "الطبري", "المسعودي", "ابن الأثير"],
    correct: 0,
    category: "history",
    difficulty: "hard"
},
{
    question: "ما اسم المؤرخ اليوناني الذي يُلقب أحيانًا بأبي التاريخ؟",
    answers: ["هيرودوت", "ثيوسيديدس", "سقراط", "أفلاطون"],
    correct: 0,
    category: "history",
    difficulty: "hard"
},
{
    question: "من هو المؤرخ الذي كتب تاريخ الحرب البيلوبونيسية؟",
    answers: ["ثيوسيديدس", "هيرودوت", "أفلاطون", "أرسطو"],
    correct: 0,
    category: "history",
    difficulty: "hard"
},
{
    question: "ما الوثيقة الإنجليزية التي صدرت عام 1215 وحدّت من بعض سلطات الملك؟",
    answers: ["ماغنا كارتا", "إعلان الاستقلال", "وثيقة الحقوق الأمريكية", "معاهدة فرساي"],
    correct: 0,
    category: "history",
    difficulty: "hard"
},
{
    question: "ما الحدث الذي يُعد بداية تقليدية للعصر الحديث في كثير من المناهج بسبب سقوط القسطنطينية؟",
    answers: ["سقوط القسطنطينية عام 1453", "سقوط روما عام 476", "الثورة الفرنسية", "الحرب العالمية الأولى"],
    correct: 0,
    category: "history",
    difficulty: "hard"
},
{
    question: "ما المعركة البحرية التي انتصر فيها الأسطول البريطاني على الأسطول الفرنسي والإسباني عام 1805؟",
    answers: ["طرفالغار", "واترلو", "أوسترليتز", "كاناي"],
    correct: 0,
    category: "history",
    difficulty: "hard"
},
{
    question: "ما المؤتمر الذي أعاد تنظيم أوروبا بعد الحروب النابليونية؟",
    answers: ["مؤتمر فيينا", "مؤتمر برلين", "مؤتمر يالطا", "مؤتمر بوتسدام"],
    correct: 0,
    category: "history",
    difficulty: "hard"
},
{
    question: "ما الحرب التي اندلعت بين الشمال والجنوب في الولايات المتحدة خلال القرن التاسع عشر؟",
    answers: ["الحرب الأهلية الأمريكية", "الحرب المكسيكية", "حرب الاستقلال", "الحرب الإسبانية الأمريكية"],
    correct: 0,
    category: "history",
    difficulty: "hard"
},
{
    question: "ما الثورة التي بدأت في روسيا عام 1917 وأدت إلى سقوط النظام القيصري؟",
    answers: ["ثورة فبراير", "الثورة الفرنسية", "الثورة الصناعية", "ثورة 1848"],
    correct: 0,
    category: "history",
    difficulty: "hard"
},
{
    question: "ما اسم الاتفاق الذي أنهى الحرب العالمية الأولى بين الحلفاء وألمانيا؟",
    answers: ["معاهدة فرساي", "معاهدة لوزان", "معاهدة يالطا", "معاهدة بريست ليتوفسك"],
    correct: 0,
    category: "history",
    difficulty: "hard"
},
{
    question: "ما المؤتمر الذي عُقد عام 1945 وناقش ترتيبات ما بعد الحرب العالمية الثانية بمشاركة ستالين وروزفلت وتشرشل؟",
    answers: ["مؤتمر يالطا", "مؤتمر فيينا", "مؤتمر باريس", "مؤتمر برلين"],
    correct: 0,
    category: "history",
    difficulty: "hard"
},
{
    question: "ما الحدث الذي أدى مباشرة إلى دخول الولايات المتحدة الحرب العالمية الثانية؟",
    answers: ["الهجوم على بيرل هاربر", "غزو بولندا", "معركة ستالينجراد", "إنزال النورماندي"],
    correct: 0,
    category: "history",
    difficulty: "hard"
},
// ==================== MATH - EASY (40) ====================

{
    question: "ما ناتج 7 + 8؟",
    answers: ["15", "14", "16", "13"],
    correct: 0,
    category: "math",
    difficulty: "easy"
},
{
    question: "ما ناتج 12 - 5؟",
    answers: ["7", "6", "8", "9"],
    correct: 0,
    category: "math",
    difficulty: "easy"
},
{
    question: "ما ناتج 6 × 4؟",
    answers: ["24", "20", "26", "18"],
    correct: 0,
    category: "math",
    difficulty: "easy"
},
{
    question: "ما ناتج 36 ÷ 6؟",
    answers: ["6", "5", "7", "8"],
    correct: 0,
    category: "math",
    difficulty: "easy"
},
{
    question: "ما نصف العدد 20؟",
    answers: ["10", "5", "15", "12"],
    correct: 0,
    category: "math",
    difficulty: "easy"
},
{
    question: "ما ضعف العدد 14؟",
    answers: ["28", "24", "26", "30"],
    correct: 0,
    category: "math",
    difficulty: "easy"
},
{
    question: "ما العدد الذي يأتي بعد 99؟",
    answers: ["100", "98", "101", "109"],
    correct: 0,
    category: "math",
    difficulty: "easy"
},
{
    question: "كم ضلعًا للمربع؟",
    answers: ["4", "3", "5", "6"],
    correct: 0,
    category: "math",
    difficulty: "easy"
},
{
    question: "كم زاوية للمثلث؟",
    answers: ["3", "4", "2", "5"],
    correct: 0,
    category: "math",
    difficulty: "easy"
},
{
    question: "ما العدد الزوجي التالي بعد 18؟",
    answers: ["20", "19", "21", "22"],
    correct: 0,
    category: "math",
    difficulty: "easy"
},
{
    question: "ما ناتج 25 + 25؟",
    answers: ["50", "45", "55", "60"],
    correct: 0,
    category: "math",
    difficulty: "easy"
},
{
    question: "ما ناتج 100 - 37؟",
    answers: ["63", "67", "73", "53"],
    correct: 0,
    category: "math",
    difficulty: "easy"
},
{
    question: "ما ناتج 9 × 5؟",
    answers: ["45", "40", "50", "35"],
    correct: 0,
    category: "math",
    difficulty: "easy"
},
{
    question: "ما ناتج 81 ÷ 9؟",
    answers: ["9", "8", "7", "10"],
    correct: 0,
    category: "math",
    difficulty: "easy"
},
{
    question: "ما قيمة 10²؟",
    answers: ["100", "20", "50", "1000"],
    correct: 0,
    category: "math",
    difficulty: "easy"
},
{
    question: "ما قيمة √49؟",
    answers: ["7", "6", "8", "9"],
    correct: 0,
    category: "math",
    difficulty: "easy"
},
{
    question: "أي عدد من الآتي عدد أولي؟",
    answers: ["17", "21", "27", "33"],
    correct: 0,
    category: "math",
    difficulty: "easy"
},
{
    question: "ما قيمة 1/2 كنسبة مئوية؟",
    answers: ["50%", "25%", "75%", "20%"],
    correct: 0,
    category: "math",
    difficulty: "easy"
},
{
    question: "كم يساوي 0.5 كسرًا اعتياديًا؟",
    answers: ["1/2", "1/3", "2/3", "1/4"],
    correct: 0,
    category: "math",
    difficulty: "easy"
},
{
    question: "ما محيط مربع طول ضلعه 5 سم؟",
    answers: ["20 سم", "15 سم", "25 سم", "10 سم"],
    correct: 0,
    category: "math",
    difficulty: "easy"
},
{
    question: "ما مساحة مربع طول ضلعه 6 سم؟",
    answers: ["36 سم²", "24 سم²", "12 سم²", "30 سم²"],
    correct: 0,
    category: "math",
    difficulty: "easy"
},
{
    question: "ما مساحة مستطيل طوله 8 سم وعرضه 3 سم؟",
    answers: ["24 سم²", "22 سم²", "16 سم²", "11 سم²"],
    correct: 0,
    category: "math",
    difficulty: "easy"
},
{
    question: "ما محيط مستطيل طوله 7 سم وعرضه 3 سم؟",
    answers: ["20 سم", "21 سم", "17 سم", "14 سم"],
    correct: 0,
    category: "math",
    difficulty: "easy"
},
{
    question: "ما مجموع زوايا المثلث؟",
    answers: ["180°", "90°", "270°", "360°"],
    correct: 0,
    category: "math",
    difficulty: "easy"
},
{
    question: "ما مجموع زوايا المربع الداخلية؟",
    answers: ["360°", "180°", "270°", "90°"],
    correct: 0,
    category: "math",
    difficulty: "easy"
},
{
    question: "ما العدد الذي يمثل 25% من 100؟",
    answers: ["25", "20", "50", "75"],
    correct: 0,
    category: "math",
    difficulty: "easy"
},
{
    question: "إذا كان س + 5 = 12، فما قيمة س؟",
    answers: ["7", "6", "8", "17"],
    correct: 0,
    category: "math",
    difficulty: "easy"
},
{
    question: "إذا كان س - 4 = 10، فما قيمة س؟",
    answers: ["14", "6", "16", "10"],
    correct: 0,
    category: "math",
    difficulty: "easy"
},
{
    question: "إذا كان 3س = 18، فما قيمة س؟",
    answers: ["6", "5", "9", "3"],
    correct: 0,
    category: "math",
    difficulty: "easy"
},
{
    question: "ما ناتج 2³؟",
    answers: ["8", "6", "9", "12"],
    correct: 0,
    category: "math",
    difficulty: "easy"
},
{
    question: "ما العدد الذي يقبل القسمة على 2؟",
    answers: ["48", "45", "51", "57"],
    correct: 0,
    category: "math",
    difficulty: "easy"
},
{
    question: "ما أصغر عدد طبيعي موجب؟",
    answers: ["1", "0", "2", "-1"],
    correct: 0,
    category: "math",
    difficulty: "easy"
},
{
    question: "ما ناتج 15 × 2؟",
    answers: ["30", "25", "35", "20"],
    correct: 0,
    category: "math",
    difficulty: "easy"
},
{
    question: "ما ناتج 64 ÷ 8؟",
    answers: ["8", "7", "9", "6"],
    correct: 0,
    category: "math",
    difficulty: "easy"
},
{
    question: "ما قيمة 3/4 كنسبة مئوية؟",
    answers: ["75%", "50%", "25%", "80%"],
    correct: 0,
    category: "math",
    difficulty: "easy"
},
{
    question: "كم يساوي 2.5 + 1.5؟",
    answers: ["4", "3", "4.5", "5"],
    correct: 0,
    category: "math",
    difficulty: "easy"
},
{
    question: "ما ناتج 50% من 80؟",
    answers: ["40", "30", "50", "20"],
    correct: 0,
    category: "math",
    difficulty: "easy"
},
{
    question: "ما الكسر المكافئ لـ 2/4 في أبسط صورة؟",
    answers: ["1/2", "1/4", "2/3", "3/4"],
    correct: 0,
    category: "math",
    difficulty: "easy"
},
{
    question: "ما قيمة 5²؟",
    answers: ["25", "10", "15", "20"],
    correct: 0,
    category: "math",
    difficulty: "easy"
},
{
    question: "ما قيمة √81؟",
    answers: ["9", "8", "7", "10"],
    correct: 0,
    category: "math",
    difficulty: "easy"
},

// ==================== MATH - MEDIUM (40) ====================

{
    question: "ما ناتج 15 + 8 × 2؟",
    answers: ["31", "46", "38", "30"],
    correct: 0,
    category: "math",
    difficulty: "medium"
},
{
    question: "ما ناتج (18 + 6) ÷ 4؟",
    answers: ["6", "5", "7", "8"],
    correct: 0,
    category: "math",
    difficulty: "medium"
},
{
    question: "إذا كان 2س + 5 = 17، فما قيمة س؟",
    answers: ["6", "5", "7", "8"],
    correct: 0,
    category: "math",
    difficulty: "medium"
},
{
    question: "إذا كان 5س - 10 = 20، فما قيمة س؟",
    answers: ["6", "5", "4", "8"],
    correct: 0,
    category: "math",
    difficulty: "medium"
},
{
    question: "ما قيمة 3² + 4²؟",
    answers: ["25", "24", "12", "49"],
    correct: 0,
    category: "math",
    difficulty: "medium"
},
{
    question: "ما قيمة √144 + 6؟",
    answers: ["18", "16", "20", "14"],
    correct: 0,
    category: "math",
    difficulty: "medium"
},
{
    question: "ما ناتج 2/3 + 1/6؟",
    answers: ["5/6", "4/6", "3/6", "1"],
    correct: 0,
    category: "math",
    difficulty: "medium"
},
{
    question: "ما ناتج 3/4 - 1/8؟",
    answers: ["5/8", "4/8", "6/8", "3/8"],
    correct: 0,
    category: "math",
    difficulty: "medium"
},
{
    question: "ما ناتج 2/5 × 10؟",
    answers: ["4", "5", "2", "10"],
    correct: 0,
    category: "math",
    difficulty: "medium"
},
{
    question: "ما ناتج 3/4 ÷ 1/2؟",
    answers: ["3/2", "1/2", "2/3", "3/4"],
    correct: 0,
    category: "math",
    difficulty: "medium"
},
{
    question: "إذا كان سعر منتج 200 جنيه وخصمه 15%، فما السعر بعد الخصم؟",
    answers: ["170 جنيه", "175 جنيه", "185 جنيه", "160 جنيه"],
    correct: 0,
    category: "math",
    difficulty: "medium"
},
{
    question: "ما العدد الذي يمثل 30% من 250؟",
    answers: ["75", "60", "80", "90"],
    correct: 0,
    category: "math",
    difficulty: "medium"
},
{
    question: "إذا زاد عدد 80 بنسبة 25%، فما العدد الجديد؟",
    answers: ["100", "95", "105", "120"],
    correct: 0,
    category: "math",
    difficulty: "medium"
},
{
    question: "ما متوسط الأعداد 6 و10 و14؟",
    answers: ["10", "9", "11", "12"],
    correct: 0,
    category: "math",
    difficulty: "medium"
},
{
    question: "ما الوسيط للأعداد 3، 7، 9، 12، 15؟",
    answers: ["9", "7", "12", "10"],
    correct: 0,
    category: "math",
    difficulty: "medium"
},
{
    question: "ما المنوال للأعداد 2، 4، 4، 5، 7، 4؟",
    answers: ["4", "2", "5", "7"],
    correct: 0,
    category: "math",
    difficulty: "medium"
},
{
    question: "مثلث قائم الزاوية طول ضلعيه القائمين 3 و4، فما طول الوتر؟",
    answers: ["5", "6", "7", "4"],
    correct: 0,
    category: "math",
    difficulty: "medium"
},
{
    question: "مستطيل طوله 12 سم وعرضه 5 سم، فما مساحته؟",
    answers: ["60 سم²", "34 سم²", "50 سم²", "70 سم²"],
    correct: 0,
    category: "math",
    difficulty: "medium"
},
{
    question: "دائرة نصف قطرها 7 سم، فما محيطها باستخدام π = 22/7؟",
    answers: ["44 سم", "22 سم", "49 سم", "154 سم"],
    correct: 0,
    category: "math",
    difficulty: "medium"
},
{
    question: "دائرة نصف قطرها 7 سم، فما مساحتها باستخدام π = 22/7؟",
    answers: ["154 سم²", "44 سم²", "77 سم²", "308 سم²"],
    correct: 0,
    category: "math",
    difficulty: "medium"
},
{
    question: "ما قيمة 2⁵؟",
    answers: ["32", "16", "25", "64"],
    correct: 0,
    category: "math",
    difficulty: "medium"
},
{
    question: "ما قيمة 3⁴؟",
    answers: ["81", "64", "27", "12"],
    correct: 0,
    category: "math",
    difficulty: "medium"
},
{
    question: "ما قيمة 10⁰؟",
    answers: ["1", "0", "10", "100"],
    correct: 0,
    category: "math",
    difficulty: "medium"
},
{
    question: "ما قيمة 2⁻¹؟",
    answers: ["1/2", "2", "-2", "1"],
    correct: 0,
    category: "math",
    difficulty: "medium"
},
{
    question: "إذا كان س² = 49 وس قيمة موجبة، فما قيمة س؟",
    answers: ["7", "-7", "14", "49"],
    correct: 0,
    category: "math",
    difficulty: "medium"
},
{
    question: "حل المعادلة س² = 64 إذا كانت س موجبة.",
    answers: ["8", "4", "16", "32"],
    correct: 0,
    category: "math",
    difficulty: "medium"
},
{
    question: "ما حاصل تحليل س² - 25؟",
    answers: ["(س - 5)(س + 5)", "(س - 25)(س + 1)", "(س - 5)²", "(س + 25)(س - 1)"],
    correct: 0,
    category: "math",
    difficulty: "medium"
},
{
    question: "ما قيمة 4س + 3 إذا كان س = 5؟",
    answers: ["23", "20", "17", "27"],
    correct: 0,
    category: "math",
    difficulty: "medium"
},
{
    question: "إذا كان ص = 2س + 1، فما قيمة ص عندما س = 4؟",
    answers: ["9", "8", "7", "10"],
    correct: 0,
    category: "math",
    difficulty: "medium"
},
{
    question: "ما ميل المستقيم المار بالنقطتين (1,2) و(3,6)؟",
    answers: ["2", "3", "1", "4"],
    correct: 0,
    category: "math",
    difficulty: "medium"
},
{
    question: "ما قيمة س في المعادلة 3س + 2 = 20؟",
    answers: ["6", "5", "7", "8"],
    correct: 0,
    category: "math",
    difficulty: "medium"
},
{
    question: "إذا كان محيط مربع 36 سم، فما طول ضلعه؟",
    answers: ["9 سم", "8 سم", "12 سم", "6 سم"],
    correct: 0,
    category: "math",
    difficulty: "medium"
},
{
    question: "مثلث قاعدته 10 سم وارتفاعه 6 سم، فما مساحته؟",
    answers: ["30 سم²", "60 سم²", "16 سم²", "40 سم²"],
    correct: 0,
    category: "math",
    difficulty: "medium"
},
{
    question: "ما مجموع أول 5 أعداد طبيعية موجبة؟",
    answers: ["15", "10", "20", "25"],
    correct: 0,
    category: "math",
    difficulty: "medium"
},
{
    question: "ما العدد التالي في النمط: 3، 6، 12، 24، ...؟",
    answers: ["48", "36", "42", "30"],
    correct: 0,
    category: "math",
    difficulty: "medium"
},
{
    question: "ما العدد التالي في النمط: 2، 5، 8، 11، ...؟",
    answers: ["14", "13", "15", "16"],
    correct: 0,
    category: "math",
    difficulty: "medium"
},
{
    question: "إذا كان احتمال حدث ما يساوي 1، فماذا يعني ذلك؟",
    answers: ["الحدث مؤكد", "الحدث مستحيل", "الحدث نادر", "لا يمكن تحديده"],
    correct: 0,
    category: "math",
    difficulty: "medium"
},
{
    question: "ما احتمال الحصول على صورة عند رمي قطعة نقود عادلة مرة واحدة؟",
    answers: ["1/2", "1/4", "1", "0"],
    correct: 0,
    category: "math",
    difficulty: "medium"
},
{
    question: "كيس يحتوي على 3 كرات حمراء و2 زرقاء. ما احتمال سحب كرة حمراء؟",
    answers: ["3/5", "2/5", "1/2", "3/2"],
    correct: 0,
    category: "math",
    difficulty: "medium"
},
{
    question: "ما القيمة المطلقة للعدد -17؟",
    answers: ["17", "-17", "0", "1"],
    correct: 0,
    category: "math",
    difficulty: "medium"
},

// ==================== MATH - HARD (40) ====================

{
    question: "حل المعادلة 2س² - 8 = 0، مع اعتبار الجذر الموجب فقط.",
    answers: ["2", "4", "√2", "8"],
    correct: 0,
    category: "math",
    difficulty: "hard"
},
{
    question: "ما جذرا المعادلة س² - 5س + 6 = 0؟",
    answers: ["2 و3", "1 و6", "-2 و-3", "3 و4"],
    correct: 0,
    category: "math",
    difficulty: "hard"
},
{
    question: "ما قيمة س في المعادلة 3س² - 12س = 0 إذا كان س ≠ 0؟",
    answers: ["4", "3", "12", "6"],
    correct: 0,
    category: "math",
    difficulty: "hard"
},
{
    question: "ما حاصل تحليل س² + 7س + 12؟",
    answers: ["(س + 3)(س + 4)", "(س + 2)(س + 6)", "(س - 3)(س - 4)", "(س + 1)(س + 12)"],
    correct: 0,
    category: "math",
    difficulty: "hard"
},
{
    question: "إذا كان س + ص = 10 و س - ص = 4، فما قيمة س؟",
    answers: ["7", "6", "8", "5"],
    correct: 0,
    category: "math",
    difficulty: "hard"
},
{
    question: "إذا كان س + ص = 10 و س - ص = 4، فما قيمة ص؟",
    answers: ["3", "4", "6", "2"],
    correct: 0,
    category: "math",
    difficulty: "hard"
},
{
    question: "حل النظام: 2س + ص = 7 و س - ص = 2. ما قيمة س؟",
    answers: ["3", "2", "4", "5"],
    correct: 0,
    category: "math",
    difficulty: "hard"
},
{
    question: "حل النظام: 2س + ص = 7 و س - ص = 2. ما قيمة ص؟",
    answers: ["1", "2", "3", "5"],
    correct: 0,
    category: "math",
    difficulty: "hard"
},
{
    question: "ما قيمة مجموع المتتابعة 2 + 4 + 6 + ... + 20؟",
    answers: ["110", "100", "120", "90"],
    correct: 0,
    category: "math",
    difficulty: "hard"
},
{
    question: "ما مجموع الأعداد الصحيحة من 1 إلى 100؟",
    answers: ["5050", "5000", "5100", "5500"],
    correct: 0,
    category: "math",
    difficulty: "hard"
},
{
    question: "ما الحد العاشر في المتتابعة الحسابية 3، 7، 11، 15، ...؟",
    answers: ["39", "40", "43", "35"],
    correct: 0,
    category: "math",
    difficulty: "hard"
},
{
    question: "إذا كان الحد الأول لمتتابعة حسابية 5 والفرق المشترك 3، فما الحد العاشر؟",
    answers: ["32", "30", "35", "27"],
    correct: 0,
    category: "math",
    difficulty: "hard"
},
{
    question: "ما الحد السادس في المتتابعة الهندسية 2، 4، 8، 16، ...؟",
    answers: ["64", "32", "128", "48"],
    correct: 0,
    category: "math",
    difficulty: "hard"
},
{
    question: "إذا كان الحد الأول لمتتابعة هندسية 3 والأساس 2، فما الحد الخامس؟",
    answers: ["48", "24", "32", "96"],
    correct: 0,
    category: "math",
    difficulty: "hard"
},
{
    question: "ما قيمة 2⁻³؟",
    answers: ["1/8", "1/6", "8", "-8"],
    correct: 0,
    category: "math",
    difficulty: "hard"
},
{
    question: "ما قيمة (3² × 3³)؟",
    answers: ["3⁵", "3⁶", "9⁵", "6⁵"],
    correct: 0,
    category: "math",
    difficulty: "hard"
},
{
    question: "ما قيمة (2³)²؟",
    answers: ["64", "32", "16", "128"],
    correct: 0,
    category: "math",
    difficulty: "hard"
},
{
    question: "ما قيمة log₁₀(1000)؟",
    answers: ["3", "2", "10", "100"],
    correct: 0,
    category: "math",
    difficulty: "hard"
},
{
    question: "إذا كان 2ˣ = 32، فما قيمة س؟",
    answers: ["5", "4", "6", "8"],
    correct: 0,
    category: "math",
    difficulty: "hard"
},
{
    question: "إذا كان 3ˣ = 81، فما قيمة س؟",
    answers: ["4", "3", "5", "6"],
    correct: 0,
    category: "math",
    difficulty: "hard"
},
{
    question: "ما قيمة المحدد للمصفوفة [[2,1],[3,4]]؟",
    answers: ["5", "8", "11", "2"],
    correct: 0,
    category: "math",
    difficulty: "hard"
},
{
    question: "إذا كان |س - 3| = 5، فما قيم س الممكنة؟",
    answers: ["8 و-2", "5 و-5", "3 و5", "2 و8"],
    correct: 0,
    category: "math",
    difficulty: "hard"
},
{
    question: "ما قيمة √50 في أبسط صورة؟",
    answers: ["5√2", "10√5", "25√2", "2√5"],
    correct: 0,
    category: "math",
    difficulty: "hard"
},
{
    question: "ما قيمة √18 في أبسط صورة؟",
    answers: ["3√2", "2√3", "9√2", "6√2"],
    correct: 0,
    category: "math",
    difficulty: "hard"
},
{
    question: "مثلث قائم الزاوية وتره 13 وأحد ضلعيه القائمين 5، فما طول الضلع الآخر؟",
    answers: ["12", "10", "8", "14"],
    correct: 0,
    category: "math",
    difficulty: "hard"
},
{
    question: "إذا كان نصف قطر دائرة 10 سم، فما مساحتها بدلالة π؟",
    answers: ["100π سم²", "20π سم²", "10π سم²", "200π سم²"],
    correct: 0,
    category: "math",
    difficulty: "hard"
},
{
    question: "إذا كان قطر دائرة 14 سم، فما مساحتها باستخدام π = 22/7؟",
    answers: ["154 سم²", "308 سم²", "44 سم²", "196 سم²"],
    correct: 0,
    category: "math",
    difficulty: "hard"
},
{
    question: "ما حجم مكعب طول حرفه 5 سم؟",
    answers: ["125 سم³", "25 سم³", "100 سم³", "75 سم³"],
    correct: 0,
    category: "math",
    difficulty: "hard"
},
{
    question: "ما حجم أسطوانة نصف قطرها 3 سم وارتفاعها 4 سم بدلالة π؟",
    answers: ["36π سم³", "12π سم³", "24π سم³", "48π سم³"],
    correct: 0,
    category: "math",
    difficulty: "hard"
},
{
    question: "ما مشتقة الدالة س²؟",
    answers: ["2س", "س", "2", "س²"],
    correct: 0,
    category: "math",
    difficulty: "hard"
},
{
    question: "ما مشتقة الدالة 5س؟",
    answers: ["5", "5س", "س", "0"],
    correct: 0,
    category: "math",
    difficulty: "hard"
},
{
    question: "ما مشتقة الدالة س³؟",
    answers: ["3س²", "س²", "3س", "س³"],
    correct: 0,
    category: "math",
    difficulty: "hard"
},
{
    question: "ما تكامل الدالة 2س؟",
    answers: ["س² + C", "2س² + C", "س + C", "2 + C"],
    correct: 0,
    category: "math",
    difficulty: "hard"
},
{
    question: "ما قيمة النهاية lim س→2 لـ (س + 3)؟",
    answers: ["5", "4", "6", "3"],
    correct: 0,
    category: "math",
    difficulty: "hard"
},
{
    question: "ما قيمة النهاية lim س→3 لـ (س²)؟",
    answers: ["9", "6", "3", "12"],
    correct: 0,
    category: "math",
    difficulty: "hard"
},
{
    question: "إذا كان احتمال نجاح تجربة 0.7، فما احتمال فشلها؟",
    answers: ["0.3", "0.7", "0.4", "1.7"],
    correct: 0,
    category: "math",
    difficulty: "hard"
},
{
    question: "عند رمي حجر نرد عادل، ما احتمال ظهور عدد أكبر من 4؟",
    answers: ["1/3", "1/2", "1/6", "2/3"],
    correct: 0,
    category: "math",
    difficulty: "hard"
},
{
    question: "عند رمي حجر نرد عادل، ما احتمال ظهور عدد زوجي؟",
    answers: ["1/2", "1/3", "2/3", "1/6"],
    correct: 0,
    category: "math",
    difficulty: "hard"
},
{
    question: "كم طريقة لاختيار طالبين من مجموعة مكونة من 5 طلاب دون اعتبار للترتيب؟",
    answers: ["10", "20", "5", "15"],
    correct: 0,
    category: "math",
    difficulty: "hard"
},
{
    question: "ما قيمة التوافيق C(6,2)؟",
    answers: ["15", "12", "30", "6"],
    correct: 0,
    category: "math",
    difficulty: "hard"
},
{
    question: "ما قيمة 7!؟",
    answers: ["5040", "720", "840", "40320"],
    correct: 0,
    category: "math",
    difficulty: "hard"
},
// ==================== TECHNOLOGY - EASY (34) ====================

{
    question: "ماذا تعني كلمة CPU؟",
    answers: ["وحدة المعالجة المركزية", "ذاكرة الوصول العشوائي", "وحدة التخزين", "بطاقة الرسوميات"],
    correct: 0,
    category: "technology",
    difficulty: "easy"
},
{
    question: "ماذا تعني RAM؟",
    answers: ["ذاكرة الوصول العشوائي", "وحدة المعالجة المركزية", "ذاكرة القراءة فقط", "بطاقة الشبكة"],
    correct: 0,
    category: "technology",
    difficulty: "easy"
},
{
    question: "أي من الآتي يُستخدم لتخزين الملفات؟",
    answers: ["SSD", "CPU", "RAM", "GPU"],
    correct: 0,
    category: "technology",
    difficulty: "easy"
},
{
    question: "ما الجهاز المستخدم لتحريك المؤشر على الكمبيوتر؟",
    answers: ["الفأرة", "الطابعة", "السماعة", "الماسح الضوئي"],
    correct: 0,
    category: "technology",
    difficulty: "easy"
},
{
    question: "ما الجهاز المستخدم لعرض الصور والنصوص من الكمبيوتر؟",
    answers: ["الشاشة", "لوحة المفاتيح", "الميكروفون", "الفأرة"],
    correct: 0,
    category: "technology",
    difficulty: "easy"
},
{
    question: "أي من الآتي نظام تشغيل؟",
    answers: ["Windows", "Google", "YouTube", "HTML"],
    correct: 0,
    category: "technology",
    difficulty: "easy"
},
{
    question: "ما نظام التشغيل المستخدم على أجهزة iPhone؟",
    answers: ["iOS", "Android", "Windows", "Linux"],
    correct: 0,
    category: "technology",
    difficulty: "easy"
},
{
    question: "ما نظام التشغيل الشائع على كثير من الهواتف الذكية من شركات مختلفة؟",
    answers: ["Android", "iOS", "DOS", "macOS"],
    correct: 0,
    category: "technology",
    difficulty: "easy"
},
{
    question: "ما اللغة الأساسية المستخدمة لبناء هيكل صفحات الويب؟",
    answers: ["HTML", "Python", "SQL", "C++"],
    correct: 0,
    category: "technology",
    difficulty: "easy"
},
{
    question: "ما اللغة المستخدمة غالبًا لتنسيق وتصميم صفحات الويب؟",
    answers: ["CSS", "HTML", "SQL", "Java"],
    correct: 0,
    category: "technology",
    difficulty: "easy"
},
{
    question: "ما اللغة التي تضيف التفاعل والوظائف الديناميكية لصفحات الويب؟",
    answers: ["JavaScript", "HTML", "CSS", "SQL"],
    correct: 0,
    category: "technology",
    difficulty: "easy"
},
{
    question: "ما المقصود بـ URL؟",
    answers: ["عنوان مورد على الويب", "نوع من المعالجات", "ذاكرة مؤقتة", "نظام تشغيل"],
    correct: 0,
    category: "technology",
    difficulty: "easy"
},
{
    question: "ماذا يعني WWW؟",
    answers: ["World Wide Web", "World Web Window", "Web Wide World", "Wide World Wire"],
    correct: 0,
    category: "technology",
    difficulty: "easy"
},
{
    question: "من اخترع شبكة الويب العالمية WWW؟",
    answers: ["تيم برنرز-لي", "بيل جيتس", "ستيف جوبز", "مارك زوكربيرج"],
    correct: 0,
    category: "technology",
    difficulty: "easy"
},
{
    question: "ما الشركة التي تطور نظام Windows؟",
    answers: ["Microsoft", "Apple", "Google", "IBM"],
    correct: 0,
    category: "technology",
    difficulty: "easy"
},
{
    question: "ما الشركة التي تطور نظام Android؟",
    answers: ["Google", "Apple", "Microsoft", "Intel"],
    correct: 0,
    category: "technology",
    difficulty: "easy"
},
{
    question: "ما الشركة التي تنتج أجهزة iPhone؟",
    answers: ["Apple", "Microsoft", "Google", "Samsung"],
    correct: 0,
    category: "technology",
    difficulty: "easy"
},
{
    question: "ما وظيفة لوحة المفاتيح؟",
    answers: ["إدخال النصوص والأوامر", "عرض الصور", "طباعة المستندات فقط", "تخزين الملفات"],
    correct: 0,
    category: "technology",
    difficulty: "easy"
},
{
    question: "ما المقصود بالإنترنت؟",
    answers: ["شبكة عالمية من الشبكات", "برنامج لتحرير الصور", "نوع من وحدات التخزين", "نظام تشغيل"],
    correct: 0,
    category: "technology",
    difficulty: "easy"
},
{
    question: "أي جهاز يُستخدم لطباعة المستندات؟",
    answers: ["الطابعة", "الشاشة", "الراوتر", "لوحة المفاتيح"],
    correct: 0,
    category: "technology",
    difficulty: "easy"
},
{
    question: "ما وظيفة الميكروفون؟",
    answers: ["التقاط الصوت", "عرض الصور", "طباعة الملفات", "تخزين البيانات"],
    correct: 0,
    category: "technology",
    difficulty: "easy"
},
{
    question: "ما وظيفة السماعات؟",
    answers: ["إخراج الصوت", "إدخال النص", "تخزين الملفات", "التقاط الصور"],
    correct: 0,
    category: "technology",
    difficulty: "easy"
},
{
    question: "أي من الآتي متصفح ويب؟",
    answers: ["Google Chrome", "Windows", "Android", "Photoshop"],
    correct: 0,
    category: "technology",
    difficulty: "easy"
},
{
    question: "أي من الآتي محرك بحث؟",
    answers: ["Google", "Chrome", "Windows", "Bluetooth"],
    correct: 0,
    category: "technology",
    difficulty: "easy"
},
{
    question: "ما وظيفة الراوتر بشكل أساسي؟",
    answers: ["توجيه الاتصال بين الشبكات والأجهزة", "طباعة الملفات", "تسجيل الصوت", "عرض الفيديو"],
    correct: 0,
    category: "technology",
    difficulty: "easy"
},
{
    question: "ما التقنية المستخدمة للاتصال اللاسلكي قصير المدى بين الأجهزة؟",
    answers: ["Bluetooth", "HTML", "HDMI", "USB"],
    correct: 0,
    category: "technology",
    difficulty: "easy"
},
{
    question: "ما المنفذ الشائع لتوصيل أجهزة وملحقات الكمبيوتر؟",
    answers: ["USB", "HTML", "HTTP", "DNS"],
    correct: 0,
    category: "technology",
    difficulty: "easy"
},
{
    question: "ما وحدة قياس سعة تخزين الملفات؟",
    answers: ["GB", "Hz", "Volt", "Pixel"],
    correct: 0,
    category: "technology",
    difficulty: "easy"
},
{
    question: "ما المقصود بـ Wi-Fi؟",
    answers: ["تقنية اتصال لاسلكي بالشبكات", "نوع من المعالجات", "لغة برمجة", "نظام تشغيل"],
    correct: 0,
    category: "technology",
    difficulty: "easy"
},
{
    question: "ما المقصود بالذكاء الاصطناعي؟",
    answers: ["تقنيات تجعل الأنظمة تنفذ مهام تتطلب عادةً ذكاءً بشريًا", "نوع من البطاريات", "لغة لتصميم المواقع فقط", "جهاز لتخزين الملفات"],
    correct: 0,
    category: "technology",
    difficulty: "easy"
},
{
    question: "ما المقصود بالبرمجيات؟",
    answers: ["البرامج والتعليمات التي تعمل على الجهاز", "الأجزاء المادية فقط", "الشاشة فقط", "الكابلات فقط"],
    correct: 0,
    category: "technology",
    difficulty: "easy"
},
{
    question: "ما المقصود بالعتاد Hardware؟",
    answers: ["الأجزاء المادية للجهاز", "البرامج فقط", "المواقع الإلكترونية", "البيانات السحابية فقط"],
    correct: 0,
    category: "technology",
    difficulty: "easy"
},
{
    question: "أي من الآتي لغة برمجة؟",
    answers: ["Python", "HTML", "CSS", "HTTP"],
    correct: 0,
    category: "technology",
    difficulty: "easy"
},
{
    question: "ما امتداد ملف JavaScript الشائع؟",
    answers: [".js", ".html", ".css", ".java"],
    correct: 0,
    category: "technology",
    difficulty: "easy"
},

// ==================== TECHNOLOGY - MEDIUM (33) ====================

{
    question: "ماذا تعني كلمة GPU؟",
    answers: ["وحدة معالجة الرسوميات", "وحدة التخزين", "ذاكرة الوصول العشوائي", "وحدة الشبكة"],
    correct: 0,
    category: "technology",
    difficulty: "medium"
},
{
    question: "ما وظيفة DNS بشكل أساسي؟",
    answers: ["تحويل أسماء النطاقات إلى عناوين IP", "تشفير جميع الملفات", "تخزين الصور", "تشغيل المعالج"],
    correct: 0,
    category: "technology",
    difficulty: "medium"
},
{
    question: "ما المقصود بعنوان IP؟",
    answers: ["عنوان يعرّف جهازًا أو واجهة على شبكة", "اسم المستخدم", "نوع من الملفات", "كلمة مرور"],
    correct: 0,
    category: "technology",
    difficulty: "medium"
},
{
    question: "أي بروتوكول يُستخدم عادةً لنقل صفحات الويب؟",
    answers: ["HTTP", "FTP", "SMTP", "SSH"],
    correct: 0,
    category: "technology",
    difficulty: "medium"
},
{
    question: "ما النسخة الآمنة من HTTP؟",
    answers: ["HTTPS", "HTTS", "SHTTP فقط", "HTTP2"],
    correct: 0,
    category: "technology",
    difficulty: "medium"
},
{
    question: "ما البروتوكول المرتبط بإرسال البريد الإلكتروني؟",
    answers: ["SMTP", "HTTP", "DNS", "FTP"],
    correct: 0,
    category: "technology",
    difficulty: "medium"
},
{
    question: "ما وظيفة DHCP في الشبكات؟",
    answers: ["توزيع إعدادات الشبكة مثل عناوين IP تلقائيًا", "تشفير الصور", "ضغط الفيديو", "تشغيل المواقع"],
    correct: 0,
    category: "technology",
    difficulty: "medium"
},
{
    question: "ما المقصود بالتخزين السحابي؟",
    answers: ["تخزين البيانات على خوادم يمكن الوصول إليها عبر الإنترنت", "حفظ الملفات على لوحة المفاتيح", "تخزين البيانات في المعالج", "ضغط الملفات فقط"],
    correct: 0,
    category: "technology",
    difficulty: "medium"
},
{
    question: "أي تقنية تُستخدم لإنشاء صفحات ويب ديناميكية من جهة العميل؟",
    answers: ["JavaScript", "HTML فقط", "CSS فقط", "SQL فقط"],
    correct: 0,
    category: "technology",
    difficulty: "medium"
},
{
    question: "ما وظيفة CSS في تطوير الويب؟",
    answers: ["تنسيق مظهر عناصر الصفحة", "إنشاء قاعدة البيانات", "تشغيل الخادم", "إرسال البريد"],
    correct: 0,
    category: "technology",
    difficulty: "medium"
},
{
    question: "ما وظيفة HTML؟",
    answers: ["تحديد هيكل ومحتوى الصفحة", "تشفير الشبكة", "إدارة المعالج", "تخزين قواعد البيانات"],
    correct: 0,
    category: "technology",
    difficulty: "medium"
},
{
    question: "ما وظيفة JavaScript في المتصفح؟",
    answers: ["تنفيذ منطق وتفاعل داخل الصفحة", "تغيير دقة الشاشة فقط", "تخزين الكهرباء", "توصيل الطابعة"],
    correct: 0,
    category: "technology",
    difficulty: "medium"
},
{
    question: "ما المقصود بـ API؟",
    answers: ["واجهة تتيح للبرامج التواصل مع بعضها", "نوع من وحدات التخزين", "لغة تصميم", "جهاز شبكات"],
    correct: 0,
    category: "technology",
    difficulty: "medium"
},
{
    question: "ما المقصود بقاعدة البيانات؟",
    answers: ["نظام منظم لتخزين وإدارة البيانات", "برنامج لتصفح الإنترنت فقط", "نوع من الشاشة", "لغة لتصميم الصور"],
    correct: 0,
    category: "technology",
    difficulty: "medium"
},
{
    question: "أي لغة تُستخدم على نطاق واسع للاستعلام عن قواعد البيانات العلائقية؟",
    answers: ["SQL", "HTML", "CSS", "XML"],
    correct: 0,
    category: "technology",
    difficulty: "medium"
},
{
    question: "ما المقصود بـ Git؟",
    answers: ["نظام للتحكم في إصدارات الملفات البرمجية", "نظام تشغيل", "متصفح ويب", "قاعدة بيانات"],
    correct: 0,
    category: "technology",
    difficulty: "medium"
},
{
    question: "ما وظيفة Git commit؟",
    answers: ["تسجيل مجموعة من التغييرات في تاريخ المشروع", "حذف المشروع نهائيًا", "تثبيت نظام تشغيل", "فتح المتصفح"],
    correct: 0,
    category: "technology",
    difficulty: "medium"
},
{
    question: "ما المقصود بـ open source؟",
    answers: ["برمجيات يتاح كودها المصدري وفق ترخيصها", "برنامج لا يعمل إلا دون إنترنت", "برنامج مدفوع دائمًا", "ملف مضغوط"],
    correct: 0,
    category: "technology",
    difficulty: "medium"
},
{
    question: "ما وظيفة نظام التشغيل؟",
    answers: ["إدارة موارد الجهاز وتشغيل البرامج", "زيادة سرعة الإنترنت فقط", "تصميم الصور فقط", "تخزين الكهرباء"],
    correct: 0,
    category: "technology",
    difficulty: "medium"
},
{
    question: "ما الفرق الأساسي بين SSD وHDD؟",
    answers: ["SSD يعتمد على ذاكرة فلاش ولا يحتوي على أجزاء ميكانيكية متحركة", "HDD أسرع دائمًا من SSD", "SSD لا يخزن البيانات", "لا يوجد أي فرق بينهما"],
    correct: 0,
    category: "technology",
    difficulty: "medium"
},
{
    question: "ما المقصود بالـ bandwidth في الشبكات؟",
    answers: ["سعة نقل البيانات المتاحة خلال فترة معينة", "زمن تشغيل المعالج", "حجم الشاشة", "سعة البطارية"],
    correct: 0,
    category: "technology",
    difficulty: "medium"
},
{
    question: "ما المقصود بزمن الاستجابة Latency؟",
    answers: ["الزمن الذي تستغرقه البيانات في الانتقال والاستجابة", "عدد ألوان الشاشة", "سعة التخزين", "سرعة المروحة"],
    correct: 0,
    category: "technology",
    difficulty: "medium"
},
{
    question: "ما وظيفة الجدار الناري Firewall؟",
    answers: ["التحكم في حركة مرور الشبكة وفق قواعد أمنية", "زيادة سعة التخزين", "تسريع الشاشة", "إنشاء الصور"],
    correct: 0,
    category: "technology",
    difficulty: "medium"
},
{
    question: "ما المقصود بالمصادقة الثنائية 2FA؟",
    answers: ["استخدام عاملين للتحقق من هوية المستخدم", "استخدام جهازين كمبيوتر", "إنشاء حسابين", "تغيير كلمة المرور مرتين"],
    correct: 0,
    category: "technology",
    difficulty: "medium"
},
{
    question: "ما المقصود بالتشفير Encryption؟",
    answers: ["تحويل البيانات إلى صيغة تحميها من الاطلاع غير المصرح به", "حذف البيانات", "ضغط الصور فقط", "تسريع المعالج"],
    correct: 0,
    category: "technology",
    difficulty: "medium"
},
{
    question: "أي من الآتي مثال على نظام إدارة محتوى؟",
    answers: ["WordPress", "CPU", "RAM", "Bluetooth"],
    correct: 0,
    category: "technology",
    difficulty: "medium"
},
{
    question: "ما المقصود بـ frontend؟",
    answers: ["الجزء من التطبيق الذي يتفاعل معه المستخدم", "قاعدة البيانات فقط", "الخادم الفيزيائي فقط", "نظام التشغيل"],
    correct: 0,
    category: "technology",
    difficulty: "medium"
},
{
    question: "ما المقصود بـ backend؟",
    answers: ["الجزء الذي يعمل خلف الواجهة ويتعامل مع المنطق والبيانات", "الشاشة فقط", "لوحة المفاتيح", "تصميم الألوان فقط"],
    correct: 0,
    category: "technology",
    difficulty: "medium"
},
{
    question: "ما المقصود بـ responsive design؟",
    answers: ["تصميم يتكيف مع أحجام الشاشات المختلفة", "تصميم يعمل دون إنترنت فقط", "تصميم للألعاب فقط", "تصميم بدون صور"],
    correct: 0,
    category: "technology",
    difficulty: "medium"
},
{
    question: "ما المقصود بـ localhost؟",
    answers: ["الجهاز المحلي الذي يعمل عليه البرنامج أو الخادم", "خادم في دولة أخرى", "عنوان بريد إلكتروني", "نوع من قواعد البيانات"],
    correct: 0,
    category: "technology",
    difficulty: "medium"
},
{
    question: "ما المنفذ الشائع لـ HTTPS؟",
    answers: ["443", "80", "21", "25"],
    correct: 0,
    category: "technology",
    difficulty: "medium"
},
{
    question: "ما المنفذ الشائع لـ HTTP؟",
    answers: ["80", "443", "22", "53"],
    correct: 0,
    category: "technology",
    difficulty: "medium"
},
{
    question: "ما المقصود بالـ cache؟",
    answers: ["تخزين مؤقت لبيانات تُستخدم لتحسين سرعة الوصول", "نسخة احتياطية دائمة", "نوع من المعالجات", "لغة برمجة"],
    correct: 0,
    category: "technology",
    difficulty: "medium"
},

// ==================== TECHNOLOGY - HARD (33) ====================

{
    question: "ما الشبكة التي تُعد من أهم الأسلاف المباشرين للإنترنت؟",
    answers: ["ARPANET", "Ethernet", "Bluetooth", "Wi-Fi"],
    correct: 0,
    category: "technology",
    difficulty: "hard"
},
{
    question: "في أي عام بدأت ARPANET بالعمل على نطاقها الأولي؟",
    answers: ["1969", "1979", "1989", "1959"],
    correct: 0,
    category: "technology",
    difficulty: "hard"
},
{
    question: "من هو الباحث الذي طرح مفهومًا مبكرًا لشبكة عالمية مترابطة من الحواسيب في مذكرات DARPA؟",
    answers: ["جوزيف ليكلايدر", "تيم برنرز-لي", "ستيف جوبز", "دينيس ريتشي"],
    correct: 0,
    category: "technology",
    difficulty: "hard"
},
{
    question: "من طور World Wide Web أثناء عمله في CERN؟",
    answers: ["تيم برنرز-لي", "فينت سيرف", "روبرت كان", "لينوس تورفالدس"],
    correct: 0,
    category: "technology",
    difficulty: "hard"
},
{
    question: "في أي عام اقترح تيم برنرز-لي مشروع World Wide Web لأول مرة؟",
    answers: ["1989", "1983", "1995", "1979"],
    correct: 0,
    category: "technology",
    difficulty: "hard"
},
{
    question: "أي مجموعة تمثل التقنيات الأساسية التي ارتبطت ببناء الويب في بداياته؟",
    answers: ["HTML وURI وHTTP", "CPU وRAM وGPU", "USB وHDMI وVGA", "SMTP وPOP3 وIMAP"],
    correct: 0,
    category: "technology",
    difficulty: "hard"
},
{
    question: "ما البروتوكولان اللذان يشكلان أساس حزمة TCP/IP؟",
    answers: ["TCP وIP", "HTTP وHTML", "DNS وFTP", "SMTP وUSB"],
    correct: 0,
    category: "technology",
    difficulty: "hard"
},
{
    question: "ما الفكرة الأساسية في Packet Switching؟",
    answers: ["تقسيم البيانات إلى حزم تُرسل عبر الشبكة", "إرسال كل البيانات كإشارة واحدة ثابتة", "تخزين البيانات في الشاشة", "تحويل البيانات إلى صور"],
    correct: 0,
    category: "technology",
    difficulty: "hard"
},
{
    question: "من الباحث المرتبط بأبحاث مبكرة مهمة في نظرية تبديل الحزم؟",
    answers: ["ليونارد كلاينروك", "بيل جيتس", "ستيف جوبز", "مارك زوكربيرج"],
    correct: 0,
    category: "technology",
    difficulty: "hard"
},
{
    question: "ما التقنية التي تسمح بتحويل اسم نطاق مثل example.com إلى عنوان IP؟",
    answers: ["DNS", "DHCP", "FTP", "SSH"],
    correct: 0,
    category: "technology",
    difficulty: "hard"
},
{
    question: "ما نوع العنوان الذي يستخدمه IPv4 عادةً؟",
    answers: ["عنوان 32 بت", "عنوان 16 بت", "عنوان 64 بت فقط", "عنوان 128 بت"],
    correct: 0,
    category: "technology",
    difficulty: "hard"
},
{
    question: "ما طول عنوان IPv6؟",
    answers: ["128 بت", "32 بت", "64 بت", "256 بت"],
    correct: 0,
    category: "technology",
    difficulty: "hard"
},
{
    question: "ما البروتوكول المستخدم عادةً لتأمين الاتصال بين المتصفح والخادم عبر HTTPS؟",
    answers: ["TLS", "FTP", "DNS", "DHCP"],
    correct: 0,
    category: "technology",
    difficulty: "hard"
},
{
    question: "ما المقصود بـ CDN؟",
    answers: ["شبكة من الخوادم الموزعة لتقديم المحتوى للمستخدمين بكفاءة", "نوع من وحدات المعالجة", "قاعدة بيانات محلية", "لغة برمجة"],
    correct: 0,
    category: "technology",
    difficulty: "hard"
},
{
    question: "ما الهدف الأساسي من CDN؟",
    answers: ["تقليل زمن الوصول وتحسين تقديم المحتوى", "زيادة حجم الشاشة", "تشفير لوحة المفاتيح", "استبدال نظام التشغيل"],
    correct: 0,
    category: "technology",
    difficulty: "hard"
},
{
    question: "ما المقصود بـ virtualization؟",
    answers: ["إنشاء بيئات حوسبة افتراضية فوق موارد مادية", "ضغط الصور", "زيادة دقة الفيديو", "تشفير البريد"],
    correct: 0,
    category: "technology",
    difficulty: "hard"
},
{
    question: "ما البرنامج المسؤول عادةً عن إدارة وتشغيل الآلات الافتراضية؟",
    answers: ["Hypervisor", "Compiler", "Browser", "Router"],
    correct: 0,
    category: "technology",
    difficulty: "hard"
},
{
    question: "ما المقصود بالحوسبة السحابية Cloud Computing؟",
    answers: ["توفير موارد وخدمات حوسبة عبر الشبكة عند الطلب", "تشغيل الكمبيوتر دون معالج", "حفظ الملفات على الشاشة", "استخدام الإنترنت للألعاب فقط"],
    correct: 0,
    category: "technology",
    difficulty: "hard"
},
{
    question: "ما المقصود بالحاويات Containers في البرمجة؟",
    answers: ["بيئات معزولة لتشغيل التطبيقات واعتمادياتها", "أجهزة تخزين خارجية", "أنظمة تشغيل جديدة دائمًا", "شبكات Wi-Fi"],
    correct: 0,
    category: "technology",
    difficulty: "hard"
},
{
    question: "ما الأداة الشهيرة المستخدمة لبناء وتشغيل الحاويات؟",
    answers: ["Docker", "Excel", "Photoshop", "PowerPoint"],
    correct: 0,
    category: "technology",
    difficulty: "hard"
},
{
    question: "ما المقصود بـ machine learning؟",
    answers: ["تعلم نماذج من البيانات لتحسين أداء مهمة", "إصلاح الكمبيوتر يدويًا", "زيادة سرعة الإنترنت", "تصميم الدوائر الكهربائية فقط"],
    correct: 0,
    category: "technology",
    difficulty: "hard"
},
{
    question: "ما الفرق الأساسي بين الذكاء الاصطناعي والتعلم الآلي؟",
    answers: ["التعلم الآلي أحد الأساليب أو المجالات داخل الذكاء الاصطناعي", "هما شيئان متطابقان دائمًا", "الذكاء الاصطناعي نوع من الذاكرة", "التعلم الآلي نظام تشغيل"],
    correct: 0,
    category: "technology",
    difficulty: "hard"
},
{
    question: "ما المقصود بالشبكة العصبية الاصطناعية؟",
    answers: ["نموذج حسابي مستوحى بصورة مبسطة من طريقة عمل الخلايا العصبية", "نوع من كابلات الشبكة", "وحدة تخزين", "نظام تشغيل"],
    correct: 0,
    category: "technology",
    difficulty: "hard"
},
{
    question: "ما المقصود بـ overfitting في تعلم الآلة؟",
    answers: ["أن يتعلم النموذج بيانات التدريب بشكل مفرط فيضعف أداؤه على بيانات جديدة", "أن يعمل المعالج بسرعة زائدة", "أن تمتلئ الذاكرة", "أن ينقطع الإنترنت"],
    correct: 0,
    category: "technology",
    difficulty: "hard"
},
{
    question: "ما وظيفة compiler؟",
    answers: ["تحويل الشفرة المصدرية إلى صيغة قابلة للتنفيذ أو المعالجة", "تخزين الصور", "إدارة Wi-Fi", "عرض صفحات الويب"],
    correct: 0,
    category: "technology",
    difficulty: "hard"
},
{
    question: "ما الفرق الأساسي بين compiler وinterpreter؟",
    answers: ["المترجم يعالج البرنامج بطريقة ترجمة إلى صيغة أخرى، بينما المفسر ينفذ التعليمات عبر وقت التشغيل", "لا يوجد أي فرق", "المفسر خاص بالشبكات فقط", "المترجم خاص بقواعد البيانات فقط"],
    correct: 0,
    category: "technology",
    difficulty: "hard"
},
{
    question: "ما المقصود بـ algorithm؟",
    answers: ["مجموعة خطوات محددة لحل مشكلة أو تنفيذ مهمة", "نوع من وحدات التخزين", "جهاز إدخال", "نظام تشغيل"],
    correct: 0,
    category: "technology",
    difficulty: "hard"
},
{
    question: "ما المقصود بالتعقيد الزمني للخوارزمية؟",
    answers: ["وصف لكيفية نمو زمن التنفيذ مع زيادة حجم الإدخال", "حجم الملف فقط", "سرعة الإنترنت", "عدد ألوان الشاشة"],
    correct: 0,
    category: "technology",
    difficulty: "hard"
},
{
    question: "ماذا تعني Big O notation في علوم الحاسوب؟",
    answers: ["وصف لمعدل نمو استهلاك الموارد بالنسبة لحجم الإدخال", "لغة برمجة", "نوع قاعدة بيانات", "بروتوكول إنترنت"],
    correct: 0,
    category: "technology",
    difficulty: "hard"
},
{
    question: "ما المقصود بـ encryption key؟",
    answers: ["قيمة تُستخدم في عمليات التشفير أو فك التشفير وفق النظام المستخدم", "عنوان IP", "اسم ملف", "نوع من المعالجات"],
    correct: 0,
    category: "technology",
    difficulty: "hard"
},
{
    question: "ما الفرق الأساسي بين التشفير المتماثل وغير المتماثل؟",
    answers: ["المتماثل يستخدم مفتاحًا مشتركًا، وغير المتماثل يعتمد على زوج من المفاتيح", "كلاهما يستخدم مفتاحًا واحدًا دائمًا", "غير المتماثل لا يستخدم مفاتيح", "المتماثل خاص بالصور فقط"],
    correct: 0,
    category: "technology",
    difficulty: "hard"
},
{
    question: "ما المقصود بـ hashing في أمن المعلومات؟",
    answers: ["تحويل البيانات إلى قيمة ثابتة الطول نسبيًا باستخدام دالة تجزئة", "تشفير قابل للعكس دائمًا", "ضغط الفيديو", "تغيير عنوان IP"],
    correct: 0,
    category: "technology",
    difficulty: "hard"
},
{
    question: "أي من الآتي مثال على دالة تجزئة تشفيرية؟",
    answers: ["SHA-256", "HTTP", "HTML", "DHCP"],
    correct: 0,
    category: "technology",
    difficulty: "hard"
},
// ==================== SPORTS - EASY (40) ====================

{
    question: "كم عدد لاعبي فريق كرة القدم داخل الملعب؟",
    answers: ["11", "9", "10", "12"],
    correct: 0,
    category: "sports",
    difficulty: "easy"
},
{
    question: "كم مدة مباراة كرة القدم الأساسية؟",
    answers: ["90 دقيقة", "60 دقيقة", "80 دقيقة", "120 دقيقة"],
    correct: 0,
    category: "sports",
    difficulty: "easy"
},
{
    question: "ما الرياضة التي تستخدم كرة وسلة؟",
    answers: ["كرة السلة", "كرة القدم", "التنس", "البيسبول"],
    correct: 0,
    category: "sports",
    difficulty: "easy"
},
{
    question: "كم لاعبًا من كل فريق يكون على أرض الملعب في كرة السلة؟",
    answers: ["5", "6", "7", "11"],
    correct: 0,
    category: "sports",
    difficulty: "easy"
},
{
    question: "ما الرياضة التي تستخدم مضربًا وكرة فوق شبكة؟",
    answers: ["التنس", "الملاكمة", "السباحة", "الجولف"],
    correct: 0,
    category: "sports",
    difficulty: "easy"
},
{
    question: "ما اسم البطولة العالمية الأشهر لكرة القدم للمنتخبات؟",
    answers: ["كأس العالم", "دوري الأبطال", "كأس السوبر", "كأس الاتحاد"],
    correct: 0,
    category: "sports",
    difficulty: "easy"
},
{
    question: "كم عدد الحلقات في شعار الألعاب الأولمبية؟",
    answers: ["5", "4", "6", "7"],
    correct: 0,
    category: "sports",
    difficulty: "easy"
},
{
    question: "في أي رياضة يُستخدم القرص المطاطي Puck؟",
    answers: ["هوكي الجليد", "كرة القدم", "التنس", "الكريكيت"],
    correct: 0,
    category: "sports",
    difficulty: "easy"
},
{
    question: "ما الرياضة التي تُلعب باستخدام الريشة؟",
    answers: ["الريشة الطائرة", "الجولف", "الرجبي", "الملاكمة"],
    correct: 0,
    category: "sports",
    difficulty: "easy"
},
{
    question: "ما الرياضة التي تشتهر بحركة Slam Dunk؟",
    answers: ["كرة السلة", "كرة القدم", "التنس", "السباحة"],
    correct: 0,
    category: "sports",
    difficulty: "easy"
},
{
    question: "ما اسم الرياضة التي تعتمد على ضرب الكرة بعصا داخل حفر؟",
    answers: ["الجولف", "البيسبول", "الهوكي", "الرجبي"],
    correct: 0,
    category: "sports",
    difficulty: "easy"
},
{
    question: "ما الرياضة التي تُمارس في حمام السباحة؟",
    answers: ["السباحة", "الجولف", "البيسبول", "التنس"],
    correct: 0,
    category: "sports",
    difficulty: "easy"
},
{
    question: "ما اسم اللاعب الذي يحمي مرمى فريق كرة القدم؟",
    answers: ["حارس المرمى", "المهاجم", "الجناح", "الحكم"],
    correct: 0,
    category: "sports",
    difficulty: "easy"
},
{
    question: "ما لون البطاقة التي تعني الطرد في كرة القدم؟",
    answers: ["الحمراء", "الصفراء", "الخضراء", "الزرقاء"],
    correct: 0,
    category: "sports",
    difficulty: "easy"
},
{
    question: "ما لون البطاقة التي تُستخدم للتحذير في كرة القدم؟",
    answers: ["الصفراء", "الحمراء", "الخضراء", "البيضاء"],
    correct: 0,
    category: "sports",
    difficulty: "easy"
},
{
    question: "في أي رياضة يُستخدم مصطلح Love للصفر؟",
    answers: ["التنس", "كرة القدم", "الجولف", "الملاكمة"],
    correct: 0,
    category: "sports",
    difficulty: "easy"
},
{
    question: "كم نقطة تساوي الرمية الحرة في كرة السلة؟",
    answers: ["نقطة واحدة", "نقطتان", "3 نقاط", "4 نقاط"],
    correct: 0,
    category: "sports",
    difficulty: "easy"
},
{
    question: "كم نقطة تساوي الرمية من خارج القوس في كرة السلة؟",
    answers: ["3 نقاط", "نقطتان", "نقطة واحدة", "4 نقاط"],
    correct: 0,
    category: "sports",
    difficulty: "easy"
},
{
    question: "ما الرياضة التي يلعبها محمد صلاح؟",
    answers: ["كرة القدم", "كرة السلة", "التنس", "السباحة"],
    correct: 0,
    category: "sports",
    difficulty: "easy"
},
{
    question: "ما الرياضة التي اشتهر بها مايكل جوردان؟",
    answers: ["كرة السلة", "كرة القدم", "الجولف", "التنس"],
    correct: 0,
    category: "sports",
    difficulty: "easy"
},
{
    question: "ما الرياضة التي اشتهر بها روجر فيدرر؟",
    answers: ["التنس", "كرة القدم", "الجولف", "السباحة"],
    correct: 0,
    category: "sports",
    difficulty: "easy"
},
{
    question: "ما الرياضة التي اشتهر بها مايكل فيلبس؟",
    answers: ["السباحة", "الجولف", "التنس", "الجودو"],
    correct: 0,
    category: "sports",
    difficulty: "easy"
},
{
    question: "ما الرياضة التي تُستخدم فيها الحلبة والقفازات؟",
    answers: ["الملاكمة", "الجولف", "التنس", "السباحة"],
    correct: 0,
    category: "sports",
    difficulty: "easy"
},
{
    question: "ما اسم الملعب الشهير لبطولة ويمبلدون؟",
    answers: ["All England Club", "Camp Nou", "Wembley Arena", "Madison Square"],
    correct: 0,
    category: "sports",
    difficulty: "easy"
},
{
    question: "ما الرياضة التي تُمارس باستخدام دراجة؟",
    answers: ["ركوب الدراجات", "الملاكمة", "السباحة", "التنس"],
    correct: 0,
    category: "sports",
    difficulty: "easy"
},
{
    question: "ما اسم السباق الشهير للدراجات في فرنسا؟",
    answers: ["Tour de France", "Giro d'Italia", "Vuelta", "Paris Open"],
    correct: 0,
    category: "sports",
    difficulty: "easy"
},
{
    question: "ما الرياضة التي تستخدم مضمارًا ومضربًا وكرة صغيرة في البيسبول؟",
    answers: ["البيسبول", "الكريكيت", "الجولف", "الرجبي"],
    correct: 0,
    category: "sports",
    difficulty: "easy"
},
{
    question: "كم عدد القواعد في ملعب البيسبول؟",
    answers: ["4", "3", "5", "6"],
    correct: 0,
    category: "sports",
    difficulty: "easy"
},
{
    question: "ما الرياضة التي تستخدم العارضة في الجمباز؟",
    answers: ["الجمباز", "التنس", "الجولف", "الرجبي"],
    correct: 0,
    category: "sports",
    difficulty: "easy"
},
{
    question: "ما الرياضة التي تُمارس على الجليد باستخدام الزلاجات؟",
    answers: ["التزلج على الجليد", "كرة الماء", "البيسبول", "الكريكيت"],
    correct: 0,
    category: "sports",
    difficulty: "easy"
},
{
    question: "ما اسم الرياضة التي تجمع بين الجري والقفز والرمي؟",
    answers: ["ألعاب القوى", "التنس", "الهوكي", "الجولف"],
    correct: 0,
    category: "sports",
    difficulty: "easy"
},
{
    question: "ما اسم السباق الذي يشارك فيه عداؤون ويمررون عصا؟",
    answers: ["سباق التتابع", "الماراثون", "القفز الطويل", "سباق الحواجز"],
    correct: 0,
    category: "sports",
    difficulty: "easy"
},
{
    question: "كم عدد اللاعبين في فريق الكرة الطائرة داخل الملعب؟",
    answers: ["6", "5", "7", "11"],
    correct: 0,
    category: "sports",
    difficulty: "easy"
},
{
    question: "ما الرياضة التي تعتمد على إسقاط الكرة فوق شبكة باستخدام اليدين؟",
    answers: ["الكرة الطائرة", "الجولف", "البيسبول", "التنس الأرضي فقط"],
    correct: 0,
    category: "sports",
    difficulty: "easy"
},
{
    question: "ما اسم الرياضة التي تُمارس في الماء باستخدام كرة بين فريقين؟",
    answers: ["كرة الماء", "الكرة الطائرة", "الرجبي", "الهوكي"],
    correct: 0,
    category: "sports",
    difficulty: "easy"
},
{
    question: "ما الرياضة التي تُلعب على حصان باستخدام عصا وكرة؟",
    answers: ["البولو", "الكريكيت", "الجولف", "الرجبي"],
    correct: 0,
    category: "sports",
    difficulty: "easy"
},
{
    question: "ما الرياضة التي يُستخدم فيها القوس والسهام؟",
    answers: ["الرماية بالقوس", "المبارزة", "الجودو", "الملاكمة"],
    correct: 0,
    category: "sports",
    difficulty: "easy"
},
{
    question: "ما الرياضة التي يستخدم فيها اللاعب سيفًا رياضيًا؟",
    answers: ["المبارزة", "الجولف", "الكريكيت", "السباحة"],
    correct: 0,
    category: "sports",
    difficulty: "easy"
},
{
    question: "ما اسم البطولة الأوروبية الكبرى لكرة القدم للمنتخبات؟",
    answers: ["بطولة أمم أوروبا", "كأس العالم للأندية", "كوبا ليبرتادوريس", "كأس آسيا"],
    correct: 0,
    category: "sports",
    difficulty: "easy"
},
{
    question: "ما اسم البطولة السنوية الأشهر لأندية كرة القدم الأوروبية؟",
    answers: ["دوري أبطال أوروبا", "كأس العالم", "كأس الأمم", "الدوري الأوروبي فقط"],
    correct: 0,
    category: "sports",
    difficulty: "easy"
},

// ==================== SPORTS - MEDIUM (40) ====================

{
    question: "ما المنتخب الذي فاز بأكبر عدد من بطولات كأس العالم لكرة القدم للرجال حتى الآن؟",
    answers: ["البرازيل", "ألمانيا", "الأرجنتين", "إيطاليا"],
    correct: 0,
    category: "sports",
    difficulty: "medium"
},
{
    question: "في أي دولة أقيمت أول بطولة كأس عالم لكرة القدم عام 1930؟",
    answers: ["أوروغواي", "البرازيل", "فرنسا", "إيطاليا"],
    correct: 0,
    category: "sports",
    difficulty: "medium"
},
{
    question: "من فاز بأول بطولة لكأس العالم لكرة القدم؟",
    answers: ["أوروغواي", "البرازيل", "الأرجنتين", "إيطاليا"],
    correct: 0,
    category: "sports",
    difficulty: "medium"
},
{
    question: "ما اسم الجائزة الفردية الأشهر التي تمنح لأفضل لاعب كرة قدم في العالم؟",
    answers: ["الكرة الذهبية", "الحذاء الذهبي", "القفاز الذهبي", "الكأس الذهبية"],
    correct: 0,
    category: "sports",
    difficulty: "medium"
},
{
    question: "ما النادي الذي يُعرف بلقب الشياطين الحمر؟",
    answers: ["مانشستر يونايتد", "ليفربول", "تشيلسي", "أرسنال"],
    correct: 0,
    category: "sports",
    difficulty: "medium"
},
{
    question: "ما النادي الذي يُلقب بالريدز؟",
    answers: ["ليفربول", "مانشستر سيتي", "أرسنال", "تشيلسي"],
    correct: 0,
    category: "sports",
    difficulty: "medium"
},
{
    question: "في أي رياضة يوجد مصطلح Hat-trick بشكل شائع؟",
    answers: ["كرة القدم", "السباحة فقط", "الجولف فقط", "الرماية فقط"],
    correct: 0,
    category: "sports",
    difficulty: "medium"
},
{
    question: "ماذا يعني تسجيل هاتريك في كرة القدم؟",
    answers: ["تسجيل اللاعب ثلاثة أهداف في مباراة واحدة", "تسجيل هدفين", "صناعة ثلاثة أهداف", "تسجيل هدف من ركلة جزاء"],
    correct: 0,
    category: "sports",
    difficulty: "medium"
},
{
    question: "ما اسم البطولة التي تجمع أفضل أندية كرة السلة في أوروبا؟",
    answers: ["الدوري الأوروبي لكرة السلة", "دوري أبطال أوروبا لكرة القدم", "كأس العالم للأندية", "دوري الأمم"],
    correct: 0,
    category: "sports",
    difficulty: "medium"
},
{
    question: "من صاحب الرقم القياسي الشهير لأكثر نقاط في مباراة واحدة في NBA؟",
    answers: ["ويلت تشامبرلين", "مايكل جوردان", "كوبي براينت", "ليبرون جيمس"],
    correct: 0,
    category: "sports",
    difficulty: "medium"
},
{
    question: "كم نقطة سجل ويلت تشامبرلين في مباراته الشهيرة عام 1962؟",
    answers: ["100", "81", "72", "92"],
    correct: 0,
    category: "sports",
    difficulty: "medium"
},
{
    question: "كم دقيقة تستغرق المباراة الرسمية في NBA دون احتساب الوقت الإضافي؟",
    answers: ["48 دقيقة", "40 دقيقة", "60 دقيقة", "45 دقيقة"],
    correct: 0,
    category: "sports",
    difficulty: "medium"
},
{
    question: "كم ربعًا توجد في مباراة NBA؟",
    answers: ["4", "2", "3", "5"],
    correct: 0,
    category: "sports",
    difficulty: "medium"
},
{
    question: "كم دقيقة يستمر كل ربع في NBA؟",
    answers: ["12 دقيقة", "10 دقائق", "15 دقيقة", "8 دقائق"],
    correct: 0,
    category: "sports",
    difficulty: "medium"
},
{
    question: "من اخترع رياضة كرة السلة؟",
    answers: ["جيمس نايسميث", "ويليام مورغان", "بيير دي كوبرتان", "جيسي أوينز"],
    correct: 0,
    category: "sports",
    difficulty: "medium"
},
{
    question: "في أي عام اخترعت كرة السلة تقريبًا؟",
    answers: ["1891", "1901", "1881", "1920"],
    correct: 0,
    category: "sports",
    difficulty: "medium"
},
{
    question: "ما المنظمة الدولية التي تحكم كرة القدم عالميًا؟",
    answers: ["FIFA", "NBA", "FIBA", "IOC"],
    correct: 0,
    category: "sports",
    difficulty: "medium"
},
{
    question: "ما المنظمة التي تضع القواعد الدولية لكرة السلة؟",
    answers: ["FIBA", "FIFA", "UEFA", "ATP"],
    correct: 0,
    category: "sports",
    difficulty: "medium"
},
{
    question: "ما اسم الهيئة التي تضع قوانين كرة القدم؟",
    answers: ["IFAB", "FIBA", "IOC", "ATP"],
    correct: 0,
    category: "sports",
    difficulty: "medium"
},
{
    question: "ما البطولة الكبرى التي تُقام على الملاعب العشبية في التنس؟",
    answers: ["ويمبلدون", "رولان غاروس", "أمريكا المفتوحة", "أستراليا المفتوحة"],
    correct: 0,
    category: "sports",
    difficulty: "medium"
},
{
    question: "أي بطولة تنس من البطولات الأربع الكبرى تُقام على الملاعب الرملية الترابية؟",
    answers: ["رولان غاروس", "ويمبلدون", "أستراليا المفتوحة", "أمريكا المفتوحة"],
    correct: 0,
    category: "sports",
    difficulty: "medium"
},
{
    question: "كم بطولة كبرى Grand Slam توجد في موسم التنس؟",
    answers: ["4", "3", "5", "6"],
    correct: 0,
    category: "sports",
    difficulty: "medium"
},
{
    question: "ما البطولة الكبرى التي تُقام في نيويورك؟",
    answers: ["أمريكا المفتوحة", "ويمبلدون", "رولان غاروس", "أستراليا المفتوحة"],
    correct: 0,
    category: "sports",
    difficulty: "medium"
},
{
    question: "ما البطولة الكبرى التي تُقام في أستراليا؟",
    answers: ["أستراليا المفتوحة", "ويمبلدون", "رولان غاروس", "أمريكا المفتوحة"],
    correct: 0,
    category: "sports",
    difficulty: "medium"
},
{
    question: "ما معنى Love في نظام تسجيل التنس؟",
    answers: ["صفر", "نقطة واحدة", "15 نقطة", "تعادل"],
    correct: 0,
    category: "sports",
    difficulty: "medium"
},
{
    question: "ما النتيجة التي تأتي بعد 30 في تسجيل النقاط التقليدي للتنس؟",
    answers: ["40", "45", "50", "60"],
    correct: 0,
    category: "sports",
    difficulty: "medium"
},
{
    question: "ما اسم التعادل عند وصول اللاعبين إلى 40-40 في التنس؟",
    answers: ["Deuce", "Love", "Ace", "Break"],
    correct: 0,
    category: "sports",
    difficulty: "medium"
},
{
    question: "ماذا يسمى الإرسال الذي لا يستطيع الخصم لمسه في التنس؟",
    answers: ["Ace", "Deuce", "Volley", "Drop shot"],
    correct: 0,
    category: "sports",
    difficulty: "medium"
},
{
    question: "ما الرياضة التي تُستخدم فيها كرة الريشة Shuttlecock؟",
    answers: ["الريشة الطائرة", "التنس", "الاسكواش", "الجولف"],
    correct: 0,
    category: "sports",
    difficulty: "medium"
},
{
    question: "كم لاعبًا يوجد داخل الملعب من كل فريق في الكرة الطائرة؟",
    answers: ["6", "5", "7", "8"],
    correct: 0,
    category: "sports",
    difficulty: "medium"
},
{
    question: "كم نقطة يحتاجها الفريق عادةً للفوز بمجموعة في الكرة الطائرة وفق النظام الحديث؟",
    answers: ["25", "15", "21", "30"],
    correct: 0,
    category: "sports",
    difficulty: "medium"
},
{
    question: "كم نقطة تُلعب بها المجموعة الحاسمة عادةً في الكرة الطائرة؟",
    answers: ["15", "21", "25", "10"],
    correct: 0,
    category: "sports",
    difficulty: "medium"
},
{
    question: "ما الرياضة التي تتضمن سباقًا لمسافة 42.195 كيلومتر؟",
    answers: ["الماراثون", "العدو السريع", "نصف الماراثون", "سباق 10 كيلومترات"],
    correct: 0,
    category: "sports",
    difficulty: "medium"
},
{
    question: "كم يبلغ طول الماراثون الرسمي تقريبًا؟",
    answers: ["42.195 كم", "40 كم", "45 كم", "50 كم"],
    correct: 0,
    category: "sports",
    difficulty: "medium"
},
{
    question: "ما الرياضة التي تحتوي على أشواط تسمى Innings؟",
    answers: ["البيسبول والكريكيت", "التنس فقط", "كرة السلة فقط", "الجولف فقط"],
    correct: 0,
    category: "sports",
    difficulty: "medium"
},
{
    question: "كم كرة قانونية توجد في Over واحد في الكريكيت؟",
    answers: ["6", "5", "8", "10"],
    correct: 0,
    category: "sports",
    difficulty: "medium"
},
{
    question: "ما اسم البطولة الأبرز في كرة القدم الأمريكية؟",
    answers: ["Super Bowl", "World Series", "Stanley Cup", "NBA Finals"],
    correct: 0,
    category: "sports",
    difficulty: "medium"
},
{
    question: "كم نقطة يساوي Touchdown في كرة القدم الأمريكية قبل أي تحويل لاحق؟",
    answers: ["6", "3", "7", "2"],
    correct: 0,
    category: "sports",
    difficulty: "medium"
},
{
    question: "ما الكأس الذي يُمنح لبطل دوري NHL؟",
    answers: ["Stanley Cup", "Lombardi Trophy", "Larry O'Brien Trophy", "Davis Cup"],
    correct: 0,
    category: "sports",
    difficulty: "medium"
},
{
    question: "ما البطولة السنوية الأشهر في الجولف التي تُقام في أوغوستا؟",
    answers: ["The Masters", "US Open", "The Open", "PGA Championship"],
    correct: 0,
    category: "sports",
    difficulty: "medium"
},

// ==================== SPORTS - HARD (40) ====================

{
    question: "من هو اللاعب الذي سجل أول هدف في تاريخ كأس العالم لكرة القدم؟",
    answers: ["لوسيان لوران", "بيليه", "جوزيه ناسازي", "غييرمو ستابيلي"],
    correct: 0,
    category: "sports",
    difficulty: "hard"
},
{
    question: "من هو الهداف التاريخي لكأس العالم لكرة القدم للرجال؟",
    answers: ["ميروسلاف كلوزه", "رونالدو البرازيلي", "جيرد مولر", "بيليه"],
    correct: 0,
    category: "sports",
    difficulty: "hard"
},
{
    question: "كم هدفًا سجل ميروسلاف كلوزه في كأس العالم؟",
    answers: ["16", "15", "14", "17"],
    correct: 0,
    category: "sports",
    difficulty: "hard"
},
{
    question: "ما المنتخب الوحيد الذي شارك في جميع نسخ كأس العالم للرجال حتى نهاية نسخة 2026؟",
    answers: ["البرازيل", "ألمانيا", "الأرجنتين", "إيطاليا"],
    correct: 0,
    category: "sports",
    difficulty: "hard"
},
{
    question: "من فاز بكأس العالم 1954؟",
    answers: ["ألمانيا الغربية", "المجر", "البرازيل", "إيطاليا"],
    correct: 0,
    category: "sports",
    difficulty: "hard"
},
{
    question: "ما المباراة الشهيرة التي فازت فيها ألمانيا الغربية على المجر في نهائي كأس العالم 1954؟",
    answers: ["معجزة برن", "معجزة ماراكانا", "نهائي القرن", "مباراة الألفية"],
    correct: 0,
    category: "sports",
    difficulty: "hard"
},
{
    question: "من سجل هدف يد الله الشهير في كأس العالم 1986؟",
    answers: ["دييغو مارادونا", "بيليه", "رونالدو", "غابرييل باتيستوتا"],
    correct: 0,
    category: "sports",
    difficulty: "hard"
},
{
    question: "في أي مباراة سجل مارادونا هدف القرن وهدف يد الله؟",
    answers: ["الأرجنتين ضد إنجلترا", "الأرجنتين ضد ألمانيا", "البرازيل ضد إنجلترا", "إيطاليا ضد الأرجنتين"],
    correct: 0,
    category: "sports",
    difficulty: "hard"
},
{
    question: "من فاز بكأس العالم 2010؟",
    answers: ["إسبانيا", "هولندا", "ألمانيا", "البرازيل"],
    correct: 0,
    category: "sports",
    difficulty: "hard"
},
{
    question: "من سجل هدف نهائي كأس العالم 2010؟",
    answers: ["أندريس إنييستا", "ديفيد فيا", "تشافي", "كارليس بويول"],
    correct: 0,
    category: "sports",
    difficulty: "hard"
},
{
    question: "من فاز بكأس العالم 2014؟",
    answers: ["ألمانيا", "الأرجنتين", "البرازيل", "هولندا"],
    correct: 0,
    category: "sports",
    difficulty: "hard"
},
{
    question: "ما نتيجة مباراة ألمانيا والبرازيل في نصف نهائي كأس العالم 2014؟",
    answers: ["7-1 لألمانيا", "6-1 لألمانيا", "5-0 لألمانيا", "7-2 لألمانيا"],
    correct: 0,
    category: "sports",
    difficulty: "hard"
},
{
    question: "من فاز بكأس العالم 2022؟",
    answers: ["الأرجنتين", "فرنسا", "البرازيل", "كرواتيا"],
    correct: 0,
    category: "sports",
    difficulty: "hard"
},
{
    question: "من سجل هدف الفوز للأرجنتين في نهائي كأس العالم 1986؟",
    answers: ["خورخي بوروتشاغا", "دييغو مارادونا", "خورخي فالدانو", "غابرييل باتيستوتا"],
    correct: 0,
    category: "sports",
    difficulty: "hard"
},
{
    question: "ما الدولة التي استضافت أول دورة ألعاب أولمبية حديثة عام 1896؟",
    answers: ["اليونان", "فرنسا", "إيطاليا", "المملكة المتحدة"],
    correct: 0,
    category: "sports",
    difficulty: "hard"
},
{
    question: "في أي مدينة أقيمت أول دورة ألعاب أولمبية حديثة؟",
    answers: ["أثينا", "باريس", "روما", "لندن"],
    correct: 0,
    category: "sports",
    difficulty: "hard"
},
{
    question: "من يُعرف بأنه مؤسس الألعاب الأولمبية الحديثة؟",
    answers: ["بيير دي كوبرتان", "جيمس نايسميث", "توماس باخ", "ألفريد نوبل"],
    correct: 0,
    category: "sports",
    difficulty: "hard"
},
{
    question: "في أي مدينة أقيمت أول دورة ألعاب أولمبية حديثة عام 1896؟",
    answers: ["أثينا", "برلين", "باريس", "لوس أنجلوس"],
    correct: 0,
    category: "sports",
    difficulty: "hard"
},
{
    question: "ما الدولة التي استضافت أول دورة ألعاب أولمبية شتوية؟",
    answers: ["فرنسا", "سويسرا", "النرويج", "كندا"],
    correct: 0,
    category: "sports",
    difficulty: "hard"
},
{
    question: "في أي عام أقيمت أول دورة ألعاب أولمبية شتوية؟",
    answers: ["1924", "1920", "1932", "1912"],
    correct: 0,
    category: "sports",
    difficulty: "hard"
},
{
    question: "من صاحب الرقم القياسي لأكبر عدد من الميداليات الأولمبية التي فاز بها رياضي واحد؟",
    answers: ["مايكل فيلبس", "يوسين بولت", "كارل لويس", "مارك سبيتز"],
    correct: 0,
    category: "sports",
    difficulty: "hard"
},
{
    question: "كم ميدالية أولمبية فاز بها مايكل فيلبس؟",
    answers: ["28", "24", "32", "26"],
    correct: 0,
    category: "sports",
    difficulty: "hard"
},
{
    question: "من العداء الذي يحمل الرقم القياسي العالمي في سباق 100 متر للرجال بزمن 9.58 ثانية؟",
    answers: ["يوسين بولت", "تايسون غاي", "أسافا باول", "يohan بليك"],
    correct: 0,
    category: "sports",
    difficulty: "hard"
},
{
    question: "ما الزمن القياسي الذي سجله يوسين بولت في سباق 100 متر؟",
    answers: ["9.58 ثانية", "9.69 ثانية", "9.63 ثانية", "9.72 ثانية"],
    correct: 0,
    category: "sports",
    difficulty: "hard"
},
{
    question: "من يحمل الرقم القياسي العالمي في سباق 200 متر للرجال بزمن 19.19 ثانية؟",
    answers: ["يوسين بولت", "يohan بليك", "مايكل جونسون", "تايسون غاي"],
    correct: 0,
    category: "sports",
    difficulty: "hard"
},
{
    question: "ما اسم السباق الذي يبلغ طوله 110 أمتار ويحتوي على حواجز للرجال؟",
    answers: ["110 متر حواجز", "100 متر حواجز", "400 متر حواجز", "200 متر حواجز"],
    correct: 0,
    category: "sports",
    difficulty: "hard"
},
{
    question: "كم عدد الحواجز في سباق 110 متر حواجز للرجال؟",
    answers: ["10", "8", "12", "15"],
    correct: 0,
    category: "sports",
    difficulty: "hard"
},
{
    question: "ما اسم الضربة في التنس التي تُنفذ بالقرب من الشبكة بعد ارتداد الكرة؟",
    answers: ["Volley", "Ace", "Lob", "Serve"],
    correct: 0,
    category: "sports",
    difficulty: "hard"
},
{
    question: "ما المصطلح الذي يطلق على الفوز في التنس دون خسارة أي مجموعة؟",
    answers: ["Straight sets", "Grand Slam", "Break point", "Deuce"],
    correct: 0,
    category: "sports",
    difficulty: "hard"
},
{
    question: "ما اسم البطولة التي تُقام على الملاعب الترابية في باريس؟",
    answers: ["رولان غاروس", "ويمبلدون", "أستراليا المفتوحة", "أمريكا المفتوحة"],
    correct: 0,
    category: "sports",
    difficulty: "hard"
},
{
    question: "ما اسم الكأس الذي يتنافس عليه لاعبو التنس في بطولة الرجال للمنتخبات؟",
    answers: ["كأس ديفيز", "كأس لافر", "كأس ستانلي", "كأس رايدر"],
    correct: 0,
    category: "sports",
    difficulty: "hard"
},
{
    question: "ما اسم البطولة العالمية الشهيرة لمنتخبات كرة السلة التي ينظمها FIBA؟",
    answers: ["كأس العالم لكرة السلة", "EuroLeague", "NBA Finals", "March Madness"],
    correct: 0,
    category: "sports",
    difficulty: "hard"
},
{
    question: "في أي عام تأسس NBA؟",
    answers: ["1946", "1950", "1936", "1960"],
    correct: 0,
    category: "sports",
    difficulty: "hard"
},
{
    question: "ما اسم الفريق الذي فاز بأول بطولة NBA؟",
    answers: ["Philadelphia Warriors", "Boston Celtics", "New York Knicks", "Los Angeles Lakers"],
    correct: 0,
    category: "sports",
    difficulty: "hard"
},
{
    question: "من يملك الرقم القياسي الشهير لأكبر عدد من بطولات NBA كلاعب؟",
    answers: ["بيل راسل", "مايكل جوردان", "كريم عبد الجبار", "ليبرون جيمس"],
    correct: 0,
    category: "sports",
    difficulty: "hard"
},
{
    question: "كم بطولة NBA فاز بها بيل راسل كلاعب؟",
    answers: ["11", "10", "12", "8"],
    correct: 0,
    category: "sports",
    difficulty: "hard"
},
{
    question: "من سجل 81 نقطة في مباراة واحدة مع لوس أنجلوس ليكرز عام 2006؟",
    answers: ["كوبي براينت", "مايكل جوردان", "ليبرون جيمس", "شاكيل أونيل"],
    correct: 0,
    category: "sports",
    difficulty: "hard"
},
{
    question: "ما أعلى نتيجة ممكنة في لعبة Bowling كاملة؟",
    answers: ["300", "250", "500", "200"],
    correct: 0,
    category: "sports",
    difficulty: "hard"
},
{
    question: "كم ضربة تسمى Eagle في الجولف مقارنة بالـ Par؟",
    answers: ["ضربتان أقل من Par", "ضربة أقل من Par", "3 ضربات أقل", "ضربتان أكثر"],
    correct: 0,
    category: "sports",
    difficulty: "hard"
},
// ==================== 🎮 ألعاب — EASY (40) ====================

{
    question: "من هو بطل سلسلة ألعاب Super Mario؟",
    answers: ["ماريو", "لينك", "سونك", "كراش"],
    correct: 0,
    category: "games",
    difficulty: "easy"
},
{
    question: "ما اسم اللعبة التي تحتوي على شخصية Pikachu؟",
    answers: ["Pokémon", "Minecraft", "Fortnite", "Halo"],
    correct: 0,
    category: "games",
    difficulty: "easy"
},
{
    question: "ما اسم الشخصية الرئيسية في سلسلة The Legend of Zelda؟",
    answers: ["لينك", "زيلدا", "ماريو", "ساموس"],
    correct: 0,
    category: "games",
    difficulty: "easy"
},
{
    question: "أي شركة طورت لعبة Minecraft؟",
    answers: ["Mojang", "Nintendo", "Valve", "Ubisoft"],
    correct: 0,
    category: "games",
    difficulty: "easy"
},
{
    question: "ما اسم اللعبة التي تدور حول بناء واستكشاف عالم من المكعبات؟",
    answers: ["Minecraft", "FIFA", "Tetris", "Pac-Man"],
    correct: 0,
    category: "games",
    difficulty: "easy"
},
{
    question: "ما لون شخصية Pac-Man الأساسية؟",
    answers: ["أصفر", "أحمر", "أزرق", "أخضر"],
    correct: 0,
    category: "games",
    difficulty: "easy"
},
{
    question: "أي لعبة تشتهر بشخصية Sonic؟",
    answers: ["Sonic the Hedgehog", "Halo", "Fortnite", "Overwatch"],
    correct: 0,
    category: "games",
    difficulty: "easy"
},
{
    question: "ما اسم لعبة كرة القدم الشهيرة من EA؟",
    answers: ["EA Sports FC", "Minecraft", "Valorant", "Portal"],
    correct: 0,
    category: "games",
    difficulty: "easy"
},
{
    question: "ما اسم اللعبة التي تشتهر بشخصية Lara Croft؟",
    answers: ["Tomb Raider", "Resident Evil", "The Sims", "Halo"],
    correct: 0,
    category: "games",
    difficulty: "easy"
},
{
    question: "ما نوع لعبة Fortnite الأساسي الشهير؟",
    answers: ["Battle Royale", "سباق سيارات", "محاكاة طبخ", "ألغاز كلمات"],
    correct: 0,
    category: "games",
    difficulty: "easy"
},
{
    question: "ما اسم الشركة التي صنعت جهاز PlayStation؟",
    answers: ["Sony", "Microsoft", "Nintendo", "Sega"],
    correct: 0,
    category: "games",
    difficulty: "easy"
},
{
    question: "ما اسم جهاز الألعاب الذي تنتجه Microsoft؟",
    answers: ["Xbox", "PlayStation", "Switch", "Dreamcast"],
    correct: 0,
    category: "games",
    difficulty: "easy"
},
{
    question: "ما اسم جهاز الألعاب المحمول/المنزلي الهجين من Nintendo؟",
    answers: ["Nintendo Switch", "Xbox One", "PS Vita", "Steam Deck"],
    correct: 0,
    category: "games",
    difficulty: "easy"
},
{
    question: "أي لعبة تحتوي على شخصية Creeper؟",
    answers: ["Minecraft", "Fortnite", "Among Us", "Roblox"],
    correct: 0,
    category: "games",
    difficulty: "easy"
},
{
    question: "ما اسم اللعبة التي يتحكم فيها اللاعب بشخصية تبحث عن الأشباح في متاهة؟",
    answers: ["Pac-Man", "Tetris", "FIFA", "Minecraft"],
    correct: 0,
    category: "games",
    difficulty: "easy"
},
{
    question: "ما اسم اللعبة التي تعتمد على ترتيب القطع الساقطة لتكوين صفوف؟",
    answers: ["Tetris", "Sonic", "Halo", "Fortnite"],
    correct: 0,
    category: "games",
    difficulty: "easy"
},
{
    question: "أي شخصية هي تميمة شركة Nintendo الأشهر؟",
    answers: ["Mario", "Kratos", "Master Chief", "Geralt"],
    correct: 0,
    category: "games",
    difficulty: "easy"
},
{
    question: "ما اسم اللعبة التي تضم شخصيات Crewmate وImpostor؟",
    answers: ["Among Us", "Minecraft", "FIFA", "Tetris"],
    correct: 0,
    category: "games",
    difficulty: "easy"
},
{
    question: "ما اسم اللعبة الشهيرة التي تحتوي على عالم مفتوح وشخصيات مثل Trevor وMichael؟",
    answers: ["GTA V", "Minecraft", "Halo", "The Sims"],
    correct: 0,
    category: "games",
    difficulty: "easy"
},
{
    question: "ما اسم سلسلة ألعاب كرة السلة من 2K؟",
    answers: ["NBA 2K", "F1", "Madden", "WWE 2K"],
    correct: 0,
    category: "games",
    difficulty: "easy"
},
{
    question: "ما اسم لعبة السباق التي تشتهر بسيارات ماريو وشخصيات Nintendo؟",
    answers: ["Mario Kart", "Gran Turismo", "Forza", "Need for Speed"],
    correct: 0,
    category: "games",
    difficulty: "easy"
},
{
    question: "أي لعبة تشتهر بشخصية Kratos؟",
    answers: ["God of War", "Halo", "Zelda", "Sonic"],
    correct: 0,
    category: "games",
    difficulty: "easy"
},
{
    question: "ما اسم البطل الرئيسي في سلسلة God of War؟",
    answers: ["Kratos", "Mario", "Link", "Sonic"],
    correct: 0,
    category: "games",
    difficulty: "easy"
},
{
    question: "ما اسم اللعبة التي تدور حول محاكاة حياة الشخصيات وبناء المنازل؟",
    answers: ["The Sims", "Halo", "Tetris", "Pac-Man"],
    correct: 0,
    category: "games",
    difficulty: "easy"
},
{
    question: "ما اسم اللعبة التي تشتهر بشخصية Master Chief؟",
    answers: ["Halo", "GTA", "Minecraft", "Fortnite"],
    correct: 0,
    category: "games",
    difficulty: "easy"
},
{
    question: "أي سلسلة ألعاب تشتهر بشخصية Link؟",
    answers: ["The Legend of Zelda", "Super Mario", "Pokémon", "Halo"],
    correct: 0,
    category: "games",
    difficulty: "easy"
},
{
    question: "ما اسم لعبة السيارات الشهيرة من سلسلة Forza؟",
    answers: ["Forza Horizon", "Mario Kart", "FIFA", "Halo"],
    correct: 0,
    category: "games",
    difficulty: "easy"
},
{
    question: "ما اسم اللعبة التي تعتمد على جمع Pokémon وتدريبهم؟",
    answers: ["Pokémon", "Tetris", "Fortnite", "The Sims"],
    correct: 0,
    category: "games",
    difficulty: "easy"
},
{
    question: "ما اسم الشخصية التي تشتهر بارتداء قبعة حمراء وشعار M؟",
    answers: ["Mario", "Luigi", "Link", "Sonic"],
    correct: 0,
    category: "games",
    difficulty: "easy"
},
{
    question: "ما اسم شقيق Mario؟",
    answers: ["Luigi", "Link", "Kirby", "Sonic"],
    correct: 0,
    category: "games",
    difficulty: "easy"
},
{
    question: "ما اسم اللعبة التي تشتهر بشخصية Kirby؟",
    answers: ["Kirby", "Halo", "FIFA", "GTA"],
    correct: 0,
    category: "games",
    difficulty: "easy"
},
{
    question: "ما اسم اللعبة التي تشتهر بشخصية Crash Bandicoot؟",
    answers: ["Crash Bandicoot", "God of War", "Minecraft", "Pokémon"],
    correct: 0,
    category: "games",
    difficulty: "easy"
},
{
    question: "أي لعبة تشتهر بشخصية Agent 47؟",
    answers: ["Hitman", "Fortnite", "Sonic", "Mario Kart"],
    correct: 0,
    category: "games",
    difficulty: "easy"
},
{
    question: "ما اسم اللعبة التي تشتهر بشخصية Geralt of Rivia؟",
    answers: ["The Witcher", "Halo", "Tetris", "FIFA"],
    correct: 0,
    category: "games",
    difficulty: "easy"
},
{
    question: "ما اسم اللعبة التي تدور أحداثها في عالم The Witcher؟",
    answers: ["The Witcher 3", "GTA V", "Minecraft", "Fortnite"],
    correct: 0,
    category: "games",
    difficulty: "easy"
},
{
    question: "ما اسم اللعبة التي تشتهر بشخصية Samus Aran؟",
    answers: ["Metroid", "Zelda", "Mario", "Pokémon"],
    correct: 0,
    category: "games",
    difficulty: "easy"
},
{
    question: "ما اسم اللعبة التي تشتهر بشخصية Donkey Kong؟",
    answers: ["Donkey Kong", "Halo", "FIFA", "Valorant"],
    correct: 0,
    category: "games",
    difficulty: "easy"
},
{
    question: "أي لعبة شهيرة تدور حول القتال بين شخصيات Nintendo؟",
    answers: ["Super Smash Bros.", "Minecraft", "Tetris", "The Sims"],
    correct: 0,
    category: "games",
    difficulty: "easy"
},
{
    question: "ما اسم اللعبة التي تشتهر بجمع الحلقات الذهبية والشخصية Sonic؟",
    answers: ["Sonic the Hedgehog", "Mario Kart", "Halo", "GTA V"],
    correct: 0,
    category: "games",
    difficulty: "easy"
},
{
    question: "ما اسم اللعبة التي اشتهرت بشخصية Alex وSteve؟",
    answers: ["Minecraft", "Fortnite", "Roblox", "Halo"],
    correct: 0,
    category: "games",
    difficulty: "easy"
},


// ==================== 🎮 ألعاب — MEDIUM (40) ====================

{
    question: "ما اسم العالم الرئيسي الذي يستكشفه اللاعب في Pokémon؟",
    answers: ["يعتمد على اللعبة", "Hyrule", "The Nether", "Los Santos"],
    correct: 0,
    category: "games",
    difficulty: "medium"
},
{
    question: "ما اسم المنطقة الرئيسية في سلسلة The Legend of Zelda؟",
    answers: ["Hyrule", "Kanto", "Skyrim", "Los Santos"],
    correct: 0,
    category: "games",
    difficulty: "medium"
},
{
    question: "ما اسم المدينة الرئيسية في GTA V؟",
    answers: ["Los Santos", "Vice City", "Liberty City", "Rapture"],
    correct: 0,
    category: "games",
    difficulty: "medium"
},
{
    question: "ما اسم الشركة المطورة لسلسلة The Witcher؟",
    answers: ["CD Projekt Red", "Ubisoft", "Valve", "Capcom"],
    correct: 0,
    category: "games",
    difficulty: "medium"
},
{
    question: "أي شركة طورت لعبة Resident Evil؟",
    answers: ["Capcom", "Nintendo", "Valve", "Epic Games"],
    correct: 0,
    category: "games",
    difficulty: "medium"
},
{
    question: "ما اسم المحرك المستخدم لتطوير عدد كبير من الألعاب والذي طورته Epic Games؟",
    answers: ["Unreal Engine", "Unity", "Frostbite", "RE Engine"],
    correct: 0,
    category: "games",
    difficulty: "medium"
},
{
    question: "أي شركة طورت محرك Unity؟",
    answers: ["Unity Technologies", "Nintendo", "Sony", "Valve"],
    correct: 0,
    category: "games",
    difficulty: "medium"
},
{
    question: "ما اسم الاستوديو الذي طور لعبة God of War الحديثة؟",
    answers: ["Santa Monica Studio", "Naughty Dog", "Insomniac Games", "Bungie"],
    correct: 0,
    category: "games",
    difficulty: "medium"
},
{
    question: "ما اسم الاستوديو الذي طور سلسلة Uncharted؟",
    answers: ["Naughty Dog", "Rockstar Games", "Capcom", "Valve"],
    correct: 0,
    category: "games",
    difficulty: "medium"
},
{
    question: "ما اسم الاستوديو الذي طور لعبة The Last of Us؟",
    answers: ["Naughty Dog", "Ubisoft", "Mojang", "Sega"],
    correct: 0,
    category: "games",
    difficulty: "medium"
},
{
    question: "أي لعبة من Valve تدور حول حل الألغاز باستخدام بوابات؟",
    answers: ["Portal", "Half-Life", "Dota 2", "Left 4 Dead"],
    correct: 0,
    category: "games",
    difficulty: "medium"
},
{
    question: "ما اسم الشخصية الآلية المساعدة في Portal؟",
    answers: ["GLaDOS", "Cortana", "Wheatley", "BT-7274"],
    correct: 0,
    category: "games",
    difficulty: "medium"
},
{
    question: "ما اسم الشخصية الرئيسية في سلسلة Half-Life؟",
    answers: ["Gordon Freeman", "Master Chief", "Kratos", "Geralt"],
    correct: 0,
    category: "games",
    difficulty: "medium"
},
{
    question: "أي لعبة من Valve تشتهر بنظام التصويب والمواجهة مع الـ Combine؟",
    answers: ["Half-Life 2", "Portal 2", "Dota 2", "Counter-Strike"],
    correct: 0,
    category: "games",
    difficulty: "medium"
},
{
    question: "ما اسم اللعبة التي طورتها Mojang وتحتوي على عالم Nether؟",
    answers: ["Minecraft", "Terraria", "Roblox", "Fortnite"],
    correct: 0,
    category: "games",
    difficulty: "medium"
},
{
    question: "أي وضع في Minecraft يمنح اللاعب موارد غير محدودة وقدرة على الطيران؟",
    answers: ["Creative", "Survival", "Hardcore", "Adventure"],
    correct: 0,
    category: "games",
    difficulty: "medium"
},
{
    question: "أي وضع في Minecraft Java يجعل اللاعب يملك حياة واحدة فقط؟",
    answers: ["Hardcore", "Creative", "Survival", "Spectator"],
    correct: 0,
    category: "games",
    difficulty: "medium"
},
{
    question: "ما اسم البعد الذي توجد فيه Ender Dragon؟",
    answers: ["The End", "The Nether", "Overworld", "Deep Dark"],
    correct: 0,
    category: "games",
    difficulty: "medium"
},
{
    question: "ما اسم الوحش الذي يُعد الزعيم الأشهر في نهاية Minecraft؟",
    answers: ["Ender Dragon", "Wither", "Warden", "Elder Guardian"],
    correct: 0,
    category: "games",
    difficulty: "medium"
},
{
    question: "ما اسم الزعيم الذي يمكن للاعب استدعاؤه في Minecraft باستخدام Soul Sand وWither Skeleton Skulls؟",
    answers: ["Wither", "Ender Dragon", "Warden", "Ravager"],
    correct: 0,
    category: "games",
    difficulty: "medium"
},
{
    question: "ما اسم اللعبة التي طورتها Epic Games وأصبحت مشهورة بنمط Battle Royale؟",
    answers: ["Fortnite", "Valorant", "Apex Legends", "Overwatch"],
    correct: 0,
    category: "games",
    difficulty: "medium"
},
{
    question: "أي شركة طورت لعبة Valorant؟",
    answers: ["Riot Games", "Epic Games", "Valve", "Blizzard"],
    correct: 0,
    category: "games",
    difficulty: "medium"
},
{
    question: "أي شركة طورت لعبة Overwatch؟",
    answers: ["Blizzard Entertainment", "Riot Games", "Valve", "Ubisoft"],
    correct: 0,
    category: "games",
    difficulty: "medium"
},
{
    question: "ما اسم الشركة المطورة للعبة Counter-Strike؟",
    answers: ["Valve", "Epic Games", "Nintendo", "Capcom"],
    correct: 0,
    category: "games",
    difficulty: "medium"
},
{
    question: "ما اسم اللعبة التي بدأت كإضافة مشهورة للعبة Warcraft III ثم أصبحت لعبة مستقلة؟",
    answers: ["Dota", "Portal", "Fortnite", "Valorant"],
    correct: 0,
    category: "games",
    difficulty: "medium"
},
{
    question: "أي سلسلة ألعاب تشتهر بعالم Tamriel؟",
    answers: ["The Elder Scrolls", "The Witcher", "Fallout", "Dark Souls"],
    correct: 0,
    category: "games",
    difficulty: "medium"
},
{
    question: "ما اسم المنطقة التي تجري فيها أحداث Skyrim؟",
    answers: ["Skyrim", "Morrowind", "Cyrodiil", "High Rock"],
    correct: 0,
    category: "games",
    difficulty: "medium"
},
{
    question: "ما اسم البطل الذي يُعرف بلقب Dragonborn في Skyrim؟",
    answers: ["لا يوجد اسم ثابت للشخصية", "Geralt", "Kratos", "Link"],
    correct: 0,
    category: "games",
    difficulty: "medium"
},
{
    question: "أي لعبة من FromSoftware اشتهرت بمفهوم الـ Soulslike؟",
    answers: ["Dark Souls", "The Sims", "FIFA", "Fortnite"],
    correct: 0,
    category: "games",
    difficulty: "medium"
},
{
    question: "أي استوديو طور سلسلة Dark Souls؟",
    answers: ["FromSoftware", "Naughty Dog", "Rockstar Games", "Ubisoft"],
    correct: 0,
    category: "games",
    difficulty: "medium"
},
{
    question: "ما اسم اللعبة التي تدور أحداثها في عالم مفتوح مستوحى من اليابان الإقطاعية وتضم Jin Sakai؟",
    answers: ["Ghost of Tsushima", "Sekiro", "Nioh", "Assassin's Creed"],
    correct: 0,
    category: "games",
    difficulty: "medium"
},
{
    question: "ما اسم بطل Ghost of Tsushima؟",
    answers: ["Jin Sakai", "Kazuma Kiryu", "Geralt", "Arthur Morgan"],
    correct: 0,
    category: "games",
    difficulty: "medium"
},
{
    question: "ما اسم اللعبة التي تدور أحداثها حول Arthur Morgan؟",
    answers: ["Red Dead Redemption 2", "GTA V", "The Witcher 3", "Mafia"],
    correct: 0,
    category: "games",
    difficulty: "medium"
},
{
    question: "ما اسم العصابة التي ينتمي إليها Arthur Morgan؟",
    answers: ["Van der Linde Gang", "O'Driscoll Gang", "Marlowes", "Saint Denis Gang"],
    correct: 0,
    category: "games",
    difficulty: "medium"
},
{
    question: "أي شركة طورت Red Dead Redemption 2؟",
    answers: ["Rockstar Games", "Ubisoft", "Bethesda", "Capcom"],
    correct: 0,
    category: "games",
    difficulty: "medium"
},
{
    question: "ما اسم المدينة الرئيسية في The Legend of Zelda: Breath of the Wild؟",
    answers: ["لا توجد مدينة رئيسية واحدة", "Hyrule City", "Kakariko City فقط", "Termina"],
    correct: 0,
    category: "games",
    difficulty: "medium"
},
{
    question: "ما اسم السيف الأسطوري الذي يستخدمه Link غالبًا؟",
    answers: ["Master Sword", "Buster Sword", "Moonlight Greatsword", "Energy Sword"],
    correct: 0,
    category: "games",
    difficulty: "medium"
},
{
    question: "ما اسم اللعبة التي اشتهرت بشخصية Sephiroth؟",
    answers: ["Final Fantasy VII", "Final Fantasy X", "Kingdom Hearts", "Dragon Quest"],
    correct: 0,
    category: "games",
    difficulty: "medium"
},
{
    question: "ما اسم البطل الرئيسي في Final Fantasy VII؟",
    answers: ["Cloud Strife", "Sephiroth", "Noctis", "Squall"],
    correct: 0,
    category: "games",
    difficulty: "medium"
},


// ==================== 🎮 ألعاب — HARD (40) ====================

{
    question: "ما الاسم الأصلي الذي استخدمه Markus Persson لمشروع Minecraft في بدايته؟",
    answers: ["Cave Game", "Block World", "Mine World", "Cubic Game"],
    correct: 0,
    category: "games",
    difficulty: "hard"
},
{
    question: "ما النسبة المذكورة لظهور كلمة Minceraft بدل Minecraft على شاشة العنوان في Java Edition؟",
    answers: ["1 من 10,000", "1 من 1,000", "1 من 100,000", "1 من 1,000,000"],
    correct: 0,
    category: "games",
    difficulty: "hard"
},
{
    question: "ماذا يحدث عند تسمية حيوان في Minecraft باسم Dinnerbone أو Grumm؟",
    answers: ["ينقلب نموذج الحيوان رأسًا على عقب", "يتحول إلى زعيم", "يصبح غير مرئي", "يتغير لون العالم"],
    correct: 0,
    category: "games",
    difficulty: "hard"
},
{
    question: "ما الاسم الذي يؤدي إلى تغيير مظهر الأرنب في Minecraft إلى نمط أسود وأبيض مميز؟",
    answers: ["Toast", "Dinnerbone", "Grumm", "jeb_"],
    correct: 0,
    category: "games",
    difficulty: "hard"
},
{
    question: "ما الأبجدية المستخدمة في رموز التعويذات الظاهرة في Minecraft؟",
    answers: ["Standard Galactic Alphabet", "Morse Code", "Binary Alphabet", "Runic Alphabet"],
    correct: 0,
    category: "games",
    difficulty: "hard"
},
{
    question: "ما اللعبة التي يُذكر أنها ألهمت Minecraft؟",
    answers: ["Dungeon Keeper", "Half-Life", "Portal", "Doom"],
    correct: 0,
    category: "games",
    difficulty: "hard"
},
{
    question: "ما الاسم المعروف للشخصية العملاقة غير المستخدمة في Survival بشكل طبيعي في Minecraft؟",
    answers: ["Giant", "Titan", "Colossus", "Mega Zombie"],
    correct: 0,
    category: "games",
    difficulty: "hard"
},
{
    question: "أي إصدار من Minecraft يستخدم Hardcore كفئة فرعية من Survival؟",
    answers: ["Java Edition", "Legacy Console فقط", "Nintendo 3DS فقط", "Minecraft Education فقط"],
    correct: 0,
    category: "games",
    difficulty: "hard"
},
{
    question: "ما الاستوديو الذي تولى تطوير نسخ Minecraft للعديد من أجهزة الألعاب المنزلية القديمة؟",
    answers: ["4J Studios", "Naughty Dog", "Bungie", "BioWare"],
    correct: 0,
    category: "games",
    difficulty: "hard"
},
{
    question: "أي جهاز كان من أوائل أجهزة الألعاب المنزلية التي حصلت على Minecraft رسميًا عبر 4J Studios؟",
    answers: ["Xbox 360", "Nintendo Wii فقط", "Sega Saturn", "Dreamcast"],
    correct: 0,
    category: "games",
    difficulty: "hard"
},
{
    question: "ما اسم المشروع الذي كانت Nintendo وSony تعملان عليه قبل ظهور PlayStation كمنصة مستقلة؟",
    answers: ["إضافة CD لجهاز Super Nintendo", "جهاز VR مشترك", "وحدة أقراص لـ Nintendo 64", "جهاز محمول مشترك"],
    correct: 0,
    category: "games",
    difficulty: "hard"
},
{
    question: "ما اسم أول شخصية ظهر بها Mario في لعبة Donkey Kong؟",
    answers: ["Jumpman", "Mr. Video", "Game Man", "Redman"],
    correct: 0,
    category: "games",
    difficulty: "hard"
},
{
    question: "من ابتكر لعبة Mario الأصلية كجزء أساسي من تاريخ Nintendo؟",
    answers: ["Shigeru Miyamoto", "Hideo Kojima", "Gabe Newell", "John Carmack"],
    correct: 0,
    category: "games",
    difficulty: "hard"
},
{
    question: "ما اسم اللعبة التي تُعد من أوائل الألعاب التي أخفت Easter Egg تحتوي على اسم مطورها؟",
    answers: ["Adventure", "Pong", "Pac-Man", "Space Invaders"],
    correct: 0,
    category: "games",
    difficulty: "hard"
},
{
    question: "من المطور الذي أخفى اسمه داخل لعبة Adventure على Atari؟",
    answers: ["Warren Robinett", "Shigeru Miyamoto", "John Romero", "Hideo Kojima"],
    correct: 0,
    category: "games",
    difficulty: "hard"
},
{
    question: "ما اسم اللعبة التي كانت أساسًا لإحدى أشهر ألعاب الـ Battle Royale الحديثة من Epic Games؟",
    answers: ["Fortnite", "Valorant", "Overwatch", "Dota 2"],
    correct: 0,
    category: "games",
    difficulty: "hard"
},
{
    question: "أي محرك ألعاب طورته Epic Games ويُستخدم في عدد كبير من الألعاب؟",
    answers: ["Unreal Engine", "Frostbite", "RE Engine", "Decima"],
    correct: 0,
    category: "games",
    difficulty: "hard"
},
{
    question: "ما اسم محرك Capcom المستخدم في ألعاب مثل Resident Evil الحديثة؟",
    answers: ["RE Engine", "Unreal Engine", "Creation Engine", "Source 2"],
    correct: 0,
    category: "games",
    difficulty: "hard"
},
{
    question: "ما اسم المحرك الذي تستخدمه Valve في ألعابها الحديثة مثل Counter-Strike 2؟",
    answers: ["Source 2", "Unreal Engine 5", "Frostbite", "RE Engine"],
    correct: 0,
    category: "games",
    difficulty: "hard"
},
{
    question: "ما اسم الاستوديو الذي أسسه Hideo Kojima بعد مغادرته Konami؟",
    answers: ["Kojima Productions", "PlatinumGames", "Remedy", "Level-5"],
    correct: 0,
    category: "games",
    difficulty: "hard"
},
{
    question: "ما اسم اللعبة التي قدمت شخصية Solid Snake بشكل بارز؟",
    answers: ["Metal Gear Solid", "Death Stranding", "Resident Evil", "Splinter Cell"],
    correct: 0,
    category: "games",
    difficulty: "hard"
},
{
    question: "ما اسم الشركة التي طورت سلسلة Assassin's Creed؟",
    answers: ["Ubisoft", "Capcom", "Square Enix", "Konami"],
    correct: 0,
    category: "games",
    difficulty: "hard"
},
{
    question: "ما اسم المنظمة السرية التي ترتبط غالبًا بسلسلة Assassin's Creed؟",
    answers: ["Assassins", "Templars", "Spartans", "Hunters"],
    correct: 0,
    category: "games",
    difficulty: "hard"
},
{
    question: "ما اسم المنظمة المنافسة الرئيسية للـ Assassins في السلسلة؟",
    answers: ["Templars", "Illuminati", "Guardians", "Knights of Hyrule"],
    correct: 0,
    category: "games",
    difficulty: "hard"
},
{
    question: "أي لعبة من FromSoftware تتمحور حول شخصية Tarnished؟",
    answers: ["Elden Ring", "Dark Souls III", "Bloodborne", "Sekiro"],
    correct: 0,
    category: "games",
    difficulty: "hard"
},
{
    question: "ما اسم العالم الذي تقع فيه أحداث Elden Ring؟",
    answers: ["The Lands Between", "Lordran", "Yharnam", "Ashina"],
    correct: 0,
    category: "games",
    difficulty: "hard"
},
{
    question: "ما اسم المنطقة الرئيسية في Bloodborne؟",
    answers: ["Yharnam", "Lordran", "The Lands Between", "Drangleic"],
    correct: 0,
    category: "games",
    difficulty: "hard"
},
{
    question: "ما اسم العالم الرئيسي في Dark Souls الأولى؟",
    answers: ["Lordran", "Yharnam", "Ashina", "The Lands Between"],
    correct: 0,
    category: "games",
    difficulty: "hard"
},
{
    question: "ما اسم الاستوديو الذي طور Bloodborne بالتعاون مع Sony؟",
    answers: ["FromSoftware", "Naughty Dog", "Bungie", "Insomniac Games"],
    correct: 0,
    category: "games",
    difficulty: "hard"
},
{
    question: "ما اسم الشركة التي طورت سلسلة Final Fantasy؟",
    answers: ["Square Enix", "Capcom", "Sega", "Bandai Namco"],
    correct: 0,
    category: "games",
    difficulty: "hard"
},
{
    question: "ما الاسم الكامل لشخصية Cloud في Final Fantasy VII؟",
    answers: ["Cloud Strife", "Cloud Storm", "Cloud Knight", "Cloud Archer"],
    correct: 0,
    category: "games",
    difficulty: "hard"
},
{
    question: "ما اسم السيف الشهير الذي يستخدمه Cloud Strife؟",
    answers: ["Buster Sword", "Master Sword", "Energy Sword", "Moonlight Sword"],
    correct: 0,
    category: "games",
    difficulty: "hard"
},
{
    question: "أي لعبة من Nintendo ترتبط بمنطقة Kanto؟",
    answers: ["Pokémon Red and Blue", "The Legend of Zelda", "Metroid", "Fire Emblem"],
    correct: 0,
    category: "games",
    difficulty: "hard"
},
{
    question: "ما اسم أول Pokémon في Pokédex الوطني؟",
    answers: ["Bulbasaur", "Charmander", "Squirtle", "Pikachu"],
    correct: 0,
    category: "games",
    difficulty: "hard"
},
{
    question: "ما الرقم الوطني لـ Pikachu في Pokédex الأصلي؟",
    answers: ["25", "1", "4", "7"],
    correct: 0,
    category: "games",
    difficulty: "hard"
},
{
    question: "ما اسم الشخصية التي ظهرت كـ glitch Pokémon في Pokémon Red وBlue؟",
    answers: ["MissingNo.", "Mewtwo", "Ditto", "Meltan"],
    correct: 0,
    category: "games",
    difficulty: "hard"
},
{
    question: "ما اسم الاستوديو الذي طور لعبة Halo الأصلية قبل انتقال السلسلة إلى 343 Industries؟",
    answers: ["Bungie", "Rare", "Epic Games", "Valve"],
    correct: 0,
    category: "games",
    difficulty: "hard"
},
{
    question: "ما اسم البطل الذي يتحكم به اللاعب في سلسلة Halo غالبًا؟",
    answers: ["Master Chief", "Marcus Fenix", "Doom Slayer", "Gordon Freeman"],
    correct: 0,
    category: "games",
    difficulty: "hard"
},
{
    question: "ما الاسم الحقيقي لـ Master Chief؟",
    answers: ["John-117", "James-117", "Jack-117", "Joseph-117"],
    correct: 0,
    category: "games",
    difficulty: "hard"
},
{
    question: "ما اسم اللعبة التي تدور أحداثها في مدينة Rapture تحت الماء؟",
    answers: ["BioShock", "Dishonored", "Half-Life 2", "Portal 2"],
    correct: 0,
    category: "games",
    difficulty: "hard"
},
// ==================== 🎬 أفلام ومسلسلات — EASY (34) ====================

{
    question: "ما اسم الفيلم الذي تدور أحداثه حول سفينة اسمها Titanic؟",
    answers: ["Titanic", "Avatar", "Inception", "Interstellar"],
    correct: 0,
    category: "movies",
    difficulty: "easy"
},
{
    question: "من قام بدور Jack في فيلم Titanic؟",
    answers: ["Leonardo DiCaprio", "Tom Hanks", "Brad Pitt", "Matt Damon"],
    correct: 0,
    category: "movies",
    difficulty: "easy"
},
{
    question: "من قامت بدور Rose في فيلم Titanic؟",
    answers: ["Kate Winslet", "Emma Watson", "Jennifer Lawrence", "Natalie Portman"],
    correct: 0,
    category: "movies",
    difficulty: "easy"
},
{
    question: "ما اسم الفيلم الذي تدور أحداثه على كوكب Pandora؟",
    answers: ["Avatar", "Dune", "Interstellar", "Star Wars"],
    correct: 0,
    category: "movies",
    difficulty: "easy"
},
{
    question: "من مخرج فيلم Avatar؟",
    answers: ["James Cameron", "Christopher Nolan", "Steven Spielberg", "Peter Jackson"],
    correct: 0,
    category: "movies",
    difficulty: "easy"
},
{
    question: "ما اسم البطل الرئيسي في سلسلة Harry Potter؟",
    answers: ["Harry Potter", "Ron Weasley", "Draco Malfoy", "Neville Longbottom"],
    correct: 0,
    category: "movies",
    difficulty: "easy"
},
{
    question: "من قام بدور Harry Potter في الأفلام؟",
    answers: ["Daniel Radcliffe", "Rupert Grint", "Tom Felton", "Elijah Wood"],
    correct: 0,
    category: "movies",
    difficulty: "easy"
},
{
    question: "ما اسم المدرسة في سلسلة Harry Potter؟",
    answers: ["Hogwarts", "Nevermore", "Xavier's", "Ilvermorny"],
    correct: 0,
    category: "movies",
    difficulty: "easy"
},
{
    question: "ما اسم الشخصية التي يؤديها Robert Downey Jr. في عالم Marvel؟",
    answers: ["Iron Man", "Captain America", "Thor", "Hulk"],
    correct: 0,
    category: "movies",
    difficulty: "easy"
},
{
    question: "ما اسم البطل الخارق الذي يستخدم المطرقة Mjolnir؟",
    answers: ["Thor", "Iron Man", "Hulk", "Spider-Man"],
    correct: 0,
    category: "movies",
    difficulty: "easy"
},
{
    question: "ما اسم البطل المعروف باسم Spider-Man؟",
    answers: ["Peter Parker", "Tony Stark", "Bruce Wayne", "Steve Rogers"],
    correct: 0,
    category: "movies",
    difficulty: "easy"
},
{
    question: "ما اسم المدينة التي يعيش فيها Batman غالبًا؟",
    answers: ["Gotham City", "Metropolis", "Star City", "Central City"],
    correct: 0,
    category: "movies",
    difficulty: "easy"
},
{
    question: "من هو البطل الحقيقي وراء شخصية Batman؟",
    answers: ["Bruce Wayne", "Clark Kent", "Peter Parker", "Tony Stark"],
    correct: 0,
    category: "movies",
    difficulty: "easy"
},
{
    question: "ما اسم الفيلم الذي تدور أحداثه في عالم الأحلام؟",
    answers: ["Inception", "Titanic", "Joker", "Gladiator"],
    correct: 0,
    category: "movies",
    difficulty: "easy"
},
{
    question: "من مخرج فيلم Inception؟",
    answers: ["Christopher Nolan", "James Cameron", "Tim Burton", "Ridley Scott"],
    correct: 0,
    category: "movies",
    difficulty: "easy"
},
{
    question: "ما اسم الفيلم الذي تدور أحداثه حول عالم مليء بالديناصورات؟",
    answers: ["Jurassic Park", "King Kong", "Avatar", "The Mummy"],
    correct: 0,
    category: "movies",
    difficulty: "easy"
},
{
    question: "ما اسم السلسلة التي تدور حول شخصية Luke Skywalker؟",
    answers: ["Star Wars", "Star Trek", "Dune", "The Matrix"],
    correct: 0,
    category: "movies",
    difficulty: "easy"
},
{
    question: "ما اسم الشخصية الشريرة الشهيرة في Star Wars التي ترتدي قناعًا أسود؟",
    answers: ["Darth Vader", "Kylo Ren", "Palpatine", "Boba Fett"],
    correct: 0,
    category: "movies",
    difficulty: "easy"
},
{
    question: "ما اسم الفيلم الذي يحتوي على شخصية Elsa؟",
    answers: ["Frozen", "Moana", "Tangled", "Brave"],
    correct: 0,
    category: "movies",
    difficulty: "easy"
},
{
    question: "ما اسم شقيقة Elsa في Frozen؟",
    answers: ["Anna", "Rapunzel", "Merida", "Moana"],
    correct: 0,
    category: "movies",
    difficulty: "easy"
},
{
    question: "ما اسم الفيلم الذي تدور قصته حول لعبة تتحرك عندما لا يراها البشر؟",
    answers: ["Toy Story", "Cars", "Up", "Ratatouille"],
    correct: 0,
    category: "movies",
    difficulty: "easy"
},
{
    question: "ما اسم السيارة الحمراء الشهيرة في Cars؟",
    answers: ["Lightning McQueen", "Mater", "Doc Hudson", "Jackson Storm"],
    correct: 0,
    category: "movies",
    difficulty: "easy"
},
{
    question: "ما اسم الفأر الرئيسي في فيلم Ratatouille؟",
    answers: ["Remy", "Mickey", "Stuart", "Jerry"],
    correct: 0,
    category: "movies",
    difficulty: "easy"
},
{
    question: "ما اسم الفيلم الذي يحتوي على شخصية Simba؟",
    answers: ["The Lion King", "Madagascar", "Bambi", "Tarzan"],
    correct: 0,
    category: "movies",
    difficulty: "easy"
},
{
    question: "ما اسم والد Simba في The Lion King؟",
    answers: ["Mufasa", "Scar", "Timon", "Rafiki"],
    correct: 0,
    category: "movies",
    difficulty: "easy"
},
{
    question: "ما اسم المسلسل الذي تدور أحداثه حول عائلة Simpson؟",
    answers: ["The Simpsons", "Family Guy", "South Park", "Friends"],
    correct: 0,
    category: "movies",
    difficulty: "easy"
},
{
    question: "ما اسم المدينة التي يعيش فيها The Simpsons؟",
    answers: ["Springfield", "Riverdale", "Gotham", "Sunnydale"],
    correct: 0,
    category: "movies",
    difficulty: "easy"
},
{
    question: "ما اسم المسلسل الذي تدور أحداثه حول مجموعة أصدقاء في نيويورك؟",
    answers: ["Friends", "Lost", "Wednesday", "The Office"],
    correct: 0,
    category: "movies",
    difficulty: "easy"
},
{
    question: "ما اسم الشخصية التي لعبتها Jennifer Aniston في Friends؟",
    answers: ["Rachel Green", "Monica Geller", "Phoebe Buffay", "Joey Tribbiani"],
    correct: 0,
    category: "movies",
    difficulty: "easy"
},
{
    question: "ما اسم المسلسل الذي يحتوي على شخصية Wednesday Addams؟",
    answers: ["Wednesday", "Riverdale", "Stranger Things", "Dark"],
    correct: 0,
    category: "movies",
    difficulty: "easy"
},
{
    question: "ما اسم المدينة التي تقع فيها أحداث مسلسل Stranger Things؟",
    answers: ["Hawkins", "Riverdale", "Springfield", "Gotham"],
    correct: 0,
    category: "movies",
    difficulty: "easy"
},
{
    question: "ما اسم المسلسل الذي يحتوي على عالم The Upside Down؟",
    answers: ["Stranger Things", "Dark", "Lost", "Wednesday"],
    correct: 0,
    category: "movies",
    difficulty: "easy"
},
{
    question: "ما اسم الفيلم الذي تدور أحداثه حول رجل يعيش داخل محاكاة؟",
    answers: ["The Matrix", "Inception", "Interstellar", "Tenet"],
    correct: 0,
    category: "movies",
    difficulty: "easy"
},
{
    question: "ما اسم البطل الرئيسي في The Matrix؟",
    answers: ["Neo", "Morpheus", "Trinity", "Agent Smith"],
    correct: 0,
    category: "movies",
    difficulty: "easy"
},


// ==================== 🎬 أفلام ومسلسلات — MEDIUM (33) ====================

{
    question: "من أخرج فيلم The Dark Knight؟",
    answers: ["Christopher Nolan", "David Fincher", "James Cameron", "Peter Jackson"],
    correct: 0,
    category: "movies",
    difficulty: "medium"
},
{
    question: "ما اسم الممثل الذي أدى شخصية Joker في The Dark Knight؟",
    answers: ["Heath Ledger", "Joaquin Phoenix", "Jack Nicholson", "Jared Leto"],
    correct: 0,
    category: "movies",
    difficulty: "medium"
},
{
    question: "ما اسم الجزيرة التي تدور فيها أحداث Jurassic Park؟",
    answers: ["Isla Nublar", "Isla Sorna", "Skull Island", "Nublar Island"],
    correct: 0,
    category: "movies",
    difficulty: "medium"
},
{
    question: "ما اسم الشركة التي تقف وراء Jurassic Park في الفيلم الأصلي؟",
    answers: ["InGen", "Weyland-Yutani", "Cyberdyne", "Oscorp"],
    correct: 0,
    category: "movies",
    difficulty: "medium"
},
{
    question: "من قام بدور Jack Sparrow؟",
    answers: ["Johnny Depp", "Orlando Bloom", "Brad Pitt", "Hugh Jackman"],
    correct: 0,
    category: "movies",
    difficulty: "medium"
},
{
    question: "ما اسم السلسلة التي تحتوي على شخصية Jack Sparrow؟",
    answers: ["Pirates of the Caribbean", "Indiana Jones", "The Mummy", "National Treasure"],
    correct: 0,
    category: "movies",
    difficulty: "medium"
},
{
    question: "ما اسم المدينة التي يعيش فيها Superman؟",
    answers: ["Metropolis", "Gotham City", "Central City", "Star City"],
    correct: 0,
    category: "movies",
    difficulty: "medium"
},
{
    question: "ما الاسم الحقيقي لـ Superman؟",
    answers: ["Clark Kent", "Bruce Wayne", "Barry Allen", "Hal Jordan"],
    correct: 0,
    category: "movies",
    difficulty: "medium"
},
{
    question: "ما اسم الكوكب الذي جاء منه Superman؟",
    answers: ["Krypton", "Pandora", "Arrakis", "Tatooine"],
    correct: 0,
    category: "movies",
    difficulty: "medium"
},
{
    question: "ما اسم الكوكب الذي تدور عليه أحداث الجزء الأكبر من فيلم Dune؟",
    answers: ["Arrakis", "Krypton", "Pandora", "Tatooine"],
    correct: 0,
    category: "movies",
    difficulty: "medium"
},
{
    question: "من أخرج فيلم The Lord of the Rings؟",
    answers: ["Peter Jackson", "George Lucas", "James Cameron", "Christopher Nolan"],
    correct: 0,
    category: "movies",
    difficulty: "medium"
},
{
    question: "ما اسم الخاتم الذي يدور حوله The Lord of the Rings؟",
    answers: ["The One Ring", "The Dark Ring", "The Power Ring", "The Golden Ring"],
    correct: 0,
    category: "movies",
    difficulty: "medium"
},
{
    question: "ما اسم الممثل الذي لعب دور Frodo Baggins؟",
    answers: ["Elijah Wood", "Orlando Bloom", "Sean Astin", "Viggo Mortensen"],
    correct: 0,
    category: "movies",
    difficulty: "medium"
},
{
    question: "ما اسم الشخصية التي لعبها Ian McKellen في The Lord of the Rings؟",
    answers: ["Gandalf", "Saruman", "Elrond", "Théoden"],
    correct: 0,
    category: "movies",
    difficulty: "medium"
},
{
    question: "ما اسم المسلسل الذي تدور أحداثه في Westeros؟",
    answers: ["Game of Thrones", "The Witcher", "Vikings", "The Last Kingdom"],
    correct: 0,
    category: "movies",
    difficulty: "medium"
},
{
    question: "ما اسم العائلة التي ينتمي إليها Jon Snow؟",
    answers: ["Stark", "Lannister", "Targaryen", "Baratheon"],
    correct: 0,
    category: "movies",
    difficulty: "medium"
},
{
    question: "ما اسم التنين الذي ترتبط به Daenerys Targaryen؟",
    answers: ["Drogon", "Smaug", "Toothless", "Viserion فقط"],
    correct: 0,
    category: "movies",
    difficulty: "medium"
},
{
    question: "ما اسم المسلسل الذي يتابع قصة Walter White؟",
    answers: ["Breaking Bad", "Better Call Saul", "Ozark", "Dexter"],
    correct: 0,
    category: "movies",
    difficulty: "medium"
},
{
    question: "ما المهنة التي كان يعمل بها Walter White في بداية Breaking Bad؟",
    answers: ["مدرس كيمياء", "محامي", "طبيب", "صحفي"],
    correct: 0,
    category: "movies",
    difficulty: "medium"
},
{
    question: "ما اسم شريك Walter White في Breaking Bad؟",
    answers: ["Jesse Pinkman", "Saul Goodman", "Hank Schrader", "Mike Ehrmantraut"],
    correct: 0,
    category: "movies",
    difficulty: "medium"
},
{
    question: "ما اسم المسلسل الذي يحكي قصة المحامي Saul Goodman؟",
    answers: ["Better Call Saul", "Breaking Bad", "Ozark", "Suits"],
    correct: 0,
    category: "movies",
    difficulty: "medium"
},
{
    question: "ما الاسم الحقيقي لـ Saul Goodman؟",
    answers: ["Jimmy McGill", "Mike Ehrmantraut", "Jesse Pinkman", "Hank Schrader"],
    correct: 0,
    category: "movies",
    difficulty: "medium"
},
{
    question: "ما اسم المسلسل الذي تدور أحداثه في عالم The Walking Dead؟",
    answers: ["The Walking Dead", "The Last of Us", "Lost", "Dark"],
    correct: 0,
    category: "movies",
    difficulty: "medium"
},
{
    question: "ما اسم الشخصية الرئيسية في The Mandalorian؟",
    answers: ["Din Djarin", "Luke Skywalker", "Boba Fett", "Han Solo"],
    correct: 0,
    category: "movies",
    difficulty: "medium"
},
{
    question: "ما اسم الشخصية الصغيرة التي يلقبها الجمهور بـ Baby Yoda؟",
    answers: ["Grogu", "Yoda", "Wicket", "Mando"],
    correct: 0,
    category: "movies",
    difficulty: "medium"
},
{
    question: "ما اسم المسلسل الذي يتناول مجموعة من الأصدقاء في بلدة Riverdale؟",
    answers: ["Riverdale", "Wednesday", "Teen Wolf", "Glee"],
    correct: 0,
    category: "movies",
    difficulty: "medium"
},
{
    question: "ما اسم المسلسل الذي يتناول مدرسة Nevermore Academy؟",
    answers: ["Wednesday", "Riverdale", "Chilling Adventures", "The Vampire Diaries"],
    correct: 0,
    category: "movies",
    difficulty: "medium"
},
{
    question: "ما اسم الممثلة التي أدت شخصية Wednesday Addams في مسلسل Wednesday؟",
    answers: ["Jenna Ortega", "Emma Stone", "Millie Bobby Brown", "Anya Taylor-Joy"],
    correct: 0,
    category: "movies",
    difficulty: "medium"
},
{
    question: "من أدى دور Neo في The Matrix؟",
    answers: ["Keanu Reeves", "Tom Cruise", "Christian Bale", "Hugh Jackman"],
    correct: 0,
    category: "movies",
    difficulty: "medium"
},
{
    question: "ما اسم الشخصية التي أدتها Carrie-Anne Moss في The Matrix؟",
    answers: ["Trinity", "Martha", "Rachel", "Selene"],
    correct: 0,
    category: "movies",
    difficulty: "medium"
},
{
    question: "من أخرج فيلم Interstellar؟",
    answers: ["Christopher Nolan", "Denis Villeneuve", "Ridley Scott", "Steven Spielberg"],
    correct: 0,
    category: "movies",
    difficulty: "medium"
},
{
    question: "من قام بدور Cooper في Interstellar؟",
    answers: ["Matthew McConaughey", "Matt Damon", "Christian Bale", "Leonardo DiCaprio"],
    correct: 0,
    category: "movies",
    difficulty: "medium"
},
{
    question: "ما اسم الفيلم الذي يدور حول رحلة إلى مدينة Oz؟",
    answers: ["The Wizard of Oz", "Alice in Wonderland", "Narnia", "Peter Pan"],
    correct: 0,
    category: "movies",
    difficulty: "medium"
},


// ==================== 🎬 أفلام ومسلسلات — HARD (33) ====================

{
    question: "ما أول فيلم طويل فاز بجائزة الأوسكار لأفضل فيلم؟",
    answers: ["Wings", "Titanic", "The Godfather", "Gone with the Wind"],
    correct: 0,
    category: "movies",
    difficulty: "hard"
},
{
    question: "من أخرج فيلم Pulp Fiction؟",
    answers: ["Quentin Tarantino", "Martin Scorsese", "Francis Ford Coppola", "David Fincher"],
    correct: 0,
    category: "movies",
    difficulty: "hard"
},
{
    question: "ما اسم المطعم الشهير في مشهد من Pulp Fiction المرتبط برقصة Vincent وMia؟",
    answers: ["Jack Rabbit Slim's", "Lou's Diner", "Benny's", "Big Kahuna Cafe"],
    correct: 0,
    category: "movies",
    difficulty: "hard"
},
{
    question: "من أخرج فيلم The Godfather؟",
    answers: ["Francis Ford Coppola", "Martin Scorsese", "Brian De Palma", "Steven Spielberg"],
    correct: 0,
    category: "movies",
    difficulty: "hard"
},
{
    question: "ما اسم العائلة التي تدور حولها أحداث The Godfather؟",
    answers: ["Corleone", "Soprano", "Capone", "Gambino"],
    correct: 0,
    category: "movies",
    difficulty: "hard"
},
{
    question: "من أدى شخصية Don Vito Corleone في الفيلم الأول؟",
    answers: ["Marlon Brando", "Al Pacino", "Robert De Niro", "Joe Pesci"],
    correct: 0,
    category: "movies",
    difficulty: "hard"
},
{
    question: "من أدى شخصية Michael Corleone في The Godfather؟",
    answers: ["Al Pacino", "Marlon Brando", "Robert De Niro", "James Caan"],
    correct: 0,
    category: "movies",
    difficulty: "hard"
},
{
    question: "ما اسم الفيلم الذي جمع بين Leonardo DiCaprio وTom Hardy في قصة عن الأحلام؟",
    answers: ["Inception", "The Revenant", "Shutter Island", "The Departed"],
    correct: 0,
    category: "movies",
    difficulty: "hard"
},
{
    question: "من أخرج فيلم The Revenant؟",
    answers: ["Alejandro G. Iñárritu", "Christopher Nolan", "Denis Villeneuve", "Sam Mendes"],
    correct: 0,
    category: "movies",
    difficulty: "hard"
},
{
    question: "ما الفيلم الذي فاز Leonardo DiCaprio عنه بأول أوسكار تمثيل له؟",
    answers: ["The Revenant", "Titanic", "Inception", "The Wolf of Wall Street"],
    correct: 0,
    category: "movies",
    difficulty: "hard"
},
{
    question: "من أخرج فيلم Schindler's List؟",
    answers: ["Steven Spielberg", "Martin Scorsese", "Roman Polanski", "Ridley Scott"],
    correct: 0,
    category: "movies",
    difficulty: "hard"
},
{
    question: "ما الفيلم الذي تدور أحداثه حول مجموعة من الرجال في غرفة يتناقشون حول حكم قضائي؟",
    answers: ["12 Angry Men", "The Trial", "The Verdict", "A Few Good Men"],
    correct: 0,
    category: "movies",
    difficulty: "hard"
},
{
    question: "من أخرج فيلم 12 Angry Men؟",
    answers: ["Sidney Lumet", "Billy Wilder", "Alfred Hitchcock", "Orson Welles"],
    correct: 0,
    category: "movies",
    difficulty: "hard"
},
{
    question: "ما اسم الفيلم الذي حصل على 11 جائزة أوسكار في حفل 2004؟",
    answers: ["The Lord of the Rings: The Return of the King", "Titanic", "Ben-Hur", "Gladiator"],
    correct: 0,
    category: "movies",
    difficulty: "hard"
},
{
    question: "ما الفيلم الذي فاز بجميع فئات الأوسكار الرئيسية الخمس؟",
    answers: ["The Silence of the Lambs", "The Godfather", "Titanic", "Parasite"],
    correct: 0,
    category: "movies",
    difficulty: "hard"
},
{
    question: "من أخرج فيلم Parasite؟",
    answers: ["Bong Joon Ho", "Park Chan-wook", "Lee Chang-dong", "Hirokazu Kore-eda"],
    correct: 0,
    category: "movies",
    difficulty: "hard"
},
{
    question: "ما أول فيلم غير ناطق بالإنجليزية يفوز بجائزة أفضل فيلم في الأوسكار؟",
    answers: ["Parasite", "Roma", "Amour", "Life Is Beautiful"],
    correct: 0,
    category: "movies",
    difficulty: "hard"
},
{
    question: "من أخرج فيلم The Good, the Bad and the Ugly؟",
    answers: ["Sergio Leone", "Clint Eastwood", "John Ford", "Sam Peckinpah"],
    correct: 0,
    category: "movies",
    difficulty: "hard"
},
{
    question: "ما اسم الشخصية التي لعبها Clint Eastwood في The Good, the Bad and the Ugly؟",
    answers: ["Blondie", "Tuco", "Angel Eyes", "Lee Van Cleef"],
    correct: 0,
    category: "movies",
    difficulty: "hard"
},
{
    question: "ما اسم الفيلم الذي يُعد من أشهر أفلام Akira Kurosawa عن سبعة محاربين؟",
    answers: ["Seven Samurai", "Rashomon", "Yojimbo", "Ikiru"],
    correct: 0,
    category: "movies",
    difficulty: "hard"
},
{
    question: "من أخرج Seven Samurai؟",
    answers: ["Akira Kurosawa", "Hayao Miyazaki", "Yasujirō Ozu", "Takeshi Kitano"],
    correct: 0,
    category: "movies",
    difficulty: "hard"
},
{
    question: "ما اسم الفيلم الذي أخرجه Francis Ford Coppola ويحكي عن حرب فيتنام؟",
    answers: ["Apocalypse Now", "Platoon", "Full Metal Jacket", "The Deer Hunter"],
    correct: 0,
    category: "movies",
    difficulty: "hard"
},
{
    question: "من أخرج فيلم The Shining؟",
    answers: ["Stanley Kubrick", "Alfred Hitchcock", "David Lynch", "Roman Polanski"],
    correct: 0,
    category: "movies",
    difficulty: "hard"
},
{
    question: "من قام بدور Jack Torrance في The Shining؟",
    answers: ["Jack Nicholson", "Anthony Hopkins", "Dustin Hoffman", "Gene Hackman"],
    correct: 0,
    category: "movies",
    difficulty: "hard"
},
{
    question: "ما اسم الفندق في فيلم The Shining؟",
    answers: ["Overlook Hotel", "Bates Motel", "Grand Hotel", "Mountain Hotel"],
    correct: 0,
    category: "movies",
    difficulty: "hard"
},
{
    question: "من أخرج فيلم Fight Club؟",
    answers: ["David Fincher", "Christopher Nolan", "Quentin Tarantino", "Denis Villeneuve"],
    correct: 0,
    category: "movies",
    difficulty: "hard"
},
{
    question: "من أدى شخصية Tyler Durden في Fight Club؟",
    answers: ["Brad Pitt", "Edward Norton", "Christian Bale", "Jared Leto"],
    correct: 0,
    category: "movies",
    difficulty: "hard"
},
{
    question: "ما اسم المسلسل الذي سبق Breaking Bad زمنيًا ويحكي قصة Saul Goodman؟",
    answers: ["Better Call Saul", "El Camino", "Ozark", "Narcos"],
    correct: 0,
    category: "movies",
    difficulty: "hard"
},
{
    question: "ما اسم الفيلم الذي يمثل خاتمة قصة Jesse Pinkman بعد Breaking Bad؟",
    answers: ["El Camino", "Better Call Saul", "The Road", "Breaking Free"],
    correct: 0,
    category: "movies",
    difficulty: "hard"
},
{
    question: "ما اسم المسلسل الذي تدور أحداثه حول السفر عبر الزمن في مدينة Winden؟",
    answers: ["Dark", "1899", "Stranger Things", "Bodies"],
    correct: 0,
    category: "movies",
    difficulty: "hard"
},
{
    question: "من الدولة التي أنتجت مسلسل Dark؟",
    answers: ["ألمانيا", "النمسا", "سويسرا", "هولندا"],
    correct: 0,
    category: "movies",
    difficulty: "hard"
},
{
    question: "ما اسم المخرج الذي أخرج فيلم Oppenheimer؟",
    answers: ["Christopher Nolan", "Denis Villeneuve", "Greta Gerwig", "Damien Chazelle"],
    correct: 0,
    category: "movies",
    difficulty: "hard"
},
{
    question: "من أدى شخصية J. Robert Oppenheimer في فيلم Oppenheimer؟",
    answers: ["Cillian Murphy", "Matt Damon", "Robert Downey Jr.", "Christian Bale"],
    correct: 0,
    category: "movies",
    difficulty: "hard"
},
// ==================== 🎵 موسيقى — EASY (34) ====================

{
    question: "من يُلقب غالبًا بملك البوب؟",
    answers: ["Michael Jackson", "Elvis Presley", "Frank Sinatra", "Justin Bieber"],
    correct: 0,
    category: "music",
    difficulty: "easy"
},
{
    question: "ما اسم الفرقة التي تضم John Lennon وPaul McCartney؟",
    answers: ["The Beatles", "Queen", "ABBA", "Nirvana"],
    correct: 0,
    category: "music",
    difficulty: "easy"
},
{
    question: "ما اسم فرقة الروك التي غنى معها Freddie Mercury؟",
    answers: ["Queen", "The Beatles", "Coldplay", "Nirvana"],
    correct: 0,
    category: "music",
    difficulty: "easy"
},
{
    question: "من غنى أغنية Thriller؟",
    answers: ["Michael Jackson", "Elvis Presley", "Bruno Mars", "Ed Sheeran"],
    correct: 0,
    category: "music",
    difficulty: "easy"
},
{
    question: "ما اسم ألبوم Michael Jackson الشهير الذي يحتوي على Thriller؟",
    answers: ["Thriller", "Bad", "Dangerous", "Off the Wall"],
    correct: 0,
    category: "music",
    difficulty: "easy"
},
{
    question: "من غنى أغنية Shape of You؟",
    answers: ["Ed Sheeran", "Justin Timberlake", "Bruno Mars", "The Weeknd"],
    correct: 0,
    category: "music",
    difficulty: "easy"
},
{
    question: "من غنت أغنية Rolling in the Deep؟",
    answers: ["Adele", "Taylor Swift", "Rihanna", "Lady Gaga"],
    correct: 0,
    category: "music",
    difficulty: "easy"
},
{
    question: "من غنى أغنية Blinding Lights؟",
    answers: ["The Weeknd", "Drake", "Post Malone", "Bruno Mars"],
    correct: 0,
    category: "music",
    difficulty: "easy"
},
{
    question: "ما اسم المغنية التي اشتهرت بأغنية Bad Guy؟",
    answers: ["Billie Eilish", "Ariana Grande", "Dua Lipa", "Sia"],
    correct: 0,
    category: "music",
    difficulty: "easy"
},
{
    question: "من غنى أغنية Believer؟",
    answers: ["Imagine Dragons", "Coldplay", "Maroon 5", "OneRepublic"],
    correct: 0,
    category: "music",
    difficulty: "easy"
},
{
    question: "ما الآلة الموسيقية التي تحتوي عادةً على 88 مفتاحًا؟",
    answers: ["البيانو", "الجيتار", "الكمان", "الفلوت"],
    correct: 0,
    category: "music",
    difficulty: "easy"
},
{
    question: "أي آلة موسيقية تحتوي عادةً على ستة أوتار؟",
    answers: ["الجيتار", "البيانو", "الفلوت", "الترومبيت"],
    correct: 0,
    category: "music",
    difficulty: "easy"
},
{
    question: "ما اسم الآلة الموسيقية التي تُعزف بالقوس وتحتوي عادةً على أربعة أوتار؟",
    answers: ["الكمان", "البيانو", "الساكسفون", "الفلوت"],
    correct: 0,
    category: "music",
    difficulty: "easy"
},
{
    question: "من غنى أغنية Someone Like You؟",
    answers: ["Adele", "Rihanna", "Sia", "Beyoncé"],
    correct: 0,
    category: "music",
    difficulty: "easy"
},
{
    question: "من غنى أغنية Perfect؟",
    answers: ["Ed Sheeran", "Harry Styles", "Shawn Mendes", "Justin Bieber"],
    correct: 0,
    category: "music",
    difficulty: "easy"
},
{
    question: "ما اسم الفرقة التي غنت أغنية Viva La Vida؟",
    answers: ["Coldplay", "Queen", "U2", "Maroon 5"],
    correct: 0,
    category: "music",
    difficulty: "easy"
},
{
    question: "من غنت أغنية Poker Face؟",
    answers: ["Lady Gaga", "Katy Perry", "Adele", "Taylor Swift"],
    correct: 0,
    category: "music",
    difficulty: "easy"
},
{
    question: "من غنى أغنية Uptown Funk بالتعاون مع Mark Ronson؟",
    answers: ["Bruno Mars", "The Weeknd", "Drake", "Usher"],
    correct: 0,
    category: "music",
    difficulty: "easy"
},
{
    question: "من غنى أغنية Gangnam Style؟",
    answers: ["PSY", "Rain", "G-Dragon", "Taeyang"],
    correct: 0,
    category: "music",
    difficulty: "easy"
},
{
    question: "ما اسم الفرقة التي اشتهرت بأغنية Smells Like Teen Spirit؟",
    answers: ["Nirvana", "Metallica", "Green Day", "Linkin Park"],
    correct: 0,
    category: "music",
    difficulty: "easy"
},
{
    question: "من كان المغني الرئيسي لفرقة Nirvana؟",
    answers: ["Kurt Cobain", "Dave Grohl", "Eddie Vedder", "Chester Bennington"],
    correct: 0,
    category: "music",
    difficulty: "easy"
},
{
    question: "ما اسم الفرقة التي اشتهرت بأغنية We Will Rock You؟",
    answers: ["Queen", "The Beatles", "ABBA", "Bon Jovi"],
    correct: 0,
    category: "music",
    difficulty: "easy"
},
{
    question: "من كان المغني الرئيسي لفرقة Queen؟",
    answers: ["Freddie Mercury", "David Bowie", "Elton John", "Mick Jagger"],
    correct: 0,
    category: "music",
    difficulty: "easy"
},
{
    question: "ما اسم الفرقة التي اشتهرت بأغنية Mamma Mia؟",
    answers: ["ABBA", "Queen", "Bee Gees", "A-ha"],
    correct: 0,
    category: "music",
    difficulty: "easy"
},
{
    question: "من غنى أغنية Havana؟",
    answers: ["Camila Cabello", "Selena Gomez", "Dua Lipa", "Ariana Grande"],
    correct: 0,
    category: "music",
    difficulty: "easy"
},
{
    question: "من غنت أغنية Waka Waka؟",
    answers: ["Shakira", "Rihanna", "Beyoncé", "Jennifer Lopez"],
    correct: 0,
    category: "music",
    difficulty: "easy"
},
{
    question: "من غنى أغنية Stay؟",
    answers: ["The Kid LAROI وJustin Bieber", "Drake وRihanna", "Ed Sheeran وAdele", "Bruno Mars وAriana Grande"],
    correct: 0,
    category: "music",
    difficulty: "easy"
},
{
    question: "من غنى أغنية Despacito مع Luis Fonsi؟",
    answers: ["Daddy Yankee", "Bad Bunny", "J Balvin", "Maluma"],
    correct: 0,
    category: "music",
    difficulty: "easy"
},
{
    question: "ما اسم الفنان الذي اشتهر بأغنية As It Was؟",
    answers: ["Harry Styles", "Shawn Mendes", "Ed Sheeran", "Justin Bieber"],
    correct: 0,
    category: "music",
    difficulty: "easy"
},
{
    question: "من غنت أغنية Firework؟",
    answers: ["Katy Perry", "Lady Gaga", "Adele", "Rihanna"],
    correct: 0,
    category: "music",
    difficulty: "easy"
},
{
    question: "من غنى أغنية Sorry؟",
    answers: ["Justin Bieber", "Bruno Mars", "Drake", "The Weeknd"],
    correct: 0,
    category: "music",
    difficulty: "easy"
},
{
    question: "ما اسم الآلة النحاسية التي تتميز بصوت قوي وواضح؟",
    answers: ["الترومبيت", "الكمان", "البيانو", "العود"],
    correct: 0,
    category: "music",
    difficulty: "easy"
},
{
    question: "أي آلة موسيقية تُعزف بالنفخ وتحتوي غالبًا على مفاتيح؟",
    answers: ["الساكسفون", "الكمان", "الجيتار", "الطبلة"],
    correct: 0,
    category: "music",
    difficulty: "easy"
},
{
    question: "ما اسم الشخص الذي يقود الأوركسترا؟",
    answers: ["قائد الأوركسترا", "الملحن فقط", "عازف البيانو", "المغني"],
    correct: 0,
    category: "music",
    difficulty: "easy"
},


// ==================== 🎵 موسيقى — MEDIUM (33) ====================

{
    question: "ما اسم ألبوم The Beatles الذي يحتوي على أغنية Come Together؟",
    answers: ["Abbey Road", "Let It Be", "Revolver", "Help!"],
    correct: 0,
    category: "music",
    difficulty: "medium"
},
{
    question: "ما اسم ألبوم Michael Jackson الذي صدر عام 1982 وحقق نجاحًا ضخمًا؟",
    answers: ["Thriller", "Bad", "Dangerous", "HIStory"],
    correct: 0,
    category: "music",
    difficulty: "medium"
},
{
    question: "من أنتج ألبوم Thriller مع Michael Jackson؟",
    answers: ["Quincy Jones", "Rick Rubin", "Dr. Dre", "George Martin"],
    correct: 0,
    category: "music",
    difficulty: "medium"
},
{
    question: "أي فرقة ارتبط بها المنتج George Martin بشكل كبير؟",
    answers: ["The Beatles", "Queen", "Nirvana", "ABBA"],
    correct: 0,
    category: "music",
    difficulty: "medium"
},
{
    question: "من كان عازف الجيتار الرئيسي في The Beatles؟",
    answers: ["George Harrison", "John Lennon", "Paul McCartney", "Ringo Starr"],
    correct: 0,
    category: "music",
    difficulty: "medium"
},
{
    question: "من كان عازف الطبول في The Beatles؟",
    answers: ["Ringo Starr", "George Harrison", "Paul McCartney", "John Lennon"],
    correct: 0,
    category: "music",
    difficulty: "medium"
},
{
    question: "أي عضو من The Beatles كان يعزف غالبًا على البيس؟",
    answers: ["Paul McCartney", "John Lennon", "George Harrison", "Ringo Starr"],
    correct: 0,
    category: "music",
    difficulty: "medium"
},
{
    question: "ما اسم الألبوم الذي يحتوي على أغنية Bohemian Rhapsody؟",
    answers: ["A Night at the Opera", "News of the World", "The Game", "Sheer Heart Attack"],
    correct: 0,
    category: "music",
    difficulty: "medium"
},
{
    question: "ما اسم أغنية Queen التي تحتوي على مقطع أوبرالي شهير؟",
    answers: ["Bohemian Rhapsody", "We Will Rock You", "Don't Stop Me Now", "Radio Ga Ga"],
    correct: 0,
    category: "music",
    difficulty: "medium"
},
{
    question: "من كتب وأدى أغنية Purple Rain؟",
    answers: ["Prince", "David Bowie", "Elton John", "George Michael"],
    correct: 0,
    category: "music",
    difficulty: "medium"
},
{
    question: "ما اسم الفنان الذي كان يُعرف بلقب The King of Rock and Roll؟",
    answers: ["Elvis Presley", "Chuck Berry", "Little Richard", "Johnny Cash"],
    correct: 0,
    category: "music",
    difficulty: "medium"
},
{
    question: "ما اسم الفرقة التي تضم Bono كمغنٍ رئيسي؟",
    answers: ["U2", "Oasis", "Coldplay", "Radiohead"],
    correct: 0,
    category: "music",
    difficulty: "medium"
},
{
    question: "ما اسم المغني الرئيسي لفرقة U2؟",
    answers: ["Bono", "Sting", "Chris Martin", "Dave Grohl"],
    correct: 0,
    category: "music",
    difficulty: "medium"
},
{
    question: "ما اسم فرقة Chris Martin؟",
    answers: ["Coldplay", "Maroon 5", "Oasis", "Muse"],
    correct: 0,
    category: "music",
    difficulty: "medium"
},
{
    question: "من المغني الرئيسي لفرقة Maroon 5؟",
    answers: ["Adam Levine", "Chris Martin", "Brandon Flowers", "Sam Smith"],
    correct: 0,
    category: "music",
    difficulty: "medium"
},
{
    question: "من غنى أغنية Chandelier؟",
    answers: ["Sia", "Adele", "Lorde", "Dua Lipa"],
    correct: 0,
    category: "music",
    difficulty: "medium"
},
{
    question: "من غنت أغنية Royals؟",
    answers: ["Lorde", "Sia", "Adele", "Billie Eilish"],
    correct: 0,
    category: "music",
    difficulty: "medium"
},
{
    question: "من غنت أغنية Umbrella؟",
    answers: ["Rihanna", "Beyoncé", "Alicia Keys", "Nicki Minaj"],
    correct: 0,
    category: "music",
    difficulty: "medium"
},
{
    question: "من غنت أغنية Halo؟",
    answers: ["Beyoncé", "Rihanna", "Adele", "Katy Perry"],
    correct: 0,
    category: "music",
    difficulty: "medium"
},
{
    question: "ما اسم المغنية التي أصدرت ألبوم 1989؟",
    answers: ["Taylor Swift", "Ariana Grande", "Selena Gomez", "Katy Perry"],
    correct: 0,
    category: "music",
    difficulty: "medium"
},
{
    question: "ما اسم ألبوم Taylor Swift الذي يحتوي على أغنية Blank Space؟",
    answers: ["1989", "Red", "Reputation", "Lover"],
    correct: 0,
    category: "music",
    difficulty: "medium"
},
{
    question: "من غنى أغنية Circles؟",
    answers: ["Post Malone", "Drake", "Travis Scott", "The Weeknd"],
    correct: 0,
    category: "music",
    difficulty: "medium"
},
{
    question: "من غنى أغنية God's Plan؟",
    answers: ["Drake", "Future", "Post Malone", "Kendrick Lamar"],
    correct: 0,
    category: "music",
    difficulty: "medium"
},
{
    question: "من غنى أغنية HUMBLE.؟",
    answers: ["Kendrick Lamar", "Drake", "J. Cole", "Travis Scott"],
    correct: 0,
    category: "music",
    difficulty: "medium"
},
{
    question: "من غنى أغنية Lose Yourself؟",
    answers: ["Eminem", "50 Cent", "Dr. Dre", "Snoop Dogg"],
    correct: 0,
    category: "music",
    difficulty: "medium"
},
{
    question: "ما اسم فرقة الروك التي اشتهرت بأغنية In the End؟",
    answers: ["Linkin Park", "Green Day", "Nirvana", "Muse"],
    correct: 0,
    category: "music",
    difficulty: "medium"
},
{
    question: "من كان المغني الرئيسي لفرقة Linkin Park؟",
    answers: ["Chester Bennington", "Mike Shinoda", "Dave Grohl", "Corey Taylor"],
    correct: 0,
    category: "music",
    difficulty: "medium"
},
{
    question: "ما اسم الفرقة التي غنت أغنية Hotel California؟",
    answers: ["Eagles", "The Doors", "Bon Jovi", "Aerosmith"],
    correct: 0,
    category: "music",
    difficulty: "medium"
},
{
    question: "ما اسم الفرقة التي غنت أغنية Sweet Child o' Mine؟",
    answers: ["Guns N' Roses", "Metallica", "Aerosmith", "AC/DC"],
    correct: 0,
    category: "music",
    difficulty: "medium"
},
{
    question: "ما اسم المغني الرئيسي لفرقة Guns N' Roses؟",
    answers: ["Axl Rose", "Slash", "James Hetfield", "Kirk Hammett"],
    correct: 0,
    category: "music",
    difficulty: "medium"
},
{
    question: "من اشتهر باستخدام آلة البوق وكان من أهم موسيقيي الجاز؟",
    answers: ["Louis Armstrong", "Bob Dylan", "Elvis Presley", "Freddie Mercury"],
    correct: 0,
    category: "music",
    difficulty: "medium"
},
{
    question: "أي نوع موسيقي ارتبط بشكل كبير بـ Louis Armstrong؟",
    answers: ["Jazz", "Heavy Metal", "Disco", "Reggae"],
    correct: 0,
    category: "music",
    difficulty: "medium"
},
{
    question: "ما اسم الجائزة الموسيقية الأمريكية الشهيرة التي تمنحها Recording Academy؟",
    answers: ["Grammy Awards", "Oscar Awards", "Emmy Awards", "Tony Awards"],
    correct: 0,
    category: "music",
    difficulty: "medium"
},


// ==================== 🎵 موسيقى — HARD (33) ====================

{
    question: "ما اسم أول ألبوم لـ The Beatles تصدر قائمة Billboard 200؟",
    answers: ["Meet The Beatles!", "Please Please Me", "A Hard Day's Night", "Rubber Soul"],
    correct: 0,
    category: "music",
    difficulty: "hard"
},
{
    question: "في أي مدينة تأسست فرقة The Beatles؟",
    answers: ["Liverpool", "London", "Manchester", "Birmingham"],
    correct: 0,
    category: "music",
    difficulty: "hard"
},
{
    question: "ما اسم الألبوم الأخير الذي سجله The Beatles كفرقة قبل انفصالهم؟",
    answers: ["Abbey Road", "Let It Be", "The Beatles", "Magical Mystery Tour"],
    correct: 0,
    category: "music",
    difficulty: "hard"
},
{
    question: "ما اسم الألبوم المعروف باسم The White Album؟",
    answers: ["The Beatles", "Abbey Road", "Revolver", "Sgt. Pepper's Lonely Hearts Club Band"],
    correct: 0,
    category: "music",
    difficulty: "hard"
},
{
    question: "ما اسم ألبوم The Beatles الذي يحتوي على أغنية Eleanor Rigby؟",
    answers: ["Revolver", "Rubber Soul", "Abbey Road", "Help!"],
    correct: 0,
    category: "music",
    difficulty: "hard"
},
{
    question: "ما اسم الألبوم الذي يحتوي على أغنية A Day in the Life؟",
    answers: ["Sgt. Pepper's Lonely Hearts Club Band", "Revolver", "Abbey Road", "Let It Be"],
    correct: 0,
    category: "music",
    difficulty: "hard"
},
{
    question: "ما اسم المنتج الذي ارتبط بإنتاج معظم أعمال The Beatles؟",
    answers: ["George Martin", "Quincy Jones", "Phil Spector", "Rick Rubin"],
    correct: 0,
    category: "music",
    difficulty: "hard"
},
{
    question: "كم عدد أعضاء The Beatles الأساسيين في التشكيلة الشهيرة؟",
    answers: ["4", "3", "5", "6"],
    correct: 0,
    category: "music",
    difficulty: "hard"
},
{
    question: "ما اسم العضو الذي كتب أغنية While My Guitar Gently Weeps؟",
    answers: ["George Harrison", "John Lennon", "Paul McCartney", "Ringo Starr"],
    correct: 0,
    category: "music",
    difficulty: "hard"
},
{
    question: "من عزف منفرد الجيتار الشهير في While My Guitar Gently Weeps؟",
    answers: ["Eric Clapton", "Jimi Hendrix", "David Gilmour", "Brian May"],
    correct: 0,
    category: "music",
    difficulty: "hard"
},
{
    question: "من كتب أغنية Imagine؟",
    answers: ["John Lennon", "Paul McCartney", "George Harrison", "David Bowie"],
    correct: 0,
    category: "music",
    difficulty: "hard"
},
{
    question: "ما اسم الألبوم الذي يحتوي على أغنية Imagine؟",
    answers: ["Imagine", "John Lennon/Plastic Ono Band", "Walls and Bridges", "Mind Games"],
    correct: 0,
    category: "music",
    difficulty: "hard"
},
{
    question: "من عازف الجيتار الذي اشتهر بأغنية Purple Haze؟",
    answers: ["Jimi Hendrix", "Eric Clapton", "Jimmy Page", "Jeff Beck"],
    correct: 0,
    category: "music",
    difficulty: "hard"
},
{
    question: "ما اسم الفرقة التي كان Jimmy Page عضوًا فيها؟",
    answers: ["Led Zeppelin", "Deep Purple", "Black Sabbath", "The Who"],
    correct: 0,
    category: "music",
    difficulty: "hard"
},
{
    question: "ما اسم المغني الرئيسي لفرقة Led Zeppelin؟",
    answers: ["Robert Plant", "Jimmy Page", "Roger Daltrey", "Ozzy Osbourne"],
    correct: 0,
    category: "music",
    difficulty: "hard"
},
{
    question: "ما اسم فرقة Ozzy Osbourne الأصلية؟",
    answers: ["Black Sabbath", "Deep Purple", "Iron Maiden", "Judas Priest"],
    correct: 0,
    category: "music",
    difficulty: "hard"
},
{
    question: "ما اسم الألبوم الشهير لـ Pink Floyd الذي يحتوي على أغنية Money؟",
    answers: ["The Dark Side of the Moon", "The Wall", "Wish You Were Here", "Animals"],
    correct: 0,
    category: "music",
    difficulty: "hard"
},
{
    question: "ما اسم الفرقة التي أصدرت ألبوم The Dark Side of the Moon؟",
    answers: ["Pink Floyd", "Genesis", "Yes", "King Crimson"],
    correct: 0,
    category: "music",
    difficulty: "hard"
},
{
    question: "من كتب وأدى أغنية Space Oddity؟",
    answers: ["David Bowie", "Elton John", "Freddie Mercury", "Peter Gabriel"],
    correct: 0,
    category: "music",
    difficulty: "hard"
},
{
    question: "ما اسم الشخصية التي تظهر في أغنية Space Oddity؟",
    answers: ["Major Tom", "Captain Jack", "Major John", "Commander Tom"],
    correct: 0,
    category: "music",
    difficulty: "hard"
},
{
    question: "من ألّف السمفونية الخامسة الشهيرة؟",
    answers: ["Ludwig van Beethoven", "Mozart", "Bach", "Chopin"],
    correct: 0,
    category: "music",
    difficulty: "hard"
},
{
    question: "أي مؤلف موسيقي ألّف Eine kleine Nachtmusik؟",
    answers: ["Wolfgang Amadeus Mozart", "Beethoven", "Bach", "Vivaldi"],
    correct: 0,
    category: "music",
    difficulty: "hard"
},
{
    question: "من ألّف Four Seasons؟",
    answers: ["Antonio Vivaldi", "Mozart", "Beethoven", "Bach"],
    correct: 0,
    category: "music",
    difficulty: "hard"
},
{
    question: "ما الآلة التي اشتهر بها Yo-Yo Ma؟",
    answers: ["التشيللو", "الكمان", "البيانو", "الفلوت"],
    correct: 0,
    category: "music",
    difficulty: "hard"
},
{
    question: "ما اسم الجائزة التي تُمنح لأفضل ألبوم في فئة Album of the Year؟",
    answers: ["Grammy Award", "Oscar", "Emmy", "BAFTA"],
    correct: 0,
    category: "music",
    difficulty: "hard"
},
{
    question: "من أصبح أول فنان يفوز بثماني جوائز Grammy في ليلة واحدة؟",
    answers: ["Michael Jackson", "The Beatles", "Prince", "Stevie Wonder"],
    correct: 0,
    category: "music",
    difficulty: "hard"
},
{
    question: "في أي عام حقق Michael Jackson فوزه التاريخي بثماني جوائز Grammy في ليلة واحدة؟",
    answers: ["1984", "1982", "1985", "1988"],
    correct: 0,
    category: "music",
    difficulty: "hard"
},
{
    question: "ما اسم الألبوم الذي فاز بـ Album of the Year في ليلة جوائز Grammy التاريخية لـ Michael Jackson عام 1984؟",
    answers: ["Thriller", "Bad", "Off the Wall", "Dangerous"],
    correct: 0,
    category: "music",
    difficulty: "hard"
},
{
    question: "ما اسم الأغنية التي فازت لـ Michael Jackson بجائزة Record of the Year في Grammy عام 1984؟",
    answers: ["Beat It", "Billie Jean", "Thriller", "Man in the Mirror"],
    correct: 0,
    category: "music",
    difficulty: "hard"
},
{
    question: "ما اسم الأغنية التي فازت لـ Michael Jackson بجائزة Male R&B Vocal Performance في Grammy عام 1984؟",
    answers: ["Billie Jean", "Beat It", "Thriller", "Bad"],
    correct: 0,
    category: "music",
    difficulty: "hard"
},
{
    question: "كم عدد جوائز Grammy التي فاز بها The Beatles وفق سجل Recording Academy؟",
    answers: ["8", "6", "10", "12"],
    correct: 0,
    category: "music",
    difficulty: "hard"
},
{
    question: "كم عدد جوائز Grammy التي فاز بها Michael Jackson وفق سجل Recording Academy؟",
    answers: ["13", "8", "11", "15"],
    correct: 0,
    category: "music",
    difficulty: "hard"
},
{
    question: "ما اسم أول أغنية لـ The Beatles وصلت إلى المركز الأول على Billboard Hot 100 في الولايات المتحدة؟",
    answers: ["I Want to Hold Your Hand", "Yesterday", "Hey Jude", "Let It Be"],
    correct: 0,
    category: "music",
    difficulty: "hard"
},
// ==================== 🇬🇧 ENGLISH — EASY (34) ====================

{
    question: "Choose the correct sentence.",
    answers: [
        "She goes to school every day.",
        "She go to school every day.",
        "She going to school every day.",
        "She gone to school every day."
    ],
    correct: 0,
    category: "english",
    difficulty: "easy"
},
{
    question: "What is the past tense of 'go'?",
    answers: ["Went", "Goed", "Gone", "Going"],
    correct: 0,
    category: "english",
    difficulty: "easy"
},
{
    question: "Choose the correct word: 'I ___ a student.'",
    answers: ["am", "is", "are", "be"],
    correct: 0,
    category: "english",
    difficulty: "easy"
},
{
    question: "Choose the correct sentence.",
    answers: [
        "They are playing football.",
        "They is playing football.",
        "They playing football.",
        "They are play football."
    ],
    correct: 0,
    category: "english",
    difficulty: "easy"
},
{
    question: "What is the opposite of 'hot'?",
    answers: ["Cold", "Warm", "Big", "Fast"],
    correct: 0,
    category: "english",
    difficulty: "easy"
},
{
    question: "What is the opposite of 'big'?",
    answers: ["Small", "Tall", "Long", "Wide"],
    correct: 0,
    category: "english",
    difficulty: "easy"
},
{
    question: "Choose the correct article: 'I saw ___ elephant.'",
    answers: ["an", "a", "the", "some"],
    correct: 0,
    category: "english",
    difficulty: "easy"
},
{
    question: "Choose the correct article: 'She has ___ cat.'",
    answers: ["a", "an", "some", "any"],
    correct: 0,
    category: "english",
    difficulty: "easy"
},
{
    question: "What is the plural of 'child'?",
    answers: ["Children", "Childs", "Childes", "Childrens"],
    correct: 0,
    category: "english",
    difficulty: "easy"
},
{
    question: "What is the plural of 'mouse'?",
    answers: ["Mice", "Mouses", "Mices", "Mouse"],
    correct: 0,
    category: "english",
    difficulty: "easy"
},
{
    question: "Choose the correct form: 'He ___ football every Friday.'",
    answers: ["plays", "play", "playing", "played"],
    correct: 0,
    category: "english",
    difficulty: "easy"
},
{
    question: "Choose the correct form: 'We ___ TV last night.'",
    answers: ["watched", "watch", "watches", "watching"],
    correct: 0,
    category: "english",
    difficulty: "easy"
},
{
    question: "What is the opposite of 'early'?",
    answers: ["Late", "Fast", "Slow", "Near"],
    correct: 0,
    category: "english",
    difficulty: "easy"
},
{
    question: "What is the opposite of 'easy'?",
    answers: ["Difficult", "Simple", "Quick", "Short"],
    correct: 0,
    category: "english",
    difficulty: "easy"
},
{
    question: "Choose the correct pronoun: 'Ahmed is my friend. ___ is kind.'",
    answers: ["He", "She", "It", "They"],
    correct: 0,
    category: "english",
    difficulty: "easy"
},
{
    question: "Choose the correct pronoun: 'Sara is my sister. ___ is 15.'",
    answers: ["She", "He", "It", "They"],
    correct: 0,
    category: "english",
    difficulty: "easy"
},
{
    question: "Choose the correct possessive: 'This is ___ book.'",
    answers: ["my", "I", "me", "mine"],
    correct: 0,
    category: "english",
    difficulty: "easy"
},
{
    question: "Choose the correct word: 'This book is ___. It belongs to me.'",
    answers: ["mine", "my", "me", "I"],
    correct: 0,
    category: "english",
    difficulty: "easy"
},
{
    question: "Choose the correct preposition: 'The book is ___ the table.'",
    answers: ["on", "at", "to", "by"],
    correct: 0,
    category: "english",
    difficulty: "easy"
},
{
    question: "Choose the correct preposition: 'I wake up ___ 7 o'clock.'",
    answers: ["at", "on", "in", "by"],
    correct: 0,
    category: "english",
    difficulty: "easy"
},
{
    question: "Choose the correct word: 'There ___ two books on the desk.'",
    answers: ["are", "is", "am", "be"],
    correct: 0,
    category: "english",
    difficulty: "easy"
},
{
    question: "Choose the correct word: 'There ___ a pen in my bag.'",
    answers: ["is", "are", "am", "be"],
    correct: 0,
    category: "english",
    difficulty: "easy"
},
{
    question: "What is the comparative form of 'fast'?",
    answers: ["Faster", "Fastest", "More fast", "Fastly"],
    correct: 0,
    category: "english",
    difficulty: "easy"
},
{
    question: "What is the superlative form of 'small'?",
    answers: ["Smallest", "Smaller", "Most small", "More small"],
    correct: 0,
    category: "english",
    difficulty: "easy"
},
{
    question: "Choose the correct sentence.",
    answers: [
        "I can swim.",
        "I can to swim.",
        "I can swimming.",
        "I can swims."
    ],
    correct: 0,
    category: "english",
    difficulty: "easy"
},
{
    question: "Choose the correct word: 'You ___ wear a seat belt.'",
    answers: ["must", "can", "are", "does"],
    correct: 0,
    category: "english",
    difficulty: "easy"
},
{
    question: "What is the past tense of 'eat'?",
    answers: ["Ate", "Eated", "Eating", "Eats"],
    correct: 0,
    category: "english",
    difficulty: "easy"
},
{
    question: "What is the past tense of 'see'?",
    answers: ["Saw", "Seed", "Seen", "Seeing"],
    correct: 0,
    category: "english",
    difficulty: "easy"
},
{
    question: "Choose the correct question.",
    answers: [
        "Where do you live?",
        "Where you do live?",
        "Where does you live?",
        "Where living you?"
    ],
    correct: 0,
    category: "english",
    difficulty: "easy"
},
{
    question: "Choose the correct question.",
    answers: [
        "Does he play football?",
        "Do he play football?",
        "Does he plays football?",
        "He does play football?"
    ],
    correct: 0,
    category: "english",
    difficulty: "easy"
},
{
    question: "Choose the correct word: 'I have ___ apples.'",
    answers: ["some", "any", "much", "a"],
    correct: 0,
    category: "english",
    difficulty: "easy"
},
{
    question: "Choose the correct word: 'There isn't ___ milk.'",
    answers: ["any", "many", "a few", "an"],
    correct: 0,
    category: "english",
    difficulty: "easy"
},
{
    question: "What does 'happy' mean?",
    answers: ["Feeling good", "Feeling angry", "Feeling tired", "Feeling afraid"],
    correct: 0,
    category: "english",
    difficulty: "easy"
},
{
    question: "What does 'quick' mean?",
    answers: ["Fast", "Slow", "Heavy", "Quiet"],
    correct: 0,
    category: "english",
    difficulty: "easy"
},


// ==================== 🇬🇧 ENGLISH — MEDIUM (33) ====================

{
    question: "Choose the correct sentence.",
    answers: [
        "I have lived here for five years.",
        "I live here since five years.",
        "I am lived here for five years.",
        "I have live here since five years."
    ],
    correct: 0,
    category: "english",
    difficulty: "medium"
},
{
    question: "Choose the correct answer: 'She ___ her homework yesterday.'",
    answers: ["finished", "has finished", "finishes", "finishing"],
    correct: 0,
    category: "english",
    difficulty: "medium"
},
{
    question: "Choose the correct answer: 'I ___ never ___ sushi.'",
    answers: ["have / eaten", "did / ate", "am / eating", "has / eat"],
    correct: 0,
    category: "english",
    difficulty: "medium"
},
{
    question: "Choose the correct sentence.",
    answers: [
        "I have already finished my homework.",
        "I already finish my homework.",
        "I have finish already my homework.",
        "I did already finished my homework."
    ],
    correct: 0,
    category: "english",
    difficulty: "medium"
},
{
    question: "Choose the correct word: 'She has lived here ___ 2020.'",
    answers: ["since", "for", "during", "from"],
    correct: 0,
    category: "english",
    difficulty: "medium"
},
{
    question: "Choose the correct word: 'We have waited ___ two hours.'",
    answers: ["for", "since", "at", "from"],
    correct: 0,
    category: "english",
    difficulty: "medium"
},
{
    question: "Choose the correct sentence.",
    answers: [
        "If it rains, I will stay home.",
        "If it will rain, I stay home.",
        "If it rains, I would stayed home.",
        "If it raining, I will stay home."
    ],
    correct: 0,
    category: "english",
    difficulty: "medium"
},
{
    question: "Choose the correct second conditional sentence.",
    answers: [
        "If I had more money, I would travel.",
        "If I have more money, I will travel.",
        "If I had more money, I will traveled.",
        "If I having more money, I would travel."
    ],
    correct: 0,
    category: "english",
    difficulty: "medium"
},
{
    question: "Choose the correct comparative.",
    answers: ["This test is easier than the last one.", "This test is more easy than the last one.", "This test is easiest than the last one.", "This test is easy than the last one."],
    correct: 0,
    category: "english",
    difficulty: "medium"
},
{
    question: "Choose the correct superlative.",
    answers: [
        "She is the most intelligent student in the class.",
        "She is more intelligent student in the class.",
        "She is the intelligentest student in the class.",
        "She is most intelligent than the class."
    ],
    correct: 0,
    category: "english",
    difficulty: "medium"
},
{
    question: "Choose the correct form: 'I enjoy ___ books.'",
    answers: ["reading", "to read", "read", "reads"],
    correct: 0,
    category: "english",
    difficulty: "medium"
},
{
    question: "Choose the correct form: 'I decided ___ early.'",
    answers: ["to leave", "leaving", "leave", "left"],
    correct: 0,
    category: "english",
    difficulty: "medium"
},
{
    question: "Choose the correct form: 'She suggested ___ a taxi.'",
    answers: ["taking", "to take", "take", "took"],
    correct: 0,
    category: "english",
    difficulty: "medium"
},
{
    question: "Choose the correct passive sentence.",
    answers: [
        "The window was broken by the boy.",
        "The window broke by the boy.",
        "The window was break by the boy.",
        "The window is broke by the boy."
    ],
    correct: 0,
    category: "english",
    difficulty: "medium"
},
{
    question: "Choose the correct reported speech: He said, 'I am tired.'",
    answers: [
        "He said that he was tired.",
        "He said that I am tired.",
        "He said that he is tired yesterday.",
        "He said he were tired."
    ],
    correct: 0,
    category: "english",
    difficulty: "medium"
},
{
    question: "Choose the correct relative pronoun: 'The man ___ lives next door is a doctor.'",
    answers: ["who", "which", "where", "whose"],
    correct: 0,
    category: "english",
    difficulty: "medium"
},
{
    question: "Choose the correct relative pronoun: 'The book ___ I bought was expensive.'",
    answers: ["which", "who", "where", "whose"],
    correct: 0,
    category: "english",
    difficulty: "medium"
},
{
    question: "Choose the correct modal: 'You ___ study for the exam.'",
    answers: ["should", "would", "might", "could"],
    correct: 0,
    category: "english",
    difficulty: "medium"
},
{
    question: "Choose the correct form: 'He ___ be at home; the lights are on.'",
    answers: ["must", "can't", "shouldn't", "wouldn't"],
    correct: 0,
    category: "english",
    difficulty: "medium"
},
{
    question: "Choose the correct word: 'There are ___ students in the classroom.'",
    answers: ["many", "much", "little", "any"],
    correct: 0,
    category: "english",
    difficulty: "medium"
},
{
    question: "Choose the correct word: 'There isn't ___ water left.'",
    answers: ["much", "many", "few", "a few"],
    correct: 0,
    category: "english",
    difficulty: "medium"
},
{
    question: "Choose the correct sentence.",
    answers: [
        "She used to play tennis.",
        "She use to played tennis.",
        "She used play tennis.",
        "She uses to play tennis."
    ],
    correct: 0,
    category: "english",
    difficulty: "medium"
},
{
    question: "Choose the correct question tag: 'You are coming, ___?'",
    answers: ["aren't you", "are you", "isn't you", "don't you"],
    correct: 0,
    category: "english",
    difficulty: "medium"
},
{
    question: "Choose the correct preposition: 'She is interested ___ science.'",
    answers: ["in", "on", "at", "for"],
    correct: 0,
    category: "english",
    difficulty: "medium"
},
{
    question: "Choose the correct preposition: 'He is good ___ mathematics.'",
    answers: ["at", "in", "on", "for"],
    correct: 0,
    category: "english",
    difficulty: "medium"
},
{
    question: "Choose the correct phrasal verb: 'Please ___ the lights before leaving.'",
    answers: ["turn off", "turn up", "turn into", "turn over"],
    correct: 0,
    category: "english",
    difficulty: "medium"
},
{
    question: "What does 'give up' mean?",
    answers: ["Stop trying", "Start again", "Move faster", "Give something temporarily"],
    correct: 0,
    category: "english",
    difficulty: "medium"
},
{
    question: "What is the opposite of 'generous'?",
    answers: ["Selfish", "Friendly", "Honest", "Brave"],
    correct: 0,
    category: "english",
    difficulty: "medium"
},
{
    question: "What is the closest meaning of 'rapid'?",
    answers: ["Fast", "Weak", "Quiet", "Difficult"],
    correct: 0,
    category: "english",
    difficulty: "medium"
},
{
    question: "Choose the correct sentence.",
    answers: [
        "Neither John nor Ali is here.",
        "Neither John nor Ali are here.",
        "Neither John or Ali is here.",
        "Neither John nor Ali be here."
    ],
    correct: 0,
    category: "english",
    difficulty: "medium"
},
{
    question: "Choose the correct conjunction: 'I stayed home ___ I was sick.'",
    answers: ["because", "although", "unless", "while"],
    correct: 0,
    category: "english",
    difficulty: "medium"
},
{
    question: "Choose the correct form: 'She is ___ than her brother.'",
    answers: ["taller", "more tall", "tallest", "most tall"],
    correct: 0,
    category: "english",
    difficulty: "medium"
},
{
    question: "Choose the correct sentence.",
    answers: [
        "I have been studying for three hours.",
        "I have studying for three hours.",
        "I am been studying for three hours.",
        "I had been study for three hours."
    ],
    correct: 0,
    category: "english",
    difficulty: "medium"
},


// ==================== 🇬🇧 ENGLISH — HARD (33) ====================

{
    question: "Choose the correct third conditional sentence.",
    answers: [
        "If I had studied harder, I would have passed the exam.",
        "If I studied harder, I would pass the exam.",
        "If I had study harder, I would passed the exam.",
        "If I have studied harder, I would have pass the exam."
    ],
    correct: 0,
    category: "english",
    difficulty: "hard"
},
{
    question: "Choose the correct sentence.",
    answers: [
        "By the time we arrived, the film had started.",
        "By the time we arrived, the film has started.",
        "By the time we arrive, the film had started yesterday.",
        "By the time we arrived, the film starting."
    ],
    correct: 0,
    category: "english",
    difficulty: "hard"
},
{
    question: "Choose the correct form: 'She wishes she ___ taller.'",
    answers: ["were", "is", "will be", "has been"],
    correct: 0,
    category: "english",
    difficulty: "hard"
},
{
    question: "Choose the correct form: 'I wish I ___ more time yesterday.'",
    answers: ["had had", "have", "would have", "am having"],
    correct: 0,
    category: "english",
    difficulty: "hard"
},
{
    question: "Choose the correct sentence using inversion.",
    answers: [
        "Never have I seen such a beautiful place.",
        "Never I have seen such a beautiful place.",
        "Never did I have saw such a beautiful place.",
        "Never I saw have such a beautiful place."
    ],
    correct: 0,
    category: "english",
    difficulty: "hard"
},
{
    question: "Choose the correct sentence.",
    answers: [
        "Not only did he win, but he also broke the record.",
        "Not only he won, but he also broke the record.",
        "Not only did he won, but he also broke the record.",
        "Not only he did win, but he also broke the record."
    ],
    correct: 0,
    category: "english",
    difficulty: "hard"
},
{
    question: "Choose the correct passive construction.",
    answers: [
        "The project is believed to have been completed.",
        "The project is believed to have complete.",
        "The project believed to be completed.",
        "The project is believing to have been completed."
    ],
    correct: 0,
    category: "english",
    difficulty: "hard"
},
{
    question: "Choose the correct reported speech: 'I have finished,' she said.",
    answers: [
        "She said that she had finished.",
        "She said that she has finish.",
        "She said that she finished yesterday.",
        "She said that she have finished."
    ],
    correct: 0,
    category: "english",
    difficulty: "hard"
},
{
    question: "Choose the correct form: 'He denied ___ the money.'",
    answers: ["stealing", "to steal", "steal", "stolen"],
    correct: 0,
    category: "english",
    difficulty: "hard"
},
{
    question: "Choose the correct form: 'She admitted ___ the mistake.'",
    answers: ["making", "to make", "make", "made"],
    correct: 0,
    category: "english",
    difficulty: "hard"
},
{
    question: "Choose the correct form: 'I regret ___ you that the meeting is cancelled.'",
    answers: ["to tell", "telling", "tell", "told"],
    correct: 0,
    category: "english",
    difficulty: "hard"
},
{
    question: "Choose the correct form: 'I remember ___ him years ago.'",
    answers: ["meeting", "to meet", "meet", "met"],
    correct: 0,
    category: "english",
    difficulty: "hard"
},
{
    question: "Choose the correct form: 'Remember ___ the door.'",
    answers: ["to lock", "locking", "lock", "locked"],
    correct: 0,
    category: "english",
    difficulty: "hard"
},
{
    question: "Choose the correct relative clause.",
    answers: [
        "The woman whose car was stolen called the police.",
        "The woman who car was stolen called the police.",
        "The woman which car was stolen called the police.",
        "The woman where car was stolen called the police."
    ],
    correct: 0,
    category: "english",
    difficulty: "hard"
},
{
    question: "Choose the correct sentence.",
    answers: [
        "Had I known, I would have helped.",
        "Had I knew, I would have helped.",
        "Had I know, I would helped.",
        "Had I known, I will have helped."
    ],
    correct: 0,
    category: "english",
    difficulty: "hard"
},
{
    question: "Choose the correct mixed conditional.",
    answers: [
        "If I had studied medicine, I would be a doctor now.",
        "If I studied medicine, I would have been a doctor yesterday.",
        "If I had study medicine, I would be doctor now.",
        "If I have studied medicine, I would be a doctor now."
    ],
    correct: 0,
    category: "english",
    difficulty: "hard"
},
{
    question: "Choose the correct modal perfect: 'He ___ have forgotten the meeting.'",
    answers: ["must", "should", "can", "will"],
    correct: 0,
    category: "english",
    difficulty: "hard"
},
{
    question: "Choose the correct modal perfect: 'She ___ have taken the wrong bus; she is not here.'",
    answers: ["might", "mustn't", "wouldn't", "shouldn't"],
    correct: 0,
    category: "english",
    difficulty: "hard"
},
{
    question: "Choose the correct sentence.",
    answers: [
        "No sooner had I arrived than it started raining.",
        "No sooner I had arrived than it started raining.",
        "No sooner had I arrive than it started raining.",
        "No sooner did I had arrived than it started raining."
    ],
    correct: 0,
    category: "english",
    difficulty: "hard"
},
{
    question: "Choose the correct sentence.",
    answers: [
        "Hardly had she left when the phone rang.",
        "Hardly she had left when the phone rang.",
        "Hardly had she leave when the phone rang.",
        "Hardly did she had left when the phone rang."
    ],
    correct: 0,
    category: "english",
    difficulty: "hard"
},
{
    question: "Choose the correct cleft sentence.",
    answers: [
        "It was John who broke the window.",
        "It John was who broke the window.",
        "It was John which broke the window.",
        "It is John who broke the window yesterday had."
    ],
    correct: 0,
    category: "english",
    difficulty: "hard"
},
{
    question: "Choose the correct sentence with 'despite'.",
    answers: [
        "Despite being tired, she continued working.",
        "Despite she was tired, she continued working.",
        "Despite of being tired, she continued working.",
        "Despite tired she was, she continued working."
    ],
    correct: 0,
    category: "english",
    difficulty: "hard"
},
{
    question: "Choose the correct sentence with 'although'.",
    answers: [
        "Although he was tired, he continued working.",
        "Although being tired, he continued working.",
        "Although of being tired, he continued working.",
        "Although tiredness, he continued working."
    ],
    correct: 0,
    category: "english",
    difficulty: "hard"
},
{
    question: "Choose the correct inversion after 'Only then'.",
    answers: [
        "Only then did I understand the problem.",
        "Only then I understood the problem.",
        "Only then did I understood the problem.",
        "Only then I did understood the problem."
    ],
    correct: 0,
    category: "english",
    difficulty: "hard"
},
{
    question: "Choose the correct form: 'The book is worth ___.'",
    answers: ["reading", "to read", "read", "to reading"],
    correct: 0,
    category: "english",
    difficulty: "hard"
},
{
    question: "Choose the correct form: 'I would rather ___ at home.'",
    answers: ["stay", "staying", "to stay", "stayed"],
    correct: 0,
    category: "english",
    difficulty: "hard"
},
{
    question: "Choose the correct form: 'I'd rather you ___ tomorrow.'",
    answers: ["came", "come", "will come", "coming"],
    correct: 0,
    category: "english",
    difficulty: "hard"
},
{
    question: "Choose the correct sentence.",
    answers: [
        "It is essential that he be present.",
        "It is essential that he is being present.",
        "It is essential that he was present tomorrow.",
        "It is essential that he being present."
    ],
    correct: 0,
    category: "english",
    difficulty: "hard"
},
{
    question: "Choose the correct sentence.",
    answers: [
        "The more you practice, the better you become.",
        "The more you practice, the best you become.",
        "More you practice, better you become.",
        "The most you practice, the better you become."
    ],
    correct: 0,
    category: "english",
    difficulty: "hard"
},
{
    question: "Choose the correct meaning of 'meticulous'.",
    answers: ["Very careful and precise", "Extremely angry", "Very fast", "Unable to decide"],
    correct: 0,
    category: "english",
    difficulty: "hard"
},
{
    question: "Choose the closest meaning of 'ambiguous'.",
    answers: ["Having more than one possible meaning", "Completely obvious", "Extremely dangerous", "Very expensive"],
    correct: 0,
    category: "english",
    difficulty: "hard"
},
{
    question: "Choose the closest meaning of 'inevitable'.",
    answers: ["Certain to happen", "Easy to prevent", "Difficult to understand", "Already forgotten"],
    correct: 0,
    category: "english",
    difficulty: "hard"
},
{
    question: "Choose the correct sentence.",
    answers: [
        "Were I in your position, I would accept the offer.",
        "Was I in your position, I would accept the offer.",
        "Were I in your position, I will accept the offer.",
        "Were I in your position, I accepted the offer."
    ],
    correct: 0,
    category: "english",
    difficulty: "hard"
},
// ========================================
// 🧩 ألغاز وذكاء - 120 سؤال
// 40 Easy + 40 Medium + 40 Hard
// ========================================

{
    question: "ما الرقم التالي: 2، 4، 6، 8، ؟",
    answers: ["10", "12", "9", "11"],
    correct: 0,
    category: "riddles",
    difficulty: "easy"
},
{
    question: "ما الرقم التالي: 5، 10، 15، 20، ؟",
    answers: ["25", "30", "24", "22"],
    correct: 0,
    category: "riddles",
    difficulty: "easy"
},
{
    question: "أي كلمة لا تنتمي للمجموعة؟",
    answers: ["تفاحة", "موزة", "برتقالة", "كرسي"],
    correct: 3,
    category: "riddles",
    difficulty: "easy"
},
{
    question: "إذا كان لديك 3 تفاحات وأخذت تفاحتين، فكم تفاحة أصبحت معك؟",
    answers: ["1", "2", "3", "5"],
    correct: 1,
    category: "riddles",
    difficulty: "easy"
},
{
    question: "ما الشيء الذي له أسنان ولا يعض؟",
    answers: ["المشط", "الكتاب", "القلم", "المرآة"],
    correct: 0,
    category: "riddles",
    difficulty: "easy"
},
{
    question: "ما الشيء الذي كلما أخذت منه كبر؟",
    answers: ["الحفرة", "الكتاب", "الصندوق", "البالون"],
    correct: 0,
    category: "riddles",
    difficulty: "easy"
},
{
    question: "ما الذي يأتي دائمًا ولا يصل أبدًا؟",
    answers: ["الغد", "الأمس", "اليوم", "الليل"],
    correct: 0,
    category: "riddles",
    difficulty: "easy"
},
{
    question: "ما الشيء الذي يمكنك كسره دون أن تلمسه؟",
    answers: ["الوعد", "الحجر", "الزجاج", "العصا"],
    correct: 0,
    category: "riddles",
    difficulty: "easy"
},
{
    question: "ما الشيء الذي له مفاتيح لكنه لا يفتح أبوابًا؟",
    answers: ["البيانو", "القفل", "الخزانة", "الباب"],
    correct: 0,
    category: "riddles",
    difficulty: "easy"
},
{
    question: "ما الشيء الذي له وجه بلا عينين؟",
    answers: ["الساعة", "الكتاب", "الحذاء", "الكرسي"],
    correct: 0,
    category: "riddles",
    difficulty: "easy"
},
{
    question: "ما العدد الذي يأتي بعد 99؟",
    answers: ["100", "101", "98", "110"],
    correct: 0,
    category: "riddles",
    difficulty: "easy"
},
{
    question: "إذا كان اليوم الاثنين، فما اليوم بعد يومين؟",
    answers: ["الثلاثاء", "الأربعاء", "الخميس", "الجمعة"],
    correct: 1,
    category: "riddles",
    difficulty: "easy"
},
{
    question: "أي عدد مختلف عن البقية؟ 2، 4، 6، 9",
    answers: ["2", "4", "6", "9"],
    correct: 3,
    category: "riddles",
    difficulty: "easy"
},
{
    question: "ما العدد التالي: 1، 3، 5، 7، ؟",
    answers: ["8", "9", "10", "11"],
    correct: 1,
    category: "riddles",
    difficulty: "easy"
},
{
    question: "ما الشكل الذي له ثلاثة أضلاع؟",
    answers: ["المربع", "المثلث", "الدائرة", "المستطيل"],
    correct: 1,
    category: "riddles",
    difficulty: "easy"
},
{
    question: "إذا كان لديك 10 أقلام وأعطيت 3 منها لصديق، كم قلمًا بقي لديك؟",
    answers: ["6", "7", "8", "13"],
    correct: 1,
    category: "riddles",
    difficulty: "easy"
},
{
    question: "أي شهر يأتي بعد أبريل؟",
    answers: ["مارس", "يونيو", "مايو", "يوليو"],
    correct: 2,
    category: "riddles",
    difficulty: "easy"
},
{
    question: "ما الشيء الذي يمشي بلا أرجل؟",
    answers: ["الساعة", "السيارة", "الحائط", "الكرسي"],
    correct: 0,
    category: "riddles",
    difficulty: "easy"
},
{
    question: "إذا كان أحمد أطول من علي، وعلي أطول من سامي، فمن الأطول؟",
    answers: ["سامي", "علي", "أحمد", "لا يمكن معرفة ذلك"],
    correct: 2,
    category: "riddles",
    difficulty: "easy"
},
{
    question: "ما العدد الذي ينقص في السلسلة: 10، 20، 30، ؟، 50",
    answers: ["35", "40", "45", "60"],
    correct: 1,
    category: "riddles",
    difficulty: "easy"
},
{
    question: "أي كلمة مختلفة: أحمر، أزرق، أخضر، تفاحة؟",
    answers: ["أحمر", "أزرق", "أخضر", "تفاحة"],
    correct: 3,
    category: "riddles",
    difficulty: "easy"
},
{
    question: "إذا كان القلم أغلى من الممحاة، والممحاة أغلى من المسطرة، فما الأرخص؟",
    answers: ["القلم", "الممحاة", "المسطرة", "لا يمكن معرفة ذلك"],
    correct: 2,
    category: "riddles",
    difficulty: "easy"
},
{
    question: "ما العدد التالي: 10، 9، 8، 7، ؟",
    answers: ["6", "5", "4", "10"],
    correct: 0,
    category: "riddles",
    difficulty: "easy"
},
{
    question: "ما الشيء الذي يكتب ولا يقرأ؟",
    answers: ["القلم", "الكتاب", "الطالب", "المعلم"],
    correct: 0,
    category: "riddles",
    difficulty: "easy"
},
{
    question: "أي حيوان يختلف عن البقية؟",
    answers: ["أسد", "نمر", "فهد", "حصان"],
    correct: 3,
    category: "riddles",
    difficulty: "easy"
},
{
    question: "إذا كان كل القطط حيوانات، فهل كل الحيوانات قطط؟",
    answers: ["نعم", "لا", "أحيانًا", "لا يمكن معرفة ذلك"],
    correct: 1,
    category: "riddles",
    difficulty: "easy"
},
{
    question: "ما الرقم التالي: 3، 6، 9، 12، ؟",
    answers: ["14", "15", "16", "18"],
    correct: 1,
    category: "riddles",
    difficulty: "easy"
},
{
    question: "ما الشيء الذي له رقبة بلا رأس؟",
    answers: ["الزجاجة", "الكرسي", "القلم", "الحذاء"],
    correct: 0,
    category: "riddles",
    difficulty: "easy"
},
{
    question: "إذا كان سامي أصغر من كريم، وكريم أصغر من محمد، فمن الأكبر؟",
    answers: ["سامي", "كريم", "محمد", "لا يمكن معرفة ذلك"],
    correct: 2,
    category: "riddles",
    difficulty: "easy"
},
{
    question: "أي عدد زوجي؟",
    answers: ["7", "11", "14", "19"],
    correct: 2,
    category: "riddles",
    difficulty: "easy"
},
{
    question: "ما العدد التالي: 100، 90، 80، 70، ؟",
    answers: ["65", "60", "50", "75"],
    correct: 1,
    category: "riddles",
    difficulty: "easy"
},
{
    question: "ما الشيء الذي يسمع بلا أذن ويتكلم بلا لسان؟",
    answers: ["الصدى", "الكتاب", "الكرسي", "القلم"],
    correct: 0,
    category: "riddles",
    difficulty: "easy"
},
{
    question: "إذا كان 4 + 4 = 8، فما ناتج 8 + 8؟",
    answers: ["12", "14", "16", "18"],
    correct: 2,
    category: "riddles",
    difficulty: "easy"
},
{
    question: "أي كلمة ليست اسم حيوان؟",
    answers: ["كلب", "قطة", "حصان", "طاولة"],
    correct: 3,
    category: "riddles",
    difficulty: "easy"
},
{
    question: "إذا تجاوزت الشخص الذي في المركز الثاني في سباق، فأي مركز تصبح فيه؟",
    answers: ["الأول", "الثاني", "الثالث", "الرابع"],
    correct: 1,
    category: "riddles",
    difficulty: "easy"
},
{
    question: "ما الشيء الذي كلما زاد نقص؟",
    answers: ["العمر المتبقي", "المال", "الطعام", "الكتب"],
    correct: 0,
    category: "riddles",
    difficulty: "easy"
},
{
    question: "ما الرقم الذي لا ينتمي: 2، 4، 6، 8، 11؟",
    answers: ["2", "6", "8", "11"],
    correct: 3,
    category: "riddles",
    difficulty: "easy"
},
{
    question: "إذا كان لديك صندوق فارغ، كم كرة يمكنك وضعها فيه؟",
    answers: ["كرة واحدة فقط", "كرَتان", "عدد غير محدود", "صفر"],
    correct: 2,
    category: "riddles",
    difficulty: "easy"
},
{
    question: "ما الشيء الذي يزداد عندما تنظر إليه في المرآة؟",
    answers: ["عمرك", "صورتك", "طولك", "وزنك"],
    correct: 0,
    category: "riddles",
    difficulty: "easy"
},
{
    question: "ما العدد التالي: 1، 2، 4، 8، ؟",
    answers: ["10", "12", "16", "18"],
    correct: 2,
    category: "riddles",
    difficulty: "easy"
},

// ================================
// 🟡 MEDIUM — 40
// ================================

{
    question: "ما العدد التالي: 2، 6، 12، 20، 30، ؟",
    answers: ["36", "40", "42", "44"],
    correct: 2,
    category: "riddles",
    difficulty: "medium"
},
{
    question: "إذا كانت كل الورود زهورًا، وبعض الزهور حمراء، فهل يمكننا الجزم بأن بعض الورود حمراء؟",
    answers: ["نعم دائمًا", "لا، ليس بالضرورة", "نعم إذا كانت الورود كثيرة", "لا توجد علاقة"],
    correct: 1,
    category: "riddles",
    difficulty: "medium"
},
{
    question: "لدى أحمد 3 قمصان و2 بنطلون. كم زيًا مختلفًا يمكنه تكوينه باختيار قميص وبنطلون؟",
    answers: ["5", "6", "8", "9"],
    correct: 1,
    category: "riddles",
    difficulty: "medium"
},
{
    question: "ما العدد التالي: 1، 4، 9، 16، 25، ؟",
    answers: ["30", "32", "36", "40"],
    correct: 2,
    category: "riddles",
    difficulty: "medium"
},
{
    question: "إذا كان 5 عمال ينجزون مهمة في 10 أيام بنفس المعدل، فكم يومًا يحتاج 10 عمال؟",
    answers: ["2", "5", "10", "20"],
    correct: 1,
    category: "riddles",
    difficulty: "medium"
},
{
    question: "رجل لديه 17 خروفًا، هرب منها كلها ما عدا 9. كم بقي؟",
    answers: ["8", "9", "17", "0"],
    correct: 1,
    category: "riddles",
    difficulty: "medium"
},
{
    question: "إذا كان جميع الـ A ينتمون إلى B، وجميع الـ B ينتمون إلى C، فما النتيجة؟",
    answers: ["كل A ينتمي إلى C", "كل C ينتمي إلى A", "بعض A لا ينتمي إلى C", "لا توجد علاقة"],
    correct: 0,
    category: "riddles",
    difficulty: "medium"
},
{
    question: "ما الرقم التالي: 3، 8، 15، 24، 35، ؟",
    answers: ["44", "46", "48", "50"],
    correct: 2,
    category: "riddles",
    difficulty: "medium"
},
{
    question: "ثلاثة أشخاص يقفون في صف. خالد أمام سامي، وسامي أمام عمر. من في المنتصف؟",
    answers: ["خالد", "سامي", "عمر", "لا يمكن معرفة ذلك"],
    correct: 1,
    category: "riddles",
    difficulty: "medium"
},
{
    question: "إذا كان الأمس هو الأحد، فما اليوم بعد غد؟",
    answers: ["الثلاثاء", "الأربعاء", "الخميس", "الجمعة"],
    correct: 1,
    category: "riddles",
    difficulty: "medium"
},
{
    question: "لديك 3 صناديق مكتوب عليها تفاح وبرتقال ومختلط، وكل الملصقات خاطئة. من أي صندوق تسحب ثمرة واحدة لتعرف محتوى الصناديق؟",
    answers: ["تفاح", "برتقال", "مختلط", "أي صندوق"],
    correct: 2,
    category: "riddles",
    difficulty: "medium"
},
{
    question: "إذا كان لديك 10 عملات، منها 3 سوداء والباقي بيضاء، فما أقل عدد تسحبه وأنت مغمض العينين لضمان الحصول على عملة سوداء؟",
    answers: ["3", "7", "8", "10"],
    correct: 2,
    category: "riddles",
    difficulty: "medium"
},
{
    question: "ما العدد التالي: 81، 27، 9، 3، ؟",
    answers: ["0", "1", "2", "6"],
    correct: 1,
    category: "riddles",
    difficulty: "medium"
},
{
    question: "إذا كان قطاران يتحركان في اتجاهين متعاكسين، فهل سرعة اقترابهما تساوي مجموع سرعتيهما؟",
    answers: ["نعم", "لا", "فقط إذا كانا متساويين", "فقط إذا كان أحدهما متوقفًا"],
    correct: 0,
    category: "riddles",
    difficulty: "medium"
},
{
    question: "ما العدد الناقص: 2، 3، 5، 8، 12، ؟",
    answers: ["15", "17", "18", "20"],
    correct: 1,
    category: "riddles",
    difficulty: "medium"
},
{
    question: "أم لديها 4 أبناء، وكل ابن لديه أخت واحدة مشتركة. كم عدد الأطفال؟",
    answers: ["4", "5", "8", "9"],
    correct: 1,
    category: "riddles",
    difficulty: "medium"
},
{
    question: "إذا كان بعض الطلاب رياضيين، وكل الرياضيين نشيطون، فماذا نستنتج؟",
    answers: ["بعض الطلاب نشيطون", "كل الطلاب نشيطون", "لا طالب نشيط", "كل النشيطين رياضيون"],
    correct: 0,
    category: "riddles",
    difficulty: "medium"
},
{
    question: "ما العدد التالي: 2، 3، 5، 7، 11، ؟",
    answers: ["12", "13", "14", "15"],
    correct: 1,
    category: "riddles",
    difficulty: "medium"
},
{
    question: "لديك 8 كرات متطابقة، واحدة منها أثقل. ما أقل عدد من مرات استخدام ميزان الكفتين لمعرفة الكرة الأثقل؟",
    answers: ["1", "2", "3", "4"],
    correct: 1,
    category: "riddles",
    difficulty: "medium"
},
{
    question: "إذا كان 2 قطط تصطادان 2 فأرين في دقيقتين، فكم دقيقة تحتاج قطة واحدة لصيد فأر واحد بنفس المعدل؟",
    answers: ["1", "2", "4", "8"],
    correct: 1,
    category: "riddles",
    difficulty: "medium"
},
{
    question: "ما الكلمة التي إذا حذفت أول حرف منها أصبحت اسم شيء آخر؟",
    answers: ["دار", "نار", "بحر", "قمر"],
    correct: 0,
    category: "riddles",
    difficulty: "medium"
},
{
    question: "رجل ينظر إلى صورة ويقول: ليس لي إخوة أو أخوات، لكن والد هذا الرجل هو ابن أبي. من في الصورة؟",
    answers: ["ابنه", "أخوه", "والده", "صديقه"],
    correct: 0,
    category: "riddles",
    difficulty: "medium"
},
{
    question: "إذا كانت الساعة 3:15، فما الزاوية الأصغر بين عقرب الساعات والدقائق؟",
    answers: ["0°", "7.5°", "15°", "22.5°"],
    correct: 1,
    category: "riddles",
    difficulty: "medium"
},
{
    question: "ما العدد التالي: 1، 1، 2، 3، 5، 8، ؟",
    answers: ["11", "12", "13", "15"],
    correct: 2,
    category: "riddles",
    difficulty: "medium"
},
{
    question: "إذا تجاوزت الشخص الذي في المركز الثالث في سباق، فأنت في أي مركز؟",
    answers: ["الثاني", "الثالث", "الرابع", "الأول"],
    correct: 1,
    category: "riddles",
    difficulty: "medium"
},
{
    question: "ما العدد المختلف: 16، 25، 36، 49، 60؟",
    answers: ["16", "25", "49", "60"],
    correct: 3,
    category: "riddles",
    difficulty: "medium"
},
{
    question: "لدى أحمد ضعف ما لدى علي من العملات. إذا كان مع علي 6 عملات، فكم مع أحمد؟",
    answers: ["8", "10", "12", "14"],
    correct: 2,
    category: "riddles",
    difficulty: "medium"
},
{
    question: "ما العدد الذي إذا ضربته في نفسه كان الناتج 81؟",
    answers: ["7", "8", "9", "10"],
    correct: 2,
    category: "riddles",
    difficulty: "medium"
},
{
    question: "إذا كانت جميع السيارات لها عجلات، وبعض الأشياء ذات العجلات زرقاء، فهل كل السيارات زرقاء؟",
    answers: ["نعم", "لا", "نعم دائمًا", "لا يمكن أن توجد سيارات زرقاء"],
    correct: 1,
    category: "riddles",
    difficulty: "medium"
},
{
    question: "ما العدد التالي: 100، 50، 25، 12.5، ؟",
    answers: ["6.25", "5", "7.5", "10"],
    correct: 0,
    category: "riddles",
    difficulty: "medium"
},
{
    question: "لديك كوبان: أحدهما ممتلئ والآخر فارغ. كيف تجعلهما متساويين دون تغيير كمية الماء الكلية؟",
    answers: ["تنقل نصف الماء", "تكسر الكوب", "تضيف ماء", "تفرغ الاثنين"],
    correct: 0,
    category: "riddles",
    difficulty: "medium"
},
{
    question: "ما العدد التالي: 4، 7، 13، 25، 49، ؟",
    answers: ["73", "85", "97", "101"],
    correct: 2,
    category: "riddles",
    difficulty: "medium"
},
{
    question: "إذا كان خالد أكبر من علي بـ5 سنوات، وعلي أكبر من سامي بـ3 سنوات، وكان سامي 10 سنوات، فكم عمر خالد؟",
    answers: ["15", "16", "18", "20"],
    correct: 2,
    category: "riddles",
    difficulty: "medium"
},
{
    question: "ما الرقم التالي: 1، 8، 27، 64، ؟",
    answers: ["81", "100", "125", "144"],
    correct: 2,
    category: "riddles",
    difficulty: "medium"
},
{
    question: "لديك 6 أكواب، ثلاثة ممتلئة وثلاثة فارغة. بتحريك كوب واحد فقط، اجعلها بالتناوب ممتلئًا وفارغًا.",
    answers: ["انقل ماء من الكوب الثاني للرابع", "انقل الأول للثالث", "افرغ السادس", "لا يمكن"],
    correct: 0,
    category: "riddles",
    difficulty: "medium"
},
{
    question: "إذا كان كل الأطباء متعلمين، وبعض المتعلمين موسيقيون، فهل كل الأطباء موسيقيون؟",
    answers: ["نعم", "لا، ليس بالضرورة", "نعم دائمًا", "لا يوجد أطباء"],
    correct: 1,
    category: "riddles",
    difficulty: "medium"
},
{
    question: "ما العدد التالي: 7، 14، 28، 56، ؟",
    answers: ["84", "98", "112", "120"],
    correct: 2,
    category: "riddles",
    difficulty: "medium"
},
{
    question: "إذا كان لديك حبل يحترق بالكامل في ساعة، لكن الاحتراق غير منتظم، كيف تقيس 30 دقيقة باستخدام حبل واحد؟",
    answers: ["تشعل طرفًا واحدًا", "تشعل الطرفين معًا", "تقطعه نصفين", "لا يمكن"],
    correct: 1,
    category: "riddles",
    difficulty: "medium"
},
{
    question: "أيهما أكبر: نصف الثلث أم ثلث النصف؟",
    answers: ["نصف الثلث", "ثلث النصف", "متساويان", "لا يمكن المقارنة"],
    correct: 2,
    category: "riddles",
    difficulty: "medium"
},

// ================================
// 🔴 HARD — 40
// ================================

{
    question: "لديك 12 كرة متطابقة ظاهريًا، واحدة مختلفة في الوزن ولا تعرف هل هي أثقل أم أخف. ما أقل عدد من مرات الوزن بميزان الكفتين لتحديدها؟",
    answers: ["1", "2", "3", "4"],
    correct: 2,
    category: "riddles",
    difficulty: "hard"
},
{
    question: "رجل لديه 17 جملاً لثلاثة أبناء. الأول يأخذ النصف، الثاني الثلث، والثالث التسع. كيف يمكن تقسيمها دون كسر أي جمل؟",
    answers: ["بإضافة جمل مؤقتًا ثم إعادته", "بقتل جمل", "بتقسيم أحد الجمال", "لا يمكن"],
    correct: 0,
    category: "riddles",
    difficulty: "hard"
},
{
    question: "لديك بابان: أحدهما يؤدي للأمان والآخر للخطر، وحارسان؛ أحدهما يكذب دائمًا والآخر يقول الحقيقة دائمًا. ما السؤال الذي تسأله لأحدهما لتعرف باب الأمان؟",
    answers: [
        "أي باب تحب؟",
        "ماذا سيقول الحارس الآخر عن باب الأمان؟ ثم اختر الباب الآخر",
        "هل أنت صادق؟",
        "هل الباب الأول آمن؟"
    ],
    correct: 1,
    category: "riddles",
    difficulty: "hard"
},
{
    question: "ثلاثة أشخاص يرتدون قبعات سوداء أو بيضاء. كل شخص يرى قبعات الآخرين ولا يرى قبعته. إذا كانت القبعات المتاحة قبعتين سوداوين وواحدة بيضاء، وقال الأول لا أعرف، والثاني لا أعرف، فماذا يستطيع الثالث أن يستنتج عن قبعته؟",
    answers: ["سوداء", "بيضاء", "لا يمكنه الاستنتاج", "أي لون"],
    correct: 0,
    category: "riddles",
    difficulty: "hard"
},
{
    question: "لديك 3 مفاتيح خارج غرفة مغلقة، وداخل الغرفة مصباح واحد. يمكنك دخول الغرفة مرة واحدة فقط. كيف تعرف أي مفتاح يشغل المصباح؟",
    answers: [
        "تشغل الأول وتدخل فورًا",
        "تشغل الأول فترة، تطفئه، تشغل الثاني، ثم تدخل وتتحقق من الضوء والحرارة",
        "تشغل الثلاثة معًا",
        "لا يمكن معرفة ذلك"
    ],
    correct: 1,
    category: "riddles",
    difficulty: "hard"
},
{
    question: "ما العدد التالي: 2، 6، 12، 20، 30، 42، ؟",
    answers: ["48", "54", "56", "60"],
    correct: 2,
    category: "riddles",
    difficulty: "hard"
},
{
    question: "إذا كان لديك 100 باب مغلق، تمر عليها 100 مرة؛ في المرة الأولى تغير حالة كل باب، والثانية كل باب رقمه مضاعف 2، وهكذا. أي الأبواب تبقى مفتوحة؟",
    answers: ["الأبواب ذات الأرقام الأولية", "الأبواب ذات الأرقام الفردية", "الأبواب ذات الأرقام المربعة الكاملة", "كل الأبواب"],
    correct: 2,
    category: "riddles",
    difficulty: "hard"
},
{
    question: "رجل وُلد في عام 2005 وتوفي في عام 2005 وكان عمره 80 سنة. كيف؟",
    answers: ["خطأ في السؤال", "2005 كان رقم الغرفة أو المكان وليس السنة", "كان خالدًا", "هذا مستحيل"],
    correct: 1,
    category: "riddles",
    difficulty: "hard"
},
{
    question: "لديك ميزان كفتين و9 كرات، واحدة أثقل من الباقي. ما أقل عدد من الأوزان لمعرفة الكرة؟",
    answers: ["1", "2", "3", "4"],
    correct: 1,
    category: "riddles",
    difficulty: "hard"
},
{
    question: "رجل دفع سيارته حتى وصل إلى فندق، وعندما وصل قال إنه أفلس. لماذا؟",
    answers: ["السيارة تعطلت", "كان يلعب Monopoly", "لم يكن معه مال", "كان يعمل في الفندق"],
    correct: 1,
    category: "riddles",
    difficulty: "hard"
},
{
    question: "ما أقل عدد من القطع المستقيمة اللازمة لتقسيم قرص دائري إلى 6 مناطق؟",
    answers: ["2", "3", "4", "6"],
    correct: 2,
    category: "riddles",
    difficulty: "hard"
},
{
    question: "إذا كان لديك 8 عملات متطابقة، واحدة أخف، وميزان كفتين، فما أقل عدد من الأوزان اللازمة لتحديدها؟",
    answers: ["1", "2", "3", "4"],
    correct: 1,
    category: "riddles",
    difficulty: "hard"
},
{
    question: "لديك إناء 5 لترات وإناء 3 لترات، ولا توجد علامات قياس. كيف تحصل على 4 لترات بالضبط؟",
    answers: [
        "املأ 5 ثم اسكب في 3، ثم استخدم الخطوات المناسبة لإبقاء 2 وإكمالها",
        "املأ 3 فقط",
        "املأ 5 فقط",
        "لا يمكن"
    ],
    correct: 0,
    category: "riddles",
    difficulty: "hard"
},
{
    question: "في جزيرة، الصادقون يقولون الحقيقة دائمًا والكاذبون يكذبون دائمًا. قال شخص: «نحن الاثنان كاذبان». ماذا يمكن استنتاج؟",
    answers: ["هو صادق والآخر كاذب", "هو كاذب والآخر صادق", "كلاهما صادق", "لا يمكن أن يكون قوله صحيحًا"],
    correct: 3,
    category: "riddles",
    difficulty: "hard"
},
{
    question: "ما أصغر عدد موجب يقبل القسمة على 2 و3 و4 و5 و6 دون باقٍ؟",
    answers: ["30", "40", "60", "120"],
    correct: 2,
    category: "riddles",
    difficulty: "hard"
},
{
    question: "لديك 10 أكياس عملات، كيس واحد يحتوي عملات أثقل بجرام واحد من الطبيعي. باستخدام ميزان رقمي ووزنة واحدة، كيف تحدد الكيس؟",
    answers: [
        "خذ عملة من كل كيس بعدد مختلف واجمع الوزن",
        "خذ عملتين من كل كيس",
        "استخدم كيسًا واحدًا فقط",
        "لا يمكن بوزنة واحدة"
    ],
    correct: 0,
    category: "riddles",
    difficulty: "hard"
},
{
    question: "ما الرقم التالي: 1، 11، 21، 1211، 111221، ؟",
    answers: ["312211", "211221", "111321", "123221"],
    correct: 0,
    category: "riddles",
    difficulty: "hard"
},
{
    question: "إذا كان اليوم الأربعاء، فما اليوم الذي سيكون بعد 100 يوم؟",
    answers: ["الخميس", "الجمعة", "السبت", "الأحد"],
    correct: 0,
    category: "riddles",
    difficulty: "hard"
},
{
    question: "كم مرة تتطابق عقارب الساعة تمامًا خلال 12 ساعة؟",
    answers: ["10", "11", "12", "13"],
    correct: 1,
    category: "riddles",
    difficulty: "hard"
},
{
    question: "لديك 4 أشخاص يحتاجون لعبور جسر ليلًا، وأوقاتهم 1 و2 و7 و10 دقائق. معهم مصباح واحد، ويعبر شخصان كحد أقصى. ما أقل وقت لعبور الجميع؟",
    answers: ["17 دقيقة", "19 دقيقة", "20 دقيقة", "21 دقيقة"],
    correct: 1,
    category: "riddles",
    difficulty: "hard"
},
{
    question: "إذا كان لديك 5 أكواب متتالية، الأول والثاني ممتلئان والثالث والرابع والخامس فارغة، فما أقل عدد من تحريك الأكواب لجعلها: ممتلئ، فارغ، ممتلئ، فارغ، ممتلئ؟",
    answers: ["0", "1", "2", "3"],
    correct: 1,
    category: "riddles",
    difficulty: "hard"
},
{
    question: "ثلاثة صناديق تحتوي تفاحًا أو برتقالًا أو خليطًا، وكل الملصقات خاطئة. سحبت تفاحة من الصندوق المكتوب عليه «مختلط». ماذا تعرف؟",
    answers: [
        "الصندوق يحتوي تفاحًا فقط",
        "الصندوق يحتوي برتقالًا فقط",
        "الصندوق مختلط",
        "لا يمكن معرفة شيء"
    ],
    correct: 0,
    category: "riddles",
    difficulty: "hard"
},
{
    question: "ما العدد التالي: 1، 2، 6، 24، 120، ؟",
    answers: ["240", "360", "720", "840"],
    correct: 2,
    category: "riddles",
    difficulty: "hard"
},
{
    question: "إذا كان هناك 10 أشخاص في غرفة، وصافح كل شخص كل شخص آخر مرة واحدة، كم مصافحة حدثت؟",
    answers: ["45", "50", "90", "100"],
    correct: 0,
    category: "riddles",
    difficulty: "hard"
},
{
    question: "في سباق، تجاوزت آخر شخص في السباق. ما المركز الذي أصبحت فيه؟",
    answers: ["الأول", "الثاني", "قبل الأخير", "هذا مستحيل"],
    correct: 3,
    category: "riddles",
    difficulty: "hard"
},
{
    question: "ما العدد المفقود: 2، 5، 10، 17، 26، ؟",
    answers: ["35", "37", "39", "41"],
    correct: 1,
    category: "riddles",
    difficulty: "hard"
},
{
    question: "لديك ساعتان رمليتان: واحدة 7 دقائق وأخرى 11 دقيقة. كيف تقيس 15 دقيقة بالضبط؟",
    answers: [
        "ابدأ الاثنتين معًا ثم أعد تشغيل 7 دقائق عند انتهائها، وانتظر انتهاء 11 ثم أكمل حتى 15",
        "استخدم ساعة 7 فقط",
        "استخدم ساعة 11 فقط",
        "لا يمكن"
    ],
    correct: 0,
    category: "riddles",
    difficulty: "hard"
},
{
    question: "ما أصغر عدد يمكن كتابته باستخدام الأرقام 1 و2 و3 مرة واحدة فقط ويكون قابلًا للقسمة على 3؟",
    answers: ["123", "132", "213", "231"],
    correct: 0,
    category: "riddles",
    difficulty: "hard"
},
{
    question: "إذا كان لدينا 6 أشخاص، وكل شخص يصافح كل شخص آخر مرة واحدة، كم مصافحة؟",
    answers: ["12", "15", "18", "20"],
    correct: 1,
    category: "riddles",
    difficulty: "hard"
},
{
    question: "ما الرقم التالي: 2، 3، 5، 9، 17، 33، ؟",
    answers: ["49", "65", "66", "67"],
    correct: 1,
    category: "riddles",
    difficulty: "hard"
},
{
    question: "لديك 1000 زجاجة، واحدة فقط مختلفة، ولديك 10 أشخاص يمكن استخدامهم للاختبار بنظام نعم/لا. ما أقصى عدد من الاحتمالات التي يمكن تمييزها؟",
    answers: ["100", "500", "1000", "1024"],
    correct: 3,
    category: "riddles",
    difficulty: "hard"
},
{
    question: "في غرفة 3 مصابيح وخارجها 3 مفاتيح، ويمكنك دخول الغرفة مرة واحدة. ما الفكرة الأساسية للحل؟",
    answers: [
        "استخدام الضوء والحرارة لتحديد المفاتيح",
        "تشغيل كل المفاتيح معًا",
        "إطفاء كل المفاتيح",
        "كسر المصابيح"
    ],
    correct: 0,
    category: "riddles",
    difficulty: "hard"
},
{
    question: "ما العدد التالي: 1، 2، 4، 7، 11، 16، ؟",
    answers: ["20", "21", "22", "23"],
    correct: 2,
    category: "riddles",
    difficulty: "hard"
},
{
    question: "إذا كان لديك 4 أوزان مختلفة، فما أكبر عدد من الأوزان التي تحتاجها لتمييز واحد مختلف باستخدام ميزان الكفتين في أسوأ حالة ضمن مسألة 4 عناصر؟",
    answers: ["1", "2", "3", "4"],
    correct: 1,
    category: "riddles",
    difficulty: "hard"
},
{
    question: "ثلاثة أشخاص: الأول يرى الثاني والثالث، والثاني يرى الثالث، والثالث لا يرى أحدًا. قيل لهم إن هناك قبعتين بيضاوين وقبعة سوداء. إذا قال الأول «لا أعرف»، ثم قال الثاني «لا أعرف»، فما لون قبعة الثالث؟",
    answers: ["بيضاء", "سوداء", "يمكن أن تكون أي لون", "لا توجد معلومات كافية"],
    correct: 1,
    category: "riddles",
    difficulty: "hard"
},
{
    question: "لديك 3 أشخاص يريدون عبور نهر بقارب يحمل شخصين فقط. أوقات عبورهم 1 و2 و5 دقائق، والقارب يجب أن يعود. ما أقل وقت لعبورهم جميعًا؟",
    answers: ["6 دقائق", "7 دقائق", "8 دقائق", "9 دقائق"],
    correct: 1,
    category: "riddles",
    difficulty: "hard"
},
{
    question: "إذا كان كل مربع مستطيلًا، فهل كل مستطيل مربع؟",
    answers: ["نعم", "لا", "فقط بعض المستطيلات", "لا توجد علاقة"],
    correct: 1,
    category: "riddles",
    difficulty: "hard"
},
{
    question: "ما العدد التالي: 4، 6، 10، 18، 34، ؟",
    answers: ["50", "58", "66", "70"],
    correct: 2,
    category: "riddles",
    difficulty: "hard"
},
{
    question: "لديك 9 نقاط مرتبة في مربع 3×3. ما أقل عدد من الخطوط المستقيمة المتصلة التي تمر عبر جميع النقاط دون رفع القلم؟",
    answers: ["3", "4", "5", "6"],
    correct: 1,
    category: "riddles",
    difficulty: "hard"
},
// ========================================
// 🚀 فضاء وفلك - 100 سؤال
// 34 Easy + 33 Medium + 33 Hard
// ========================================

// ================================
// 🟢 EASY — 34
// ================================

{
    question: "ما أقرب كوكب إلى الشمس؟",
    answers: ["عطارد", "الزهرة", "الأرض", "المريخ"],
    correct: 0,
    category: "space",
    difficulty: "easy"
},
{
    question: "ما أكبر كوكب في المجموعة الشمسية؟",
    answers: ["زحل", "المشتري", "نبتون", "الأرض"],
    correct: 1,
    category: "space",
    difficulty: "easy"
},
{
    question: "ما الكوكب المعروف بالكوكب الأحمر؟",
    answers: ["الزهرة", "المريخ", "عطارد", "نبتون"],
    correct: 1,
    category: "space",
    difficulty: "easy"
},
{
    question: "ما اسم النجم الموجود في مركز مجموعتنا الشمسية؟",
    answers: ["الشمس", "سيريوس", "بولاريس", "فيغا"],
    correct: 0,
    category: "space",
    difficulty: "easy"
},
{
    question: "كم عدد كواكب المجموعة الشمسية؟",
    answers: ["7", "8", "9", "10"],
    correct: 1,
    category: "space",
    difficulty: "easy"
},
{
    question: "ما الكوكب الذي نعيش عليه؟",
    answers: ["المريخ", "الأرض", "الزهرة", "المشتري"],
    correct: 1,
    category: "space",
    difficulty: "easy"
},
{
    question: "ما الكوكب المشهور بحلقاته الكبيرة؟",
    answers: ["زحل", "المريخ", "عطارد", "الزهرة"],
    correct: 0,
    category: "space",
    difficulty: "easy"
},
{
    question: "ما القمر الطبيعي للأرض؟",
    answers: ["القمر", "تيتان", "أوروبا", "جانيميد"],
    correct: 0,
    category: "space",
    difficulty: "easy"
},
{
    question: "ما الكوكب الثاني من حيث البعد عن الشمس؟",
    answers: ["الأرض", "الزهرة", "المريخ", "عطارد"],
    correct: 1,
    category: "space",
    difficulty: "easy"
},
{
    question: "ما أبعد كوكب عن الشمس من بين الكواكب الثمانية؟",
    answers: ["زحل", "أورانوس", "نبتون", "المشتري"],
    correct: 2,
    category: "space",
    difficulty: "easy"
},
{
    question: "أي كوكب هو ثالث كوكب من الشمس؟",
    answers: ["المريخ", "الأرض", "الزهرة", "عطارد"],
    correct: 1,
    category: "space",
    difficulty: "easy"
},
{
    question: "ما اسم المجرة التي توجد فيها مجموعتنا الشمسية؟",
    answers: ["أندروميدا", "درب التبانة", "مثلث", "الدوامة"],
    correct: 1,
    category: "space",
    difficulty: "easy"
},
{
    question: "أي كوكب يُعد عملاقًا غازيًا؟",
    answers: ["الأرض", "المريخ", "المشتري", "عطارد"],
    correct: 2,
    category: "space",
    difficulty: "easy"
},
{
    question: "أي كوكب يُعد من الكواكب الصخرية؟",
    answers: ["المشتري", "زحل", "الأرض", "نبتون"],
    correct: 2,
    category: "space",
    difficulty: "easy"
},
{
    question: "ما الكوكب الذي يشتهر بلونه الأزرق؟",
    answers: ["نبتون", "المريخ", "عطارد", "الزهرة"],
    correct: 0,
    category: "space",
    difficulty: "easy"
},
{
    question: "ما اسم الكوكب الذي يأتي بعد الأرض في البعد عن الشمس؟",
    answers: ["عطارد", "المريخ", "المشتري", "زحل"],
    correct: 1,
    category: "space",
    difficulty: "easy"
},
{
    question: "ما الكوكب الذي يأتي بعد زحل في ترتيب البعد عن الشمس؟",
    answers: ["نبتون", "الأرض", "أورانوس", "المريخ"],
    correct: 2,
    category: "space",
    difficulty: "easy"
},
{
    question: "ما اسم الكوكب السابع من الشمس؟",
    answers: ["نبتون", "أورانوس", "زحل", "المشتري"],
    correct: 1,
    category: "space",
    difficulty: "easy"
},
{
    question: "ما اسم الكوكب السادس من الشمس؟",
    answers: ["المشتري", "زحل", "أورانوس", "نبتون"],
    correct: 1,
    category: "space",
    difficulty: "easy"
},
{
    question: "ما اسم الكوكب الخامس من الشمس؟",
    answers: ["المريخ", "المشتري", "زحل", "الأرض"],
    correct: 1,
    category: "space",
    difficulty: "easy"
},
{
    question: "ما اسم الكوكب الرابع من الشمس؟",
    answers: ["الأرض", "المريخ", "الزهرة", "المشتري"],
    correct: 1,
    category: "space",
    difficulty: "easy"
},
{
    question: "ما الكوكب الأصغر في المجموعة الشمسية؟",
    answers: ["عطارد", "المريخ", "الأرض", "الزهرة"],
    correct: 0,
    category: "space",
    difficulty: "easy"
},
{
    question: "أي كوكب لا يملك أقمارًا طبيعية معروفة؟",
    answers: ["الأرض", "المريخ", "عطارد", "المشتري"],
    correct: 2,
    category: "space",
    difficulty: "easy"
},
{
    question: "أي كوكب آخر لا يملك أقمارًا طبيعية معروفة؟",
    answers: ["الزهرة", "الأرض", "زحل", "نبتون"],
    correct: 0,
    category: "space",
    difficulty: "easy"
},
{
    question: "ما اسم الكوكب الذي يحتوي على البقعة الحمراء العظيمة؟",
    answers: ["زحل", "المشتري", "نبتون", "المريخ"],
    correct: 1,
    category: "space",
    difficulty: "easy"
},
{
    question: "ما اسم الكوكب الذي يدور حوله القمر تيتان؟",
    answers: ["المشتري", "زحل", "أورانوس", "نبتون"],
    correct: 1,
    category: "space",
    difficulty: "easy"
},
{
    question: "ما اسم أكبر قمر في المجموعة الشمسية؟",
    answers: ["تيتان", "جانيميد", "القمر", "أوروبا"],
    correct: 1,
    category: "space",
    difficulty: "easy"
},
{
    question: "ما اسم القمر الشهير للمشتري الذي يُعد من أكبر أقمار المجموعة الشمسية؟",
    answers: ["جانيميد", "تيتان", "تريتون", "فوبوس"],
    correct: 0,
    category: "space",
    difficulty: "easy"
},
{
    question: "ما الجسم الذي أعاد تصنيفه الاتحاد الفلكي الدولي ككوكب قزم عام 2006؟",
    answers: ["سيريس", "بلوتو", "القمر", "إيريس"],
    correct: 1,
    category: "space",
    difficulty: "easy"
},
{
    question: "ما اسم الكوكب القزم الموجود في حزام الكويكبات بين المريخ والمشتري؟",
    answers: ["بلوتو", "سيريس", "إيريس", "هاوميا"],
    correct: 1,
    category: "space",
    difficulty: "easy"
},
{
    question: "ما القوة الأساسية التي تجعل الكواكب تدور حول الشمس؟",
    answers: ["المغناطيسية", "الجاذبية", "الاحتكاك", "الضوء"],
    correct: 1,
    category: "space",
    difficulty: "easy"
},
{
    question: "ما اسم الصخرة أو الجسم الصغير الذي يدخل الغلاف الجوي ويحترق غالبًا ويظهر كخط مضيء؟",
    answers: ["نيزك", "كوكب", "قمر", "مجرة"],
    correct: 0,
    category: "space",
    difficulty: "easy"
},
{
    question: "ما اسم المنطقة التي تحتوي على أعداد كبيرة من الأجسام الجليدية بعد مدار نبتون؟",
    answers: ["حزام الكويكبات", "حزام كايبر", "سحابة أورت", "الحزام الاستوائي"],
    correct: 1,
    category: "space",
    difficulty: "easy"
},
{
    question: "ما اسم المركبتين الفضائيتين اللتين تجاوزتا منطقة الصدمة النهائية وأصبحتا في الفضاء بين النجمي؟",
    answers: ["Voyager 1 وVoyager 2", "Apollo 11 وApollo 12", "Pioneer 1 وPioneer 2", "Hubble وWebb"],
    correct: 0,
    category: "space",
    difficulty: "easy"
},

// ================================
// 🟡 MEDIUM — 33
// ================================

{
    question: "لماذا تُعد الزهرة أكثر حرارة من عطارد رغم أن عطارد أقرب إلى الشمس؟",
    answers: [
        "بسبب تأثير الاحتباس الحراري الشديد في غلاف الزهرة الجوي",
        "لأن عطارد لا يدور حول الشمس",
        "لأن الزهرة أكبر من الشمس",
        "لأن عطارد أبعد من الزهرة"
    ],
    correct: 0,
    category: "space",
    difficulty: "medium"
},
{
    question: "ما نوعا الكواكب العملاقة في المجموعة الشمسية؟",
    answers: [
        "صخرية وجليدية",
        "غازية وجليدية",
        "معدنية وصخرية",
        "مائية وغازية"
    ],
    correct: 1,
    category: "space",
    difficulty: "medium"
},
{
    question: "أي الكواكب التالية يُعد عملاقًا جليديًا؟",
    answers: ["المشتري", "زحل", "أورانوس", "الأرض"],
    correct: 2,
    category: "space",
    difficulty: "medium"
},
{
    question: "أي الكواكب التالية يُعد عملاقًا غازيًا؟",
    answers: ["نبتون", "أورانوس", "المشتري", "المريخ"],
    correct: 2,
    category: "space",
    difficulty: "medium"
},
{
    question: "ما اسم الذراع الصغيرة في مجرة درب التبانة التي توجد فيها مجموعتنا الشمسية؟",
    answers: ["ذراع أوريون", "ذراع القوس", "ذراع برساوس", "ذراع أندروميدا"],
    correct: 0,
    category: "space",
    difficulty: "medium"
},
{
    question: "ما الشكل العام لمجرة درب التبانة؟",
    answers: ["حلزونية قضيبية", "بيضاوية", "غير منتظمة", "دائرية كاملة"],
    correct: 0,
    category: "space",
    difficulty: "medium"
},
{
    question: "ما الوحدة التي تُستخدم كثيرًا لقياس المسافات الفلكية وتعادل متوسط المسافة بين الأرض والشمس؟",
    answers: ["السنة الضوئية", "الوحدة الفلكية", "الفرسخ", "الكيلومتر الفلكي"],
    correct: 1,
    category: "space",
    difficulty: "medium"
},
{
    question: "ما المقصود بالسنة الضوئية؟",
    answers: [
        "وحدة لقياس الزمن",
        "المسافة التي يقطعها الضوء في سنة",
        "زمن دوران الأرض",
        "زمن دوران الشمس"
    ],
    correct: 1,
    category: "space",
    difficulty: "medium"
},
{
    question: "ما العملية التي تنتج الطاقة داخل قلب الشمس؟",
    answers: ["الاحتراق الكيميائي", "الاندماج النووي", "الانشطار النووي", "التبخر"],
    correct: 1,
    category: "space",
    difficulty: "medium"
},
{
    question: "ما العنصران الأساسيان اللذان يتكون منهما معظم الشمس؟",
    answers: ["الحديد والنحاس", "الهيدروجين والهيليوم", "الأكسجين والنيتروجين", "الكربون والسيليكون"],
    correct: 1,
    category: "space",
    difficulty: "medium"
},
{
    question: "ما المرحلة التي توجد فيها الشمس حاليًا؟",
    answers: ["عملاق أحمر", "تسلسل رئيسي", "قزم أبيض", "نجم نيوتروني"],
    correct: 1,
    category: "space",
    difficulty: "medium"
},
{
    question: "ما الذي يحدد بدرجة كبيرة سرعة استهلاك النجم لوقوده وعمره؟",
    answers: ["لونه فقط", "كتلته", "عدد كواكبه", "بعده عن الأرض"],
    correct: 1,
    category: "space",
    difficulty: "medium"
},
{
    question: "أي نوع من النجوم يعيش عادةً مدة أطول؟",
    answers: [
        "النجوم منخفضة الكتلة",
        "النجوم شديدة الكتلة",
        "النجوم العملاقة فقط",
        "كل النجوم لها العمر نفسه"
    ],
    correct: 0,
    category: "space",
    difficulty: "medium"
},
{
    question: "ما المرحلة التي تسبق تكوّن نجم مكتمل من انهيار سحابة الغاز والغبار؟",
    answers: ["الكوكب القزم", "النجم الأولي", "الثقب الأسود", "القزم الأبيض"],
    correct: 1,
    category: "space",
    difficulty: "medium"
},
{
    question: "ما الذي يحدث للنجم عندما ينفد الهيدروجين من قلبه في نهاية مرحلة التسلسل الرئيسي؟",
    answers: [
        "يتوقف الجاذبية تمامًا",
        "يبدأ القلب في الانكماش وتتغير بنية النجم",
        "يتحول مباشرة إلى كوكب",
        "يختفي فورًا"
    ],
    correct: 1,
    category: "space",
    difficulty: "medium"
},
{
    question: "ما سبب وجود الفصول على الأرض بشكل أساسي؟",
    answers: [
        "تغير المسافة عن الشمس فقط",
        "ميل محور الأرض أثناء دورانها حول الشمس",
        "تغير حجم الشمس",
        "تغير سرعة الضوء"
    ],
    correct: 1,
    category: "space",
    difficulty: "medium"
},
{
    question: "ما سبب ظهور أطوار القمر المختلفة؟",
    answers: [
        "تغير شكل القمر نفسه",
        "اختلاف الجزء المضيء من القمر الذي نراه من الأرض",
        "تغير لون القمر",
        "تغير حجم الشمس"
    ],
    correct: 1,
    category: "space",
    difficulty: "medium"
},
{
    question: "ماذا يحدث في كسوف الشمس؟",
    answers: [
        "تقع الأرض بين الشمس والقمر",
        "يقع القمر بين الشمس والأرض",
        "تختفي الشمس من الكون",
        "يدخل القمر داخل الشمس"
    ],
    correct: 1,
    category: "space",
    difficulty: "medium"
},
{
    question: "ماذا يحدث في خسوف القمر؟",
    answers: [
        "يقع القمر بين الشمس والأرض",
        "تقع الأرض بين الشمس والقمر",
        "تختفي الأرض خلف الشمس",
        "يتوقف القمر عن الدوران"
    ],
    correct: 1,
    category: "space",
    difficulty: "medium"
},
{
    question: "أي جسم يملك أكبر جاذبية سطحية تقريبًا بين الكواكب الثمانية؟",
    answers: ["الأرض", "المشتري", "زحل", "نبتون"],
    correct: 1,
    category: "space",
    difficulty: "medium"
},
{
    question: "ما السبب الرئيسي لوجود حلقات زحل؟",
    answers: [
        "هي طبقة غازية مضيئة",
        "تتكون أساسًا من قطع من الجليد والصخور والغبار",
        "هي محيطات متجمدة",
        "هي أقمار صغيرة كلها متصلة"
    ],
    correct: 1,
    category: "space",
    difficulty: "medium"
},
{
    question: "ما اسم أكبر أقمار زحل؟",
    answers: ["تيتان", "أوروبا", "جانيميد", "تريتون"],
    correct: 0,
    category: "space",
    difficulty: "medium"
},
{
    question: "أي قمر للمشتري مشهور بوجود محيط مائي محتمل تحت سطحه الجليدي؟",
    answers: ["أوروبا", "تيتان", "فوبوس", "تريتون"],
    correct: 0,
    category: "space",
    difficulty: "medium"
},
{
    question: "ما المنطقة الموجودة بين مداري المريخ والمشتري وتحتوي على عدد كبير من الكويكبات؟",
    answers: ["حزام كايبر", "حزام الكويكبات الرئيسي", "سحابة أورت", "ذراع أوريون"],
    correct: 1,
    category: "space",
    difficulty: "medium"
},
{
    question: "ما الجسم الذي ساعد اكتشافه على إثارة الجدل الذي أدى إلى إعادة تعريف تصنيف بلوتو؟",
    answers: ["إيريس", "القمر", "تيتان", "جانيميد"],
    correct: 0,
    category: "space",
    difficulty: "medium"
},
{
    question: "كم عدد الكواكب القزمة المعترف بها رسميًا في المجموعة الشمسية وفق NASA؟",
    answers: ["3", "4", "5", "8"],
    correct: 2,
    category: "space",
    difficulty: "medium"
},
{
    question: "أي من الآتي ليس كوكبًا قزمًا معترفًا به رسميًا؟",
    answers: ["سيريس", "بلوتو", "إيريس", "جانيميد"],
    correct: 3,
    category: "space",
    difficulty: "medium"
},
{
    question: "ما الذي يحدد لون النجم بدرجة كبيرة؟",
    answers: ["درجة حرارته", "عدد كواكبه", "بعده عن القمر", "حجم مجرته"],
    correct: 0,
    category: "space",
    difficulty: "medium"
},
{
    question: "ما لون الشمس وفق تصنيفها النجمي؟",
    answers: ["قزم أصفر", "قزم أزرق", "عملاق أحمر", "قزم أبيض"],
    correct: 0,
    category: "space",
    difficulty: "medium"
},
{
    question: "ما اسم الجهاز الذي يستخدمه العلماء لرصد الضوء وتحليل أطياف الأجرام السماوية؟",
    answers: ["التلسكوب", "المجهر", "البارومتر", "الترمومتر"],
    correct: 0,
    category: "space",
    difficulty: "medium"
},
{
    question: "ما المقصود بالكوكب الخارجي Exoplanet؟",
    answers: [
        "كوكب خارج المجموعة الشمسية يدور حول نجم آخر",
        "كوكب خارج مجرة درب التبانة فقط",
        "قمر خارج النظام الشمسي",
        "كويكب داخل حزام الكويكبات"
    ],
    correct: 0,
    category: "space",
    difficulty: "medium"
},
{
    question: "ما الطريقة التي يمكن من خلالها اكتشاف بعض الكواكب الخارجية عند مرورها أمام نجمها؟",
    answers: ["طريقة العبور", "طريقة التبخر", "طريقة الاصطدام", "طريقة الانعكاس الأرضي"],
    correct: 0,
    category: "space",
    difficulty: "medium"
},
{
    question: "ما الاسم الذي يطلق على النقطة التي تكون فيها جاذبية جسمين مؤثرة في الحركة بشكل متوازن نسبيًا حول مركز مشترك؟",
    answers: ["مركز الكتلة", "الأفق", "الحضيض", "الذروة"],
    correct: 0,
    category: "space",
    difficulty: "medium"
},

// ================================
// 🔴 HARD — 33
// ================================

,{
    question: "ما السبب في أن السنة على كوكب بعيد عن الشمس تكون عادةً أطول من السنة على كوكب قريب منها؟",
    answers: [
        "لأن مداره أكبر ويحتاج وقتًا أطول لإكمال دورة حول الشمس",
        "لأن الكوكب البعيد لا يدور حول نفسه",
        "لأن الجاذبية لا تؤثر عليه",
        "لأن الشمس تصبح أصغر بالنسبة إليه"
    ],
    correct: 0,
    category: "space",
    difficulty: "hard"
},
{
    question: "أي كوكبين في المجموعة الشمسية هما الوحيدان اللذان لا يملكان أقمارًا طبيعية؟",
    answers: [
        "عطارد والزهرة",
        "الأرض والمريخ",
        "المريخ والمشتري",
        "الزهرة والأرض"
    ],
    correct: 0,
    category: "space",
    difficulty: "hard"
},
{
    question: "ما سبب اختلاف مدة دوران الشمس حول نفسها بين خط الاستواء والقطبين؟",
    answers: [
        "لأن الشمس جسم صلب",
        "لأن الشمس بلازما وليست جسمًا صلبًا فتدور أجزاؤها بمعدلات مختلفة",
        "لأن الجاذبية تختفي عند القطبين",
        "لأن الشمس لا تدور"
    ],
    correct: 1,
    category: "space",
    difficulty: "hard"
},
{
    question: "ما نوع المجرة التي تنتمي إليها درب التبانة؟",
    answers: ["حلزونية قضيبية", "بيضاوية عملاقة", "غير منتظمة", "عدسية"],
    correct: 0,
    category: "space",
    difficulty: "hard"
},
{
    question: "ما المدة التقريبية التي يحتاجها النظام الشمسي لإكمال دورة حول مركز مجرة درب التبانة؟",
    answers: [
        "230 ألف سنة",
        "2.3 مليون سنة",
        "230 مليون سنة",
        "2.3 مليار سنة"
    ],
    correct: 2,
    category: "space",
    difficulty: "hard"
},
{
    question: "ما النسبة التقريبية من كتلة المجموعة الشمسية التي تمثلها الشمس؟",
    answers: ["حوالي 10%", "حوالي 50%", "حوالي 90%", "حوالي 99.8%"],
    correct: 3,
    category: "space",
    difficulty: "hard"
},
{
    question: "لماذا تكون الكواكب الأربعة الداخلية صخرية في الأساس؟",
    answers: [
        "لأن المواد الصخرية فقط استطاعت تحمل الحرارة العالية قرب الشمس في بدايات النظام الشمسي",
        "لأنها تكونت خارج المجموعة الشمسية",
        "لأن الجليد لا يملك كتلة",
        "لأنها لا تتأثر بالجاذبية"
    ],
    correct: 0,
    category: "space",
    difficulty: "hard"
},
{
    question: "ما الفرق الأساسي بين الكوكب والكوكب القزم وفق تعريف الاتحاد الفلكي الدولي؟",
    answers: [
        "الكوكب يجب أن يكون أكبر من الشمس",
        "الكوكب القزم لا يدور حول الشمس",
        "الكوكب القزم لم ينظف جوار مداره من الأجسام المشابهة",
        "الكوكب القزم لا يملك جاذبية"
    ],
    correct: 2,
    category: "space",
    difficulty: "hard"
},
{
    question: "ما أول مرحلة تقريبية في تكوّن نجم من سحابة غاز وغبار؟",
    answers: [
        "انهيار مناطق كثيفة من السحابة تحت تأثير الجاذبية",
        "تحوله مباشرة إلى ثقب أسود",
        "تحوله إلى كوكب",
        "انفجاره كمستعر أعظم"
    ],
    correct: 0,
    category: "space",
    difficulty: "hard"
},
{
    question: "لماذا تعيش النجوم ذات الكتلة الأقل عادةً فترة أطول من النجوم الضخمة؟",
    answers: [
        "لأنها تستهلك وقودها بمعدل أبطأ",
        "لأنها لا تحتوي على هيدروجين",
        "لأنها لا تتأثر بالجاذبية",
        "لأنها أكبر حجمًا دائمًا"
    ],
    correct: 0,
    category: "space",
    difficulty: "hard"
},
{
    question: "ما الذي يوازن الجاذبية داخل النجم أثناء استقراره في مرحلة التسلسل الرئيسي؟",
    answers: [
        "ضغط ناتج عن الطاقة والغاز داخل النجم مقابل الجاذبية",
        "المجال المغناطيسي للأرض",
        "ضغط القمر",
        "الرياح الشمسية فقط"
    ],
    correct: 0,
    category: "space",
    difficulty: "hard"
},
{
    question: "ماذا يحدث لقلب نجم شبيه بالشمس بعد نفاد الهيدروجين من القلب؟",
    answers: [
        "يبدأ في الانكماش مع تغير بنية النجم",
        "يتحول مباشرة إلى كوكب",
        "يتوقف عن التأثر بالجاذبية",
        "يختفي تمامًا"
    ],
    correct: 0,
    category: "space",
    difficulty: "hard"
},
{
    question: "إلى أي نوع نجمي ينتمي الشمس؟",
    answers: [
        "G-type yellow dwarf main-sequence star",
        "نجم نيوتروني",
        "قزم أبيض",
        "عملاق أزرق"
    ],
    correct: 0,
    category: "space",
    difficulty: "hard"
},
{
    question: "ما الذي يقيسه التحول في الخطوط الطيفية المعروف بالانزياح نحو الأحمر عند دراسة الأجرام البعيدة؟",
    answers: [
        "تغير أطوال موجات الضوء بسبب حركة الجسم بالنسبة لنا",
        "درجة حرارة الأرض فقط",
        "كتلة القمر",
        "عدد أقمار الكوكب"
    ],
    correct: 0,
    category: "space",
    difficulty: "hard"
},
{
    question: "ما الطريقة التي تعتمد على قياس تغيرات سرعة النجم الناتجة عن تأثير جاذبية كوكب يدور حوله؟",
    answers: ["السرعة الشعاعية", "التصوير الحراري فقط", "العبور القمري", "التصوير بالمجهر"],
    correct: 0,
    category: "space",
    difficulty: "hard"
},
{
    question: "إذا مر كوكب خارجي أمام نجمه من منظورنا، فما التغير الذي يمكن قياسه؟",
    answers: [
        "انخفاض دوري صغير في سطوع النجم",
        "اختفاء المجرة بالكامل",
        "زيادة كتلة الشمس",
        "توقف دوران الكوكب"
    ],
    correct: 0,
    category: "space",
    difficulty: "hard"
},
{
    question: "لماذا لا نرى عادةً سطحًا صلبًا واضحًا للمشتري مثل الأرض؟",
    answers: [
        "لأنه عملاق غازي وله طبقات غازية وسائلة كثيفة فوق المناطق الداخلية",
        "لأنه أصغر من الأرض",
        "لأنه لا يملك جاذبية",
        "لأنه كوكب صخري بالكامل"
    ],
    correct: 0,
    category: "space",
    difficulty: "hard"
},
{
    question: "أي مجموعة تمثل الكواكب الأرضية الأربعة بشكل صحيح؟",
    answers: [
        "عطارد والزهرة والأرض والمريخ",
        "المشتري وزحل وأورانوس ونبتون",
        "الأرض والمشتري وزحل والمريخ",
        "عطارد والمشتري وأورانوس ونبتون"
    ],
    correct: 0,
    category: "space",
    difficulty: "hard"
},
{
    question: "أي مجموعة تمثل الكواكب العملاقة الأربعة في النظام الشمسي؟",
    answers: [
        "المشتري وزحل وأورانوس ونبتون",
        "عطارد والزهرة والأرض والمريخ",
        "الأرض والمريخ والمشتري وزحل",
        "الزهرة والأرض وأورانوس ونبتون"
    ],
    correct: 0,
    category: "space",
    difficulty: "hard"
},
{
    question: "ما الكوكب الذي يمتلك أعلى درجة حرارة سطحية متوسطة بين كواكب المجموعة الشمسية؟",
    answers: ["عطارد", "الزهرة", "المريخ", "المشتري"],
    correct: 1,
    category: "space",
    difficulty: "hard"
},
{
    question: "ما السبب الرئيسي لارتفاع حرارة سطح الزهرة الشديدة؟",
    answers: [
        "غلافه الجوي الكثيف والغني بثاني أكسيد الكربون وتأثير الاحتباس الحراري القوي",
        "قربه من القمر",
        "وجود محيطات ضخمة",
        "عدم وجود غلاف جوي"
    ],
    correct: 0,
    category: "space",
    difficulty: "hard"
},
{
    question: "ما اسم المنطقة البعيدة التي تضم عددًا هائلًا من الأجسام الجليدية ويقع حزام كايبر ضمن المناطق الخارجية للنظام الشمسي قبلها؟",
    answers: ["سحابة أورت", "حزام الكويكبات", "ذراع أوريون", "الغلاف الضوئي"],
    correct: 0,
    category: "space",
    difficulty: "hard"
},
{
    question: "ما الجسم الذي يدور حوله النظام الشمسي نفسه أثناء حركته داخل مجرة درب التبانة؟",
    answers: ["مركز مجرة درب التبانة", "القمر", "المشتري", "بلوتو"],
    correct: 0,
    category: "space",
    difficulty: "hard"
},
{
    question: "ما المقصود بالمركز الكتلي أو barycenter في نظام من جسمين؟",
    answers: [
        "النقطة التي يدور حولها الجسمان بسبب تأثير جاذبيتهما المتبادل",
        "أبعد نقطة عن الشمس",
        "سطح الكوكب",
        "مركز المجرة دائمًا"
    ],
    correct: 0,
    category: "space",
    difficulty: "hard"
},
{
    question: "لماذا لا تكون مدارات الكواكب دوائر مثالية بالضرورة؟",
    answers: [
        "لأن المدارات يمكن أن تكون إهليلجية وفق قوانين الحركة المدارية",
        "لأن الجاذبية لا تعمل في الفضاء",
        "لأن الكواكب لا تتحرك",
        "لأن الشمس ثابتة بلا تأثير"
    ],
    correct: 0,
    category: "space",
    difficulty: "hard"
},
{
    question: "أي قانون يصف العلاقة بين فترة مدار جسم حول الشمس وحجم مداره بشكل أساسي؟",
    answers: [
        "قانون كبلر الثالث",
        "قانون نيوتن الأول فقط",
        "قانون أوم",
        "قانون بويل"
    ],
    correct: 0,
    category: "space",
    difficulty: "hard"
},
{
    question: "إذا زادت المسافة المدارية لكوكب عن الشمس، ماذا يحدث عادةً لفترة دورانه حول الشمس؟",
    answers: [
        "تزداد فترة الدوران",
        "تنخفض دائمًا إلى صفر",
        "لا تتغير أبدًا",
        "يختفي المدار"
    ],
    correct: 0,
    category: "space",
    difficulty: "hard"
},
{
    question: "ما الذي يحدث للضوء القادم من نجم عندما يتحرك النجم مبتعدًا عنا؟",
    answers: [
        "يميل إلى الانزياح نحو الأحمر",
        "يميل إلى الانزياح نحو الأزرق",
        "يتوقف تمامًا",
        "يتحول إلى صوت"
    ],
    correct: 0,
    category: "space",
    difficulty: "hard"
},
{
    question: "ما المصطلح الذي يصف الانفجار الهائل الذي يحدث لبعض النجوم في نهاية حياتها؟",
    answers: ["مستعر أعظم", "كوكب قزم", "عبور", "كسوف"],
    correct: 0,
    category: "space",
    difficulty: "hard"
},
{
    question: "أي نوع من الأجرام يمكن أن يتكون من بقايا قلب نجم ضخم بعد انفجار مستعر أعظم؟",
    answers: ["نجم نيوتروني", "كوكب أرضي دائمًا", "قمر طبيعي", "كويكب فقط"],
    correct: 0,
    category: "space",
    difficulty: "hard"
},
{
    question: "ما الجسم الذي يمكن أن يتكون عندما تنهار بقايا نجم ضخمة جدًا بحيث تصبح الجاذبية قوية للغاية؟",
    answers: ["الثقب الأسود", "المذنب", "الكويكب", "الكوكب القزم"],
    correct: 0,
    category: "space",
    difficulty: "hard"
},
{
    question: "ما الذي يجعل الثقب الأسود لا يسمح للضوء بالهروب بعد عبور أفق الحدث؟",
    answers: [
        "شدة الجاذبية وانحناء الزمكان في تلك المنطقة",
        "لأن الضوء يصبح ماءً",
        "لأن الثقب الأسود لا يملك كتلة",
        "لأن الفضاء لا يحتوي على ضوء"
    ],
    correct: 0,
    category: "space",
    difficulty: "hard"
},
{
    question: "ما العمر التقريبي للشمس؟",
    answers: [
        "450 مليون سنة",
        "1.2 مليار سنة",
        "4.6 مليار سنة",
        "20 مليار سنة"
    ],
    correct: 2,
    category: "space",
    difficulty: "hard"
},
{
    question: "ما المتوقع أن يحدث للشمس في نهاية عمرها بعد نفاد وقودها الأساسي؟",
    answers: [
        "تتمدد إلى عملاق أحمر ثم تنتهي كقزم أبيض",
        "تتحول إلى كوكب",
        "تنفجر مباشرة كثقب أسود",
        "تختفي دون أي تغير"
    ],
    correct: 0,
    category: "space",
    difficulty: "hard"
},
{
    question: "ما الذي يجعل الضوء القادم من الأجرام البعيدة وسيلة لمعرفة ماضي الكون؟",
    answers: [
        "لأن الضوء يحتاج وقتًا ليصل إلينا، فنرى الجسم كما كان عندما غادره الضوء",
        "لأن الضوء يسافر أسرع من الزمن",
        "لأن النجوم لا تتغير",
        "لأن التلسكوب يوقف الزمن"
    ],
    correct: 0,
    category: "space",
    difficulty: "hard"
},
// ========================================
// 🐾 حيوانات وطبيعة - 100 سؤال
// 34 Easy + 33 Medium + 33 Hard
// ========================================

,{
    question: "أي حيوان يُعرف بأنه أكبر حيوان على وجه الأرض؟",
    answers: ["الحوت الأزرق", "الفيل الأفريقي", "الزرافة", "الحوت القاتل"],
    correct: 0,
    category: "animals",
    difficulty: "easy"
},
{
    question: "ما الحيوان الذي يُعرف بأنه ملك الغابة؟",
    answers: ["الأسد", "النمر", "الفهد", "الدب"],
    correct: 0,
    category: "animals",
    difficulty: "easy"
},
{
    question: "أي حيوان يمتلك خرطومًا طويلًا؟",
    answers: ["الفيل", "وحيد القرن", "فرس النهر", "الجاموس"],
    correct: 0,
    category: "animals",
    difficulty: "easy"
},
{
    question: "ما الحيوان الذي يُعرف برقبة طويلة جدًا؟",
    answers: ["الزرافة", "الحمار الوحشي", "الغزال", "الجمل"],
    correct: 0,
    category: "animals",
    difficulty: "easy"
},
{
    question: "أي حيوان يُنتج الحليب لإطعام صغاره؟",
    answers: ["الثدييات", "الزواحف", "الأسماك", "الحشرات"],
    correct: 0,
    category: "animals",
    difficulty: "easy"
},
{
    question: "أي حيوان يُعد من البرمائيات؟",
    answers: ["الضفدع", "السحلية", "النسر", "الدلفين"],
    correct: 0,
    category: "animals",
    difficulty: "easy"
},
{
    question: "أي حيوان يُعد من الزواحف؟",
    answers: ["السحلية", "الضفدع", "الأرنب", "البطريق"],
    correct: 0,
    category: "animals",
    difficulty: "easy"
},
{
    question: "أي حيوان يمتلك ريشًا؟",
    answers: ["البطريق", "الحصان", "الدلفين", "الثعبان"],
    correct: 0,
    category: "animals",
    difficulty: "easy"
},
{
    question: "ما الحيوان المعروف بقدرته على تغيير لون جلده للتمويه؟",
    answers: ["الحرباء", "الحصان", "الفيل", "الكنغر"],
    correct: 0,
    category: "animals",
    difficulty: "easy"
},
{
    question: "أي حيوان يعيش غالبًا في القطب الشمالي؟",
    answers: ["الدب القطبي", "الأسد", "الزرافة", "الفيل"],
    correct: 0,
    category: "animals",
    difficulty: "easy"
},
{
    question: "أي حيوان يعيش غالبًا في القارة القطبية الجنوبية؟",
    answers: ["البطريق", "الجمل", "النمر", "الكنغر"],
    correct: 0,
    category: "animals",
    difficulty: "easy"
},
{
    question: "ما الحيوان الذي يحمل صغيره في جراب؟",
    answers: ["الكنغر", "الزرافة", "الفيل", "الحمار الوحشي"],
    correct: 0,
    category: "animals",
    difficulty: "easy"
},
{
    question: "أي حيوان يُعرف بأنه سريع جدًا في الجري على اليابسة؟",
    answers: ["الفهد", "الفيل", "الدب", "فرس النهر"],
    correct: 0,
    category: "animals",
    difficulty: "easy"
},
{
    question: "أي حيوان يستطيع الطيران؟",
    answers: ["النسر", "الفيل", "الحصان", "السلحفاة"],
    correct: 0,
    category: "animals",
    difficulty: "easy"
},
{
    question: "ما الحيوان الذي يُعد من الأسماك؟",
    answers: ["سمك القرش", "الدلفين", "الحوت", "الفقمة"],
    correct: 0,
    category: "animals",
    difficulty: "easy"
},
{
    question: "أي حيوان يعيش في الماء ويتنفس باستخدام الخياشيم؟",
    answers: ["السمك", "الكلب", "القط", "الأرنب"],
    correct: 0,
    category: "animals",
    difficulty: "easy"
},
{
    question: "أي حيوان يُعرف بامتلاكه درعًا صلبًا؟",
    answers: ["السلحفاة", "الزرافة", "الأسد", "الذئب"],
    correct: 0,
    category: "animals",
    difficulty: "easy"
},
{
    question: "أي حيوان يُصدر صوتًا يُسمى النباح؟",
    answers: ["الكلب", "القطة", "الحصان", "البقرة"],
    correct: 0,
    category: "animals",
    difficulty: "easy"
},
{
    question: "أي حيوان يُصدر صوت المواء؟",
    answers: ["القطة", "الكلب", "الخروف", "الحصان"],
    correct: 0,
    category: "animals",
    difficulty: "easy"
},
{
    question: "أي حيوان يُعرف بأنه من آكلات العشب؟",
    answers: ["البقرة", "النمر", "الأسد", "الذئب"],
    correct: 0,
    category: "animals",
    difficulty: "easy"
},
{
    question: "ما الحيوان الذي يمتلك قرونًا كبيرة ويعيش في السافانا الأفريقية؟",
    answers: ["وحيد القرن", "الدلفين", "البطريق", "القندس"],
    correct: 0,
    category: "animals",
    difficulty: "easy"
},
{
    question: "أي حيوان معروف ببناء السدود في الأنهار؟",
    answers: ["القندس", "الأسد", "النمر", "الزرافة"],
    correct: 0,
    category: "animals",
    difficulty: "easy"
},
{
    question: "أي حيوان يُعرف بأنه أكبر حيوان بري؟",
    answers: ["الفيل الأفريقي", "الزرافة", "وحيد القرن", "فرس النهر"],
    correct: 0,
    category: "animals",
    difficulty: "easy"
},
{
    question: "أي حيوان يستطيع السباحة ويعيش في الأنهار والبحيرات؟",
    answers: ["فرس النهر", "الزرافة", "الفهد", "الحمار الوحشي"],
    correct: 0,
    category: "animals",
    difficulty: "easy"
},
{
    question: "ما اسم صغير الكلب؟",
    answers: ["جرو", "مهر", "حمل", "عجل"],
    correct: 0,
    category: "animals",
    difficulty: "easy"
},
{
    question: "ما اسم صغير الحصان؟",
    answers: ["مهر", "جرو", "عجل", "حمل"],
    correct: 0,
    category: "animals",
    difficulty: "easy"
},
{
    question: "أي حيوان يُعرف بأنه حيوان أليف شائع؟",
    answers: ["القط", "الأسد", "النمر", "التمساح"],
    correct: 0,
    category: "animals",
    difficulty: "easy"
},
{
    question: "أي حيوان لديه ثمانية أرجل؟",
    answers: ["العنكبوت", "النملة", "الفراشة", "النحلة"],
    correct: 0,
    category: "animals",
    difficulty: "easy"
},
{
    question: "كم عدد أرجل الحشرات عادةً؟",
    answers: ["6", "4", "8", "10"],
    correct: 0,
    category: "animals",
    difficulty: "easy"
},
{
    question: "أي من الآتي حشرة؟",
    answers: ["الفراشة", "العنكبوت", "العقرب", "الأخطبوط"],
    correct: 0,
    category: "animals",
    difficulty: "easy"
},
{
    question: "أي حيوان يُعرف بقدرته على إنتاج العسل؟",
    answers: ["النحل", "الفراشات", "النمل", "الذباب"],
    correct: 0,
    category: "animals",
    difficulty: "easy"
},
{
    question: "أي حيوان يُعد من اللافقاريات؟",
    answers: ["الأخطبوط", "الحصان", "الأسد", "الضفدع"],
    correct: 0,
    category: "animals",
    difficulty: "easy"
},
{
    question: "أي حيوان بحري يمتلك ثمانية أذرع؟",
    answers: ["الأخطبوط", "الحوت", "القرش", "الدلفين"],
    correct: 0,
    category: "animals",
    difficulty: "easy"
},
{
    question: "ما الحيوان الذي يُعرف بامتلاكه أشواكًا على جسمه؟",
    answers: ["القنفذ", "الأرنب", "الغزال", "الحصان"],
    correct: 0,
    category: "animals",
    difficulty: "easy"
},

// ========================================
// 🟡 MEDIUM - 33 سؤال
// ========================================

,{
    question: "أي من الآتي يُعد من الثدييات التي تضع البيض؟",
    answers: ["خلد الماء", "الدلفين", "الأسد", "الخفاش"],
    correct: 0,
    category: "animals",
    difficulty: "medium"
},
{
    question: "ما أكبر حيوان بري من حيث الوزن؟",
    answers: ["الفيل الأفريقي", "وحيد القرن الأبيض", "فرس النهر", "الزرافة"],
    correct: 0,
    category: "animals",
    difficulty: "medium"
},
{
    question: "أي حيوان من الآتي يُعد من الثدييات رغم قدرته على الطيران؟",
    answers: ["الخفاش", "النسر", "البومة", "البطريق"],
    correct: 0,
    category: "animals",
    difficulty: "medium"
},
{
    question: "ما الحيوان الذي يستخدم الصدى للمساعدة في تحديد موقع الأشياء؟",
    answers: ["الخفاش", "الفيل", "الزرافة", "الباندا"],
    correct: 0,
    category: "animals",
    difficulty: "medium"
},
{
    question: "أي حيوان يستطيع تجديد بعض أجزاء جسمه مثل الأطراف؟",
    answers: ["نجم البحر", "الفيل", "الأسد", "الحصان"],
    correct: 0,
    category: "animals",
    difficulty: "medium"
},
{
    question: "أي حيوان لديه ثلاثة قلوب؟",
    answers: ["الأخطبوط", "القرش", "الدلفين", "السلحفاة"],
    correct: 0,
    category: "animals",
    difficulty: "medium"
},
{
    question: "أي حيوان يُعرف بأن دمه أزرق بسبب الهيموسيانين؟",
    answers: ["الأخطبوط", "الأسد", "الفيل", "البطريق"],
    correct: 0,
    category: "animals",
    difficulty: "medium"
},
{
    question: "أي من الآتي يُعد من العنكبيات وليس الحشرات؟",
    answers: ["العقرب", "النحلة", "الفراشة", "الجرادة"],
    correct: 0,
    category: "animals",
    difficulty: "medium"
},
{
    question: "ما الحيوان الذي يمتلك لسانًا طويلًا جدًا بالنسبة لجسمه ويستخدمه لاصطياد الحشرات؟",
    answers: ["آكل النمل", "الفيل", "الزرافة", "فرس النهر"],
    correct: 0,
    category: "animals",
    difficulty: "medium"
},
{
    question: "أي حيوان يُعرف بأنه من أكبر الحيوانات المفترسة في المحيطات؟",
    answers: ["حوت العنبر", "الدلفين", "فقمة البحر", "سمكة المهرج"],
    correct: 0,
    category: "animals",
    difficulty: "medium"
},
{
    question: "ما الحيوان الذي يمتلك أطول عمر معروف بين بعض الفقاريات؟",
    answers: ["قرش غرينلاند", "الفهد", "الكنغر", "الغوريلا"],
    correct: 0,
    category: "animals",
    difficulty: "medium"
},
{
    question: "أي حيوان يستطيع العيش في بيئات شديدة الجفاف بفضل تكيفات خاصة؟",
    answers: ["الجمل", "الدلفين", "البطريق", "الضفدع"],
    correct: 0,
    category: "animals",
    difficulty: "medium"
},
{
    question: "ما اسم المجموعة التي تضم الأسود والنمور والقطط المنزلية؟",
    answers: ["السنوريات", "الكلبيات", "الخيليات", "البقريات"],
    correct: 0,
    category: "animals",
    difficulty: "medium"
},
{
    question: "ما اسم المجموعة التي تضم الكلاب والذئاب والثعالب؟",
    answers: ["الكلبيات", "السنوريات", "الدببة", "الخيليات"],
    correct: 0,
    category: "animals",
    difficulty: "medium"
},
{
    question: "أي حيوان يُعد من الرئيسيات؟",
    answers: ["الغوريلا", "الأسد", "الزرافة", "وحيد القرن"],
    correct: 0,
    category: "animals",
    difficulty: "medium"
},
{
    question: "أي من الآتي يُعد من الثدييات البحرية؟",
    answers: ["الدلفين", "الأخطبوط", "سمك القرش", "الأخطبوط"],
    correct: 0,
    category: "animals",
    difficulty: "medium"
},
{
    question: "أي حيوان يستخدم حوافره للمشي؟",
    answers: ["الحصان", "الدلفين", "النسر", "الأخطبوط"],
    correct: 0,
    category: "animals",
    difficulty: "medium"
},
{
    question: "ما اسم العملية التي تتحول فيها اليرقة إلى حشرة بالغة مثل الفراشة؟",
    answers: ["التحول", "الانشطار", "التبرعم", "التخمر"],
    correct: 0,
    category: "animals",
    difficulty: "medium"
},
{
    question: "أي حشرة تمر بمرحلة اليرقة والعذراء قبل أن تصبح بالغة؟",
    answers: ["الفراشة", "العنكبوت", "العقرب", "دودة الأرض"],
    correct: 0,
    category: "animals",
    difficulty: "medium"
},
{
    question: "ما الحيوان الذي يُعرف بامتلاكه أطول عنق بين الحيوانات البرية؟",
    answers: ["الزرافة", "الجمل", "الفيل", "النعامة"],
    correct: 0,
    category: "animals",
    difficulty: "medium"
},
{
    question: "أي حيوان يستخدم أذنيه الكبيرتين للمساعدة في تبريد جسمه؟",
    answers: ["الفيل الأفريقي", "الأسد", "الذئب", "الحمار الوحشي"],
    correct: 0,
    category: "animals",
    difficulty: "medium"
},
{
    question: "أي من الآتي من الحيوانات العاشبة؟",
    answers: ["الباندا العملاقة", "النمر", "الأسد", "الذئب"],
    correct: 0,
    category: "animals",
    difficulty: "medium"
},
{
    question: "ما الحيوان الذي يعتمد بشكل كبير على الخيزران في غذائه؟",
    answers: ["الباندا العملاقة", "الأسد", "الفهد", "الدب القطبي"],
    correct: 0,
    category: "animals",
    difficulty: "medium"
},
{
    question: "أي حيوان يستطيع استخدام ذيله للتوازن أثناء الحركة؟",
    answers: ["الكنغر", "الدلفين", "البطريق", "وحيد القرن"],
    correct: 0,
    category: "animals",
    difficulty: "medium"
},
{
    question: "أي حيوان يمتلك أقدامًا مكيفة للمشي على الثلج؟",
    answers: ["الدب القطبي", "الجمل", "الزرافة", "فرس النهر"],
    correct: 0,
    category: "animals",
    difficulty: "medium"
},
{
    question: "أي طائر لا يستطيع الطيران ويُعد من أكبر الطيور الحية؟",
    answers: ["النعامة", "الصقر", "النسر", "السنونو"],
    correct: 0,
    category: "animals",
    difficulty: "medium"
},
{
    question: "ما أسرع طائر أثناء الانقضاض؟",
    answers: ["الشاهين", "النعامة", "البطريق", "الببغاء"],
    correct: 0,
    category: "animals",
    difficulty: "medium"
},
{
    question: "أي طائر يستطيع تقليد أصوات كثيرة وقد يقلد كلام البشر؟",
    answers: ["الببغاء", "النعامة", "البطريق", "النورس"],
    correct: 0,
    category: "animals",
    difficulty: "medium"
},
{
    question: "أي من الآتي يُعد من البرمائيات؟",
    answers: ["السمندر", "التمساح", "السحلية", "السلحفاة"],
    correct: 0,
    category: "animals",
    difficulty: "medium"
},
{
    question: "ما السمة الأساسية التي تميز البرمائيات عن كثير من الزواحف؟",
    answers: ["ارتباط جزء من دورة حياتها بالماء", "امتلاك ريش", "إنتاج الحليب", "امتلاك ستة أرجل"],
    correct: 0,
    category: "animals",
    difficulty: "medium"
},
{
    question: "أي حيوان يُعد من الزواحف؟",
    answers: ["التمساح", "السمندر", "الحوت", "الخفاش"],
    correct: 0,
    category: "animals",
    difficulty: "medium"
},
{
    question: "أي مجموعة تضم الحيوانات ذات العمود الفقري؟",
    answers: ["الفقاريات", "اللافقاريات", "الرخويات", "المفصليات"],
    correct: 0,
    category: "animals",
    difficulty: "medium"
},
{
    question: "أي مجموعة تضم العناكب والعقارب؟",
    answers: ["العنكبيات", "الحشرات", "الرخويات", "القشريات"],
    correct: 0,
    category: "animals",
    difficulty: "medium"
},

// ========================================
// 🔴 HARD - 33 سؤال
// ========================================

{
    question: "أي حيوان يُعد أقرب أقارب الأفيال الأحياء من بين الخيارات التالية؟",
    answers: ["خروف البحر", "الحصان", "وحيد القرن", "فرس النهر"],
    correct: 0,
    category: "animals",
    difficulty: "hard"
},
{
    question: "أي مجموعة حيوانية تُعد الأقرب تطوريًا إلى الحيتان والدلافين؟",
    answers: ["فرس النهر", "الخيول", "الفيلة", "وحيد القرن"],
    correct: 0,
    category: "animals",
    difficulty: "hard"
},
{
    question: "ما الاسم العلمي للدراسة التي تهتم بالحيوانات؟",
    answers: ["علم الحيوان", "علم النبات", "علم الفلك", "علم الصخور"],
    correct: 0,
    category: "animals",
    difficulty: "hard"
},
{
    question: "أي من الآتي يُعد من الحبليات؟",
    answers: ["الفقاريات", "قناديل البحر", "الإسفنج", "نجم البحر"],
    correct: 0,
    category: "animals",
    difficulty: "hard"
},
{
    question: "ما المجموعة التي تضم الأخطبوطات والحبار؟",
    answers: ["رأسيات الأرجل", "القشريات", "العنكبيات", "الحشرات"],
    correct: 0,
    category: "animals",
    difficulty: "hard"
},
{
    question: "أي حيوان يمتلك جهازًا عصبيًا متطورًا جدًا مقارنة بمعظم اللافقاريات؟",
    answers: ["الأخطبوط", "الإسفنج", "قنديل البحر", "دودة الأرض"],
    correct: 0,
    category: "animals",
    difficulty: "hard"
},
{
    question: "ما نوع الهيكل الذي تمتلكه الحشرات والعناكب؟",
    answers: ["هيكل خارجي", "هيكل عظمي داخلي", "هيكل غضروفي", "هيكل مائي فقط"],
    correct: 0,
    category: "animals",
    difficulty: "hard"
},
{
    question: "ما اسم الهيكل الصلب الخارجي الذي يحمي جسم المفصليات؟",
    answers: ["الهيكل الخارجي", "العمود الفقري", "القفص الصدري", "الحبل الظهري"],
    correct: 0,
    category: "animals",
    difficulty: "hard"
},
{
    question: "أي مجموعة من الحيوانات تُعد أكبر مجموعة من حيث عدد الأنواع الموصوفة؟",
    answers: ["المفصليات", "الثدييات", "البرمائيات", "الزواحف"],
    correct: 0,
    category: "animals",
    difficulty: "hard"
},
{
    question: "أي حيوان يُعد من الكائنات المجترة؟",
    answers: ["البقرة", "الحصان", "الفيل", "وحيد القرن"],
    correct: 0,
    category: "animals",
    difficulty: "hard"
},
{
    question: "ما الوظيفة الأساسية للكرش في الحيوانات المجترة؟",
    answers: ["تخزين وتخمير الغذاء", "ضخ الدم", "تنقية الهواء", "إنتاج الحليب"],
    correct: 0,
    category: "animals",
    difficulty: "hard"
},
{
    question: "أي حيوان يمتلك بصمات أصابع تشبه بصمات البشر بشكل ملحوظ؟",
    answers: ["الكوالا", "الفيل", "الدلفين", "الباندا"],
    correct: 0,
    category: "animals",
    difficulty: "hard"
},
{
    question: "أي حيوان يُعرف بقدرته على استخدام المجال المغناطيسي للأرض في الملاحة؟",
    answers: ["بعض الطيور المهاجرة", "الزرافة", "الفيل فقط", "وحيد القرن فقط"],
    correct: 0,
    category: "animals",
    difficulty: "hard"
},
{
    question: "ما المصطلح الذي يصف حركة الحيوانات الموسمية من منطقة إلى أخرى؟",
    answers: ["الهجرة", "التمويه", "السبات", "الافتراس"],
    correct: 0,
    category: "animals",
    difficulty: "hard"
},
{
    question: "ما المصطلح الذي يصف دخول بعض الحيوانات في حالة انخفاض النشاط خلال الشتاء؟",
    answers: ["السبات", "الهجرة", "التكاثر", "التمويه"],
    correct: 0,
    category: "animals",
    difficulty: "hard"
},
{
    question: "أي حيوان معروف بقدرته على البقاء فترات طويلة دون شرب الماء بفضل تكيفاته الصحراوية؟",
    answers: ["الجمل", "الدلفين", "البطريق", "الضفدع"],
    correct: 0,
    category: "animals",
    difficulty: "hard"
},
{
    question: "ما الوظيفة الأساسية للخياشيم لدى الأسماك؟",
    answers: ["استخلاص الأكسجين من الماء", "هضم الطعام", "تخزين الدهون", "تكوين العظام"],
    correct: 0,
    category: "animals",
    difficulty: "hard"
},
{
    question: "أي نوع من الدم تستخدمه معظم الأسماك العظمية في الدورة الدموية؟",
    answers: ["دورة دموية واحدة", "دورة دموية مزدوجة كاملة", "لا توجد دورة دموية", "ثلاث دورات دموية"],
    correct: 0,
    category: "animals",
    difficulty: "hard"
},
{
    question: "أي مجموعة حيوانية تمتلك ريشًا كصفة مميزة؟",
    answers: ["الطيور", "الثدييات", "الزواحف", "البرمائيات"],
    correct: 0,
    category: "animals",
    difficulty: "hard"
},
{
    question: "أي حيوان يُعد من الثدييات الوحيدة القادرة على الطيران الحقيقي المستمر؟",
    answers: ["الخفاش", "السنجاب الطائر", "البومة", "البطريق"],
    correct: 0,
    category: "animals",
    difficulty: "hard"
},
{
    question: "أي تكيف يساعد الأسماك على التحكم في الطفو؟",
    answers: ["المثانة الهوائية لدى كثير من الأسماك العظمية", "الرئتان", "الريش", "الحوافر"],
    correct: 0,
    category: "animals",
    difficulty: "hard"
},
{
    question: "ما اسم العلاقة التي يستفيد فيها كائنان من بعضهما؟",
    answers: ["التكافل", "الافتراس", "التطفل", "التنافس"],
    correct: 0,
    category: "animals",
    difficulty: "hard"
},
{
    question: "ما اسم العلاقة التي يستفيد فيها كائن بينما يتضرر الآخر؟",
    answers: ["التطفل", "التكافل", "التعايش", "التعاون"],
    correct: 0,
    category: "animals",
    difficulty: "hard"
},
{
    question: "ما اسم العلاقة التي يلتهم فيها كائن كائنًا آخر للحصول على الغذاء؟",
    answers: ["الافتراس", "التكافل", "التعايش", "التطفل"],
    correct: 0,
    category: "animals",
    difficulty: "hard"
},
{
    question: "أي مستوى غذائي يشغله الحيوان الذي يتغذى مباشرة على النباتات في السلسلة الغذائية؟",
    answers: ["المستهلك الأولي", "المستهلك الثانوي", "المحلل", "المنتج"],
    correct: 0,
    category: "animals",
    difficulty: "hard"
},
{
    question: "ما المصطلح الذي يصف الدور الذي يؤديه النوع داخل النظام البيئي؟",
    answers: ["الحيز البيئي", "السلسلة الغذائية", "الموطن فقط", "المناخ"],
    correct: 0,
    category: "animals",
    difficulty: "hard"
},
{
    question: "ما الفرق الأساسي بين الموطن والحيز البيئي؟",
    answers: ["الموطن هو مكان العيش، والحيز يصف دور النوع وعلاقاته", "كلاهما يعني الشيء نفسه تمامًا", "الموطن هو الغذاء فقط", "الحيز هو المناخ فقط"],
    correct: 0,
    category: "animals",
    difficulty: "hard"
},
{
    question: "ما المصطلح الذي يصف تنوع الكائنات الحية في منطقة أو على الأرض عمومًا؟",
    answers: ["التنوع الحيوي", "التصحر", "التحجر", "التعرية"],
    correct: 0,
    category: "animals",
    difficulty: "hard"
},
{
    question: "أي نوع من النظم البيئية يتميز عادةً بتنوع حيوي مرتفع جدًا؟",
    answers: ["الغابات المطيرة الاستوائية", "الصحارى القطبية", "الأنهار الجليدية", "المناطق شديدة الجفاف"],
    correct: 0,
    category: "animals",
    difficulty: "hard"
},
{
    question: "ما المصطلح الذي يصف نوعًا لا يوجد طبيعيًا إلا في منطقة جغرافية محددة؟",
    answers: ["مستوطن", "مهاجر", "غازٍ", "مفترس"],
    correct: 0,
    category: "animals",
    difficulty: "hard"
},
{
    question: "أي من الآتي يُعد مثالًا على حيوان له هيكل عظمي داخلي؟",
    answers: ["القرش", "الأخطبوط", "الفراشة", "العنكبوت"],
    correct: 0,
    category: "animals",
    difficulty: "hard"
},
{
    question: "أي من الآتي يُعد من شوكيات الجلد؟",
    answers: ["نجم البحر", "الأخطبوط", "جراد البحر", "قنديل البحر"],
    correct: 0,
    category: "animals",
    difficulty: "hard"
},
{
    question: "ما الصفة التي تميز الثدييات عن معظم الفقاريات الأخرى؟",
    answers: ["إنتاج الحليب لإطعام الصغار", "وجود العمود الفقري", "التنفس بالأكسجين", "القدرة على الحركة"],
    correct: 0,
    category: "animals",
    difficulty: "hard"
}
// ========================================
// 🍔 أكل ومأكولات - 80 سؤال
// 27 Easy + 27 Medium + 26 Hard
// ========================================

// ---------- EASY ----------

,{
    question: "ما المكوّن الأساسي في الخبز؟",
    answers: ["الدقيق", "السكر", "الملح", "الزيت"],
    correct: 0,
    category: "food",
    difficulty: "easy"
},
{
    question: "ما الفاكهة التي تُعرف بأنها صفراء وطويلة؟",
    answers: ["الموز", "التفاح", "العنب", "الفراولة"],
    correct: 0,
    category: "food",
    difficulty: "easy"
},
{
    question: "أي من الآتي من منتجات الألبان؟",
    answers: ["الجبن", "الأرز", "المعكرونة", "العدس"],
    correct: 0,
    category: "food",
    difficulty: "easy"
},
{
    question: "ما المشروب المصنوع عادةً من حبوب البن؟",
    answers: ["القهوة", "الشاي", "العصير", "الليمونادة"],
    correct: 0,
    category: "food",
    difficulty: "easy"
},
{
    question: "أي فاكهة تحتوي عادةً على بذور صغيرة على سطحها الخارجي؟",
    answers: ["الفراولة", "الموز", "البرتقال", "المانجو"],
    correct: 0,
    category: "food",
    difficulty: "easy"
},
{
    question: "ما المكوّن الرئيسي في الأومليت؟",
    answers: ["البيض", "الأرز", "البطاطس", "الخبز"],
    correct: 0,
    category: "food",
    difficulty: "easy"
},
{
    question: "أي من الآتي من الحبوب؟",
    answers: ["الأرز", "التفاح", "الخيار", "البرتقال"],
    correct: 0,
    category: "food",
    difficulty: "easy"
},
{
    question: "ما الخضار المعروف بلونه البرتقالي؟",
    answers: ["الجزر", "الخيار", "الخس", "البازلاء"],
    correct: 0,
    category: "food",
    difficulty: "easy"
},
{
    question: "ما الفاكهة التي يُصنع منها عصير البرتقال؟",
    answers: ["البرتقال", "الليمون", "التفاح", "الكمثرى"],
    correct: 0,
    category: "food",
    difficulty: "easy"
},
{
    question: "أي من الآتي نوع من المعكرونة؟",
    answers: ["سباغيتي", "كرواسون", "بان كيك", "سوشي"],
    correct: 0,
    category: "food",
    difficulty: "easy"
},
{
    question: "ما الطعام الياباني الذي يُعرف باستخدام الأرز والسمك في أنواع كثيرة منه؟",
    answers: ["السوشي", "التاكو", "البيتزا", "اللازانيا"],
    correct: 0,
    category: "food",
    difficulty: "easy"
},
{
    question: "ما الطبق الإيطالي المصنوع غالبًا من عجينة وصلصة وجبن؟",
    answers: ["البيتزا", "السوشي", "الفلافل", "الكشري"],
    correct: 0,
    category: "food",
    difficulty: "easy"
},
{
    question: "ما المكوّن الأساسي في البطاطس المقلية؟",
    answers: ["البطاطس", "الأرز", "الذرة", "القمح"],
    correct: 0,
    category: "food",
    difficulty: "easy"
},
{
    question: "أي من الآتي فاكهة استوائية؟",
    answers: ["المانجو", "التفاح", "الكمثرى", "العنب"],
    correct: 0,
    category: "food",
    difficulty: "easy"
},
{
    question: "ما المادة الحلوة التي ينتجها النحل؟",
    answers: ["العسل", "الجبن", "الزبدة", "الخل"],
    correct: 0,
    category: "food",
    difficulty: "easy"
},
{
    question: "أي من الآتي نوع من المكسرات؟",
    answers: ["اللوز", "الأرز", "القمح", "العدس"],
    correct: 0,
    category: "food",
    difficulty: "easy"
},
{
    question: "ما الطعام المصنوع من الحليب والمخمّر غالبًا؟",
    answers: ["الزبادي", "الأرز", "الخبز", "المعكرونة"],
    correct: 0,
    category: "food",
    difficulty: "easy"
},
{
    question: "أي من الآتي يُستخدم عادةً لتحلية الطعام؟",
    answers: ["السكر", "الملح", "الفلفل", "الكمون"],
    correct: 0,
    category: "food",
    difficulty: "easy"
},
{
    question: "ما البهار الذي يُعرف بلونه الأصفر القوي؟",
    answers: ["الكركم", "الفلفل الأسود", "القرفة", "النعناع"],
    correct: 0,
    category: "food",
    difficulty: "easy"
},
{
    question: "أي من الآتي نوع من الخضروات الورقية؟",
    answers: ["الخس", "الموز", "التفاح", "البرتقال"],
    correct: 0,
    category: "food",
    difficulty: "easy"
},
{
    question: "ما الطعام المصري الشهير المصنوع من الأرز والمكرونة والعدس؟",
    answers: ["الكشري", "الفتة", "الملوخية", "الفول"],
    correct: 0,
    category: "food",
    difficulty: "easy"
},
{
    question: "ما البقول الذي يُستخدم أساسًا في طبق الفول المصري؟",
    answers: ["الفول", "الذرة", "الأرز", "القمح"],
    correct: 0,
    category: "food",
    difficulty: "easy"
},
{
    question: "ما الخضار الذي يُستخدم عادةً في صنع المخلل؟",
    answers: ["الخيار", "الموز", "الفراولة", "البرتقال"],
    correct: 0,
    category: "food",
    difficulty: "easy"
},
{
    question: "أي من الآتي مشروب ساخن؟",
    answers: ["الشاي", "العصير", "الماء البارد", "المشروب الغازي"],
    correct: 0,
    category: "food",
    difficulty: "easy"
},
{
    question: "ما الفاكهة التي تحتوي على قشرة برتقالية ويمكن تقشيرها؟",
    answers: ["البرتقال", "الفراولة", "العنب", "البطيخ"],
    correct: 0,
    category: "food",
    difficulty: "easy"
},
{
    question: "أي من الآتي نوع من الجبن؟",
    answers: ["الموزاريلا", "السباغيتي", "البريوش", "الحمص"],
    correct: 0,
    category: "food",
    difficulty: "easy"
},
{
    question: "ما الطعام المصنوع غالبًا من الحمص المطحون والطحينة؟",
    answers: ["الحمص بالطحينة", "الكشري", "السوشي", "البيتزا"],
    correct: 0,
    category: "food",
    difficulty: "easy"
},

// ---------- MEDIUM ----------

,{
    question: "ما المكوّن الذي يعطي الخبز قوامه المنتفخ أثناء التخمير؟",
    answers: ["الخميرة", "الملح", "السكر فقط", "الزيت"],
    correct: 0,
    category: "food",
    difficulty: "medium"
},
{
    question: "ما المادة الدهنية الأساسية في الزبدة؟",
    answers: ["دهون الحليب", "نشا القمح", "سكر الفاكهة", "بروتين البيض"],
    correct: 0,
    category: "food",
    difficulty: "medium"
},
{
    question: "ما اسم الطريقة التي يُطهى بها الطعام في ماء يغلي؟",
    answers: ["السلق", "الشوي", "التحمير", "التخمير"],
    correct: 0,
    category: "food",
    difficulty: "medium"
},
{
    question: "ما الطريقة التي تعتمد على طهي الطعام بحرارة جافة من الأعلى أو الأسفل غالبًا؟",
    answers: ["الشوي", "السلق", "التخمير", "النقع"],
    correct: 0,
    category: "food",
    difficulty: "medium"
},
{
    question: "أي من الآتي مصدر نباتي شائع للبروتين؟",
    answers: ["العدس", "الزبدة", "العسل", "السكر"],
    correct: 0,
    category: "food",
    difficulty: "medium"
},
{
    question: "ما العنصر الغذائي الأساسي الموجود بكثرة في الأرز والخبز؟",
    answers: ["الكربوهيدرات", "فيتامين C", "الكالسيوم فقط", "الماء فقط"],
    correct: 0,
    category: "food",
    difficulty: "medium"
},
{
    question: "ما الحمض الموجود بشكل طبيعي في الحمضيات مثل الليمون؟",
    answers: ["حمض الستريك", "حمض الخليك", "حمض اللاكتيك", "حمض الكربونيك"],
    correct: 0,
    category: "food",
    difficulty: "medium"
},
{
    question: "ما المادة التي تجعل الفلفل الحار حارًا؟",
    answers: ["الكابسيسين", "الكافيين", "اللاكتوز", "الغلوتين"],
    correct: 0,
    category: "food",
    difficulty: "medium"
},
{
    question: "أي بلد يرتبط طبق الباييلا بمطبخه التقليدي؟",
    answers: ["إسبانيا", "اليابان", "المكسيك", "الهند"],
    correct: 0,
    category: "food",
    difficulty: "medium"
},
{
    question: "أي بلد يرتبط طبق التاكو بمطبخه التقليدي؟",
    answers: ["المكسيك", "إيطاليا", "اليونان", "الصين"],
    correct: 0,
    category: "food",
    difficulty: "medium"
},
{
    question: "ما الجبن الإيطالي المعروف باستخدامه في الريزوتو وبعض الأطباق الأخرى؟",
    answers: ["بارميزان", "فيتا", "تشيدر", "إيدام"],
    correct: 0,
    category: "food",
    difficulty: "medium"
},
{
    question: "ما نوع الأرز المستخدم تقليديًا في الريزوتو؟",
    answers: ["أرز قصير أو متوسط الحبة غني بالنشا", "أرز طويل قليل النشا فقط", "أرز بري فقط", "أرز أحمر فقط"],
    correct: 0,
    category: "food",
    difficulty: "medium"
},
{
    question: "ما اسم الصلصة الفرنسية المصنوعة أساسًا من الزبدة وصفار البيض وعصير الليمون؟",
    answers: ["هولنديز", "بيستو", "مارينارا", "بشاميل"],
    correct: 0,
    category: "food",
    difficulty: "medium"
},
{
    question: "ما الصلصة الإيطالية التي تعتمد تقليديًا على الريحان والصنوبر والجبن وزيت الزيتون؟",
    answers: ["بيستو", "هولنديز", "بشاميل", "صويا"],
    correct: 0,
    category: "food",
    difficulty: "medium"
},
{
    question: "ما المكوّن الأساسي في الطحينة؟",
    answers: ["السمسم", "الفول", "الأرز", "الذرة"],
    correct: 0,
    category: "food",
    difficulty: "medium"
},
{
    question: "ما الحبوب التي تُستخدم لصنع الفشار؟",
    answers: ["الذرة", "القمح", "الأرز", "الشوفان"],
    correct: 0,
    category: "food",
    difficulty: "medium"
},
{
    question: "أي من الآتي يُعد من البقوليات؟",
    answers: ["الحمص", "الأرز", "اللوز", "السمسم"],
    correct: 0,
    category: "food",
    difficulty: "medium"
},
{
    question: "ما العملية التي يتحول فيها السكر إلى كحول وثاني أكسيد الكربون بواسطة الخميرة؟",
    answers: ["التخمير", "التجميد", "التبخير", "التقطير"],
    correct: 0,
    category: "food",
    difficulty: "medium"
},
{
    question: "ما التوابل المصنوعة من اللحاء المجفف لشجرة معينة؟",
    answers: ["القرفة", "الفلفل", "الكمون", "الكركم"],
    correct: 0,
    category: "food",
    difficulty: "medium"
},
{
    question: "ما المكوّن الأساسي في الحلاوة الطحينية؟",
    answers: ["السمسم", "الأرز", "القمح", "البطاطس"],
    correct: 0,
    category: "food",
    difficulty: "medium"
},
{
    question: "ما نوع الجبن المستخدم تقليديًا في السلطة اليونانية؟",
    answers: ["فيتا", "موزاريلا", "بارميزان", "جودة"],
    correct: 0,
    category: "food",
    difficulty: "medium"
},
{
    question: "ما الطبق الإسباني الذي يعتمد تقليديًا على الأرز؟",
    answers: ["الباييلا", "الرامن", "الريزوتو", "التاكو"],
    correct: 0,
    category: "food",
    difficulty: "medium"
},
{
    question: "ما الطبق الياباني الذي يتكون غالبًا من نودلز في مرق؟",
    answers: ["الرامن", "الباييلا", "اللازانيا", "التاكو"],
    correct: 0,
    category: "food",
    difficulty: "medium"
},
{
    question: "أي فيتامين يوجد بكثرة في الحمضيات؟",
    answers: ["فيتامين C", "فيتامين B12", "فيتامين D", "فيتامين K2 فقط"],
    correct: 0,
    category: "food",
    difficulty: "medium"
},
{
    question: "ما المادة التي تساعد على تماسك الجيلي التقليدي؟",
    answers: ["الجيلاتين", "الخميرة", "الملح", "النشا فقط"],
    correct: 0,
    category: "food",
    difficulty: "medium"
},
{
    question: "ما اسم العجين الفرنسي الهش المستخدم في الكرواسون؟",
    answers: ["عجين مورّق بالخميرة", "عجين البيتزا", "عجين الأرز", "عجين المعكرونة"],
    correct: 0,
    category: "food",
    difficulty: "medium"
},
{
    question: "ما الطعام الذي يُصنع أساسًا من حبوب الكاكاو بعد معالجتها؟",
    answers: ["الشوكولاتة", "الجبن", "الخبز", "الزبادي"],
    correct: 0,
    category: "food",
    difficulty: "medium"
},

// ---------- HARD ----------

{
    question: "ما التفاعل المسؤول بدرجة كبيرة عن اللون والنكهة المميزة للطعام عند تحميره؟",
    answers: ["تفاعل ميلارد", "التحلل المائي", "التناضح", "التبلور فقط"],
    correct: 0,
    category: "food",
    difficulty: "hard"
},
{
    question: "ما المركب الذي يعطي الطماطم لونها الأحمر المميز؟",
    answers: ["الليكوبين", "الكابسيسين", "الكافيين", "الكلوروفيل"],
    correct: 0,
    category: "food",
    difficulty: "hard"
},
{
    question: "ما الصبغة الخضراء الأساسية في النباتات؟",
    answers: ["الكلوروفيل", "الليكوبين", "الأنثوسيانين", "الكاروتين فقط"],
    correct: 0,
    category: "food",
    difficulty: "hard"
},
{
    question: "ما نوع السكر الموجود طبيعيًا في الحليب؟",
    answers: ["اللاكتوز", "الفركتوز", "السكروز", "المالتوز"],
    correct: 0,
    category: "food",
    difficulty: "hard"
},
{
    question: "ما الإنزيم الموجود في الأناناس والذي يمكنه تكسير بعض البروتينات؟",
    answers: ["البروميلين", "اللاكتاز", "الأميلاز", "البيبسين"],
    correct: 0,
    category: "food",
    difficulty: "hard"
},
{
    question: "ما الإنزيم المرتبط بهضم اللاكتوز في الأمعاء؟",
    answers: ["اللاكتاز", "البيبسين", "الأميلاز", "الليباز"],
    correct: 0,
    category: "food",
    difficulty: "hard"
},
{
    question: "أي مكوّن يعطي الميسو الياباني نكهته المميزة نتيجة التخمير؟",
    answers: ["فول الصويا المخمّر", "القمح المحمص فقط", "البطاطس", "الأرز المسلوق فقط"],
    correct: 0,
    category: "food",
    difficulty: "hard"
},
{
    question: "ما اسم المادة المسؤولة عن الطعم الخامس المعروف بالأومامي؟",
    answers: ["الغلوتامات", "اللاكتوز", "الكافيين", "الفركتوز"],
    correct: 0,
    category: "food",
    difficulty: "hard"
},
{
    question: "ما نوع البكتيريا المستخدمة تقليديًا في صناعة بعض أنواع الزبادي؟",
    answers: ["بكتيريا حمض اللاكتيك", "بكتيريا البناء الضوئي", "بكتيريا ميثانية فقط", "بكتيريا الحديد"],
    correct: 0,
    category: "food",
    difficulty: "hard"
},
{
    question: "ما المادة التي تعطي الفانيليا الطبيعية نكهتها الأساسية؟",
    answers: ["الفانيلين", "الكابسيسين", "الليكوبين", "الكافيين"],
    correct: 0,
    category: "food",
    difficulty: "hard"
},
{
    question: "أي نوع من الفطريات يستخدم في صناعة الخبز لرفع العجين؟",
    answers: ["الخميرة", "فطر عفن الجبن فقط", "فطر المشروم", "الفطر الأسود فقط"],
    correct: 0,
    category: "food",
    difficulty: "hard"
},
{
    question: "ما العنصر الذي يساعد على تكوين شبكة الغلوتين في عجين القمح؟",
    answers: ["بروتينات الغلوتين", "السكروز", "اللاكتوز", "الكافيين"],
    correct: 0,
    category: "food",
    difficulty: "hard"
},
{
    question: "ما السبب الرئيسي في أن الخبز المصنوع من القمح يمكن أن يكون مرنًا ومطاطيًا؟",
    answers: ["تكوين شبكة الغلوتين", "وجود الماء فقط", "وجود الملح فقط", "وجود السكر فقط"],
    correct: 0,
    category: "food",
    difficulty: "hard"
},
{
    question: "ما التقنية الفرنسية التي تعني تجهيز المكونات وقياسها قبل بدء الطبخ؟",
    answers: ["ميز أون بلاس", "سوفليه", "كونفيت", "برويل"],
    correct: 0,
    category: "food",
    difficulty: "hard"
},
{
    question: "ما اسم الطبخ البطيء للطعام في دهون على حرارة منخفضة؟",
    answers: ["كونفيت", "سوتيه", "بليت", "بوشيه"],
    correct: 0,
    category: "food",
    difficulty: "hard"
},
{
    question: "ما اسم طريقة الطهي التي تُستخدم فيها حرارة غير مباشرة مع دخان الخشب غالبًا؟",
    answers: ["التدخين", "السلق", "التخمير", "التجفيف بالهواء فقط"],
    correct: 0,
    category: "food",
    difficulty: "hard"
},
{
    question: "ما الحمض الرئيسي الموجود في الخل؟",
    answers: ["حمض الخليك", "حمض الستريك", "حمض اللاكتيك", "حمض الماليك"],
    correct: 0,
    category: "food",
    difficulty: "hard"
},
{
    question: "ما الحمض المرتبط بشكل أساسي بالطعم الحامض في الزبادي؟",
    answers: ["حمض اللاكتيك", "حمض الخليك", "حمض الستريك", "حمض الكربونيك"],
    correct: 0,
    category: "food",
    difficulty: "hard"
},
{
    question: "ما العملية التي تجعل الحليب يتحول إلى زبادي نتيجة نشاط البكتيريا؟",
    answers: ["التخمير اللبني", "التقطير", "التجميد", "التبلور"],
    correct: 0,
    category: "food",
    difficulty: "hard"
},
{
    question: "أي مركب نباتي يرتبط باللون البرتقالي في الجزر؟",
    answers: ["بيتا كاروتين", "الليكوبين", "الكلوروفيل", "الكافيين"],
    correct: 0,
    category: "food",
    difficulty: "hard"
},
{
    question: "ما العملية التي تحول النشا إلى سكريات أبسط أثناء بعض مراحل الهضم؟",
    answers: ["التحلل الإنزيمي", "التجميد", "التبخير", "التدخين"],
    correct: 0,
    category: "food",
    difficulty: "hard"
},
{
    question: "ما نوع الدهون الموجودة عادةً في زيت الزيتون بنسبة كبيرة؟",
    answers: ["الدهون الأحادية غير المشبعة", "الدهون المتحولة فقط", "الدهون المشبعة فقط", "البروتينات"],
    correct: 0,
    category: "food",
    difficulty: "hard"
},
{
    question: "ما اسم البروتين الذي يعطي بياض البيض جزءًا كبيرًا من خصائصه عند الطهي؟",
    answers: ["الألبومين", "الكولاجين", "الكيراتين", "الغلوتين"],
    correct: 0,
    category: "food",
    difficulty: "hard"
},
{
    question: "ما نوع الأرز الذي يُستخدم تقليديًا في تحضير السوشي؟",
    answers: ["أرز قصير الحبة لزج نسبيًا", "أرز بسمتي طويل الحبة", "أرز بري فقط", "أرز أحمر طويل الحبة فقط"],
    correct: 0,
    category: "food",
    difficulty: "hard"
},
{
    question: "ما المكوّن الذي يعطي المايونيز قوامه المستحلب؟",
    answers: ["صفار البيض", "الأرز", "الخميرة", "الجيلاتين فقط"],
    correct: 0,
    category: "food",
    difficulty: "hard"
},
{
    question: "ما المقصود بالاستحلاب في الطهي؟",
    answers: ["دمج سائلين لا يمتزجان عادةً في خليط مستقر نسبيًا", "تجميد الطعام", "تجفيف الطعام", "حرق الطعام"],
    correct: 0,
    category: "food",
    difficulty: "hard"
},

// ========================================
// 🇪🇬 مصر - 120 سؤال
// 40 Easy + 40 Medium + 40 Hard
// ========================================

// ---------- EASY ----------

{
    question: "ما عاصمة مصر؟",
    answers: ["القاهرة", "الإسكندرية", "الأقصر", "أسوان"],
    correct: 0,
    category: "egypt",
    difficulty: "easy"
},
{
    question: "ما النهر الذي يمر عبر مصر؟",
    answers: ["النيل", "الأمازون", "الدانوب", "الكونغو"],
    correct: 0,
    category: "egypt",
    difficulty: "easy"
},
{
    question: "ما البحر الذي يقع شمال مصر؟",
    answers: ["البحر المتوسط", "البحر الأحمر", "بحر العرب", "البحر الأسود"],
    correct: 0,
    category: "egypt",
    difficulty: "easy"
},
{
    question: "ما البحر الذي يقع شرق مصر؟",
    answers: ["البحر الأحمر", "البحر المتوسط", "بحر قزوين", "بحر العرب"],
    correct: 0,
    category: "egypt",
    difficulty: "easy"
},
{
    question: "ما المدينة المصرية المشهورة بالأهرامات؟",
    answers: ["الجيزة", "أسوان", "بورسعيد", "الغردقة"],
    correct: 0,
    category: "egypt",
    difficulty: "easy"
},
{
    question: "ما اسم الهرم الأكبر في الجيزة؟",
    answers: ["هرم خوفو", "هرم خفرع", "هرم منقرع", "هرم زوسر"],
    correct: 0,
    category: "egypt",
    difficulty: "easy"
},
{
    question: "من بنى الهرم الأكبر؟",
    answers: ["خوفو", "خفرع", "منقرع", "رمسيس الثاني"],
    correct: 0,
    category: "egypt",
    difficulty: "easy"
},
{
    question: "ما التمثال الشهير الموجود بجوار أهرامات الجيزة؟",
    answers: ["أبو الهول", "تمثال الحرية", "تمثال ممنون", "المسلة"],
    correct: 0,
    category: "egypt",
    difficulty: "easy"
},
{
    question: "ما المدينة المشهورة بمعابد الكرنك؟",
    answers: ["الأقصر", "الإسماعيلية", "السويس", "مطروح"],
    correct: 0,
    category: "egypt",
    difficulty: "easy"
},
{
    question: "ما المدينة المشهورة بالسد العالي؟",
    answers: ["أسوان", "القاهرة", "الجيزة", "المنصورة"],
    correct: 0,
    category: "egypt",
    difficulty: "easy"
},
{
    question: "ما القناة التي تربط البحر المتوسط بالبحر الأحمر؟",
    answers: ["قناة السويس", "قناة بنما", "قناة النيل", "قناة النخيل"],
    correct: 0,
    category: "egypt",
    difficulty: "easy"
},
{
    question: "ما المدينة الموجودة عند المدخل الشمالي لقناة السويس؟",
    answers: ["بورسعيد", "السويس", "الإسماعيلية", "العريش"],
    correct: 0,
    category: "egypt",
    difficulty: "easy"
},
{
    question: "ما المدينة الموجودة عند المدخل الجنوبي لقناة السويس؟",
    answers: ["السويس", "بورسعيد", "الإسماعيلية", "دمياط"],
    correct: 0,
    category: "egypt",
    difficulty: "easy"
},
{
    question: "ما العملة الرسمية في مصر؟",
    answers: ["الجنيه المصري", "الدينار المصري", "الريال المصري", "الدرهم المصري"],
    correct: 0,
    category: "egypt",
    difficulty: "easy"
},
{
    question: "ما اللغة الرسمية في مصر؟",
    answers: ["العربية", "الإنجليزية", "الفرنسية", "اليونانية"],
    correct: 0,
    category: "egypt",
    difficulty: "easy"
},
{
    question: "ما المدينة المصرية المشهورة بمكتبة الإسكندرية الحديثة؟",
    answers: ["الإسكندرية", "القاهرة", "الأقصر", "أسوان"],
    correct: 0,
    category: "egypt",
    difficulty: "easy"
},
{
    question: "في أي قارة تقع معظم أراضي مصر؟",
    answers: ["أفريقيا", "آسيا", "أوروبا", "أمريكا الجنوبية"],
    correct: 0,
    category: "egypt",
    difficulty: "easy"
},
{
    question: "ما شبه الجزيرة التي تقع في الجزء الآسيوي من مصر؟",
    answers: ["سيناء", "القرم", "العربية", "الأناضول"],
    correct: 0,
    category: "egypt",
    difficulty: "easy"
},
{
    question: "ما المدينة المصرية المشهورة بالمنتجعات على البحر الأحمر؟",
    answers: ["الغردقة", "طنطا", "الفيوم", "الزقازيق"],
    correct: 0,
    category: "egypt",
    difficulty: "easy"
},
{
    question: "ما المدينة المصرية المشهورة بمنتجعات شرم الشيخ؟",
    answers: ["شرم الشيخ", "المنصورة", "دمياط", "سوهاج"],
    correct: 0,
    category: "egypt",
    difficulty: "easy"
},
{
    question: "ما اسم الصحراء الموجودة غرب نهر النيل؟",
    answers: ["الصحراء الغربية", "الصحراء الشرقية", "سيناء", "النوبة"],
    correct: 0,
    category: "egypt",
    difficulty: "easy"
},
{
    question: "ما اسم الصحراء الموجودة بين وادي النيل والبحر الأحمر؟",
    answers: ["الصحراء الشرقية", "الصحراء الغربية", "صحراء سيناء", "صحراء النقب"],
    correct: 0,
    category: "egypt",
    difficulty: "easy"
},
{
    question: "ما اسم العاصمة الإدارية الحديثة لمصر؟",
    answers: ["العاصمة الإدارية الجديدة", "الإسكندرية الجديدة", "مدينة النور", "مدينة القناة"],
    correct: 0,
    category: "egypt",
    difficulty: "easy"
},
{
    question: "ما المدينة المصرية التي تشتهر بصناعة الأثاث؟",
    answers: ["دمياط", "أسوان", "الأقصر", "الغردقة"],
    correct: 0,
    category: "egypt",
    difficulty: "easy"
},
{
    question: "ما المدينة المصرية المشهورة بصناعة الفخار في بعض مناطقها؟",
    answers: ["الفسطاط", "بورسعيد", "السويس", "العريش"],
    correct: 0,
    category: "egypt",
    difficulty: "easy"
},
{
    question: "ما الطبق المصري المصنوع من الأرز والمكرونة والعدس؟",
    answers: ["الكشري", "الفتة", "الملوخية", "الفول"],
    correct: 0,
    category: "egypt",
    difficulty: "easy"
},
{
    question: "ما الطبق المصري الذي يعتمد على الفول المدمس؟",
    answers: ["الفول", "الكشري", "الملوخية", "المحشي"],
    correct: 0,
    category: "egypt",
    difficulty: "easy"
},
{
    question: "ما الأكلة المصرية الخضراء الشهيرة التي تُحضّر من أوراق نبات الملوخية؟",
    answers: ["الملوخية", "الفلافل", "الكشري", "الفطير"],
    correct: 0,
    category: "egypt",
    difficulty: "easy"
},
{
    question: "ما اسم الفلافل المصرية الشائع؟",
    answers: ["طعمية", "سمبوسة", "كبة", "فتة"],
    correct: 0,
    category: "egypt",
    difficulty: "easy"
},
{
    question: "ما اسم المدينة التي توجد بها أهرامات الجيزة؟",
    answers: ["الجيزة", "القاهرة", "الأقصر", "أسوان"],
    correct: 0,
    category: "egypt",
    difficulty: "easy"
},
{
    question: "ما اسم الملكة المصرية الشهيرة التي ارتبطت بمعبد فيلة؟",
    answers: ["كليوباترا", "نفرتيتي", "حتشبسوت", "تي"],
    correct: 0,
    category: "egypt",
    difficulty: "easy"
},
{
    question: "ما اسم الملكة التي حكمت مصر خلال الأسرة الثامنة عشرة؟",
    answers: ["حتشبسوت", "كليوباترا", "نفرتاري", "نفرتيتي"],
    correct: 0,
    category: "egypt",
    difficulty: "easy"
},
{
    question: "ما اسم الفرعون الشهير المرتبط بقناع ذهبي اكتُشف في مقبرته؟",
    answers: ["توت عنخ آمون", "خوفو", "خفرع", "أخناتون"],
    correct: 0,
    category: "egypt",
    difficulty: "easy"
},
{
    question: "ما اسم المقبرة الشهيرة التي اكتُشفت فيها كنوز توت عنخ آمون؟",
    answers: ["KV62", "KV5", "KV35", "KV7"],
    correct: 0,
    category: "egypt",
    difficulty: "easy"
},
{
    question: "ما الوادي الذي توجد فيه مقابر كثيرة لملوك الدولة الحديثة؟",
    answers: ["وادي الملوك", "وادي الحيتان", "وادي النطرون", "وادي الريان"],
    correct: 0,
    category: "egypt",
    difficulty: "easy"
},
{
    question: "ما المدينة التي يوجد بها معبد أبو سمبل؟",
    answers: ["أسوان", "القاهرة", "الإسكندرية", "السويس"],
    correct: 0,
    category: "egypt",
    difficulty: "easy"
},
{
    question: "من الفرعون الذي ارتبط بتشييد معبدي أبو سمبل؟",
    answers: ["رمسيس الثاني", "خوفو", "أحمس الأول", "تحتمس الثالث"],
    correct: 0,
    category: "egypt",
    difficulty: "easy"
},
{
    question: "ما البحر الذي تقع عليه مدينة الغردقة؟",
    answers: ["البحر الأحمر", "البحر المتوسط", "بحر العرب", "البحر الأسود"],
    correct: 0,
    category: "egypt",
    difficulty: "easy"
},
{
    question: "ما اسم العملة التي تستخدمها مصر؟",
    answers: ["الجنيه المصري", "الجنيه الإسترليني", "الدينار", "الريال"],
    correct: 0,
    category: "egypt",
    difficulty: "easy"
},

// ---------- MEDIUM ----------

{
    question: "في أي عام افتُتحت قناة السويس لأول مرة؟",
    answers: ["1869", "1859", "1882", "1914"],
    correct: 0,
    category: "egypt",
    difficulty: "medium"
},
{
    question: "في أي عام بدأت الثورة المصرية التي أطاحت بحكم الملك فاروق؟",
    answers: ["1952", "1948", "1956", "1967"],
    correct: 0,
    category: "egypt",
    difficulty: "medium"
},
{
    question: "من كان آخر ملوك مصر قبل إعلان الجمهورية؟",
    answers: ["الملك فاروق", "الملك فؤاد الأول", "الملك عباس حلمي الثاني", "الملك إسماعيل"],
    correct: 0,
    category: "egypt",
    difficulty: "medium"
},
{
    question: "في أي عام أُعلنت الجمهورية في مصر؟",
    answers: ["1953", "1952", "1956", "1960"],
    correct: 0,
    category: "egypt",
    difficulty: "medium"
},
{
    question: "من كان أول رئيس لجمهورية مصر؟",
    answers: ["محمد نجيب", "جمال عبد الناصر", "أنور السادات", "حسني مبارك"],
    correct: 0,
    category: "egypt",
    difficulty: "medium"
},
{
    question: "من الرئيس المصري الذي أعلن تأميم قناة السويس عام 1956؟",
    answers: ["جمال عبد الناصر", "محمد نجيب", "أنور السادات", "حسني مبارك"],
    correct: 0,
    category: "egypt",
    difficulty: "medium"
},
{
    question: "ما اسم الحرب التي وقعت عام 1956 بعد تأميم قناة السويس؟",
    answers: ["العدوان الثلاثي", "حرب أكتوبر", "حرب الاستنزاف", "حرب الخليج"],
    correct: 0,
    category: "egypt",
    difficulty: "medium"
},
{
    question: "في أي عام بدأت حرب أكتوبر؟",
    answers: ["1973", "1967", "1970", "1976"],
    correct: 0,
    category: "egypt",
    difficulty: "medium"
},
{
    question: "ما القناة التي عبرتها القوات المصرية في حرب أكتوبر 1973؟",
    answers: ["قناة السويس", "قناة بنما", "قناة النيل", "قناة البحر الأحمر"],
    correct: 0,
    category: "egypt",
    difficulty: "medium"
},
{
    question: "ما الخط الدفاعي الإسرائيلي الذي عبرته القوات المصرية في بداية حرب أكتوبر؟",
    answers: ["خط بارليف", "خط ماجينو", "خط سيغفريد", "خط واترلو"],
    correct: 0,
    category: "egypt",
    difficulty: "medium"
},
{
    question: "من الرئيس المصري الذي تولى الحكم بعد جمال عبد الناصر؟",
    answers: ["أنور السادات", "محمد نجيب", "حسني مبارك", "عدلي منصور"],
    correct: 0,
    category: "egypt",
    difficulty: "medium"
},
{
    question: "من الرئيس المصري الذي تولى الحكم بعد أنور السادات؟",
    answers: ["حسني مبارك", "جمال عبد الناصر", "محمد نجيب", "محمد مرسي"],
    correct: 0,
    category: "egypt",
    difficulty: "medium"
},
{
    question: "ما اسم السد الضخم الموجود بالقرب من أسوان؟",
    answers: ["السد العالي", "سد النهضة", "سد أسوان القديم", "سد القناطر"],
    correct: 0,
    category: "egypt",
    difficulty: "medium"
},
{
    question: "ما البحيرة التي تكونت خلف السد العالي؟",
    answers: ["بحيرة ناصر", "بحيرة قارون", "بحيرة المنزلة", "بحيرة البرلس"],
    correct: 0,
    category: "egypt",
    difficulty: "medium"
},
{
    question: "ما المحافظة التي تقع فيها واحة سيوة؟",
    answers: ["مطروح", "الوادي الجديد", "الفيوم", "البحيرة"],
    correct: 0,
    category: "egypt",
    difficulty: "medium"
},
{
    question: "ما الواحة المشهورة بعيون المياه وأشجار النخيل في الصحراء الغربية؟",
    answers: ["سيوة", "الفرافرة", "الخارجة", "الداخلة"],
    correct: 0,
    category: "egypt",
    difficulty: "medium"
},
{
    question: "ما المحافظة التي تشتهر بوجود واحة الفيوم؟",
    answers: ["الفيوم", "الجيزة", "المنيا", "أسيوط"],
    correct: 0,
    category: "egypt",
    difficulty: "medium"
},
{
    question: "ما البحيرة الشهيرة الموجودة في الفيوم؟",
    answers: ["بحيرة قارون", "بحيرة ناصر", "بحيرة المنزلة", "بحيرة البرلس"],
    correct: 0,
    category: "egypt",
    difficulty: "medium"
},
{
    question: "ما اسم المنطقة الأثرية التي تضم هرم زوسر المدرج؟",
    answers: ["سقارة", "دهشور", "الجيزة", "أبو صير"],
    correct: 0,
    category: "egypt",
    difficulty: "medium"
},
{
    question: "من الفرعون المرتبط بالهرم المدرج في سقارة؟",
    answers: ["زوسر", "خوفو", "خفرع", "منقرع"],
    correct: 0,
    category: "egypt",
    difficulty: "medium"
},
{
    question: "من المهندس المرتبط بتصميم هرم زوسر المدرج؟",
    answers: ["إمحوتب", "سنموت", "حم إيونو", "إري حور"],
    correct: 0,
    category: "egypt",
    difficulty: "medium"
},
{
    question: "ما المدينة التي كانت عاصمة مصر القديمة في فترات طويلة وتوجد بالقرب منها آثار منف؟",
    answers: ["ممفيس", "الإسكندرية", "أسوان", "بورسعيد"],
    correct: 0,
    category: "egypt",
    difficulty: "medium"
},
{
    question: "ما المدينة التي أسسها الإسكندر الأكبر في مصر؟",
    answers: ["الإسكندرية", "القاهرة", "الجيزة", "الأقصر"],
    correct: 0,
    category: "egypt",
    difficulty: "medium"
},
{
    question: "من أسس مدينة الإسكندرية؟",
    answers: ["الإسكندر الأكبر", "بطليموس الأول", "يوليوس قيصر", "رمسيس الثاني"],
    correct: 0,
    category: "egypt",
    difficulty: "medium"
},
{
    question: "ما الأسرة التي حكمت مصر في عهد كليوباترا السابعة؟",
    answers: ["البطلمية", "الثامنة عشرة", "التاسعة عشرة", "الرابعة"],
    correct: 0,
    category: "egypt",
    difficulty: "medium"
},
{
    question: "ما اسم آخر ملكة فعالة من الأسرة البطلمية؟",
    answers: ["كليوباترا السابعة", "نفرتيتي", "حتشبسوت", "نفرتاري"],
    correct: 0,
    category: "egypt",
    difficulty: "medium"
},
{
    question: "ما اسم الحجر الذي ساعد في فك رموز الكتابة المصرية القديمة؟",
    answers: ["حجر رشيد", "حجر الجيزة", "حجر الأقصر", "حجر طيبة"],
    correct: 0,
    category: "egypt",
    difficulty: "medium"
},
{
    question: "أين اكتُشف حجر رشيد؟",
    answers: ["رشيد", "الأقصر", "الجيزة", "أسوان"],
    correct: 0,
    category: "egypt",
    difficulty: "medium"
},
{
    question: "ما اسم الكتابة المصرية القديمة التي كانت تستخدم الرموز المصورة؟",
    answers: ["الهيروغليفية", "المسمارية", "الفينيقية", "اللاتينية"],
    correct: 0,
    category: "egypt",
    difficulty: "medium"
},
{
    question: "ما اسم العاصمة القديمة التي أصبحت مركزًا مهمًا لمصر في العصر الإسلامي المبكر؟",
    answers: ["الفسطاط", "الإسكندرية", "منف", "طيبة"],
    correct: 0,
    category: "egypt",
    difficulty: "medium"
},
{
    question: "من أسس مدينة الفسطاط؟",
    answers: ["عمرو بن العاص", "صلاح الدين الأيوبي", "أحمد بن طولون", "محمد علي"],
    correct: 0,
    category: "egypt",
    difficulty: "medium"
},
{
    question: "ما المدينة التي بناها الفاطميون لتكون عاصمة لهم في مصر؟",
    answers: ["القاهرة", "الفسطاط", "الإسكندرية", "دمياط"],
    correct: 0,
    category: "egypt",
    difficulty: "medium"
},
{
    question: "من القائد الذي أسس القاهرة الفاطمية؟",
    answers: ["جوهر الصقلي", "صلاح الدين", "عمرو بن العاص", "محمد علي"],
    correct: 0,
    category: "egypt",
    difficulty: "medium"
},
{
    question: "ما الجامع الذي يُعد من أشهر معالم القاهرة الفاطمية؟",
    answers: ["الجامع الأزهر", "جامع محمد علي", "جامع عمرو بن العاص", "مسجد ابن طولون"],
    correct: 0,
    category: "egypt",
    difficulty: "medium"
},
{
    question: "من بنى قلعة صلاح الدين في القاهرة؟",
    answers: ["صلاح الدين الأيوبي", "عمرو بن العاص", "جوهر الصقلي", "محمد علي"],
    correct: 0,
    category: "egypt",
    difficulty: "medium"
},
{
    question: "ما المسجد الشهير الموجود داخل قلعة القاهرة؟",
    answers: ["مسجد محمد علي", "الجامع الأزهر", "مسجد ابن طولون", "مسجد عمرو"],
    correct: 0,
    category: "egypt",
    difficulty: "medium"
},
{
    question: "ما المدينة التي تُعرف تاريخيًا باسم طيبة؟",
    answers: ["الأقصر", "القاهرة", "الإسكندرية", "أسوان"],
    correct: 0,
    category: "egypt",
    difficulty: "medium"
},
{
    question: "ما اسم المعبد الضخم الموجود في الأقصر والمخصص لعبادة آمون رع ومعبودات أخرى؟",
    answers: ["مجمع معابد الكرنك", "معبد فيلة", "معبد إدفو", "معبد كوم أمبو"],
    correct: 0,
    category: "egypt",
    difficulty: "medium"
},
{
    question: "ما المعبد الموجود في جزيرة قرب أسوان والذي نُقل جزء كبير منه بسبب بناء السد العالي؟",
    answers: ["معبد فيلة", "معبد الأقصر", "معبد إدفو", "معبد دندرة"],
    correct: 0,
    category: "egypt",
    difficulty: "medium"
},

// ---------- HARD ----------

{
    question: "ما اسم العاصمة التي أسسها أخناتون خلال فترة عبادته لآتون؟",
    answers: ["أخيتاتون", "طيبة", "منف", "تانيس"],
    correct: 0,
    category: "egypt",
    difficulty: "hard"
},
{
    question: "ما الاسم الحديث لموقع أخيتاتون القديمة؟",
    answers: ["تل العمارنة", "سقارة", "دهشور", "أبو سمبل"],
    correct: 0,
    category: "egypt",
    difficulty: "hard"
},
{
    question: "من الفرعون الذي ارتبط بعبادة آتون بشكل بارز؟",
    answers: ["أخناتون", "رمسيس الثاني", "تحتمس الثالث", "خوفو"],
    correct: 0,
    category: "egypt",
    difficulty: "hard"
},
{
    question: "ما الأسرة التي ينتمي إليها أخناتون؟",
    answers: ["الأسرة الثامنة عشرة", "الأسرة الرابعة", "الأسرة التاسعة عشرة", "الأسرة السادسة والعشرون"],
    correct: 0,
    category: "egypt",
    difficulty: "hard"
},
{
    question: "من كانت زوجة أخناتون الشهيرة؟",
    answers: ["نفرتيتي", "كليوباترا السابعة", "حتشبسوت", "نفرتاري"],
    correct: 0,
    category: "egypt",
    difficulty: "hard"
},
{
    question: "ما الاسم الذي عُرف به توت عنخ آمون في بداية عهده قبل تغييره؟",
    answers: ["توت عنخ آتون", "أمنحتب الرابع", "سمنخ كارع", "تحتمس الرابع"],
    correct: 0,
    category: "egypt",
    difficulty: "hard"
},
{
    question: "ما الأسرة التي ينتمي إليها رمسيس الثاني؟",
    answers: ["الأسرة التاسعة عشرة", "الأسرة الثامنة عشرة", "الأسرة الرابعة", "الأسرة السادسة والعشرون"],
    correct: 0,
    category: "egypt",
    difficulty: "hard"
},
{
    question: "ما المعركة الشهيرة التي خاضها رمسيس الثاني ضد الحيثيين؟",
    answers: ["معركة قادش", "معركة مجدو", "معركة حطين", "معركة عين جالوت"],
    correct: 0,
    category: "egypt",
    difficulty: "hard"
},
{
    question: "ما الدولة التي واجهتها مصر في معركة قادش؟",
    answers: ["الحيثيون", "الآشوريون", "الرومان", "الفرس"],
    correct: 0,
    category: "egypt",
    difficulty: "hard"
},
{
    question: "ما الفرعون الذي ارتبط بحملة عسكرية إلى بلاد الشام في معركة مجدو؟",
    answers: ["تحتمس الثالث", "خوفو", "رمسيس الثالث", "أخناتون"],
    correct: 0,
    category: "egypt",
    difficulty: "hard"
},
{
    question: "ما الأسرة التي ينتمي إليها تحتمس الثالث؟",
    answers: ["الأسرة الثامنة عشرة", "الأسرة التاسعة عشرة", "الأسرة الرابعة", "الأسرة الثانية والعشرون"],
    correct: 0,
    category: "egypt",
    difficulty: "hard"
},
{
    question: "ما الملكة التي حكمت مصر بوصفها فرعونًا في الأسرة الثامنة عشرة؟",
    answers: ["حتشبسوت", "كليوباترا السابعة", "نفرتيتي", "نفرتاري"],
    correct: 0,
    category: "egypt",
    difficulty: "hard"
},
{
    question: "ما المعبد الشهير الذي شيدته حتشبسوت بالقرب من وادي الملوك؟",
    answers: ["معبد الدير البحري", "معبد فيلة", "معبد إدفو", "معبد كوم أمبو"],
    correct: 0,
    category: "egypt",
    difficulty: "hard"
},
{
    question: "ما الاسم القديم للأقصر؟",
    answers: ["طيبة", "منف", "أخيتاتون", "سايس"],
    correct: 0,
    category: "egypt",
    difficulty: "hard"
},
{
    question: "ما اسم المدينة التي كانت عاصمة مصر خلال الدولة القديمة وكانت تقع بالقرب من القاهرة الحالية؟",
    answers: ["منف", "طيبة", "الإسكندرية", "تانيس"],
    correct: 0,
    category: "egypt",
    difficulty: "hard"
},
{
    question: "أي فرعون ارتبط بالهرم الأحمر في دهشور؟",
    answers: ["سنفرو", "خوفو", "خفرع", "منقرع"],
    correct: 0,
    category: "egypt",
    difficulty: "hard"
},
{
    question: "من هو والد خوفو وفق التسلسل الملكي الشائع؟",
    answers: ["سنفرو", "خفرع", "منقرع", "زوسر"],
    correct: 0,
    category: "egypt",
    difficulty: "hard"
},
{
    question: "ما الفرعون الذي بنى الهرم المنحني في دهشور؟",
    answers: ["سنفرو", "خوفو", "خفرع", "منقرع"],
    correct: 0,
    category: "egypt",
    difficulty: "hard"
},
{
    question: "ما الهرم الذي يُعد من مشروعات سنفرو في دهشور؟",
    answers: ["الهرم الأحمر", "هرم خوفو", "هرم خفرع", "هرم منقرع"],
    correct: 0,
    category: "egypt",
    difficulty: "hard"
},
{
    question: "ما اسم آخر حكام الأسرة الثلاثين في مصر القديمة؟",
    answers: ["نختنبو الثاني", "بطليموس الأول", "خوفو", "رمسيس الثاني"],
    correct: 0,
    category: "egypt",
    difficulty: "hard"
},
{
    question: "من الذي أصبح حاكمًا لمصر بعد الفتح المقدوني وأسس الأسرة البطلمية؟",
    answers: ["بطليموس الأول", "الإسكندر الأكبر", "يوليوس قيصر", "أغسطس"],
    correct: 0,
    category: "egypt",
    difficulty: "hard"
},
{
    question: "ما الأسرة التي حكمت مصر خلال معظم الفترة الهلنستية بعد وفاة الإسكندر؟",
    answers: ["البطلمية", "الفاطمية", "الأيوبية", "المملوكية"],
    correct: 0,
    category: "egypt",
    difficulty: "hard"
},
{
    question: "ما اسم المعركة البحرية التي انتهت بهزيمة كليوباترا وأنطونيوس أمام أوكتافيان؟",
    answers: ["أكتيوم", "قادش", "مجدو", "واترلو"],
    correct: 0,
    category: "egypt",
    difficulty: "hard"
},
{
    question: "في أي عام أصبحت مصر ولاية رومانية بعد وفاة كليوباترا السابعة؟",
    answers: ["30 قبل الميلاد", "44 قبل الميلاد", "14 ميلادي", "31 ميلادي"],
    correct: 0,
    category: "egypt",
    difficulty: "hard"
},
{
    question: "ما اسم أقدم عاصمة إسلامية تأسست في مصر بعد الفتح العربي؟",
    answers: ["الفسطاط", "القاهرة", "القطائع", "العسكر"],
    correct: 0,
    category: "egypt",
    difficulty: "hard"
},
{
    question: "ما المدينة التي أسسها أحمد بن طولون لتكون مركز حكمه؟",
    answers: ["القطائع", "الفسطاط", "القاهرة", "الإسكندرية"],
    correct: 0,
    category: "egypt",
    difficulty: "hard"
},
{
    question: "ما المسجد الشهير الذي بناه أحمد بن طولون في القاهرة؟",
    answers: ["مسجد ابن طولون", "الجامع الأزهر", "مسجد محمد علي", "مسجد عمرو بن العاص"],
    correct: 0,
    category: "egypt",
    difficulty: "hard"
},
{
    question: "من القائد الذي أنهى الدولة الفاطمية في مصر وأسس الدولة الأيوبية؟",
    answers: ["صلاح الدين الأيوبي", "جوهر الصقلي", "عمرو بن العاص", "قطز"],
    correct: 0,
    category: "egypt",
    difficulty: "hard"
},
{
    question: "ما المعركة التي هزم فيها المماليك المغول في مصر والشام عام 1260؟",
    answers: ["عين جالوت", "حطين", "المنصورة", "قادش"],
    correct: 0,
    category: "egypt",
    difficulty: "hard"
},
{
    question: "من السلطان المملوكي المرتبط بانتصار عين جالوت؟",
    answers: ["سيف الدين قطز", "صلاح الدين", "بيبرس فقط", "قلاوون"],
    correct: 0,
    category: "egypt",
    difficulty: "hard"
},
{
    question: "من القائد المملوكي الذي خلف قطز وأصبح سلطانًا بعد عين جالوت؟",
    answers: ["الظاهر بيبرس", "صلاح الدين", "قلاوون", "برقوق"],
    correct: 0,
    category: "egypt",
    difficulty: "hard"
},
{
    question: "ما الأسرة التي حكمت مصر في عهد محمد علي باشا وأحفاده حتى ثورة 1952؟",
    answers: ["أسرة محمد علي", "الأسرة العلوية القديمة", "الأسرة البطلمية", "الأسرة الفاطمية"],
    correct: 0,
    category: "egypt",
    difficulty: "hard"
},
{
    question: "من الحاكم الذي يُنسب إليه تأسيس مصر الحديثة في القرن التاسع عشر؟",
    answers: ["محمد علي باشا", "الخديوي إسماعيل", "عباس حلمي الثاني", "فؤاد الأول"],
    correct: 0,
    category: "egypt",
    difficulty: "hard"
},
{
    question: "في عهد أي حاكم افتتحت قناة السويس عام 1869؟",
    answers: ["الخديوي إسماعيل", "محمد علي باشا", "الملك فاروق", "الخديوي عباس حلمي الثاني"],
    correct: 0,
    category: "egypt",
    difficulty: "hard"
},
{
    question: "ما اسم الجمعية التي قادها سعد زغلول والحركة الوطنية المصرية عام 1919؟",
    answers: ["حزب الوفد", "الحزب الوطني", "الإخوان المسلمون", "الحزب الاشتراكي"],
    correct: 0,
    category: "egypt",
    difficulty: "hard"
},
{
    question: "ما الحدث الذي اندلع في مصر عام 1919 ضد الاحتلال البريطاني؟",
    answers: ["ثورة 1919", "ثورة يوليو", "ثورة عرابي", "ثورة 1956"],
    correct: 0,
    category: "egypt",
    difficulty: "hard"
},
{
    question: "ما الاتفاقية التي ارتبطت بإعادة العلاقات الرسمية بين مصر وإسرائيل بعد حرب أكتوبر؟",
    answers: ["اتفاقيات كامب ديفيد", "اتفاقية سايكس بيكو", "معاهدة فرساي", "اتفاقية أوسلو"],
    correct: 0,
    category: "egypt",
    difficulty: "hard"
},
{
    question: "في أي عام وُقعت معاهدة السلام المصرية الإسرائيلية؟",
    answers: ["1979", "1978", "1981", "1973"],
    correct: 0,
    category: "egypt",
    difficulty: "hard"
},
{
    question: "ما المنظمة الدولية التي تشرف على اتفاقية حماية مواقع التراث العالمي؟",
    answers: ["اليونسكو", "الفيفا", "أوبك", "الناتو"],
    correct: 0,
    category: "egypt",
    difficulty: "hard"
}
]