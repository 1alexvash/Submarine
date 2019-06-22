function drawEverything() {
  drawWaterBackground();
  drawWaterPlants();
  drawSubmirine();
  drawObjects();
  drawSubmarineAndObjectsBorder();
  drawHearts();
  drawScore();
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
    submarineImg,
    submarine.x - submarineImg.width / 2,
    submarine.y - submarineImg.height / 2
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
  if (SETTINGS.SHOW_UNITS_BORDERS) {
    context.rect(
      submarine.x - submarineImg.width / 2,
      submarine.y - submarineImg.height / 2,
      submarineImg.width,
      submarineImg.height
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
  if (SETTINGS.SHOW_SCORE) {
    score = score + 10;
    context.font = "30px Arial";
    context.fillStyle = "black";
    context.textAlign = "left";
    context.fillText(`Score ${score}`, 20, 50);
  }
}
