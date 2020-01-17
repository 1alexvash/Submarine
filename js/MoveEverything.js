function moveEverything() {
  moveSubmarine();
  moveObjects();
}

function moveSubmarine() {
  if (submarine.controllers.arrowUpLocked && submarine.y > 50) {
    submarine.y -= submarine.speed;
  }
  if (
    submarine.controllers.arrowDownLocked &&
    submarine.y < canvas.height - 50
  ) {
    submarine.y += submarine.speed;
  }
  if (submarine.controllers.arrowLeftLocked && submarine.x > 50) {
    submarine.x -= submarine.speed;
  }
  if (
    submarine.controllers.arrowRightLocked &&
    submarine.x < canvas.width - 150
  ) {
    submarine.x += submarine.speed;
  }
}

function moveObjects() {
  objects.forEach(object => {
    object.x -= object.speed;
  });

  if (objects.length > 0) {
    objects = objects.filter(object => {
      if (object.x > 0) {
        return true;
      } else {
        const type = object.type;
        if (
          type === "ROCK" ||
          type === "SHARK" ||
          type === "FIRE" ||
          type === "BLUE_FIRE"
        ) {
          objectsLeftToSurvive--;
        }
      }
    });
  }
}
