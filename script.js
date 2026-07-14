/* ═══════════════════════════════════════════════════════════════════════════
   LEVEL UP AFRICA — Quiz Engine v2.0
   Architecture: Data → State → Render → Events
   ═══════════════════════════════════════════════════════════════════════════ */

/* ─── 1. QUIZ DATA ────────────────────────────────────────────────────────── */

const QUESTIONS = [
  {
    category: { fr: "Fintech", en: "Fintech" },
    question: {
      fr: "Quelle startup nigériane de fintech est devenue la première licorne africaine en 2019 ?",
      en: "Which Nigerian fintech startup became Africa's first unicorn in 2019?"
    },
    options: {
      fr: ["Flutterwave", "Interswitch", "Paystack", "Chipper Cash"],
      en: ["Flutterwave", "Interswitch", "Paystack", "Chipper Cash"]
    },
    answer: { fr: "Interswitch", en: "Interswitch" },
    fact: {
      fr: "Interswitch a été fondée en 2002 à Lagos par Mitchell Elegbe.",
      en: "Interswitch was founded in 2002 in Lagos by Mitchell Elegbe."
    }
  },
  {
    category: { fr: "Mobile Money", en: "Mobile Money" },
    question: {
      fr: "Quel pays africain a lancé M-Pesa, service pionnier du mobile money ?",
      en: "Which African country launched M-Pesa, the pioneering mobile money service?"
    },
    options: {
      fr: ["Nigeria", "Ghana", "Kenya", "Rwanda"],
      en: ["Nigeria", "Ghana", "Kenya", "Rwanda"]
    },
    answer: { fr: "Kenya", en: "Kenya" },
    fact: {
      fr: "M-Pesa a été lancé en 2007 par Safaricom au Kenya et révolutionné la finance.",
      en: "M-Pesa was launched in 2007 by Safaricom in Kenya, revolutionizing finance."
    }
  },
  {
    category: { fr: "Fintech", en: "Fintech" },
    question: {
      fr: "Quelle application panafricaine facilite les paiements en ligne en Afrique francophone ?",
      en: "Which pan-African app simplifies online payments in Francophone Africa?"
    },
    options: {
      fr: ["Djamo", "MTN MoMo", "Orange Money", "Wave"],
      en: ["Djamo", "MTN MoMo", "Orange Money", "Wave"]
    },
    answer: { fr: "Djamo", en: "Djamo" },
    fact: {
      fr: "Djamo est basée à Abidjan (Côte d'Ivoire) et a levé $14M en 2022.",
      en: "Djamo is based in Abidjan (Ivory Coast) and raised $14M in 2022."
    }
  },
  {
    category: { fr: "Startups", en: "Startups" },
    question: {
      fr: "Quel pays africain abrite le siège de Flutterwave ?",
      en: "Which African country is home to Flutterwave's headquarters?"
    },
    options: {
      fr: ["Ghana", "Nigeria", "Kenya", "Afrique du Sud"],
      en: ["Ghana", "Nigeria", "Kenya", "South Africa"]
    },
    answer: { fr: "Nigeria", en: "Nigeria" },
    fact: {
      fr: "Flutterwave a été fondée à Lagos en 2016 et a levé plus de $490M.",
      en: "Flutterwave was founded in Lagos in 2016 and raised over $490M."
    }
  },
  {
    category: { fr: "Mobile Money", en: "Mobile Money" },
    question: {
      fr: "Quelle application de transfert est la plus populaire en Afrique de l'Ouest francophone ?",
      en: "Which money transfer app is most popular in Francophone West Africa?"
    },
    options: {
      fr: ["Wave", "Venmo", "Cash App", "PayPal"],
      en: ["Wave", "Venmo", "Cash App", "PayPal"]
    },
    answer: { fr: "Wave", en: "Wave" },
    fact: {
      fr: "Wave opère au Sénégal, Côte d'Ivoire, Mali, Burkina Faso et Uganda.",
      en: "Wave operates in Senegal, Ivory Coast, Mali, Burkina Faso and Uganda."
    }
  },
  {
    category: { fr: "Tendances", en: "Trends" },
    question: {
      fr: "Quel secteur tech connaît la plus forte croissance de startups en Afrique ?",
      en: "Which tech sector sees the fastest startup growth in Africa?"
    },
    options: {
      fr: ["Gaming", "Fintech", "EdTech", "Biotech"],
      en: ["Gaming", "Fintech", "EdTech", "Biotech"]
    },
    answer: { fr: "Fintech", en: "Fintech" },
    fact: {
      fr: "La Fintech représente plus de 50% du financement des startups africaines.",
      en: "Fintech accounts for over 50% of African startup funding."
    }
  },
  {
    category: { fr: "Hubs Tech", en: "Tech Hubs" },
    question: {
      fr: "Quelle ville africaine est surnommée le « Silicon Lagoon » ?",
      en: "Which African city is nicknamed the 'Silicon Lagoon'?"
    },
    options: {
      fr: ["Accra", "Nairobi", "Lagos", "Le Caire"],
      en: ["Accra", "Nairobi", "Lagos", "Cairo"]
    },
    answer: { fr: "Lagos", en: "Lagos" },
    fact: {
      fr: "Lagos héberge plus de 500 startups actives et est un hub tech mondial.",
      en: "Lagos hosts over 500 active startups and is a global tech hub."
    }
  },
  {
    category: { fr: "Hubs Tech", en: "Tech Hubs" },
    question: {
      fr: "Quel incubateur tech panafricain est basé au Kenya ?",
      en: "Which pan-African tech incubator is based in Kenya?"
    },
    options: {
      fr: ["iHub", "CcHub", "MEST", "Injini"],
      en: ["iHub", "CcHub", "MEST", "Injini"]
    },
    answer: { fr: "iHub", en: "iHub" },
    fact: {
      fr: "iHub a été fondé à Nairobi en 2010 et a soutenu plus de 170 startups.",
      en: "iHub was founded in Nairobi in 2010 and supported over 170 startups."
    }
  },
  {
    category: { fr: "Innovation", en: "Innovation" },
    question: {
      fr: "Quel pays africain a lancé son propre satellite grâce à des ingénieurs locaux en 2022 ?",
      en: "Which African country launched its own satellite with local engineers in 2022?"
    },
    options: {
      fr: ["Sénégal", "Djibouti", "Bénin", "Togo"],
      en: ["Senegal", "Djibouti", "Benin", "Togo"]
    },
    answer: { fr: "Djibouti", en: "Djibouti" },
    fact: {
      fr: "Le satellite DjiboSat-1 a été développé en partenariat avec des ingénieurs locaux.",
      en: "The DjiboSat-1 satellite was developed in partnership with local engineers."
    }
  },
  {
    category: { fr: "E-Commerce", en: "E-Commerce" },
    question: {
      fr: "Quelle plateforme e-commerce panafricaine est cotée à la bourse de New York ?",
      en: "Which pan-African e-commerce platform is listed on the New York Stock Exchange?"
    },
    options: {
      fr: ["Jumia", "Konga", "Kilimall", "Takealot"],
      en: ["Jumia", "Konga", "Kilimall", "Takealot"]
    },
    answer: { fr: "Jumia", en: "Jumia" },
    fact: {
      fr: "Jumia est cotée au NYSE depuis 2019 et opère dans 11 pays africains.",
      en: "Jumia has been listed on the NYSE since 2019 and operates in 11 African countries."
    }
  },
  {
    category: { fr: "AgriTech", en: "AgriTech" },
    question: {
      fr: "Quel secteur combine IA et agriculture pour aider les petits exploitants ouest-africains ?",
      en: "Which sector combines AI and agriculture to help small West African farmers?"
    },
    options: {
      fr: ["FoodTech", "AgriTech", "CleanTech", "InsurTech"],
      en: ["FoodTech", "AgriTech", "CleanTech", "InsurTech"]
    },
    answer: { fr: "AgriTech", en: "AgriTech" },
    fact: {
      fr: "L'AgriTech africaine reçoit de plus en plus d'investissements pour nourrir 1,5 milliard de personnes.",
      en: "African AgriTech is receiving more investment to feed 1.5 billion people."
    }
  },
  {
    category: { fr: "Hubs Tech", en: "Tech Hubs" },
    question: {
      fr: "Quelle ville ghanéenne est un hub tech en pleine expansion ?",
      en: "Which Ghanaian city is a fast-expanding tech hub?"
    },
    options: {
      fr: ["Kumasi", "Tamale", "Accra", "Takoradi"],
      en: ["Kumasi", "Tamale", "Accra", "Takoradi"]
    },
    answer: { fr: "Accra", en: "Accra" },
    fact: {
      fr: "Accra abrite MEST Africa, l'un des meilleurs accélérateurs du continent.",
      en: "Accra is home to MEST Africa, one of the best accelerators on the continent."
    }
  },
  {
    category: { fr: "Écosystème", en: "Ecosystem" },
    question: {
      fr: "Quel réseau connecte les hubs tech à travers toute l'Afrique ?",
      en: "Which network connects tech hubs across all of Africa?"
    },
    options: {
      fr: ["AfriLabs", "TechStars", "Y Combinator", "500 Startups"],
      en: ["AfriLabs", "TechStars", "Y Combinator", "500 Startups"]
    },
    answer: { fr: "AfriLabs", en: "AfriLabs" },
    fact: {
      fr: "AfriLabs regroupe plus de 350 centres d'innovation dans 52 pays africains.",
      en: "AfriLabs brings together over 350 innovation centers in 52 African countries."
    }
  },
  {
    category: { fr: "Fintech", en: "Fintech" },
    question: {
      fr: "Flutterwave, Chipper Cash et Wave ont quel point commun ?",
      en: "What do Flutterwave, Chipper Cash and Wave have in common?"
    },
    options: {
      fr: ["EdTech", "Fintech", "AgriTech", "HealthTech"],
      en: ["EdTech", "Fintech", "AgriTech", "HealthTech"]
    },
    answer: { fr: "Fintech", en: "Fintech" },
    fact: {
      fr: "Ces trois licornes africaines révolutionnent les paiements sur le continent.",
      en: "These three African unicorns are revolutionizing payments on the continent."
    }
  },
  {
    category: { fr: "Talents Tech", en: "Tech Talent" },
    question: {
      fr: "Quelle entreprise forme et connecte des développeurs africains avec des firmes mondiales ?",
      en: "Which company trains and connects African developers with global firms?"
    },
    options: {
      fr: ["Andela", "Jumia", "Flutterwave", "iHub"],
      en: ["Andela", "Jumia", "Flutterwave", "iHub"]
    },
    answer: { fr: "Andela", en: "Andela" },
    fact: {
      fr: "Andela a formé plus de 100 000 développeurs africains depuis sa création en 2014.",
      en: "Andela has trained over 100,000 African developers since its founding in 2014."
    }
  }
  ,
  {
    category: { fr: "Mobile Money", en: "Mobile Money" },
    question: {
      fr: "Quel service de mobile money est largement utilisé en Afrique francophone et proposé par un opérateur historique ?",
      en: "Which mobile money service is widely used in Francophone Africa and offered by a legacy operator?"
    },
    options: {
      fr: ["Orange Money", "MTN MoMo", "Wave", "M-Pesa"],
      en: ["Orange Money", "MTN MoMo", "Wave", "M-Pesa"]
    },
    answer: { fr: "Orange Money", en: "Orange Money" },
    fact: {
      fr: "Orange Money est disponible dans de nombreux pays d'Afrique francophone et facilite paiements et transferts.",
      en: "Orange Money is available across many Francophone African countries and enables payments and transfers."
    }
  },
  {
    category: { fr: "AgriTech", en: "AgriTech" },
    question: {
      fr: "Quelle startup kenyane a amélioré la chaîne d'approvisionnement pour les petits commerçants et agriculteurs ?",
      en: "Which Kenyan startup improved the supply chain for small vendors and farmers?"
    },
    options: {
      fr: ["Twiga Foods", "Jumia", "m-TIBA", "Zenvus"],
      en: ["Twiga Foods", "Jumia", "m-TIBA", "Zenvus"]
    },
    answer: { fr: "Twiga Foods", en: "Twiga Foods" },
    fact: {
      fr: "Twiga Foods connecte producteurs et vendeurs au Kenya, réduisant le gaspillage et les coûts.",
      en: "Twiga Foods connects producers and vendors in Kenya, reducing waste and costs."
    }
  },
  {
    category: { fr: "E-Commerce", en: "E-Commerce" },
    question: {
      fr: "Quelle marketplace nigériane a émergé comme acteur majeur du commerce en ligne local ?",
      en: "Which Nigerian marketplace emerged as a major local e-commerce player?"
    },
    options: {
      fr: ["Jumia", "Konga", "Kilimall", "Takealot"],
      en: ["Jumia", "Konga", "Kilimall", "Takealot"]
    },
    answer: { fr: "Konga", en: "Konga" },
    fact: {
      fr: "Konga est l'une des premières plateformes e‑commerce du Nigeria, lancée en 2012.",
      en: "Konga is one of Nigeria's early e‑commerce platforms, launched in 2012."
    }
  },
  {
    category: { fr: "EdTech", en: "EdTech" },
    question: {
      fr: "Quelle startup nigériane propose des cours numériques pour élèves et étudiants ?",
      en: "Which Nigerian startup offers digital courses for pupils and students?"
    },
    options: {
      fr: ["uLesson", "Andela", "Kudi", "MEST"],
      en: ["uLesson", "Andela", "Kudi", "MEST"]
    },
    answer: { fr: "uLesson", en: "uLesson" },
    fact: {
      fr: "uLesson propose contenus éducatifs adaptés au curriculum africain via mobile et vidéo.",
      en: "uLesson delivers educational content tailored to African curricula via mobile and video."
    }
  },
  {
    category: { fr: "HealthTech", en: "HealthTech" },
    question: {
      fr: "Quel service mobile kenyan facilite l'accès aux soins et aux paiements santé ?",
      en: "Which Kenyan mobile service facilitates access to care and health payments?"
    },
    options: {
      fr: ["m-TIBA", " mClinica", "Babylon", "mPharma"],
      en: ["m-TIBA", "mClinica", "Babylon", "mPharma"]
    },
    answer: { fr: "m-TIBA", en: "m-TIBA" },
    fact: {
      fr: "m‑TIBA (CarePay) permet aux utilisateurs d'épargner et payer des services de santé via mobile.",
      en: "m‑TIBA (CarePay) lets users save and pay for health services via mobile."
    }
  }
];

