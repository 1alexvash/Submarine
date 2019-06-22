const heartSound = new Audio("./../sounds/heart.mp3");
const congratulationsSound = new Audio("./../sounds/congratulations.mp3");
const boomSound = new Audio("./../sounds/boom.mp3");
const coinSound = new Audio("./../sounds/coin.mp3");

function playSound(sound) {
  if (SETTINGS.SOUNDS) {
    sound.play();
    sound.currentTime = 0;
  }
}
