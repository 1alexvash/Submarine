class Game {
  constructor() {
    this.level = "1";
  }
}

const game = new Game();

const canvas = $("#canvas");
canvas.style.display = "none";
const context = canvas.getContext("2d");
let timer;
const menu = $(".menu");

function upgradesCheck() {
  let userHasAnyUpg = false;
  upgrades.map(upg => {
    if (upg.bought === true) {
      userHasAnyUpg = true;
    }
  });

  if (!userHasAnyUpg) {
    $(".menu a[title='Shop']").classList += " showtip";

    if (Math.random() > 0.5) {
      $(
        ".menu .tip"
      ).innerHTML = `Let's buy an <img src="./images/Axle.png" width="20px" height="20px" title="Axle" alt="Axle"> axle`;
      $(".menu .tip").style.background = "white";
      $(".menu .tip").style.color = "black";
      $(".menu .tip").style.width = "100px";
      $(".menu .tip").style.animation = "none";
    }
  }
}

if (localStorage.gameLoaded !== undefined) {
  upgradesCheck();
}

function showMenu() {
  menu.classList += " active";
}

function hideMenu() {
  menu.classList.remove("active");
}

const framesPerSecond = 30;

let objects = [];

function renderHomeScreen() {
  clearCanvas();

  context.font = "40px Arial";
  context.fillStyle = "black";
  context.textAlign = "center";
  context.fillText("Click To Start", canvas.width / 2, canvas.height / 2);

  context.font = "14px Arial";
  context.fillStyle = "black";
  context.textAlign = "center";
  context.fillText(
    "Tip: use keyboard controllers to navigate the submarine",
    canvas.width / 2,
    canvas.height - 50
  );

  context.drawImage(
    keyboardArrows,
    canvas.width / 2 - keyboardArrows.width / 2,
    canvas.height / 2 - keyboardArrows.height / 2 + 110,
    keyboardArrows.width,
    keyboardArrows.height
  );
}

window.onload = function() {
  renderHomeScreen();

  canvas.addEventListener("click", function() {
    if (playing === false) {
      hideMenu();
      startGame();
    }
  });
};

let score = 0;

let secondsLeft = 0;
let objectsLeftToSurvive = 0;
let objectsLeftToCollect = 0;

let playing = false;

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
  submarine.hearts = submarine.heartsMax - 2;

  secondsLeft = game.levelsDuration[game.level];
  objectsLeftToSurvive = game.objectsToSurvive[game.level];
  objectsLeftToCollect = game.objectsToCollect[game.level];

  playMusic();

  hideMenu();

  timer = setInterval(() => {
    updateAll();
  }, 1000 / framesPerSecond);
}

function showWinScreen() {
  clearCanvas();

  context.font = "40px Arial";
  context.fillStyle = "black";
  context.textAlign = "center";
  context.fillText(
    "Level completed succesfully!",
    canvas.width / 2,
    canvas.height / 2 - 35
  );

  context.font = "40px Arial";
  context.fillStyle = "black";
  context.textAlign = "center";
  context.fillText(
    "Click to continue on",
    canvas.width / 2,
    canvas.height / 2 + 55
  );
}

const waterSounds = new Audio("./sounds/watersounds.mp3");

function playMusic() {
  if (settings.music) {
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

function saveScore() {
  if (localStorage.score === undefined) {
    updateScore(score);
  } else {
    const newScore = parseInt(localStorage.score) + score;
    updateScore(newScore);
  }

  score = 0;
}

function endGame() {
  playing = false;

  clearInterval(timer);

  stopMusic();

  saveScore();

  objects = [];

  canvas.style.display = "none";

  if (settings.show_crushing_page) {
    window.location.href = `${window.location.href}submarine-was-crushed.html`;
  } else {
    showMenu();

    $(".levels").style.display = "flex";

    renderHomeScreen();
  }
}