/* ─── 2. UI STRINGS (i18n) ────────────────────────────────────────────────── */

const I18N = {
  fr: {
    tagline:        "Deviens le \"Future Elon Musk africain\" !",
    badgeText:      "Tech Africaine • Innovation • Futur",
    welcomeTitle:   "Commence ton aventure tech",
    welcomeDesc:    "Découvre le meilleur de l'innovation africaine avec ce quiz conçu pour t'inspirer et te challenger.",
    statQuestions:  "Questions",
    statTimer:      "Par question",
    statThemes:     "Thèmes",
    startBtn:       "Commencer le Quiz",
    welcomeHint:    "Aucune inscription requise · Résultats instantanés",
    progressLabel:  "Progression",
    scoreLabel:     "Score",
    timerLabel:     "Temps",
    nextBtn:        "Question suivante",
    feedbackCorrect:"Excellente réponse !",
    feedbackWrong:  (ans) => `La bonne réponse était : ${ans}`,
    feedbackTimeout:(ans) => `Temps écoulé ! La réponse : ${ans}`,
    funFact:        "Le saviez-vous ?",
    resultsTitle:   "Tes Résultats",
    correctLabel:   "Correctes",
    wrongLabel:     "Incorrectes",
    timeLabel:      "Temps total",
    restartBtn:     "Recommencer",
    shareBtn:       "Partager",
    mustRestart:    "Score inférieur à 80% — relève le défi et recommence !",
    statusSuccess:  "Félicitations, futur Elon Musk africain !",
    statusBoost:    "Chaque bonne réponse te rapproche du statut Future Elon Musk africain.",
    statusGoal:     "Atteins 80% et deviens le futur Elon Musk africain de ton pays !",
    scoreMax:       (n) => `/ ${n}`,
    progressCount:  (cur, tot) => `${cur} / ${tot}`,
    messages: {
      perfect:   "PARFAIT ! Tu es une vraie référence de la tech africaine !",
      excellent: " Excellent ! Tu maîtrises l'innovation africaine comme un pro !",
      great:     " Très bien ! Tu connais bien l'écosystème tech du continent.",
      good:      " Bien joué ! Encore un peu de révision et tu seras imbattable.",
      keep:      " Continue à apprendre — l'Afrique tech est passionnante !",
      tryAgain:  " Ne lâche pas ! Chaque retry te rapproche de l'excellence."
    },
    trophies: {
      perfect:   "TOP", excellent: "Great", great: "Good", good: "Nice", keep: "Keep", tryAgain: "Retry"
    },
    themeLight: "Light", themeDark: "Dark",
    soundOn: "On", soundOff: "Off",
    shareText: (score, total) => `Je viens d'obtenir ${score}/${total} au quiz Level Up Africa. Teste ta culture tech africaine !`
  },
  en: {
    tagline:        "Become the \"African future Elon Musk\"!",
    badgeText:      "African Tech • Innovation • Future",
    welcomeTitle:   "Start your tech adventure",
    welcomeDesc:    "Explore the best of African innovation with this quiz designed to inspire and challenge you.",
    statQuestions:  "Questions",
    statTimer:      "Per question",
    statThemes:     "Themes",
    startBtn:       "Start the Quiz",
    welcomeHint:    "No signup required · Instant results",
    progressLabel:  "Progress",
    scoreLabel:     "Score",
    timerLabel:     "Time",
    nextBtn:        "Next Question",
    feedbackCorrect:"Excellent answer!",
    feedbackWrong:  (ans) => `The correct answer was: ${ans}`,
    feedbackTimeout:(ans) => `Time's up! The answer: ${ans}`,
    funFact:        "Did you know?",
    resultsTitle:   "Your Results",
    correctLabel:   "Correct",
    wrongLabel:     "Incorrect",
    timeLabel:      "Total time",
    restartBtn:     "Restart",
    shareBtn:       "Share",
    mustRestart:    "Score below 80% — take the challenge again!",
    statusSuccess:  "Congratulations, future African Elon Musk!",
    statusBoost:    "Every correct answer brings you closer to future Elon Musk status.",
    statusGoal:     "Hit 80% and become the future African Elon Musk!",
    scoreMax:       (n) => `/ ${n}`,
    progressCount:  (cur, tot) => `${cur} / ${tot}`,
    messages: {
      perfect:   "PERFECT! You're a true African tech reference!",
      excellent: "Excellent! You master African innovation like a pro!",
      great:     "Great! You know the continent's tech ecosystem well.",
      good:      "Good job! A little more study and you'll be unbeatable.",
      keep:      "Keep learning — African tech is fascinating!",
      tryAgain:  "Don't give up! Each retry brings you closer to excellence."
    },
    trophies: {
      perfect:   "TOP", excellent: "Great", great: "Good", good: "Nice", keep: "Keep", tryAgain: "Retry"
    },
    themeLight: "Light", themeDark: "Dark",
    soundOn: "On", soundOff: "Off",
    shareText: (score, total) => `I just scored ${score}/${total} on the Level Up Africa quiz. Test your African tech knowledge!`
  }
};

