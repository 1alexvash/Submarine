class Preloader {
  constructor(source) {
    this.preloader = source;

    if (localStorage.gameLoaded === "true") {
      this.hide();
    } else {
      setTimeout(() => {
        localStorage.gameLoaded = true;
        this.hide();
      }, 10000);
    }
  }

  hide() {
    this.preloader.style.display = "none";
  }
}

const preloader = new Preloader($(".preloader"));
