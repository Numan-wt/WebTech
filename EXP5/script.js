let questions = [
  {q:"2 + 2 = ?", a:["3","4","5","6"], c:1},
  {q:"Capital of France?", a:["London","Berlin","Paris","Rome"], c:2},
  {q:"5 x 3 = ?", a:["8","15","10","20"], c:1},
  {q:"Color of sky?", a:["Blue","Green","Red","Yellow"], c:0},
  {q:"HTML stands for?", a:["Hyper Text Markup Language","Home Tool Markup Language","Hyperlinks Text Mark","None"], c:0},
  {q:"10 / 2 = ?", a:["2","3","5","8"], c:2},
  {q:"JS stands for?", a:["JavaStyle","JavaScript","JustScript","None"], c:1},
  {q:"9 - 4 = ?", a:["3","4","5","6"], c:2},
  {q:"Earth is a?", a:["Star","Planet","Moon","Comet"], c:1},
  {q:"7 + 1 = ?", a:["6","7","8","9"], c:2},
  {q:"CSS is used for?", a:["Structure","Styling","Database","Server"], c:1},
  {q:"3 x 3 = ?", a:["6","9","12","3"], c:1}
];

// 🔒 Minimum Question Check
if (questions.length < 10) {
  alert("Quiz must contain at least 10 questions!");
  throw new Error("Minimum 10 questions required.");
}

let index = 0;
let score = 0;
let timeLeft = 10;
let timer;

function loadQuestion() {
  document.getElementById("question").innerHTML = questions[index].q;
  
  for (let i = 0; i < 4; i++) {
    document.getElementById("btn"+i).innerHTML = questions[index].a[i];
  }

  updateProgress();
  startTimer();
}

function answer(choice) {
  clearInterval(timer);

  if (choice == questions[index].c) {
    score++;
  }

  nextQuestion();
}

function nextQuestion() {
  index++;

  if (index < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function startTimer() {
  timeLeft = 10;
  document.getElementById("time").innerText = timeLeft;

  timer = setInterval(() => {
    timeLeft--;
    document.getElementById("time").innerText = timeLeft;

    if (timeLeft === 0) {
      clearInterval(timer);
      nextQuestion();
    }
  }, 1000);
}

function updateProgress() {
  let progressPercent = (index / questions.length) * 100;
  document.getElementById("progress").style.width = progressPercent + "%";
}

function showResult() {
  document.getElementById("question").innerHTML =
    "Your Score: " + score + " / " + questions.length;

  document.querySelector(".buttons").style.display = "none";
  document.querySelector(".timer").style.display = "none";
  document.getElementById("restart").style.display = "block";

  let message = "";
  if (score === questions.length) {
    message = "Excellent! 🎉";
  } else if (score >= questions.length / 2) {
    message = "Good Job 👍";
  } else {
    message = "Keep Practicing 💪";
  }

  document.getElementById("result").innerHTML = message;
}

function restartQuiz() {
  index = 0;
  score = 0;
  document.querySelector(".buttons").style.display = "block";
  document.querySelector(".timer").style.display = "block";
  document.getElementById("restart").style.display = "none";
  document.getElementById("result").innerHTML = "";
  loadQuestion();
}

loadQuestion();