/* ─── 3. QUIZ STATE ───────────────────────────────────────────────────────── */

const State = {
  lang:         (localStorage.getItem("lua-lang") || "fr").toLowerCase(),
  theme:        localStorage.getItem("lua-theme") || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"),
  soundEnabled: localStorage.getItem("lua-sound") !== "off",
  currentIndex: 0,
  score:        0,
  wrongCount:   0,
  hasAnswered:  false,
  timerSecs:    20,
  timerHandle:  null,
  quizStarted:  false,
  quizStartTime: 0,
  totalElapsed: 0,
};

/* ─── 4. DOM REFERENCES ───────────────────────────────────────────────────── */

const $ = (id) => document.getElementById(id);
const DOM = {
  html:           document.documentElement,
  // Header
  tagline:        $("tagline"),
  langBtns:       document.querySelectorAll(".lang-btn"),
  soundToggle:    $("sound-toggle"),
  themeToggle:    $("theme-toggle"),
  // Screens
  screenWelcome:  $("screen-welcome"),
  screenQuiz:     $("screen-quiz"),
  screenResults:  $("screen-results"),
  // Welcome
  welcomeBadgeText: $("welcome-badge-text"),
  welcomeTitle:   $("welcome-title"),
  welcomeDesc:    $("welcome-desc"),
  statQuestions:  $("stat-questions"),
  statTimer:      $("stat-timer"),
  statThemes:     $("stat-themes"),
  startBtn:       $("start-btn"),
  startBtnText:   $("start-btn-text"),
  welcomeHint:    $("welcome-hint"),
  // Status bar
  progressLabel:  $("progress-label"),
  progressBar:    $("progress-bar"),
  progressCount:  $("progress-count"),
  scoreLabel:     $("score-label"),
  scoreValue:     $("score-value"),
  scoreMax:       $("score-max"),
  timerLabel:     $("timer-label"),
  timerText:      $("timer-text"),
  timerArc:       $("timer-arc"),
  // Question card
  questionCategory: $("question-category"),
  categoryText:   $("category-text"),
  questionText:   $("question-text"),
  optionsGrid:    $("options-grid"),
  feedbackBar:    $("feedback-bar"),
  feedbackIcon:   $("feedback-icon"),
  feedbackText:   $("feedback-text"),
  nextBtn:        $("next-btn"),
  nextBtnText:    $("next-btn-text"),
  // Results
  resultsTrophy:  $("results-trophy"),
  resultsTitle:   $("results-title"),
  resultsStatus:  $("results-status"),
  resultsMessage: $("results-message"),
  scoreRingFill:  $("score-ring-fill"),
  scoreRingPct:   $("score-ring-pct"),
  scoreRingSub:   $("score-ring-sub"),
  resultCorrect:  $("result-correct"),
  resultWrong:    $("result-wrong"),
  resultTime:     $("result-time"),
  resultCorrectLabel: $("result-correct-label"),
  resultWrongLabel:   $("result-wrong-label"),
  resultTimeLabel:    $("result-time-label"),
  resultsNote:    $("results-note"),
  restartBtn:     $("restart-btn"),
  restartBtnText: $("restart-btn-text"),
  shareBtn:       $("share-btn"),
  shareBtnText:   $("share-btn-text"),
  // Toast
  toast:          $("toast"),
  // Canvas
  canvas:         $("particle-canvas"),
};

