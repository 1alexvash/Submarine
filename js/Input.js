document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowUp") {
    submarine.controllers.arrowUpLocked = true;
  }
  if (e.key === "ArrowDown") {
    submarine.controllers.arrowDownLocked = true;
  }

  if (userHasUpg("Axle")) {
    if (e.key === "ArrowLeft") {
      submarine.controllers.arrowLeftLocked = true;
    }
    if (e.key === "ArrowRight") {
      submarine.controllers.arrowRightLocked = true;
    }
  }
});

document.addEventListener("keyup", function(e) {
  if (e.key === "ArrowUp") {
    submarine.controllers.arrowUpLocked = false;
  }
  if (e.key === "ArrowDown") {
    submarine.controllers.arrowDownLocked = false;
  }
  if (e.key === "ArrowLeft") {
    submarine.controllers.arrowLeftLocked = false;
  }
  if (e.key === "ArrowRight") {
    submarine.controllers.arrowRightLocked = false;
  }
});
