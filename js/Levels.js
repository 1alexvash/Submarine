const select = $(".Select-Level");

game.levels = {
  first: [
    {
      type: "ROCK",
      frequencyPerSecond: 1 / 2,
      img: rockImg,
      speed: Math.round(Math.random() * 3) + 3
    }
  ],
  second: [
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
  ]
};

game.level = "first";

select.addEventListener("change", e => {
  game.level = e.target.value;
});