/* ─── 5. SOUND ENGINE (Web Audio API — no external files) ─────────────────── */

let AudioCtx = null;

function getAudioCtx() {
  if (!AudioCtx) AudioCtx = new (window.AudioContext || window.webkitAudioContext)();
  return AudioCtx;
}

function playTone({ freq = 440, type = "sine", duration = 0.18, gain = 0.15, detune = 0 } = {}) {
  if (!State.soundEnabled) return;
  try {
    const ctx = getAudioCtx();
    const osc = ctx.createOscillator();
    const vol = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, ctx.currentTime);
    osc.detune.setValueAtTime(detune, ctx.currentTime);
    vol.gain.setValueAtTime(gain, ctx.currentTime);
    vol.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
    osc.connect(vol); vol.connect(ctx.destination);
    osc.start(); osc.stop(ctx.currentTime + duration);
  } catch (_) { /* silently ignore */ }
}

const Sounds = {
  correct()  { playTone({ freq: 523, type: "triangle", duration: 0.22, gain: 0.12 }); setTimeout(() => playTone({ freq: 659, type: "triangle", duration: 0.18, gain: 0.10 }), 120); },
  wrong()    { playTone({ freq: 220, type: "sawtooth", duration: 0.25, gain: 0.1, detune: -20 }); },
  tick()     { playTone({ freq: 880, type: "square",   duration: 0.06, gain: 0.05 }); },
  timeout()  { playTone({ freq: 180, type: "sine",     duration: 0.4,  gain: 0.12 }); },
  start()    { [392, 494, 587].forEach((f, i) => setTimeout(() => playTone({ freq: f, type: "triangle", duration: 0.18, gain: 0.1 }), i * 100)); },
  finish()   { [523, 659, 784, 1047].forEach((f, i) => setTimeout(() => playTone({ freq: f, type: "triangle", duration: 0.25, gain: 0.1 }), i * 130)); },
  click()    { playTone({ freq: 660, type: "sine",     duration: 0.08, gain: 0.07 }); },
};

