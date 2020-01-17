const boomSound = new Audio("./sounds/boom.mp3");
const coinSound = new Audio("./sounds/coin.mp3");
const diamondSound = new Audio("./sounds/diamond.mp3");
const heartSound = new Audio("./sounds/heart.mp3");
const congratulationsSound = new Audio("./sounds/congratulations.mp3");

function playSound(sound) {
  if (settings.sounds) {
    sound.play();
    sound.currentTime = 0;
  }
}
