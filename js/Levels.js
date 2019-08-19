const select = $(".Select-Level");

game.levels = {
  first: [
    {
      type: "ROCK",
      probability: 0.005,
      img: rockImg,
      speed: Math.round(Math.random() * 3) + 3
    }
  ],
  second: [
    {
      type: "FIRE",
      probability: 0.005,
      img: fireImg,
      speed: Math.round(Math.random() * 6) + 6
    }
  ]
};

game.level = "first";

select.addEventListener("change", e => {
  game.level = e.target.value;
});
