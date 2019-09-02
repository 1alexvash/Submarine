// const select = $(".Select-Level");

game.totalLevels = 8;
game.levelsOpened = 2;

function initLevels() {
  for (let i = 0; i < game.totalLevels; i++) {
    $$(".levels .level")[i].style.backgroundImage = `url(images/level${i +
      1}.jpg)`;
    if (i < game.levelsOpened) {
      $$(".levels .level")[i].classList += " available";
      $$(".levels .level .play")[i].addEventListener("click", () =>
        initiateGame(i)
      );
    }
  }
}

initLevels();

function initiateGame(level) {
  game.level = level;
  $(".levels").style.display = "none";
  canvas.style.display = "block";
}

game.levels = [
  [
    {
      type: "ROCK",
      frequencyPerSecond: 1 / 3,
      img: rockImg,
      speed: Math.round(Math.random() * 3) + 3
    }
  ],
  [
    {
      type: "FIRE",
      frequencyPerSecond: 1 / 3,
      img: fireImg,
      speed: Math.round(Math.random() * 6) + 6
    },
    {
      type: "EXTRA_HEART",
      frequencyPerSecond: 1 / 45,
      img: heartImg,
      speed: 4
    }
  ],
  [
    {
      type: "ROCK",
      frequencyPerSecond: 1 / 2,
      img: rockImg,
      speed: Math.round(Math.random() * 3) + 3
    },
    {
      type: "EXTRA_HEART",
      frequencyPerSecond: 1 / 45,
      img: heartImg,
      speed: 4
    }
  ]
];