/* ─── 6. PARTICLE CANVAS ──────────────────────────────────────────────────── */

(function initParticles() {
  const canvas = DOM.canvas;
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let W, H, particles = [];

  const COLORS = ["#7c3aed", "#ff6b35", "#20bf6b", "#f7b731", "#06b6d4"];

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function createParticle() {
    return {
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 2 + 0.5,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      vx: (Math.random() - 0.5) * 0.3,
      vy: -Math.random() * 0.4 - 0.1,
      alpha: Math.random() * 0.5 + 0.1,
    };
  }

  function initParticlePool() {
    particles = Array.from({ length: 60 }, createParticle);
  }

  function loop() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach((p) => {
      p.x += p.vx; p.y += p.vy;
      if (p.y < -4) { Object.assign(p, createParticle()); p.y = H + 4; }
      ctx.globalAlpha = p.alpha;
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.globalAlpha = 1;
    requestAnimationFrame(loop);
  }

  window.addEventListener("resize", () => { resize(); });
  resize(); initParticlePool(); loop();
})();

/* ─── 7. THEME & LANGUAGE ─────────────────────────────────────────────────── */

function applyTheme(theme) {
  State.theme = theme;
  DOM.html.setAttribute("data-theme", theme);
  const icon = DOM.themeToggle.querySelector(".icon-btn__icon");
  icon.textContent = theme === "dark" ? I18N[State.lang].themeLight : I18N[State.lang].themeDark;
  DOM.themeToggle.setAttribute("aria-label", theme === "dark" ? "Mode clair" : "Mode sombre");
  localStorage.setItem("lua-theme", theme);
}

function applyLanguage(lang) {
  lang = String(lang || "fr").toLowerCase();
  if (!I18N[lang]) lang = "fr";

  State.lang = lang;
  DOM.html.setAttribute("lang", lang);
  localStorage.setItem("lua-lang", lang);

  // Update lang buttons
  DOM.langBtns.forEach((btn) => {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle("active", active);
    btn.setAttribute("aria-pressed", String(active));
  });

  // Update all static text
  const L = I18N[lang];
  DOM.tagline.textContent          = L.tagline;
  DOM.welcomeBadgeText.textContent = L.badgeText;
  DOM.welcomeTitle.textContent     = L.welcomeTitle;
  DOM.welcomeDesc.textContent      = L.welcomeDesc;
  DOM.statQuestions.textContent    = L.statQuestions;
  DOM.statTimer.textContent        = L.statTimer;
  DOM.statThemes.textContent       = L.statThemes;
  DOM.startBtnText.textContent     = L.startBtn;
  DOM.welcomeHint.textContent      = L.welcomeHint;
  DOM.progressLabel.textContent    = L.progressLabel;
  DOM.scoreLabel.textContent       = L.scoreLabel;
  DOM.timerLabel.textContent       = L.timerLabel;
  DOM.nextBtnText.textContent      = L.nextBtn;
  DOM.resultsTitle.textContent     = L.resultsTitle;
  DOM.resultCorrectLabel.textContent = L.correctLabel;
  DOM.resultWrongLabel.textContent   = L.wrongLabel;
  DOM.resultTimeLabel.textContent    = L.timeLabel;
  DOM.restartBtnText.textContent   = L.restartBtn;
  DOM.shareBtnText.textContent     = L.shareBtn;

  refreshLanguageDependentText();
}

function refreshLanguageDependentText() {
  const lang = State.lang;
  const L = I18N[lang];
  const total = QUESTIONS.length;

  // Keep progress values in sync with current language and question count
  DOM.progressCount.textContent = I18N[lang].progressCount(Math.min(State.currentIndex + 1, total), total);
  DOM.scoreMax.textContent = I18N[lang].scoreMax(total);
  DOM.scoreRingSub.textContent = `${State.score} / ${total}`;

  // Update results screen if visible
  if (DOM.screenResults.classList.contains("active")) {
    const pct = total > 0 ? Math.round((State.score / total) * 100) : 0;
    const tier = getResultTier(pct);
    DOM.resultsMessage.textContent = L.messages[tier];
    DOM.resultsStatus.textContent = pct >= 80 ? L.statusSuccess : L.statusBoost;
    DOM.resultsStatus.classList.toggle("success", pct >= 80);
    DOM.resultsStatus.classList.toggle("warning", pct < 80);
    if (pct < 80) {
      DOM.resultsNote.textContent = L.mustRestart;
      DOM.resultsNote.classList.remove("hidden");
    } else {
      DOM.resultsNote.classList.add("hidden");
    }
  }
}

function getResultTier(pct) {
  if      (pct === 100) return "perfect";
  else if (pct >= 87)   return "excellent";
  else if (pct >= 70)   return "great";
  else if (pct >= 50)   return "good";
  else if (pct >= 30)   return "keep";
  return "tryAgain";
}

function applySound(enabled) {
  State.soundEnabled = enabled;
  localStorage.setItem("lua-sound", enabled ? "on" : "off");
  const icon = DOM.soundToggle.querySelector(".icon-btn__icon");
  icon.textContent = enabled ? "🔊" : "🔇";
}

/* ─── 8. SCREEN TRANSITIONS ───────────────────────────────────────────────── */

function showScreen(screenEl) {
  [DOM.screenWelcome, DOM.screenQuiz, DOM.screenResults].forEach((s) => {
    s.classList.remove("active");
  });
  screenEl.classList.add("active");
}

/* ─── 9. TOAST NOTIFICATION ───────────────────────────────────────────────── */

let _toastTimer = null;
function showToast(msg, duration = 2800) {
  DOM.toast.textContent = msg;
  DOM.toast.classList.add("show");
  clearTimeout(_toastTimer);
  _toastTimer = setTimeout(() => DOM.toast.classList.remove("show"), duration);
}

/* ─── 10. TIMER ───────────────────────────────────────────────────────────── */

const TIMER_FULL   = 113; // stroke-dasharray: 2π × 18 ≈ 113
const TIMER_TOTAL  = 20;

function startTimer() {
  clearTimer();
  State.timerSecs = TIMER_TOTAL;
  updateTimerDisplay(TIMER_TOTAL);

  State.timerHandle = setInterval(() => {
    State.timerSecs--;
    updateTimerDisplay(State.timerSecs);

    if (State.timerSecs <= 5 && State.timerSecs > 0) Sounds.tick();

    if (State.timerSecs <= 0) {
      clearTimer();
      handleTimeout();
    }
  }, 1000);
}

function clearTimer() {
  clearInterval(State.timerHandle);
  State.timerHandle = null;
}

function updateTimerDisplay(secs) {
  DOM.timerText.textContent = secs;
  const offset = TIMER_FULL * (1 - secs / TIMER_TOTAL);
  DOM.timerArc.style.strokeDashoffset = offset;

  DOM.timerArc.classList.remove("warning", "danger");
  if (secs <= 5)       DOM.timerArc.classList.add("danger");
  else if (secs <= 10) DOM.timerArc.classList.add("warning");
}

/* ─── 11. STATUS BAR UPDATE ───────────────────────────────────────────────── */

function updateStatusBar() {
  const total = QUESTIONS.length;
  const cur   = State.currentIndex + 1;
  const pct   = Math.round((State.currentIndex / total) * 100);

  DOM.progressBar.style.width = `${pct}%`;
  DOM.progressBar.setAttribute("aria-valuenow", pct);
  DOM.progressCount.textContent = I18N[State.lang].progressCount(
    Math.min(cur, total), total
  );
  DOM.scoreValue.textContent = State.score;
  DOM.scoreMax.textContent   = I18N[State.lang].scoreMax(total);
}

/* ─── 12. RENDER QUESTION ─────────────────────────────────────────────────── */

function renderQuestion() {
  const q    = QUESTIONS[State.currentIndex];
  const lang = State.lang;
  const L    = I18N[lang];

  State.hasAnswered = false;

  // Category badge
  DOM.categoryText.textContent = q.category[lang];

  // Question text
  DOM.questionText.textContent = q.question[lang];

  // Clear feedback
  DOM.feedbackBar.classList.remove("show", "correct", "wrong");
  DOM.feedbackIcon.textContent = "";
  DOM.feedbackText.textContent = "";

  // Hide next button
  DOM.nextBtn.classList.add("hidden");

  // Build option buttons
  const opts   = q.options[lang];
  const letters = ["A", "B", "C", "D"];
  const shuffledOptions = opts
    .map((opt) => ({ opt, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ opt }) => opt);

  DOM.optionsGrid.innerHTML = shuffledOptions.map((opt, i) => `
    <button
      class="option-btn"
      data-option="${opt}"
      role="listitem"
      aria-label="${letters[i]}: ${opt}"
    >
      <span class="option-letter">${letters[i]}</span>
      <span>${opt}</span>
    </button>
  `).join("");

  // Attach click listeners + ripple
  DOM.optionsGrid.querySelectorAll(".option-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      addRipple(btn, e);
      selectOption(btn);
    });
  });

  updateStatusBar();
  startTimer();
}

