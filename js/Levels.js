if (localStorage.levelsOpened === undefined) {
  localStorage.levelsOpened = 1;
  game.levelsOpened = 1;
} else {
  game.levelsOpened = parseInt(localStorage.levelsOpened);
}

function levelComplete(completedLevel) {
  clearInterval(timer);
  saveScore();

  const newLevel = completedLevel + 2;
  if (newLevel > parseInt(localStorage.levelsOpened)) {
    localStorage.levelsOpened = newLevel;
  }
  window.location.href = `${
    window.location.href
  }level-complete.html#${completedLevel + 1}`;
}

game.totalLevels = 9;

game.levelsDuration = [30, 100, null, 180, null, 240, null, null, null];
game.objectsToSurvive = [null, null, null, null, 100, null, null, 200, null];
game.objectsToCollect = [null, null, 5, null, null, null, 3, null, null, null];

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

axios.get("json/levels.json").then(data => {
  game.levels = data.data;
  game.levels.map(level => level.map(item => (item.img = eval(item.img))));
});
