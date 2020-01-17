const $ = elem => document.querySelector(elem);

const $$ = elem => document.querySelectorAll(elem);

function clearCanvas() {
  context.beginPath();
  context.rect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "white";
  context.fill();
}

function userHasUpg(upgName) {
  if (upgrades !== undefined) {
    const upgrade = upgrades.find(upg => upg.name === upgName);
    return upgrade.bought;
  } else {
    return false;
  }
}
