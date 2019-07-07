console.log(game);
let objects = game.objects;
console.log("objects", objects);

function spawn() {
  // 0.8% chance of creating a rock
  if (Math.round(Math.random() - 0.492) >= 1) {
    const newRock = {
      x: canvas.width,
      y: Math.round(Math.random() * canvas.height),
      speed: Math.round(Math.random() * 3) + 3,
      img: rockImg,
      type: "ROCK"
    };

    objects.push(newRock);
  }
  // 0.1% chance of creating a fire
  if (Math.round(Math.random() - 0.499) >= 1) {
    const newFire = {
      x: canvas.width,
      y: Math.round(Math.random() * canvas.height),
      speed: Math.round(Math.random() * 3) + 9,
      img: fireImg,
      type: "FIRE"
    };

    objects.push(newFire);
  }
  // 0.05% chance of creating a coin
  if (Math.round(Math.random() - 0.4995) >= 1) {
    const newCoin = {
      x: canvas.width,
      y: Math.round(Math.random() * canvas.height),
      speed: 5,
      img: coinImg,
      type: "COIN"
    };

    objects.push(newCoin);
  }
  // 0.01% chance of creating a heart
  if (submarine.hearts < 5 && Math.round(Math.random() - 0.4999) >= 1) {
    const newHeart = {
      x: canvas.width,
      y: Math.round(Math.random() * canvas.height),
      speed: 5,
      img: heartImg,
      type: "EXTRA_HEART"
    };

    objects.push(newHeart);
  }
  // 0.005% chance of creating a diamond
  if (Math.round(Math.random() - 0.49995) >= 1) {
    const newDiamond = {
      x: canvas.width,
      y: Math.round(Math.random() * canvas.height),
      speed: 4,
      img: diamondImg,
      type: "DIAMOND"
    };

    objects.push(newDiamond);
  }

  // 0.001% chance of creating a treasure box
  if (Math.round(Math.random() - 0.49999) >= 1) {
    const newTreasure = {
      x: canvas.width,
      y: Math.round(Math.random() * canvas.height),
      speed: 3,
      img: treasureImg,
      type: "TREASURE"
    };

    objects.push(newTreasure);
  }

  objects.forEach(object => {
    checkTouching(
      {
        x1: submarine.x - submarineImg.width / 2,
        x2: submarine.x + submarineImg.width / 2,
        y1: submarine.y - submarineImg.height / 2,
        y2: submarine.y + submarineImg.height / 2
      },
      {
        x1: object.x - rockImg.width / 2,
        x2: object.x + rockImg.width / 2,
        y1: object.y - rockImg.height / 2,
        y2: object.y + rockImg.height / 2,
        objectRef: object
      }
    );
  });
}

function checkTouching(a, b) {
  if (
    ((b.y1 < a.y2 && b.y1 > a.y1) || (b.y2 > a.y1 && b.y2 < a.y2)) &&
    ((b.x1 < a.x2 && b.x1 > a.x1) || (b.x2 > a.x1 && b.x2 < a.x2))
  ) {
    const myObject = objects.find(rock => rock === b.objectRef);
    switch (b.objectRef.type) {
      case "ROCK":
        objects.splice(objects.indexOf(myObject), 1);
        playSound(boomSound);
        submarine.hearts--;
        if (submarine.hearts === 0) {
          endGame();
        }
        break;
      case "FIRE":
        objects.splice(objects.indexOf(myObject), 1);
        playSound(boomSound);
        submarine.hearts--;
        if (submarine.hearts === 0) {
          endGame();
        }
        break;
      case "COIN":
        objects.splice(objects.indexOf(myObject), 1);
        playSound(coinSound);
        score += 2500;
        break;
      case "EXTRA_HEART":
        objects.splice(objects.indexOf(myObject), 1);
        playSound(heartSound);
        submarine.hearts++;
        break;
      case "DIAMOND":
        objects.splice(objects.indexOf(myObject), 1);
        playSound(congratulationsSound);
        score += 25000;
        break;
      case "TREASURE":
        objects.splice(objects.indexOf(myObject), 1);
        playSound(congratulationsSound);
        score += 100000;
        break;
      default:
        break;
    }

    return true;
  }
}
