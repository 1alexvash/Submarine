class Submarine {
  constructor() {
    this.x = 75;
    this.y = 150;
    this.hearts = 3;
    this.heartsMax = 5;
    this.img = submarineImg;
    this.speed = 3;
    this.controllers = {
      arrowUpLocked: false,
      arrowDownLocked: false,
      arrowLeftLocked: false,
      arrowRightLocked: false
    };
  }
}

const submarine = new Submarine();

if (userHasUpg("submarine-dark")) {
  submarine.img = submarineDarkImg;
}

if (userHasUpg("Engine1")) {
  submarine.speed *= 1.33;
}

if (userHasUpg("Engine2")) {
  submarine.speed *= 1.33;
}

if (userHasUpg("Engine3")) {
  submarine.speed *= 1.33;
}

if (userHasUpg("Tank1")) {
  submarine.heartsMax++;
}

if (userHasUpg("Tank2")) {
  submarine.heartsMax++;
}
