const coinSound = new Audio("./../sounds/coin.mp3");

function playSound(sound) {
  if (SETTINGS.SOUNDS) {
    sound.play();
    sound.currentTime = 0;
  }
}
