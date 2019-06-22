const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
let timer;

const framesPerSecond = 30;

let objects = [];

// DEV ONLY
startGame();
// DEV ONLY

window.onload = function() {
  // startGame();

  context.fillStyle = "white";
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.font = "40px Arial";
  context.fillStyle = "black";
  context.textAlign = "center";
  context.fillText("Click To Start", canvas.width / 2, canvas.height / 2);

  canvas.addEventListener("click", function() {
    if (timer === undefined) {
      startGame();
    }
  });
};

let score = 0;

function clearCanvas() {
  context.beginPath();
  context.rect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "white";
  context.fill();
}

function updateAll() {
  moveEverything();
  drawEverything();
}

function startGame() {
  timer = setInterval(() => {
    clearCanvas();

    spawn();

    updateAll();
  }, 1000 / framesPerSecond);
}

function endGame() {
  clearInterval(timer);
}
