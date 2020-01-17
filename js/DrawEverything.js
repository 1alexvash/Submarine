function drawEverything() {
  if (playing) {
    drawWaterBackground();
    drawWaterPlants();
    drawSubmirine();
    drawObjects();
    drawSubmarineAndObjectsBorder();
    drawHearts();
    drawScore();
    drawTime();
    drawObjectsLeftToSurvive();
    drawObjectsLeftToCollect();
  }
}

function drawWaterBackground() {
  let grd = context.createLinearGradient(
    canvas.width / 2,
    0,
    canvas.width / 2,
    canvas.height / 2
  );
  grd.addColorStop(0, "white");
  grd.addColorStop(0.25, "lightblue");
  grd.addColorStop(1, "deepskyblue");

  context.fillStyle = grd;
  context.fillRect(0, 0, canvas.width, canvas.height);
}

function drawWaterPlants() {
  context.drawImage(
    grassImg,
    0,
    canvas.height / 2,
    canvas.width,
    canvas.height / 2
  );
}

function drawSubmirine() {
  context.drawImage(
    submarine.img,
    submarine.x - submarine.img.width / 2,
    submarine.y - submarine.img.height / 2
  );
}

function drawObjects() {
  objects.forEach(object => {
    context.drawImage(
      object.img,
      object.x - object.img.width / 2,
      object.y - object.img.height / 2
    );
  });
}

function drawSubmarineAndObjectsBorder() {
  if (settings.show_units_borders) {
    context.rect(
      submarine.x - submarine.img.width / 2,
      submarine.y - submarine.img.height / 2,
      submarine.img.width,
      submarine.img.height
    );
    context.lineWidth = "1";
    context.stroke();

    objects.forEach(object => {
      context.rect(
        object.x - object.img.width / 2,
        object.y - object.img.height / 2,
        object.img.width,
        object.img.height
      );
    });
    context.lineWidth = "1";
    context.stroke();
  }
}

function drawHearts() {
  for (let i = 0; i < submarine.hearts; i++) {
    context.drawImage(
      heartImg,
      canvas.width - i * heartImg.width - heartImg.width * 2,
      25
    );
  }
}

function drawScore() {
  if (settings.show_score) {
    score = score + 10;
    context.font = "30px Arial";
    context.fillStyle = "black";
    context.textAlign = "left";
    context.fillText(`Score ${score}`, 20, 50);
  }
}

function getRemainingTime(time) {
  time = Math.round(time);
  let seconds = time % 60;
  if (seconds < 10) seconds = "0" + seconds;
  let minutes = Math.floor(time / 60);
  let hours = Math.floor(time / 3600);
  if (time >= 3600) {
    minutes = minutes % 60;
    if (minutes < 10) minutes = "0" + minutes;
    return `${hours}:${minutes}:${seconds}`;
  } else {
    return `${minutes}:${seconds}`;
  }
}

function drawTime() {
  if (game.levelsDuration[game.level] !== null) {
    context.font = "30px Arial";
    context.fillStyle = "white";
    context.textAlign = "left";
    context.fillText(
      getRemainingTime(secondsLeft),
      canvas.width - 75,
      canvas.height - 25
    );
    secondsLeft -= 1 / framesPerSecond;

    if (secondsLeft <= 0) {
      levelComplete(game.level);
      endGame();
    }
  }
}

function drawObjectsLeftToSurvive() {
  if (game.objectsToSurvive[game.level] !== null) {
    context.font = "30px Arial";
    context.fillStyle = "white";
    context.textAlign = "left";
    context.fillText(
      `Objects left ${objectsLeftToSurvive}`,
      canvas.width - 225,
      canvas.height - 25
    );

    if (objectsLeftToSurvive <= 0) {
      levelComplete(game.level);
      endGame();
    }
  }
}

function drawObjectsLeftToCollect() {
  if (game.objectsToCollect[game.level] !== null) {
    context.font = "30px Arial";
    context.fillStyle = "white";
    context.textAlign = "left";
    context.fillText(
      `Items left to collect: ${objectsLeftToCollect}`,
      canvas.width - 310,
      canvas.height - 25
    );
  }

  if (objectsLeftToCollect === 0) {
    levelComplete(game.level);
    endGame();
  }
}
