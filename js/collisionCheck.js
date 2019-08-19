function collisionCheck(a, b) {
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