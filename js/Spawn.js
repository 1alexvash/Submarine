function spawn() {
  // console.log(game.levels[game.level]);

  game.levels[game.level].map(item => {
    const { img, type } = item;
    const speed = item.speed[0] + Math.round(Math.random() * item.speed[1]);

    if (Math.random() > 1 - item.frequencyPerSecond / framesPerSecond) {
      objects.push({
        x: canvas.width,
        y: Math.round(Math.random() * canvas.height),
        img,
        type,
        speed
      });
    }
  });

  objects.forEach(object => {
    collisionCheck(
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