/* ─── 13. RIPPLE EFFECT ───────────────────────────────────────────────────── */

function addRipple(btn, e) {
  const rect = btn.getBoundingClientRect();
  const rx = ((e.clientX - rect.left) / rect.width  * 100).toFixed(1) + "%";
  const ry = ((e.clientY - rect.top)  / rect.height * 100).toFixed(1) + "%";
  btn.style.setProperty("--rx", rx);
  btn.style.setProperty("--ry", ry);
  btn.classList.add("ripple");
  setTimeout(() => btn.classList.remove("ripple"), 400);
}

/* ─── 14. OPTION SELECTION ────────────────────────────────────────────────── */

function selectOption(clickedBtn) {
  if (State.hasAnswered) return;
  State.hasAnswered = true;
  clearTimer();
  Sounds.click();

  const q      = QUESTIONS[State.currentIndex];
  const lang   = State.lang;
  const L      = I18N[lang];
  const chosen = clickedBtn.dataset.option;
  const correct= q.answer[lang];
  const isRight= chosen === correct;

  // Disable all buttons and mark correct/wrong
  DOM.optionsGrid.querySelectorAll(".option-btn").forEach((btn) => {
    btn.disabled = true;
    if (btn.dataset.option === correct) btn.classList.add("correct");
    else if (btn === clickedBtn && !isRight) btn.classList.add("wrong");
  });

  if (isRight) {
    State.score++;
    showFeedback("correct", L.feedbackCorrect, q.fact[lang]);
    bumpScore();
    Sounds.correct();
  } else {
    State.wrongCount++;
    showFeedback("wrong", L.feedbackWrong(correct), q.fact[lang]);
    Sounds.wrong();
  }

  DOM.nextBtn.classList.remove("hidden");
}

