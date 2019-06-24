const canvas = $("#canvas");
const context = canvas.getContext("2d");
let timer;

const framesPerSecond = 30;

let objects = [];

function renderHomeScreen() {
  clearCanvas();

  context.font = "40px Arial";
  context.fillStyle = "black";
  context.textAlign = "center";
  context.fillText("Click To Start", canvas.width / 2, canvas.height / 2);
}

window.onload = function() {
  renderHomeScreen();

  if (JSON.parse(localStorage.upgrades)[1].bought === true) {
    submarine.speed *= 1.25;
  }

  canvas.addEventListener("click", function() {
    if (playing === false) {
      startGame();
    }
  });
};

let score = 0;

let playing = false;

function clearCanvas() {
  context.beginPath();
  context.rect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "white";
  context.fill();
}

function updateAll() {
  clearCanvas();
  spawn();
  moveEverything();
  drawEverything();
}

function startGame() {
  playing = true;

  submarine.x = 75;
  submarine.y = 150;
  submarine.hearts = 3;

  playMusic();

  const menu = $(".menu");
  menu.classList.remove("active");

  timer = setInterval(() => {
    updateAll();
  }, 1000 / framesPerSecond);
}

const waterSounds = new Audio("./sounds/watersounds.mp3");

function playMusic() {
  if (SETTINGS.MUSIC) {
    waterSounds.play();
    waterSounds.loop = true;
  }
}

function stopMusic() {
  waterSounds.pause();
  waterSounds.currentTime = 0;
}

function updateScore(newScore) {
  if (localStorage.score === undefined) {
    localStorage.score = 0;
  }
  localStorage.score = newScore;
}

function endGame() {
  playing = false;

  clearInterval(timer);

  stopMusic();

  if (localStorage.score === undefined) {
    updateScore(score);
  } else {
    const newScore = parseInt(localStorage.score) + score;
    updateScore(newScore);
  }
  score = 0;

  const menu = $(".menu");
  menu.classList += " active";

  renderHomeScreen();
}
