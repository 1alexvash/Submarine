const framesPerSecond = 30;

class Game {
  constructor() {
    this.canvas = $("#canvas");
    this.context = this.canvas.getContext("2d");

    this.timer;
    this.objects = [];
    this.score = 0;
    this.playing = false;
  }

  clearCanvas() {
    this.context.beginPath();
    this.context.rect(0, 0, canvas.width, canvas.height);
    this.context.fillStyle = "white";
    this.context.fill();
  }

  renderHomeScreen() {
    this.clearCanvas();

    this.context.font = "40px Arial";
    this.context.fillStyle = "black";
    this.context.textAlign = "center";
    this.context.fillText(
      "Click To Start",
      canvas.width / 2,
      canvas.height / 2
    );
  }

  updateAll() {
    this.clearCanvas();
    spawn();
    moveEverything();
    drawEverything();
  }

  playMusic() {
    if (SETTINGS.MUSIC) {
      waterSounds.play();
      waterSounds.loop = true;
    }
  }

  stopMusic() {
    waterSounds.pause();
    waterSounds.currentTime = 0;
  }

  startGame() {
    this.playing = true;

    submarine.x = 75;
    submarine.y = 150;
    submarine.hearts = 3;

    this.playMusic();

    const menu = $(".menu");
    menu.classList.remove("active");

    this.timer = setInterval(() => {
      this.updateAll();
    }, 1000 / framesPerSecond);
  }

  updateScore(newScore) {
    if (localStorage.score === undefined) {
      localStorage.score = 0;
    }
    localStorage.score = newScore;
  }

  endGame() {
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
}

const game = new Game();

window.onload = function() {
  game.renderHomeScreen();

  if (JSON.parse(localStorage.upgrades)[1].bought === true) {
    submarine.speed *= 1.25;
  }

  canvas.addEventListener("click", function() {
    if (game.playing === false) {
      game.startGame();
    }
  });
};

const waterSounds = new Audio("./sounds/watersounds.mp3");
