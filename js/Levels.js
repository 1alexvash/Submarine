if (localStorage.levelsOpened === undefined) {
  localStorage.levelsOpened = 1;
  game.levelsOpened = 1;
} else {
  game.levelsOpened = parseInt(localStorage.levelsOpened);
}

game.totalLevels = 8;

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
  // first level
  [
    {
      type: "ROCK",
      frequencyPerSecond: 1 / 3,
      img: rockImg,
      speed: Math.round(Math.random() * 3) + 3
    }
  ],
  // second level
  [
    {
      type: "SHARK",
      frequencyPerSecond: 1 / 2.5,
      img: sharkImg,
      speed: Math.round(Math.random() * 6) + 3
    }
  ],
  // third level
  [
    {
      type: "ROCK",
      frequencyPerSecond: 1 / 2,
      img: rockImg,
      speed: Math.round(Math.random() * 3) + 3
    },
    {
      type: "COIN",
      frequencyPerSecond: 1 / 15,
      img: coinImg,
      speed: Math.round(Math.random() * 3) + 3
    }
  ],
  // fourth level
  [
    {
      type: "ROCK",
      frequencyPerSecond: 1 / 2,
      img: rockImg,
      speed: Math.round(Math.random() * 3) + 3
    },
    {
      type: "SHARK",
      frequencyPerSecond: 1 / 2,
      img: sharkImg,
      speed: Math.round(Math.random() * 6) + 3
    },
    {
      type: "HEART",
      frequencyPerSecond: 1 / 45,
      img: heartImg,
      speed: Math.round(Math.random() * 3) + 3
    }
  ],
  // fifth level
  [
    {
      type: "FIRE",
      frequencyPerSecond: 1 / 4,
      img: fireImg,
      speed: Math.round(Math.random() * 9) + 3
    },
    {
      type: "COIN",
      frequencyPerSecond: 1 / 15,
      img: coinImg,
      speed: Math.round(Math.random() * 3) + 3
    },
    {
      type: "HEART",
      frequencyPerSecond: 1 / 45,
      img: heartImg,
      speed: Math.round(Math.random() * 3) + 3
    }
  ],
  // sixth level
  [
    {
      type: "ROCK",
      frequencyPerSecond: 1 / 2,
      img: rockImg,
      speed: Math.round(Math.random() * 3) + 3
    },
    {
      type: "SHARK",
      frequencyPerSecond: 1,
      img: sharkImg,
      speed: Math.round(Math.random() * 6) + 3
    },
    {
      type: "FIRE",
      frequencyPerSecond: 1 / 8,
      img: fireImg,
      speed: Math.round(Math.random() * 9) + 3
    },
    {
      type: "COIN",
      frequencyPerSecond: 1 / 15,
      img: coinImg,
      speed: Math.round(Math.random() * 3) + 3
    },
    {
      type: "HEART",
      frequencyPerSecond: 1 / 45,
      img: heartImg,
      speed: Math.round(Math.random() * 3) + 3
    },
    {
      type: "DIAMOND",
      frequencyPerSecond: 1 / 75,
      img: diamondImg,
      speed: Math.round(Math.random() * 3) + 3
    }
  ],
  // seventh level
  [
    {
      type: "BLUE_FIRE",
      frequencyPerSecond: 5,
      img: blueFireImg,
      speed: Math.round(Math.random() * 9) + 3
    },
    {
      type: "COIN",
      frequencyPerSecond: 1 / 15,
      img: coinImg,
      speed: Math.round(Math.random() * 3) + 3
    },
    {
      type: "HEART",
      frequencyPerSecond: 1 / 45,
      img: heartImg,
      speed: Math.round(Math.random() * 3) + 3
    },
    {
      type: "DIAMOND",
      frequencyPerSecond: 1 / 75,
      img: diamondImg,
      speed: Math.round(Math.random() * 3) + 3
    }
  ],
  // eighth level
  [
    {
      type: "ROCK",
      frequencyPerSecond: 1 / 2,
      img: rockImg,
      speed: Math.round(Math.random() * 3) + 3
    },
    {
      type: "SHARK",
      frequencyPerSecond: 1 / 1.5,
      img: sharkImg,
      speed: Math.round(Math.random() * 6) + 3
    },
    {
      type: "FIRE",
      frequencyPerSecond: 1,
      img: fireImg,
      speed: Math.round(Math.random() * 9) + 3
    },
    {
      type: "BLUE_FIRE",
      frequencyPerSecond: 1,
      img: blueFireImg,
      speed: Math.round(Math.random() * 9) + 3
    },
    {
      type: "COIN",
      frequencyPerSecond: 1 / 15,
      img: coinImg,
      speed: Math.round(Math.random() * 3) + 3
    },
    {
      type: "HEART",
      frequencyPerSecond: 1 / 45,
      img: heartImg,
      speed: Math.round(Math.random() * 3) + 3
    },
    {
      type: "DIAMOND",
      frequencyPerSecond: 1 / 75,
      img: diamondImg,
      speed: Math.round(Math.random() * 3) + 3
    },
    {
      type: "TREASURE",
      frequencyPerSecond: 1 / 300,
      img: treasureImg,
      speed: Math.round(Math.random() * 3) + 3
    }
  ]
];