/* ─── 15. TIMEOUT HANDLER ─────────────────────────────────────────────────── */

function handleTimeout() {
  if (State.hasAnswered) return;
  State.hasAnswered = true;
  State.wrongCount++;

  const q      = QUESTIONS[State.currentIndex];
  const lang   = State.lang;
  const L      = I18N[lang];
  const correct= q.answer[lang];

  DOM.optionsGrid.querySelectorAll(".option-btn").forEach((btn) => {
    btn.disabled = true;
    if (btn.dataset.option === correct) btn.classList.add("correct");
  });

  showFeedback("wrong", L.feedbackTimeout(correct), q.fact[lang]);
  Sounds.timeout();
  DOM.nextBtn.classList.remove("hidden");
}

/* ─── 16. FEEDBACK DISPLAY ────────────────────────────────────────────────── */

function showFeedback(type, text, fact) {
  DOM.feedbackBar.classList.remove("correct", "wrong");
  DOM.feedbackBar.classList.add("show", type);
  DOM.feedbackIcon.textContent = "";
  // Show the fact as a bonus line if available
  const factLine = fact ? ` · ${I18N[State.lang].funFact} ${fact}` : "";
  DOM.feedbackText.textContent = text + factLine;
}

/* ─── 17. SCORE BUMP ANIMATION ────────────────────────────────────────────── */

function bumpScore() {
  DOM.scoreValue.classList.remove("score-bump");
  void DOM.scoreValue.offsetWidth; // reflow to restart animation
  DOM.scoreValue.classList.add("score-bump");
}

/* ─── 18. NEXT QUESTION / FINISH ──────────────────────────────────────────── */

function goToNextQuestion() {
  State.currentIndex++;

  if (State.currentIndex < QUESTIONS.length) {
    // Slide out current card, then render next
    const card = document.getElementById("question-card");
    if (card) {
      card.style.animation = "none";
      card.style.opacity   = "0";
      card.style.transform = "translateX(-30px)";
      setTimeout(() => {
        card.style.animation = "";
        card.style.opacity   = "";
        card.style.transform = "";
        renderQuestion();
      }, 200);
    } else {
      renderQuestion();
    }
  } else {
    finishQuiz();
  }
}

/* ─── 19. FINISH QUIZ ─────────────────────────────────────────────────────── */

function finishQuiz() {
  clearTimer();
  State.totalElapsed = Math.round((Date.now() - State.quizStartTime) / 1000);

  const total   = QUESTIONS.length;
  const score   = State.score;
  const pct     = Math.round((score / total) * 100);
  const lang    = State.lang;
  const L       = I18N[lang];

  // Determine performance tier
  let tier;
  if      (pct === 100) tier = "perfect";
  else if (pct >= 87)   tier = "excellent";
  else if (pct >= 70)   tier = "great";
  else if (pct >= 50)   tier = "good";
  else if (pct >= 30)   tier = "keep";
  else                  tier = "tryAgain";

  const mustRestart = pct < 80;
  const statusText = pct >= 80 ? L.statusSuccess : L.statusBoost;
  const statusClass = pct >= 80 ? "success" : "warning";

  // Update results screen
  DOM.resultsTrophy.textContent   = L.trophies[tier];
  DOM.resultsTitle.textContent    = L.resultsTitle;
  DOM.resultsStatus.textContent   = statusText;
  DOM.resultsStatus.classList.remove("success", "warning");
  DOM.resultsStatus.classList.add(statusClass);
  DOM.resultsMessage.textContent  = L.messages[tier];
  DOM.scoreRingPct.textContent    = `${pct}%`;
  DOM.scoreRingSub.textContent    = `${score} / ${total}`;
  DOM.resultCorrect.textContent   = score;
  DOM.resultWrong.textContent     = State.wrongCount;
  DOM.resultTime.textContent      = `${State.totalElapsed}s`;
  DOM.resultCorrectLabel.textContent = L.correctLabel;
  DOM.resultWrongLabel.textContent   = L.wrongLabel;
  DOM.resultTimeLabel.textContent    = L.timeLabel;
  DOM.restartBtnText.textContent  = L.restartBtn;
  DOM.shareBtnText.textContent    = L.shareBtn;

  // Animated score ring (inject SVG gradient)
  injectRingGradient(pct);
  // Trigger ring animation after screen switch
  DOM.scoreRingFill.style.strokeDashoffset = "314";
  setTimeout(() => {
    const targetOffset = 314 * (1 - pct / 100);
    DOM.scoreRingFill.style.strokeDashoffset = targetOffset;
  }, 350);

  // Must-restart note
  if (mustRestart) {
    DOM.resultsNote.textContent = L.mustRestart;
    DOM.resultsNote.classList.remove("hidden");
  } else {
    DOM.resultsNote.classList.add("hidden");
  }

  // Progress bar → 100%
  DOM.progressBar.style.width = "100%";
  DOM.progressCount.textContent = I18N[lang].progressCount(total, total);

  Sounds.finish();
  showScreen(DOM.screenResults);

  // Confetti burst (CSS-only particles on best scores)
  if (pct >= 80) triggerConfetti();
}

