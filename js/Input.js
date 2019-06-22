document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowUp") {
    submarine.controllers.arrowUpLocked = true;
  }
  if (e.key === "ArrowDown") {
    submarine.controllers.arrowDownLocked = true;
  }
});

document.addEventListener("keyup", function(e) {
  if (e.key === "ArrowUp") {
    submarine.controllers.arrowUpLocked = false;
  }
  if (e.key === "ArrowDown") {
    submarine.controllers.arrowDownLocked = false;
  }
});
