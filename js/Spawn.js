function spawn() {
  console.log(game.levels[game.level]);

  game.levels[game.level].map(item => {
    const { img, type, speed } = item;

    if (Math.round(Math.random() - 0.5 + item.probability) >= 1) {
      objects.push({
        x: canvas.width,
        y: Math.round(Math.random() * canvas.height),
        img,
        type,
        speed
      });
    }
  });
  // // 0.8% chance of creating a rock

  // // 0.1% chance of creating a fire
  // if (Math.round(Math.random() - 0.499) >= 1) {
  //   const newFire = {
  //     x: canvas.width,
  //     y: Math.round(Math.random() * canvas.height),
  //     speed: Math.round(Math.random() * 3) + 9,
  //     img: fireImg,
  //     type: "FIRE"
  //   };

  //   objects.push(newFire);
  // }
  // // 0.05% chance of creating a coin
  // if (Math.round(Math.random() - 0.4995) >= 1) {
  //   const newCoin = {
  //     x: canvas.width,
  //     y: Math.round(Math.random() * canvas.height),
  //     speed: 5,
  //     img: coinImg,
  //     type: "COIN"
  //   };

  //   objects.push(newCoin);
  // }
  // // 0.01% chance of creating a heart
  // if (submarine.hearts < 5 && Math.round(Math.random() - 0.4999) >= 1) {
  //   const newHeart = {
  //     x: canvas.width,
  //     y: Math.round(Math.random() * canvas.height),
  //     speed: 5,
  //     img: heartImg,
  //     type: "EXTRA_HEART"
  //   };

  //   objects.push(newHeart);
  // }
  // // 0.005% chance of creating a diamond
  // if (Math.round(Math.random() - 0.49995) >= 1) {
  //   const newDiamond = {
  //     x: canvas.width,
  //     y: Math.round(Math.random() * canvas.height),
  //     speed: 4,
  //     img: diamondImg,
  //     type: "DIAMOND"
  //   };

  //   objects.push(newDiamond);
  // }

  // // 0.001% chance of creating a treasure box
  // if (Math.round(Math.random() - 0.49999) >= 1) {
  //   const newTreasure = {
  //     x: canvas.width,
  //     y: Math.round(Math.random() * canvas.height),
  //     speed: 3,
  //     img: treasureImg,
  //     type: "TREASURE"
  //   };

  //   objects.push(newTreasure);
  // }

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
