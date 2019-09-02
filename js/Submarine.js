class Submarine {
  constructor() {
    this.x = 75;
    this.y = 150;
    this.hearts = 3;
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

if (
  shop.upgrades.find(upgrade => upgrade.name === "submarine-dark").bought ===
  true
) {
  console.log("upgrade purchased");
  submarine.img = submarineDarkImg;
}
