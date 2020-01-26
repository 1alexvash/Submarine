document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowUp" || e.key.toLocaleLowerCase() === "w") {
    submarine.controllers.arrowUpLocked = true;
  }
  if (e.key === "ArrowDown" || e.key.toLocaleLowerCase() === "s") {
    submarine.controllers.arrowDownLocked = true;
  }

  if (userHasUpg("Axle")) {
    if (e.key === "ArrowLeft" || e.key.toLocaleLowerCase() === "a") {
      submarine.controllers.arrowLeftLocked = true;
    }
    if (e.key === "ArrowRight" || e.key.toLocaleLowerCase() === "d") {
      submarine.controllers.arrowRightLocked = true;
    }
  }
});

document.addEventListener("keyup", function(e) {
  if (e.key === "ArrowUp" || e.key.toLocaleLowerCase() === "w") {
    submarine.controllers.arrowUpLocked = false;
  }
  if (e.key === "ArrowDown" || e.key.toLocaleLowerCase() === "s") {
    submarine.controllers.arrowDownLocked = false;
  }
  if (e.key === "ArrowLeft" || e.key.toLocaleLowerCase() === "a") {
    submarine.controllers.arrowLeftLocked = false;
  }
  if (e.key === "ArrowRight" || e.key.toLocaleLowerCase() === "d") {
    submarine.controllers.arrowRightLocked = false;
  }
});
