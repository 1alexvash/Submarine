function strikeSubmarine(obj) {
  objects.splice(objects.indexOf(obj), 1);

  if (userHasUpg("Shield1") || userHasUpg("Shield2")) {
    const chanceToProtect = userHasUpg("Shield2") === true ? 0.35 : 0.15;

    if (Math.random() > chanceToProtect) {
      damageSubmarine();
    } else {
      if (Math.random() > 0.5) {
        playSound(dodgeFirst);
      } else {
        playSound(dodgeSecond);
      }
    }
  } else {
    damageSubmarine();
  }
}

function damageSubmarine() {
  playSound(boomSound);
  submarine.hearts--;
  if (submarine.hearts === 0) {
    endGame();
  }
}

function collisionCheck(a, b) {
  if (
    ((b.y1 < a.y2 && b.y1 > a.y1) || (b.y2 > a.y1 && b.y2 < a.y2)) &&
    ((b.x1 < a.x2 && b.x1 > a.x1) || (b.x2 > a.x1 && b.x2 < a.x2))
  ) {
    const myObject = objects.find(rock => rock === b.objectRef);
    switch (b.objectRef.type) {
      case "ROCK":
        strikeSubmarine(myObject);
        break;
      case "SHARK":
        strikeSubmarine(myObject);
        break;
      case "FIRE":
        strikeSubmarine(myObject);
        break;
      case "BLUE_FIRE":
        strikeSubmarine(myObject);
        break;
      case "COIN":
        objects.splice(objects.indexOf(myObject), 1);
        playSound(coinSound);
        score += 3000;
        objectsLeftToCollect--;
        break;
      case "HEART":
        objects.splice(objects.indexOf(myObject), 1);
        playSound(heartSound);
        submarine.hearts++;
        break;
      case "DIAMOND":
        objects.splice(objects.indexOf(myObject), 1);
        playSound(diamondSound);
        score += 15000;
        objectsLeftToCollect--;
        break;
      case "TREASURE":
        objects.splice(objects.indexOf(myObject), 1);
        playSound(congratulationsSound);
        score += 100000;
        levelComplete(game.level);
        break;
      default:
        break;
    }

    return true;
  }
}