/* ─── 20. SVG GRADIENT INJECTION ─────────────────────────────────────────── */

function injectRingGradient(pct) {
  let existing = document.getElementById("ringGradientDef");
  if (!existing) {
    const svg = DOM.scoreRingFill.closest("svg");
    const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
    defs.id = "ringGradientDef";
    const grad = document.createElementNS("http://www.w3.org/2000/svg", "linearGradient");
    grad.id = "ringGradient";
    grad.setAttribute("x1", "0%"); grad.setAttribute("y1", "0%");
    grad.setAttribute("x2", "100%"); grad.setAttribute("y2", "100%");

    const stop1 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
    stop1.setAttribute("offset", "0%");
    const stop2 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
    stop2.setAttribute("offset", "100%");

    if (pct >= 80)      { stop1.setAttribute("stop-color", "#20bf6b"); stop2.setAttribute("stop-color", "#06b6d4"); }
    else if (pct >= 50) { stop1.setAttribute("stop-color", "#f7b731"); stop2.setAttribute("stop-color", "#ff6b35"); }
    else                { stop1.setAttribute("stop-color", "#ff6b35"); stop2.setAttribute("stop-color", "#dc2626"); }

    grad.appendChild(stop1); grad.appendChild(stop2);
    defs.appendChild(grad); svg.insertBefore(defs, svg.firstChild);
  }
}

/* ─── 21. CONFETTI ────────────────────────────────────────────────────────── */

function triggerConfetti() {
  const canvas = DOM.canvas;
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const W = canvas.width, H = canvas.height;

  const COLORS = ["#7c3aed", "#ff6b35", "#20bf6b", "#f7b731", "#06b6d4", "#f43f5e"];
  const pieces = Array.from({ length: 80 }, () => ({
    x: Math.random() * W,
    y: Math.random() * H * 0.4,
    r: Math.random() * 5 + 3,
    d: Math.random() * 80,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    tilt: Math.floor(Math.random() * 10) - 10,
    tiltAngle: 0,
    tiltAngleIncremental: Math.random() * 0.07 + 0.05,
  }));

  let frame = 0;
  const MAX_FRAMES = 90;

  function draw() {
    ctx.clearRect(0, 0, W, H);
    pieces.forEach((p) => {
      ctx.beginPath();
      ctx.lineWidth = p.r / 2;
      ctx.strokeStyle = p.color;
      ctx.globalAlpha = 1 - frame / MAX_FRAMES;
      ctx.moveTo(p.x + p.tilt + p.r / 4, p.y);
      ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r / 4);
      ctx.stroke();

      p.tiltAngle += p.tiltAngleIncremental;
      p.y        += (Math.cos(p.d) + 1.5) * 2;
      p.tilt      = Math.sin(p.tiltAngle) * 12;
    });
    ctx.globalAlpha = 1;
    frame++;
    if (frame < MAX_FRAMES) requestAnimationFrame(draw);
  }

  draw();
}

/* ─── 22. START / RESET QUIZ ──────────────────────────────────────────────── */

function startQuiz() {
  State.currentIndex = 0;
  State.score        = 0;
  State.wrongCount   = 0;
  State.hasAnswered   = false;
  State.quizStartTime = Date.now();
  State.totalElapsed  = 0;

  updateStatusBar();
  showScreen(DOM.screenQuiz);
  renderQuestion();
  Sounds.start();
}

/* ─── 23. EVENT LISTENERS ─────────────────────────────────────────────────── */

// Language buttons
DOM.langBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    Sounds.click();
    applyLanguage(btn.dataset.lang);
    // Re-render if quiz is active
    if (DOM.screenQuiz.classList.contains("active") && !State.hasAnswered) {
      clearTimer();
      renderQuestion();
    }
  });
});

// Theme toggle
DOM.themeToggle.addEventListener("click", () => {
  Sounds.click();
  applyTheme(State.theme === "dark" ? "light" : "dark");
});

// Sound toggle
DOM.soundToggle.addEventListener("click", () => {
  applySound(!State.soundEnabled);
  showToast(State.soundEnabled ? "Sons activés" : "Sons désactivés");
});

// Start button
DOM.startBtn.addEventListener("click", () => {
  Sounds.click();
  startQuiz();
});

// Next button
DOM.nextBtn.addEventListener("click", () => {
  Sounds.click();
  goToNextQuestion();
});

// Restart button
DOM.restartBtn.addEventListener("click", () => {
  Sounds.click();
  showScreen(DOM.screenWelcome);
  // Reset ring animation
  DOM.scoreRingFill.style.strokeDashoffset = "314";
});

// Share button
DOM.shareBtn.addEventListener("click", async () => {
  Sounds.click();
  const L    = I18N[State.lang];
  const text = L.shareText(State.score, QUESTIONS.length);
  if (navigator.share) {
    try {
      await navigator.share({ title: "Level Up Africa", text });
    } catch (_) { /* user cancelled */ }
  } else {
    try {
      await navigator.clipboard.writeText(text);
      showToast("Copié dans le presse-papier !");
    } catch (_) {
      showToast(text);
    }
  }
});

// Keyboard navigation (space/enter to advance)
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    if (DOM.screenQuiz.classList.contains("active") && !DOM.nextBtn.classList.contains("hidden")) {
      e.preventDefault();
      goToNextQuestion();
    }
  }
});

/* ─── 24. INIT ────────────────────────────────────────────────────────────── */

applyTheme(State.theme);
applyLanguage(State.lang);
applySound(State.soundEnabled);
showScreen(DOM.screenWelcome);
