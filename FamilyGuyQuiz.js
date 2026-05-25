const questions = [
  {
    question: "What is Peter's youngest son's name?",
    answer: "STEWIE",
    image: "img/Peter_G.jpeg",
    goodResponse: "Damn right",
    badResponse: "Warm up? OK!",
    goodAudio: "MP3/SGDamn.mp3",
    badAudio: "MP3/SGSpecial.mp3"
  },
  {
    question: "Who has a secret relationship with Mayor West?",
    answer: "MEG",
    image: "img/Mayor_West.jpeg",
    goodResponse: "Shhh it's a secret",
    badResponse: "Really",
    goodAudio: "MP3/Meg.mp3",
    badAudio: "MP3/Jam.mp3"
  },
  {
    question: "What street do the Griffin's live on?",
    answer: "SPOONER",
    image: "img/Family-Guy-the-Griffin-House.jpeg",
    goodResponse: "You probably know the house number too stalker",
    badResponse: "You SUCK!",
    goodAudio: "MP3/RH.mp3",
    badAudio: "MP3/WHAT.mp3"
  },
  {
    question: "What kind of pet does Quagmire have?",
    answer: "CAT",
    image: "img/Quagmire-in-Family-Guy.jpeg",
    goodResponse: "Of course he loves pussy",
    badResponse: "Are you even trying?",
    goodAudio: "MP3/Quag.mp3",
    badAudio: "MP3/Quagcat.mp3"
  },
  {
    question: "Which one of Peter's friends lives across the street?",
    answer: "CLEVELAND",
    image: "img/The_Brown_House_29.jpeg",
    goodResponse: "Of course he does, except when he had his own show",
    badResponse: "Have you ever watched the show?",
    goodAudio: "MP3/Bath.mp3",
    badAudio: "MP3/CleveHouse.mp3"
  }
];

let currentQuestionIndex = 0;

const fgqImage = document.getElementById('fgq-image');
const fgqQuestion = document.getElementById('fgq-question');
const fgqAnswer = document.getElementById('fgq-answer');
const fgqSubmit = document.getElementById('fgq-submit');
const fgqAudio = document.getElementById('fgq-audio');

function loadQuestion() {
  if (currentQuestionIndex >= questions.length) {
    // Ask the user if they want to restart
    if (confirm("You have finished the quiz! Do you want to restart?")) {
      currentQuestionIndex = 0; // reset to first question
      loadQuestion();           // reload first question
    }
    return; // exit if they don't want to restart
  }
  const q = questions[currentQuestionIndex];
  fgqImage.src = q.image;
  fgqQuestion.textContent = q.question;
  fgqAnswer.value = '';
  fgqAnswer.focus();
}

function checkAnswer() {
  const userAnswer = fgqAnswer.value.trim().toUpperCase();
  const q = questions[currentQuestionIndex];

  if (userAnswer === q.answer) {
    fgqAudio.src = q.goodAudio;
    fgqAudio.play();
    alert(q.goodResponse);
  } else {
    fgqAudio.src = q.badAudio;
    fgqAudio.play();
    alert(q.badResponse);
  }

  currentQuestionIndex++;
  loadQuestion();
}

// Event listeners
fgqSubmit.addEventListener('click', checkAnswer);
fgqAnswer.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    checkAnswer();
  }
});

// Initialize first question
loadQuestion();