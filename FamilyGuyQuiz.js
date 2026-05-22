const questions = [
  {
    question: "What is Peter's youngest son's name?",
    answer: "STEWIE",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyNV7ASFpNVLXGSjX_LLGqls4QgAcaItej80EeBtNFzQ&s",
    goodResponse: "Damn right",
    badResponse: "Warm up? OK!",
    goodAudio: "MP3/SGDamn.mp3",
    badAudio: "MP3/SGSpecial.mp3"
  },
  {
    question: "Who has a secret relationship with Mayor West?",
    answer: "MEG",
    image: "https://www.slashfilm.com/img/gallery/new-family-guy-tribute-to-adam-west/intro-import.jpg",
    goodResponse: "Shhh it's a secret",
    badResponse: "Really",
    goodAudio: "MP3/Meg.mp3",
    badAudio: "MP3/Jam.mp3"
  },
  {
    question: "What street do the Griffin's live on?",
    answer: "SPOONER",
    image: "https://static1.srcdn.com/wordpress/wp-content/uploads/2017/04/Family-Guy-the-Griffin-House.jpg",
    goodResponse: "You probably know the house number too stalker",
    badResponse: "You SUCK!",
    goodAudio: "MP3/RH.mp3",
    badAudio: "MP3/WHAT.mp3"
  },
  {
    question: "What kind of pet does Quagmire have?",
    answer: "CAT",
    image: "https://static1.srcdn.com/wordpress/wp-content/uploads/2019/09/Quagmire-in-Family-Guy.jpg",
    goodResponse: "Of course he loves pussy",
    badResponse: "Are you even trying?",
    goodAudio: "MP3/Quag.mp3",
    badAudio: "MP3/Quagcat.mp3"
  },
  {
    question: "Which one of Peter's friends lives across the street?",
    answer: "CLEVELAND",
    image: "https://static.wikia.nocookie.net/familyguyfanon/images/1/10/The_Brown_House_%28Family_Guy%29.png/revision/latest?cb=20180405024241",
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